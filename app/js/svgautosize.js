/**
 * Created by Zhi_LI on 2015/3/12.
 */
function svgautosize(){
    windowHeight = $(window).height();
    windowWidth = $(window).width();

    headerHeight = $('div#header').height();
    headerFooter = $('div#footer').height();


    rowHeight = windowHeight - headerHeight -headerFooter;
    rowWidth = $('div#sidebar').width();
//alert(rowHeight);


    viewContainerHeight = windowHeight - headerHeight -headerFooter;

    viewContainerWidth = windowWidth - rowWidth;
    alert(viewContainerWidth +" " +viewContainerHeight);

    var svgEle = document.getElementsByTagName('svg')[0];
    alert(svgEle)
    svgEleWidth = svgEle.getAttribute('width');
    alert(svgEleWidth)
    svgEleHeight = svgEle.attr('height');

    alert(svgEleWidth +" " +svgEleHeight);

    svgEle.height(viewContainerHeight);
    svgEle.width(viewContainerWidth);
}