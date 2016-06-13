tgApp.controller('CalcRouteController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {
    console.log("Calc Route Controller Working");
    //$interval(function(){
    //    trafficRequest()
    //}, 60000);
    trafficRequest();

    function trafficRequest() {
        //Making request for information
        $http.post('/traffic').then(
            function(data) {
                console.log("minutes: ", data);
            }
        )
    }
}]);