tgApp.controller('CalcRouteController', ['$http', function($http) {
    var vm = this;
    vm.message = "This section will contain a slider bar to select two times (min and max)";

    //variables for min and max
    vm.timeRangeMin = null;
    vm.timeRangeMax = null;

    function trafficRequest() {
        //Making request for information
        $http.post('/traffic').then(
            function(data) {
                console.log(data);
            }
        )
    }


    vm.getDataRange = function() {
        var minTime = vm.timeRangeMin;
        var maxTime = vm.timeRangeMax;
        console.log(minTime, maxTime);
        $http.get('/traffic/' + minTime + "/" + maxTime).then(
            function(data) {
                console.log(data);
            }
        )
    }

    trafficRequest();
}]);
