//https://github.com/pm936/httpcatcher/blob/master/VUE%20Vlog%E8%A7%A3%E9%94%81%E4%BC%9A%E5%91%98.json
//*
//Unlocks by Cuttlefish 公众号：墨鱼手记
//*/
//var body = $response.body.replace(/\u0069\u0073\u0066\u0072\u0065\u0065\u0022\u003a\u0030/g, '\u0069\u0073\u0066\u0072\u0065\u0065\u0022\u003a\u0031');
//$done({ body });
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
// ==/KeyExplain== VUE Vlog解锁会员.json 转换 for pm936
var body = $response.body.replace(/"isCustomized":false/g, '"isCustomized":true').replace("isPremium":false/g, '"isPremium":true').replace("valid":false/g, '"valid":true').replace("active":false/g, '"active":true');
$done({ body });
