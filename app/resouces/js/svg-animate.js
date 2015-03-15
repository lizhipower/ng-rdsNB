/**
 * Created by Zhi_LI on 2015/3/10.
 */
var selectFlag = 0;
var viewBox = '';



function zoom(zoomType) {
    //var viewBox = $('svg').attr('currentScale');	// Grab the object representing the SVG element's viewBox attribute.
    //alert(viewBox)
    //var viewBoxValues = viewBox.split(' ');				// Create an array and insert each individual view box attribute value (assume they're seperated by a single whitespace character).
    //
    //viewBoxValues[2] = parseFloat(viewBoxValues[2]);		// Convert string "numeric" values to actual numeric values.
    //viewBoxValues[3] = parseFloat(viewBoxValues[3]);


    var svg_js = document.getElementsByTagName('svg')[0];
    viewBox = svg_js.getAttribute('viewBox');

    //alert(viewBox)
    var viewBoxX = viewBox.split(' ')[0];
    var viewBoxY = viewBox.split(' ')[1];
    var viewBoxWidth = viewBox.split(' ')[2];
    var viewBoxHeight = viewBox.split(' ')[3];
    //alert(viewBoxY)

    //alert(viewBox);

    //var svgY = $('svg').attr('y').replace('px','');


    //alert(svgWidth+'0')

    zoomRate = 1.1;
    if (zoomType == 'zoomIn') {

        viewBoxWidth /= zoomRate;	// Decrease the width and height attributes of the viewBox attribute to zoom in.
        viewBoxHeight /= zoomRate;
        //alert( viewBoxWidth+'1')
    }
    else if (zoomType == 'zoomOut') {
        viewBoxWidth *= zoomRate;	// Increase the width and height attributes of the viewBox attribute to zoom out.
        viewBoxHeight *= zoomRate;
        //alert( viewBoxWidth+'2')
    }
    else
        alert("function zoom(zoomType) given invalid zoomType parameter.");

    //svgRoot.setAttribute('viewBox', viewBoxValues.join(' '));	// Convert the viewBoxValues array into a string with a white space character between the given values.


    try {
        viewBox = viewBoxX + ' ' + viewBoxY + ' ' + viewBoxWidth + ' ' + viewBoxHeight;
    }
    catch (exp) {
        alert('error')
    }
    svg_js.setAttribute('viewBox', viewBox);
    //var currentZoomFactor = svgViewBoxWidth / viewBoxValues[2];										// Calculates the current zoom factor, could have just as easily used svgViewBoxHeight.
    //        var newText = document.createTextNode("Current zoom factor = " + currentZoomFactor.toFixed(3));	// Create a generic new text node object.
    //        var parentNode = document.getElementById('currentZoomFactorText');  								// Get the parent node of the text node we want to replace.

    //        parentNode.replaceChild(newText, parentNode.firstChild);  // Replace the first child text node with the new text object.
}


function zoomViaMouseWheel(mouseWheelEvent) {
    if (mouseWheelEvent.wheelDelta > 0)
        zoom('zoomIn');
    else
        zoom('zoomOut');

    /* When the mouse is over the webpage, don't let the mouse wheel scroll the entire webpage: */
    mouseWheelEvent.cancelBubble = true;
    return false;
}


function selectElement(evt) {
//        alert("hi");
    selectFlag = 1;
    selectedElement = $('svg');
    currentX = evt.clientX;
    currentY = evt.clientY;

    //currentviewBoxValues = selectedElement.getAttribute("viewBox").split(' ');

    //for(var i=0; i < currentviewBoxValues.length; i++) {
    //    currentviewBoxValues[i] = parseFloat(currentviewBoxValues[i]);
    //}
}

function moveElement(evt) {
//        alert("hi");
    if (selectFlag == 1) {
//            alert("hi")

        //$('svg').style.cursor = "move";
        var dx = evt.clientX - currentX;
        var dy = evt.clientY - currentY;


        //viewBox = $('svg').attr('viewBox');
        var svg_js = document.getElementsByTagName('svg')[0];
        viewBox = svg_js.getAttribute('viewBox');

        var viewBoxX = viewBox.split(' ')[0];
        var viewBoxY = viewBox.split(' ')[1];
        var viewBoxWidth = viewBox.split(' ')[2];
        var viewBoxHeight = viewBox.split(' ')[3];

        //alert(viewBoxX+' '+viewBoxY+' a');

        viewBoxX -= dx;
        viewBoxY -= dy;

        //alert(viewBoxX+' '+viewBoxY+' b');
        try {
            viewBox = viewBoxX + ' ' + viewBoxY + ' ' + viewBoxWidth + ' ' + viewBoxHeight;
        }
        catch (exp) {
            alert('error')
        }
        //alert(viewBox)
        //alert(viewBox);
        //$('svg').attr('viewBox', viewBox);
        svg_js.setAttribute('viewBox', viewBox);
        //$('svg').attr('y', currentY);

        currentX = evt.clientX;
        currentY = evt.clientY;

    }

}

function deselectElement(evt) {
    selectFlag = 0;
}