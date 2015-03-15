/**
 * Created by Zhi_LI on 2015/3/11.
 */


$(document).ready(function() {

    documentHeight = $(document).height();
    //alert(documentHeight)
    documentWidth = $(document).width();

    headerHeight = $('div#header').height();
    headerFooter = $('div#footer').height();


    rowHeight = documentHeight - headerHeight -headerFooter;
    rowWidth = $('div#sidebar').width();
    //alert(rowHeight);



    //$('div.view-container').height();
    //viewContainerWidth = $('div.view-container').width();

    $('div#sidebar').height(rowHeight);

})