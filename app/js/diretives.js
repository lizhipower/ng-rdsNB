/**
 * Created by Zhi_LI on 2015/3/9.
 */



angular.module('testApp').directive('svgMainview', ['$compile','$location',function ($compile,$location) {
    var svgautosize;
    svgautosize = function svgautosize(){

        rowWidth = $('div#sidebar').width();
        rowHeight = $('div#sidebar').height();
//alert(rowHeight);


        viewContainerHeight = rowHeight;

        viewContainerWidth = windowWidth - rowWidth;
        //alert(viewContainerWidth +" " +viewContainerHeight);

        var svgEle = document.getElementsByTagName('svg')[0];
        //alert(svgEle)
        svgEleWidth = svgEle.getAttribute('width');
        //alert(svgEleWidth)
        svgEleHeight = svgEle.getAttribute('height');

        //alert(svgEleWidth +" " +svgEleHeight);

        svgEle.setAttribute('height', viewContainerHeight);
        svgEle.setAttribute('width', viewContainerWidth);
    };




    return {
        restrict: 'E',
        //require: '^ngModel',
        //scope: {
        //    ngModel: '='
        //},
        //controller: function ($scope, $element) {
        //    var hotzoneId = 'ningbo';
        //    hotzoneId = encodeURI(hotzoneId);
        //    $scope.hotzoneId = hotzoneId;
        //},
        //template: '<div class="sparkline"><h4>Weather for {{ngModel}}</h4></div>',

        //replace: true,

        //template: '<div ng-include="contentUrl"></div> ',
        templateUrl: function(elem,attrs) {
            //alert($routeParams.svgId)
            return './svg/' + attrs.svgid + '.svg';
        },
            link: function( scope, element, attrs ) {
            element.bind("mousewheel", zoomViaMouseWheel);
            element.bind("mousedown", selectElement);
            element.bind("mouseup", deselectElement);
            element.bind("mousemove", moveElement);
            //element.bind("click", hotzoneSelected);


            svgautosize();

                //alert($routeParams.svgId)
            //scope.contentUrl = 'svg/' + scope.svgId + '.svg';

            //alert(scope.contentUrl)

            //console.log(element.find('svg'));
            var svghotzone = element[0].querySelectorAll('.svghotzone');


            //alert(svghotzone)
            //console.log(svghotzone)
            angular.forEach(svghotzone, function (key, value) {
                var svghotzoneElement = angular.element(key);
                //scope.sayhi();
                //alert(attrs.svgId)
                scope.do = function ($event) {
                    //alert($event.target.id);

                    scope.svgId = $event.target.id;

                    var path = "/view/svgdetail/" + scope.svgId;
                    //alert(path)
                    $location.path(path);

                };
                svghotzoneElement.attr("ng-click", "do($event)");
                $compile(svghotzoneElement)(scope);
            })
        }
        //template: '<div ng-include="contentUrl"></div> '
    }

}]);


