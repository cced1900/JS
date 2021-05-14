//https://github.com/pm936/httpcatcher/blob/master/%E5%8D%97%E6%96%B9%E5%91%A8%E6%9C%AB%20%E7%94%B5%E5%AD%90%E6%8A%A5%E5%88%8A%20%E8%A7%A3%E9%94%81%E4%BC%9A%E5%91%98.json
/*
Unlocks by Cuttlefish 公众号：墨鱼手记
*/
//
//https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/sample.js
// ==UserScript==
// @Name              网球规则[翻译]成Surge、QuantumultX、Loon脚本
// @Author            Cuttlefish
// @Tg group          https://t.me/ddgksf2013
// @WechatID          公众号墨鱼手记
// @UpdateTime        20200910
// @ScriptURL         https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Crack/sample.js
// ==/UserScript==
// ==KeyExplain==
// @Function          text.replace(regexp/substr,replacement)
// @key1              待替换的关键字段1
// @originalValue     字段key对应的原始value
// @replaceValue      字段key替换之后的value
// 
// @key2              待替换的关键字段2
// @originalValue     字段key对应的原始value
// @replaceValue      字段key替换之后的value
// @/g                正则匹配时匹配多个key键值
// ==/KeyExplain== 南方周末-电子报刊 for pm936 &小不点的对象
var body = $response.body.replace(/is_free": \d/g, 'is_free": 1').replace(/"mode": "\w+"/g, '"mode": "free"').replace(/"price": \d+/g, '"price": 0').replace(/"vip_price": \d+/g, '"vip_price": 0').replace(/"isview": \w+/g, '"isview": true').replace(/"isdigg": \w+/g, '"isdigg": true').replace(/"isNewsStand": \d+/g, '"isNewsStand": 1').replace(/"isfav":"\w+"/g, '"isfav":"true"').replace(/"isbuy":\w+/g, '"isbuy":true').replace(/"member_type":"\d"/g, '"member_type":"1"').replace(/"end_freetime":""/g, '"end_freetime":"1899-11-30 00:00:00"').replace(/"expire_time":"\w+"/g, '"expire_time":"2022-05-05 11:11:11"').replace(/cnt_mode":"\w+"/g, 'cnt_mode":"free"').replace(/cnt_comment_count": \d/g, 'cnt_comment_count": 0');
$done({ body });
