var tgApp = angular.module('tgApp', ['ngRoute']);

tgApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: '/views/partials/calcroute.html',
            controller: "CalcRouteController"
        })
        .when('/graph', {
            templateUrl: '/views/partials/visualization.html',
            controller: "VizController"
        })
        .otherwise({
            redirectTo: '/home'
        })
}]);