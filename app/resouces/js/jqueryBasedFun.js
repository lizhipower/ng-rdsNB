/**
 * Created by Zhi_LI on 2015/3/15.
 */
$(document).ready(function () {


    $('.menu a').click(function( ) {

        $('.menu a').removeClass('active');

        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }

        if ($this.attr('id') == 'svg'){
            $('div #mainbody').css("background-color", 'black');


            //var cixi = [
            //    '翠屏变','低塘变','屯山变','殿跟变','蟹浦变','景丁变','周巷变','长河变','众茂电','崇胜变','观城变','龙山变','灵峰变','宝基变','科茂电','附海变','上湖变','宗汉变','新浦变','耕民变','潮塘变','长江风','胜山变','联民变','坎墩变','新都变','横河变','浒山变','天元变','担山变','白沙变','剑山变','逍林变','卫前变','掌起变','师桥变','徐福变','广源变','范市变','大众变','庵东变','海星变','滨海变','白鹭变','越瓷变','九天变','振邦变','康馨变','永新变','金田变','盛泰变','吉利变','贤江变','莲花变','水云变','慈溪变','松浦变','锦堂变','达蓬变','双浦变'
            //];

            //$('#search').typeahead({source: cixi});

        }else {
            $('#searchBar').css('display','none');
            $('div #mainbody').css("background-color", '#c0c0c0');
        }

    });


    $('#searchBtn').click(function( ){
        var $this = $(this);
        //alert($('#search').val());

        var svgRectId = $('#search').val();
        var svgRect = $('#'+svgRectId);
        //console.log($('#'+svgRectId));
        svgRect.fadeOut(100).fadeIn(100);
        svgRect.fadeOut(100).fadeIn(100);

        //$('#search').val('');

    })

    //$('#search').blur(function(){
    //    $('#search').val('');
    //})

});


function doOnFocus() {

}