var express = require('express');
var router = express.Router();
var func = require('./modules/functions');
var pg = require('pg');
var request = require('request');
var connectionString = 'postgres://localhost:5432/traffic';

router.get('/:mintime/:maxtime', function (req, res) {
    //Split time into object containing min and max:
    var mintime = req.params.mintime;
    var maxtime = req.params.maxtime;
    console.log("min: ", mintime, "max :", maxtime);
     //pg.connect(connectionString, function (err, client, done) {
     //    if (err) {
     //        console.log("line 15:", err);
     //        res.sendStatus(500);
     //    }
     //    client.query('SELECT * FROM route_data WHERE departuretime' +
     //        '> $1 AND departuretime < $2',
     //        [mintime, maxtime],
     //        function (err, result) {
     //            done();
     //            if (err) {
     //                console.log("line 24", err);
     //                res.sendStatus(500);
     //            }
     //            res.send(result);
     //        })
     //});
});

router.post('/', function (req, res) {
    //Set new variables
    var time = new Date();
    var seconds = null;
    //Called from the urlConstruct module
    var query = func.urlConstruct();

    //Making our API request using the 'request' npm module
    request(query, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            //convert string to object
            var trafficTime = JSON.parse(body);
            //extract exact seconds of travel time
            seconds = trafficTime.rows[0].elements[0].duration_in_traffic.value;
        } else {
            console.log("500 error: " + error);
            res.sendStatus(500);
        }

        //Write the result to the database
        pg.connect(connectionString, function (err, client, done) {
            if(err) {
                res.sendStatus(500);
            }
            client.query('INSERT INTO route_data (departuretime, drivetime)'
                + 'VALUES($1, $2)',
                [time, seconds],
                function(err, result) {
                    done();
                    if(err) {
                        res.sendStatus(500);
                    }

                    //If no error, then send 'seconds' back to the client side
                    console.log(seconds);
                    //Finally, send back the travel time in seconds to the client side
                    res.send({"seconds": seconds});
            })
        });
    });
});

module.exports = router;
