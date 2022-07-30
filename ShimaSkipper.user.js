// ==UserScript==
// @name         Shima Skipper
// @namespace    https://ebycow.net/
// @version      0.2
// @description  ＼ｺﾝﾆﾁﾊ／
// @author       Ebycow <https://ebycow.net>
// @match        *://animestore.docomo.ne.jp/animestore/sc_d_pc?partId=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=docomo.ne.jp
// @grant        none
// ==/UserScript==

const pos = [
    // partId, start, end

    //一期
    ["21928001", 63000, 140000],
    //sped

    ["21928002", 74000, 152000],
    ["21928002", 1227000, 1316000],

    ["21928003", 218000, 296000],
    ["21928003", 1263000, 1351000],

    ["21928004", 46000, 124000],
    ['21928004', 1274000, 1362000],

    ['21928005', 68000, 145000],
    //sped

    ['21928006', 143000, 220000],
    ['21928006', 1261000, 1349000],

    ['21928007', 83000, 160000],
    ['21928007', 1266000, 1354000],

    ['21928008', 50000, 127000],
    ['21928008', 1296000, 1384000],

    //noop
    ['21928009', 1273000, 1361000],

    ['21928010', 25000, 102000],
    ['21928010', 1257000, 1345000],

    //noop
    ['21928011', 1316000, 1404000],

    ['21928012', 130000, 207000],
    //noed


    //二期

    ['24435001', 151000, 222000],
    //sped

    ['24435002', 99000, 170000],
    ['24435002', 1316000, 1404000],

    //spop
    ['24435003', 1270000, 1358000],

    ['24435004', 67000, 138000],
    //sped

    ['24435005', 46000, 117000],
    ['24435005', 1264000, 1352000],

    ['24435006', 45000, 116000],
    //sped

    ['24435007', 35000, 106000],
    ['24435007', 1317000, 1405000],

    ['24435008', 86000, 157000],
    ['24435008', 1268000, 1356000],

    ['24435009', 64000, 135000],
    ['24435009', 1260000, 1348000],

    ['24435010', 121000, 192000],
    ['24435010', 1317000, 1405000],

    ['24435011', 127000, 198000],
    ['24435011', 1292000, 1380000],

    ['24435012', 44000, 115000],
    ['24435012', 1316000, 1404000],

    ['24435013', 58000, 129000],
    //sped
]

function time() {
    return 1420000 - changeStartPositionToMillisecond($("#time").text().replace(":", "m") + "s");
}

function getPartId() {
    const url = window.location.href;
    const name = "partId";
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

(function() {
    'use strict';
    setInterval(() => {
        // スキップ開始位置から二秒間スキップ処理を適用
        const skipcue = pos.filter((p) => p[0] == getPartId()).filter((p) => p[1] <= time() && p[1] + 1000 > time())
        if(skipcue[0]){
            console.log("SHIMA SKIP!!")
            location.href = "?partId="+ skipcue[0][0] +"&startPosition=" + (skipcue[0][2])
        }

    }, 1000)

})();
