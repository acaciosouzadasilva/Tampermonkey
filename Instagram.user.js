// ==UserScript==
// @name         Instagram download video
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Acacio
// @match        https://www.instagram.com/*/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
      
    // Your code here...
      const url = document.querySelector("body>script:nth-child(15)").text.match(/\"has_audio\"\:(true|false)\,\"video_url\"\:\"(.+?)\"/)[2];
      const urlNew = url.replace(/\\u0026/g,"&");
      document.location.replace(urlNew);
      var win = window.open(urlNew, '_blank');
      win.focus();
})();