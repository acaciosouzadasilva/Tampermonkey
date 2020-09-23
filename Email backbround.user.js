// ==UserScript==
// @name         Email backbround
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.taboaodaserra.sp.gov.br:2096/cpsess*/3rdparty/afterlogic/*/*

// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    //Math.floor(Math.random()*10)
    //lista de wallpapers

    //setTimeout(
    //function(){

    //painel de email
    //document.querySelector("#auroraContent > div.screens.show-header > div.screen.MailLayout > div > div.panel.center_panel.messages_panel")
    document.body.style.background= "url(https://images4.alphacoders.com/203/203746.jpg) no-repeat fixed center center";
    document.body.style.backgroundSize= "cover";


    //painel de leitura
    //document.querySelector("#auroraContent > div.screens.show-header > div.screen.MailLayout > div > div.panel.item_viewer.message_viewer > div > div > div.panel_center > div > div.panel.message_panel > div > div.message_content.scroll-inner")
    //},2000
    //);

    
    //document.body.style.backgroundSize="cover";
})();