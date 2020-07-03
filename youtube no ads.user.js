// ==UserScript==
// @name         youtube no ads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Este scriptp do Tampermonkey é para adcionar o "." entre o com e o barra da url atual do Youtube
// @author       Acacio
// @match        https://www.youtube.com/watch?*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let srt = document.URL;
    document.location.replace(srt.replace(/com\//g,"com./"));
})();