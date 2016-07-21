var router = require('express').Router();
//Construt url for API request to google maps
router.urlConstruct = function () {
    var start = "44.8329,-93.3005";
    var end = "44.9575,-93.1665";

    //Query information
    var key = process.env.API_KEY;
    var query = "https://maps.googleapis.com/maps/api/distancematrix/";
    var outputFormat = "json?units=imperial&";
    var origins = "origins=" + start;
    var destination = "&destinations=" + end;
    var departureTime = "&departure_time=now";

    //Creation of query
    query += outputFormat;
    query += origins;
    query += destination;
    query += departureTime;
    query += "&key=" + key;

    return query;
}

module.exports = router;
