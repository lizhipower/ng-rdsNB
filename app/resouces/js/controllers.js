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
    'svgdetailCtrl',function($scope, $routeParams) {

        $scope.title = 'svgdetailCtrl.html';
        $scope.svgid =  $routeParams.svgid;
        $scope.svgid = './resouces/svg/'+$scope.svgid + '.svg';

        $scope.svgautosize = function svgautosize(){

            rowWidth = $('div#sidebar').width();
            rowHeight = $('div#sidebar').height();

            documentHeight = $(document).height();
            documentWidth = $(document).width();

            viewContainerHeight = rowHeight;

            viewContainerWidth = documentWidth - rowWidth;

            var svgEle = document.getElementsByTagName('svg')[0];
            svgEleWidth = svgEle.getAttribute('width');
            svgEleHeight = svgEle.getAttribute('height');

            $('#view-container').height(viewContainerHeight)


            svgEle.setAttribute('height', viewContainerHeight);
            svgEle.setAttribute('width', viewContainerWidth);

            svgEle.addEventListener('mousedown',selectElement);
            svgEle.addEventListener('mouseup',deselectElement);
            svgEle.addEventListener('mousemove',moveElement);
            svgEle.addEventListener('mousewheel',zoomViaMouseWheel);

        };
        $scope.clickToAlert = function clickToAlert(){

            var clickBinding = function clickBinding() { //给box_btn绑定一个鼠标点击的事件

                if ($(this).attr('class') == '变电站'){
                    var content = '<h1>'+$(this).attr('id') +'</h1>';
                    $('#box').html(content) ;

                }else if($(this).attr('class') == '变电站文字'){
                    var content = '<h1>'+$(this).text() +'</h1>';
                    $('#box').html(content) ;

                }else{
                    alert('error');
                }


                $.blockUI({ //当点击事件发生时调用弹出层
                    message: $('#box'), //要弹出的元素box
                    css: { //弹出元素的CSS属性
                        top: '50%',
                        left: '50%',
                        textAlign: 'left',
                        marginLeft: '-320px',
                        marginTop: '-145px',
                        width: '600px',
                        background: 'none'
                    }
                });
                $('.blockOverlay').attr('title', '单击关闭').click($.unblockUI); //遮罩层属性的设置以及当鼠标单击遮罩层可以关闭弹出层
                $('.close').click($.unblockUI); //也可以自定义一个关闭按钮来关闭弹出层
            }

            $('.变电站').click(clickBinding);
            $('.变电站文字').click(clickBinding);
        };


        $scope.svgdo = function () {
            $scope.svgautosize();
            $scope.clickToAlert();
        }

    }
);