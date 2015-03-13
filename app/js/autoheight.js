/**
 * Created by Zhi_LI on 2015/3/11.
 */


$(document).ready(function() {

    windowHeight = $(window).height();
    windowWidth = $(window).width();

    headerHeight = $('div#header').height();
    headerFooter = $('div#footer').height();


    rowHeight = windowHeight - headerHeight -headerFooter;
    rowWidth = $('div#sidebar').width();
    //alert(rowHeight);

    //
    //viewContainerHeight = windowHeight - headerHeight -headerFooter;
    //
    //viewContainerWidth = windowWidth - rowWidth;
    //alert(viewContainerWidth +" " +viewContainerHeight);
    //
    //var svgEle = document.getElementsByTagName('svg');
    //alert(svgEle)
    //svgEleWidth = svgEle.getAttribute('width');
    //alert(svgEleWidth)
    //svgEleHeight = svgEle.attr('height');
    //
    //alert(svgEleWidth +" " +svgEleHeight);
    //
    //svgEle.height(viewContainerHeight);
    //svgEle.width(viewContainerWidth);




    $('div.view-container').height();
    viewContainerWidth = $('div.view-container').width();

    $('div#sidebar').height(rowHeight);

})