/**
 * Created by Zhi_LI on 2015/3/9.
 */



angular.module('testApp').directive('svgMainview', ['$compile','$location',function ($compile,$location) {
    var svgautosize;
    svgautosize = function svgautosize(){




        documentHeight = $(document).height();
        //alert(windowHeight)
        documentWidth = $(document).width();


        $sidebar = $('div#sidebar');

        rowWidth = $sidebar.width();
        rowHeight = $sidebar.height();
//alert(rowHeight);


        viewContainerHeight = rowHeight;

        viewContainerWidth = documentWidth - rowWidth;
        //alert(viewContainerWidth +" " +viewContainerHeight);

        var svgEle = document.getElementsByTagName('svg')[0];
        //alert(svgEle)
        svgEleWidth = svgEle.getAttribute('width');
        //alert(svgEleWidth)
        svgEleHeight = svgEle.getAttribute('height');

        //alert(svgEleWidth +" " +svgEleHeight);

        svgEle.setAttribute('height', viewContainerHeight);
        svgEle.setAttribute('width', viewContainerWidth);

        $viewcontainer = $('#view-container');
        $viewcontainer.height(viewContainerHeight);
        $viewcontainer.width(viewContainerWidth);

    };


    var cixi = [
        '翠屏变','低塘变','屯山变','殿跟变','蟹浦变','景丁变','周巷变','长河变','众茂电','崇胜变','观城变','龙山变','灵峰变','宝基变','科茂电','附海变','上湖变','宗汉变','新浦变','耕民变','潮塘变','长江风','胜山变','联民变','坎墩变','新都变','横河变','浒山变','天元变','担山变','白沙变','剑山变','逍林变','卫前变','掌起变','师桥变','徐福变','广源变','范市变','大众变','庵东变','海星变','滨海变','白鹭变','越瓷变','九天变','振邦变','康馨变','永新变','金田变','盛泰变','吉利变','贤江变','莲花变','水云变','慈溪变','松浦变','锦堂变','达蓬变','双浦变'
    ];

    var jinzhou = [
        '潘桥变','新乐变','下应变','蔡郎变','梅梁变','延庆变','中纸变','长丰电厂','周宿变','荷花变','科丰电厂','鄞城变','潘火变','宝桥变','莫树变','甲村变','瞻岐变','茅山变','邱隘变','东吴变','土桥变','明州热电','方桥变','仕港变','洞桥变','高桥变','新林变','铜盆变','姜山变','大嵩变','横街变','鄞江变','布政变'
    ];

    var ninfengxiang = [
        '广济变','奉化变','跃龙变','蔡郎变','雁苍变','衣亭变','象北变','曲池变','莼湖变','金钟变','大桥变','储能电站','强蛟变','西电变','佳何变','黄墩变','青竹变','茶山风电','蛟龙变','高楼变','海沿变','裘村变','南浦变','舒家变','楼岩变','武岭变','梅林变','兴海变','桃源变','竹口变','西周变','公屿变','珠山风电','沥洋变','青菜变','燕山电厂','石浦变','鹤岛变','丹城变','滨瑶变','海螺变','爵溪变','临海变','松兰变','白杜变'
    ];

    var shiqu = [
        '团桥变','骆驼变', '湾塘变', '潘桥变', '蔡郎变', '桑田变', '候青变', '水厂变', '长阳变', '惠明变', '梅梁变', '宁西变', '洪塘变', '大河变', '中山变', '马园变', '联丰变', '绿源电厂','洞桥变', '庄桥变', '洪牵变', '彭山变', '周宿变', '段塘变', '高桥变', '仕港变', '方桥变', '栎社变', '云林变', '通惠变', '长兴变', '林沐变', '文化变', '金田变', '慈城变', '铜业变', '荐江变', '江北变', '马郎变', '布政变', '新庄变', '横街变', '鄞江变'
    ];

    var shiqudong = [

    ];

    var zhenhai = [
        '舟山电网','光大电厂','淞浦变','咸祥变','洪塘变','宝基变','龙山变','灵峰变','炼化变','石化变','范市变','禾元变','金鸡变','逸盛变','科元变','竹湾变','宝甬变','华光变','北仑变','东港变','三菱变','海油变','海越变','常洪变','孔浦变','玛瑙变','科茂电厂','穿山风电','万华热电','镇洋化工','久丰热电','湾塘变','蛟川变','邬隘变','沙湾变','青峙变','长山新','新模变','黄梅变','高塘变','凤洋变','甬稅变','徐洋变','白石变','小山变','明珠变','烟墩变','庙河变','大矸变','郭巨变','七姓变','干岙变','尖峰变','龙湖变','蟹浦变','宝山变','广源变','前方变','田野变','静德变','骆驼变','团桥变','南洪变','殿跟变','芦江变','冷岙变','江南变','达蓬变'
    ];

    var zongchaoliu = [
        '锦堂变','水云变','达蓬变','江南变','亚浆电厂','台塑电厂','北仑_x','莲花变','双浦变','淞浦变','镇海燃气','镇海电厂','邬隘变','贤江变','慈溪变','泓口电厂','殿跟变','浙炼变','新乐变','芦江变','候青变','冷岙变','咸祥变','屯山变','阳明变','洪塘变','宁西变','曲池变','溪凤变','澄浪变','潘桥变','惠明变','蔡郎变','广济变','奉化变','通济变','华舜电厂','梅梁变','跃龙变','湾塘变','蛟川变','甬钢变','沙湾变','桑田变','下应变','翠屏变','牛牵变','武胜变','梨洲变','鲍家变','奉牵变','雁苍变','象北变','衣亭变','句章变','春晓变','姚江变','北仑电厂','胜龙电厂','河姆变','天一变','宁海变','虞北变','上虞变','绍兴供区'
    ];

    var chaoliu = [
        '锦堂变','水云变','达蓬变','江南变','亚浆电厂','台塑电厂','北仑_x','莲花变','双浦变','淞浦变','镇海燃气','镇海电厂','邬隘变','贤江变','慈溪变','泓口电厂','殿跟变','浙炼变','新乐变','芦江变','候青变','冷岙变','咸祥变','屯山变','阳明变','洪塘变','宁西变','曲池变','溪凤变','澄浪变','潘桥变','惠明变','蔡郎变','广济变','奉化变','通济变','华舜电厂','梅梁变','跃龙变','湾塘变','蛟川变','甬钢变','沙湾变','桑田变','下应变','翠屏变','牛牵变','武胜变','梨洲变','鲍家变','奉牵变','雁苍变','象北变','衣亭变','句章变','春晓变','姚江变','北仑电厂','胜龙电厂','河姆变','天一变','宁海变','虞北变','上虞变','绍兴供区'
    ];
    var svgIdJson = {
        'cixi': cixi,
        'jinzhou': jinzhou,
        'ninfengxiang': ninfengxiang,
        'shiqu': shiqu,
        'shiqudong': shiqudong,
        'zhenhai': zhenhai,
        'zongchaoliu': zongchaoliu,
        'chaoliu': chaoliu
    }

    //var test = 'hi';


    return {
        restrict: 'E',
        templateUrl: function(elem,attrs) {
            //alert($routeParams.svgId)
            return './resouces/svg/' + attrs.svgid + '.svg';

        },
            link: function( scope, element, attrs ) {
            element.bind("mousewheel", zoomViaMouseWheel);
            element.bind("mousedown", selectElement);
            element.bind("mouseup", deselectElement);
            element.bind("mousemove", moveElement);

            svgautosize();

            var svghotzone = element[0].querySelectorAll('.svghotzone');


            //alert(svghotzone)
            //console.log(svghotzone)
            angular.forEach(svghotzone, function (key, value) {
                var svghotzoneElement = angular.element(key);
                //scope.sayhi();
                //alert(attrs.svgId)
                scope.changeLocation = function ($event) {
                    //alert($event.target.id);

                    scope.svgId = $event.target.id;

                    var path = "/view/svgdetail/" + scope.svgId;
                    //alert(path)
                    $location.path(path);

                    //alert(test);

                    //console.log(svgIdJson[scope.svgId]);
                    $('#search').typeahead({source: svgIdJson[scope.svgId]});
                    //alert(scope.svgId)
                    $('#searchBar').css('display','block');

                };
                svghotzoneElement.attr("ng-click", "changeLocation($event)");
                $compile(svghotzoneElement)(scope);
            })
        }
        //template: '<div ng-include="contentUrl"></div> '
    }

}]);



//    .directive('svgDetailview', ['$compile','$rootScope',function ($compile,$rootScope) {
//    var svgautosize;
//    svgautosize = function svgautosize(){
//
//        rowWidth = $sidebar.width();
//        rowHeight = $sidebar.height();
//        viewContainerHeight = rowHeight;
//
//        viewContainerWidth = windowWidth - rowWidth;
//
//        var svgEle = document.getElementsByTagName('svg')[0];
//        svgEleWidth = svgEle.getAttribute('width');
//        svgEleHeight = svgEle.getAttribute('height');
//
//
//        svgEle.setAttribute('height', viewContainerHeight);
//        svgEle.setAttribute('width', viewContainerWidth);
//    };
//
//
//
//
//    return {
//        restrict: 'AE',
//        scope: {
//            svgid: '@'
//        },
//
//        template: "{{svgid}} ",
//
//        link: function( scope, element, attrs ) {
//            element.bind("mousewheel", zoomViaMouseWheel);
//            element.bind("mousedown", selectElement);
//            element.bind("mouseup", deselectElement);
//            element.bind("mousemove", moveElement);
//
//
//        }
//    }
//
//}]);