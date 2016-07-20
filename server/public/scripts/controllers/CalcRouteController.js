tgApp.controller('CalcRouteController', ['$http', '$interval', function($http, $interval) {
    var vm = this;
    //trafficRequest();

    vm.message = "This section will contain a slider bar to select two times (min and max)";

    function trafficRequest() {
        //Making request for information
        $http.post('/traffic').then(
            function(data) {
                console.log(data);
            }
        )
    }


    vm.getDataRange = function(begin, end) {
        var timerange = '' + begin + end;
        $http.get('/traffic' + timerange).then(
            function(data) {
                console.log(data);
            }
        )
    }
}]);
