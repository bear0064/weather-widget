//MyWidget Script
/**************************
Add a link for a CSS file that styles .mywidget
Add a script tag that points to CDN version of jQuery 1.*
Add a script tag that loads your script file from http://m.edumedia.ca/
**************************/
document.addEventListener("DOMContentLoaded", function () {
    var css = document.createElement("link");



    css.setAttribute("rel", "stylesheet");
    css.setAttribute("href", "http://m.edumedia.ca/bear0064/mad9014/ajax-call/css/myStyle.css");
    document.querySelector("head").appendChild(css);
    css.addEventListener("load", function () {
        scriptsLoaded++;
        if (scriptsLoaded === 3) {
            //call the function in My widget script to load the JSON and build the widget
            buildWidget(".mywidget");
            console.log("all scripts loaded");
        }
    });


    //loads the CSS file and applies it to the page
    var scriptsLoaded = 0;



    var jq = document.createElement("script");
    jq.addEventListener("load", function () {
        scriptsLoaded++;
        if (scriptsLoaded === 3) {
            //call the function in My widget script to load the JSON and build the widget
            buildWidget(".mywidget");
            console.log("all scripts loaded");
        }
    });

    document.querySelector("head").appendChild(jq);
    jq.setAttribute("src", "http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js");

    var script = document.createElement("script");
    script.addEventListener("load", function () {
        scriptsLoaded++;
        if (scriptsLoaded === 3) {

            buildWidget(".mywidget");
            console.log("all scripts loaded");

        }
    });
    document.querySelector("head").appendChild(script);
    script.setAttribute("src", "http://m.edumedia.ca/bear0064/mad9014/ajax-call/js/widget.js");
});