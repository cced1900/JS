//https://github.com/ddgksf2013/HttpCatcher/blob/master/%E8%99%AB%E8%99%AB%E9%92%A2%E7%90%B4.json
//https://github.com/pm936/httpcatcher/blob/master/%E8%99%AB%E8%99%AB%E9%92%A2%E7%90%B4%20%E4%B8%93%E4%B8%9A%E9%92%A2%E7%90%B4%E8%B0%B1%E5%88%86%E4%BA%AB%E5%B9%B3%E5%8F%B0%20%E8%A7%A3%E9%94%81%E4%BC%9A%E5%91%98.json
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
// ==/KeyExplain== 虫虫钢琴,收费谱子可以通过PDF打印获取 ，直接点下载原谱无效
var body = $response.body.replace(/is_vip":"0"/g, 'is_vip":"1"').replace(/"expire_date":""/g, '"expire_date":"2021-11-11 11:11:11"').replace(/"paytype":"3"/g, '"paytype":"0"').replace(/"sale_price":"\d+\.\d+"/g, '"sale_price":"0"').replace(/vip_expire_date":""/g, 'vip_expire_date":"2021-11-11 11:11:11"').replace(/has_buy":"0"/g, 'has_buy":"1"');
$done({ body });
