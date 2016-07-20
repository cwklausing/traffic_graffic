var tgApp = angular.module('tgApp', ['ngRoute']);

tgApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/partials/calcroute.html',
            controller: "CalcRouteController as calc"
        })
        .when('/graph', {
            templateUrl: '/views/partials/visualization.html',
            controller: "VizController as viz"
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);
