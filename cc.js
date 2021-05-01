//https://github.com/ddgksf2013/HttpCatcher/edit/master/%E8%99%AB%E8%99%AB%E9%92%A2%E7%90%B4.json
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
var body = $response.body.replace(/is_vip":"0"/g, 'is_vip":"1"').replace(/expire_date":""/g, 'expire_date":"1651248000"').replace(/vip_expire_date":""/g, 'vip_expire_date":"1651248000"').replace(/has_buy":"0"/g, 'has_buy":"1"');
$done({ body });
