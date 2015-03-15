/**
 * Created by Zhi_LI on 2015/3/9.
 */

var testappControllers = angular.module('testappControllers',[]);

testappControllers.controller(
    'sidebarCtrl',function($scope) {
       var mainUsageNames = [
           {'name': '首页', 'id': 'main', 'class': 'glyphicon glyphicon-home', 'status': 'active'},
           {'name': '风险信息', 'id': 'riskinfo', 'class': 'glyphicon glyphicon-file','status': ''},
           {'name': 'SVG信息', 'id': 'svg', 'class': 'glyphicon glyphicon-file','status': ''}
       ];

       var configUsageNames = [
           {'name': '系统设置', 'id': 'configSys', 'class': 'glyphicon glyphicon-cog','status': ''},
           {'name': '用户管理', 'id': 'configUser', 'class': 'glyphicon glyphicon-cog','status': ''},
           {'name': '日志查询', 'id': 'configLog', 'class': 'glyphicon glyphicon-cog','status': ''}
       ];




        $scope.mainUsageNames = mainUsageNames;
        $scope.configUsageNames = configUsageNames;

    }
);

testappControllers.controller(
    'mainCtrl',function($scope) {
        $scope.title = 'main.html';

    }
);

testappControllers.controller(
    'riskinfoCtrl',function($scope) {
        $scope.title = 'riskinfo.html';
    }
);


testappControllers.controller(
    'svgCtrl',function($scope, $routeParams, $location) {
    }
);





testappControllers.controller(
    'test',function($scope) {

        //$scope.title = 'svgdetailCtrl.html';
        $scope.svgid =  'zhenhai';
        //alert($scope.svgid)

        $scope.contentUrl= function() {
            //cixi
            return 'svg/' + $scope.svgid + '.svg';
        };
    }
);

