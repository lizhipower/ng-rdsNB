/**
 * Created by Zhi_LI on 2015/3/6.
 */


function reinitIframe(){
    for(i=0;i<document.getElementsByTagName("iframe").length;i++) {
            //alert(i);
        var iframe = document.getElementsByTagName("iframe")[i];
                //alert(iframe);
        try {
            var bHeight = iframe.contentWindow.document.body.scrollHeight;
            var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;
            var height = Math.max(bHeight, dHeight);
            iframe.height = height;
            alert(height)
        } catch (ex) {
            alert("error");
        }
    }
}

window.setInterval("reinitIframe()", 200);


