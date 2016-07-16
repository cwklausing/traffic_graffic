tgApp.controller('CalcRouteController', ['$scope', '$http', '$interval', function($scope, $http, $interval) {

    //trafficRequest();

    function trafficRequest() {
        //Making request for information
        $http.post('/traffic').then(
            function(data) {
                console.log(data);
            }
        )
    }


    $scope.getDataRange = function(begin, end) {
        var timerange = '' + begin + end;
        $http.get('/traffic' +  ).then(
            function(data) {
                console.log(data);
            }
        )
    }
}]);