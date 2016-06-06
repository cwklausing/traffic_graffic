var tgApp = angular.module('tgApp', ['ngRoute']);

tgApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/calcroute', {
            templateUrl: '/views/partials/calcroute.html',
            controller: "CalcRouteController"
        })
        .when('/visualize', {
            templateUrl: '/views/partials/visualization.html',
            controller: "VizController"
        })
        .otherwise({
            redirectTo: 'calcroute'
        })
}]);