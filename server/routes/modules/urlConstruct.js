function urlConstruct () {
    var start = "44.8329,-93.3005";
    var end = "44.9575,-93.1665";

    //Query information
    var key = "AIzaSyD6qJyxzBQfRHYoR2es_uQP9JRN8nK1fLg";
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

module.exports = urlConstruct;