testappControllers.controller(
    'svgdetailCtrl',function($scope, $routeParams) {

        $scope.title = 'svgdetailCtrl.html';
        $scope.svgid =  $routeParams.svgid;
        $scope.svgid = './svg/'+$scope.svgid + '.svg';
        //alert($scope.svgid);

        //$scope.contentUrl= function() {
        //    //cixi
        //    return 'svg/' + $scope.svgid + '.svg';
        //};

        //var svgautosize;

        $scope.svgautosize = function svgautosize(){

            rowWidth = $('div#sidebar').width();
            rowHeight = $('div#sidebar').height();
//alert(rowHeight);


            viewContainerHeight = rowHeight;

            viewContainerWidth = windowWidth - rowWidth;
            //alert(viewContainerWidth +" " +viewContainerHeight);

            var svgEle = document.getElementsByTagName('svg')[0];
            //alert(svgEle)
            svgEleWidth = svgEle.getAttribute('width');
            //alert(svgEleWidth)
            svgEleHeight = svgEle.getAttribute('height');

            //alert(svgEleWidth +" " +svgEleHeight);

            svgEle.setAttribute('height', viewContainerHeight);
            svgEle.setAttribute('width', viewContainerWidth);

            svgEle.addEventListener('mousedown',selectElement);
            svgEle.addEventListener('mouseup',deselectElement);
            svgEle.addEventListener('mousemove',moveElement);
            svgEle.addEventListener('mousewheel',zoomViaMouseWheel);

        };
        $scope.clickToAlert = function clickToAlert(){
            //alert('hi')
            //alert($('.变电站'));

            var clickBinding = function clickBinding() { //给box_btn绑定一个鼠标点击的事件
                //alert('hi')
                //alert($(this).text())

                if ($(this).attr('class') == '变电站'){
                    //alert($(this).attr('id'));
                    var content = '<h1>'+$(this).attr('id') +'</h1>';
                    //alert(content)
                    $('#box').html(content) ;

                }else if($(this).attr('class') == '变电站文字'){
                    var content = '<h1>'+$(this).text() +'</h1>';
                    //alert(content)
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
            //alert('hi');
            $scope.clickToAlert();
        }

    }
).directive('svgDetailview', ['$compile','$rootScope',function ($compile,$rootScope) {
    var svgautosize;
    svgautosize = function svgautosize(){

        rowWidth = $('div#sidebar').width();
        rowHeight = $('div#sidebar').height();
//alert(rowHeight);


        viewContainerHeight = rowHeight;

        viewContainerWidth = windowWidth - rowWidth;
        //alert(viewContainerWidth +" " +viewContainerHeight);

        var svgEle = document.getElementsByTagName('svg')[0];
        //alert(svgEle)
        svgEleWidth = svgEle.getAttribute('width');
        //alert(svgEleWidth)
        svgEleHeight = svgEle.getAttribute('height');

        //alert(svgEleWidth +" " +svgEleHeight);

        svgEle.setAttribute('height', viewContainerHeight);
        svgEle.setAttribute('width', viewContainerWidth);
    };




    return {
        restrict: 'AE',
        //terminal: true, //this setting is important, see explanation below
        //priority: 1000, //this setting is important, see explanation below
        //require: '^ngModel',
        scope: {
            svgid: '@'
        },
        //controller: function ($scope, $element) {
        //    var hotzoneId = 'ningbo';
        //    hotzoneId = encodeURI(hotzoneId);
        //    $scope.hotzoneId = hotzoneId;
        //},
        //template: '<div class="sparkline"><h4>Weather for {{ngModel}}</h4></div>',

        //replace: true,

        template: "{{svgid}} ",
        //scope: {
        //    svgidnew : '=svgid'
        //},

        //templateUrl : function(elem,attrs)
        //    {return './svg/' + attrs.svgid + '.svg'},

        link: function( scope, element, attrs ) {
            element.bind("mousewheel", zoomViaMouseWheel);
            element.bind("mousedown", selectElement);
            element.bind("mouseup", deselectElement);
            element.bind("mousemove", moveElement);


            //alert(scope.svgidnew)
            //scope.$watch('svgid', function(svgid)
            //{
            //    if (svgid && svgid.length)
            //    {
            //        scope.dynamicTemplateUrl = './svg/' + svgid + '.svg';
            //    }
            //});



            //svgautosize();

            //alert($routeParams.svgId)
            //scope.contentUrl = 'svg/' + scope.svgId + '.svg';

            //alert(scope.contentUrl)

            //console.log(element.find('svg'));
            //alert(scope.svgid);
            //console.log(element);

            //var svghotzone = element;

            //console.log(element);

            //alert(svghotzone)
            //console.log(svghotzone)
            //angular.forEach(svghotzone, function (key, value) {
            //    alert(key)
            //    var svghotzoneElement = angular.element(key);
            //    //scope.sayhi();
            //    //alert(attrs.svgId)
            //    scope.do = function ($event) {
            //        alert($event.target.id);
            //
            //        scope.svgId = $event.target.id;
            //
            //        var path = "/view/svgdetail/" + scope.svgId;
            //        //alert(path)
            //        $location.path(path);
            //
            //    };
            //console.log(scope.svgid)

            //console.log($rootScope);
            //var node = link();

            //var templateUrl = "function(elem,attrs) {return './svg/' + attrs.svgid + '.svg'}";
            //var $templateUrl = angular.element(templateUrl);
            //$templateUrl.attr("hi", "scope.svgid");
            //$compile($template)(scope);
            //element.append($template);

            //console.log(attrs.svgid);
            //attrs.svgid = scope.svgid;

            //console.log(attrs.svgid);

            //element.attr("svgid", scope.svgid);
            //$rootScope.removeAttr('svg-detailview'); //不去掉就变死循环了
            //element.removeAttr(“region”);
            //element.removeAttr("svgDetailview");

            //element.removeAttr("svg-detailview"); //remove the attribute to avoid indefinite loop
            //element.removeAttr("data-svg-detailview"); //also remove the same attribute with data- prefix in case users specify data-common-things in the html
            //    $compile(element)(scope);

            //})
        }
        //template: '<div ng-include="contentUrl"></div> '
    }

}]);