// ==UserScript==
// @name        Everything JavDB
// @namespace   lmly9193
// @require     https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @match       https://javdb*.com/*
// @grant       none
// @version     1.0
// @author      lmly9193
// @description Search ID with Everything in your PC.
// ==/UserScript==

// https://javdb.com/users/list_detail
{
    const videos = $('#videos');
    const boxes = $(videos).find('.box');
    const uids = [];

    if (boxes.length !== 0) {
        boxes.map((index, box) => {
            const uid = $(box).find('.video-title strong').text();
            uids.push(uid);
            $(box).append(`
            <div class="meta-buttons">
                <a class="button is-warning is-small is-outlined is-fullwidth" href="es://${uid}" style="margin-top: 5px;">在電腦搜尋</a>
                <a class="button is-primary is-small is-outlined is-fullwidth" href="https://jable.tv/search/${uid}/" style="margin-top: 5px;" target="_blank">Jable.TV</a>
                <a class="button is-warning is-small is-outlined is-fullwidth" href="https://hpjav.tv/tw?s=${uid}" style="margin-top: 5px;" target="_blank">hpjav.tv</a>
            </div>`);
        });
    }

    const query = uids.join('|');
    $(`<div><p class="mb-3"><a class="button is-warning is-outlined is-fullwidth" style="display: block" href="es://${query}">在電腦搜尋全部</a></p></div>`).insertBefore($(videos));
}

// https://javdb.com/v/*
{
    vid = $('.copy-to-clipboard').data('clipboard-text');
    $('.movie-panel-info').append(`
    <div class="panel-block">
        <div class="columns">
            <div class="column">
                <div class="buttons are-small review-buttons">
                    <a class="button is-warning is-outlined" href="es://${vid}">在電腦搜尋</a>
                    <a class="button is-primary is-outlined" href="https://jable.tv/search/${vid}/" target="_blank">Jable.TV</a>
                    <a class="button is-warning is-outlined" href="https://hpjav.tv/tw?s=${vid}" target="_blank">hpjav.tv</a>
                </div>
            </div>
        </div>
    </div>`);
}

// https://javdb.com/actors/*
{
    const list = $('.movie-list');
    const boxes = $(list).find('.box');
    const uids = [];

    if (boxes.length !== 0) {
        boxes.map((box) => {
            const uid = $(box).find('.video-title strong').text();
            uids.push(uid);
        });
    }

    const query = uids.join('|');
    const columns = $('.section-addition').closest('.columns');
    $(columns).append(`
    <div class="column">
        <p><a class="button is-warning" style="display: block" href="es://${query}">在電腦搜尋全部</a></p>
    </div>`);
}

