/**
 * Created by Zhi_LI on 2015/3/9.
 */
var testApp = angular.module('testApp',[
    'ngRoute',
    'testappControllers'
]);


testApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/view/main',{
                templateUrl: './partials/main.html',
                controller: 'mainCtrl'
            }).
            when('/view/svg',{
                templateUrl: './partials/svg.html',
                controller: 'svgCtrl'
            }).
            when('/view/riskinfo',{
                templateUrl: './partials/riskinfo.html',
                controller: 'riskinfoCtrl'
            }).
            when('/view/svgdetail/:svgid',{
                templateUrl: './partials/svgdetail.html',
                controller: 'svgdetailCtrl'
            }).
            otherwise({
                redirectTo: '/view/main'
            })
    }]);


