/**
 * Created by Zhi_LI on 2015/3/9.
 */

var testappControllers = angular.module('testappControllers',[]);

testappControllers.controller(
    'sidebarCtrl',function($scope) {
       var names = [
           {'name': 'main-view', 'id': 'main'},
           {'name': 'riskinfo-view', 'id': 'riskinfo'},
           {'name': 'svg-view', 'id': 'svg'}
       ];
        $scope.names = names;
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

        //$scope.hotzoneId = $routeParams.hotzoneId;
        //alert($scope.hotzoneId)
        //console.log($location);
        $scope.sayhi = function () {
            alert('hi');
        };


        //$scope.svgId = $routeParams.hotzoneId;

        //alert($scope.svgId);

        //$scope.hotzoneSelected = function (evt) {
        //    alert(evt.target.id);
        //
        //    var path =  '#/view/svg/:' + evt.target.id;
        //    //scope.sayhi();
        //
        //    //scope.redirectPath(path);
        //    //hotzoneId = evt.target.id;
        //    //console.log($location.path())
        //    //$location.path('/{{evtTarget}}.svg');
        //
        //
        //
        //}
        $scope.redirectPath =  function (path){
            $location.path(path);
        }
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

