// ==UserScript==
// @name         Instagram
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.instagram.com/p/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
      let url = document.querySelector("body > script:nth-child(16)").text.match(/\"has_audio\"\:true\,\"video_url\"\:\"(.+?)\"/)[1];
      let urlNew = url.replace(/\\u0026/g,"&");
      console.log(urlNew);
      var win = window.open(urlNew, '_blank');
      win.focus();
})();