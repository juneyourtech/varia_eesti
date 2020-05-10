// ==UserScript==
// @name        Õhta
// @namespace   slol_rez
// @description Õhtalehe disainipläkkide parandamine
// @include     *.ohtuleht.ee/*
// @updateURL https://raw.githubusercontent.com/juneyourtech/varia_eesti/master/slol_rez.user.js
// @version     0.1.1
// @grant       GM_addStyle
// ==/UserScript==

/* 4567890123456789023456789012345678901234567890123456789012345678901234567 */

/* This fixes excessive padding in pictures. | T., 07.04.2020. */
GM_addStyle("DIV.image-gallery.noFullScreen .image-gallery-slide-wrapper::before {padding-top:0px;}");

/* This fixes image disappearing in New Moon 27.6.0 | K., 08.04.2020. */
GM_addStyle("DIV.imageGallery--oneImage .image-gallery-slide img {position:relative;}");

/* Paywall fadeout removal | T., 07.04.2020. */
GM_addStyle("DIV.article-main--order::before {display:none;}");

/* ARTICLE BODY TEXT | T., 07.04.2020. */
GM_addStyle("DIV.formatted--content.article-main--content {font-size:91%;}");


