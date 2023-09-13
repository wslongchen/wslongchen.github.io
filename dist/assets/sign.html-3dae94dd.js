import { _ as _export_sfc, o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app-07b098a2.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="签名算法" tabindex="-1"><a class="header-anchor" href="#签名算法" aria-hidden="true">#</a> 签名算法</h2><p>签名生成的通用步骤如下</p><p>第一步： 设所有发送或者接收到的数据为集合M，将集合M内非空参数值的参数按照参数名ASCII码从小到大排序（字典序），使用URL键值对的格式（即key1=value1&amp;key2=value2…）拼接成字符串stringA。 特别注意以下重要规则：</p><ul><li>参数名ASCII码从小到大排序（字典序）；</li><li>如果参数的值为空不参与签名；</li><li>参数名区分大小写；</li><li>验证调用返回或支付中心主动通知签名时，传送的sign与signType参数不参与签名，将生成的签名与该sign值作校验。</li><li>支付中心接口可能增加字段，验证签名时必须支持增加的扩展字段</li></ul><p>第二步： 得到的拼接结果首尾拼接密钥(请求接口时用“签名密钥”)即 secret + stringA + secret 第三步：将第二步得到的字符串进行md5，得到的结果即为sign</p><p>如请求支付系统参数如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;mchOrderNo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;511109055593612033&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;wayCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WX_JSAPI&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;currency&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CNY&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;clientIp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试商品&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试商品&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;notifyUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8383/pay/api/v1/unified_order&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;returnUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8383/pay/api/v1/unified_order&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;expiredTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-08-15 18:08:11&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;channelExtra&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;openid\\&quot;:\\&quot;oUVZc6S_uGx3bsNPUA-davo4Dt7U\\&quot;}&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;extParam&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;divisionMode&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>待签名值： <code>密钥amount1appIdDCc4c396c9b59e6bab10body测试商品channelExtra{&quot;openid&quot;:&quot;oUVZc6S_uGx3bsNPUA-davo4Dt7U&quot;}clientIp127.0.0.1currencyCNYdivisionMode0expiredTime2022-08-15 18:08:11mchNo23234234mchOrderNo511109055593612033notifyUrlhttp://localhost:8383/pay/api/v1/unified_orderreturnUrlhttp://localhost:8383/pay/api/v1/unified_ordersubject测试商品wayCodeWX_JSAPI密钥</code></p><p>签名结果：<code>1D114E6424F9E2CA06F65D7938608FAF</code></p><p>最终请求支付系统参数：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1D114E6424F9E2CA06F65D7938608FAF&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;signType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MD5&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;mchOrderNo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;511109055593612033&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;wayCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WX_JSAPI&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;currency&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CNY&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;clientIp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试商品&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试商品&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;notifyUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8383/pay/api/v1/unified_order&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;returnUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8383/pay/api/v1/unified_order&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;expiredTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-08-15 18:08:11&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;channelExtra&quot;</span><span class="token operator">:</span> <span class="token string">&quot;{\\&quot;openid\\&quot;:\\&quot;oUVZc6S_uGx3bsNPUA-davo4Dt7U\\&quot;}&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;extParam&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;divisionMode&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 11);
const _hoisted_12 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_12);
}
const sign_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "sign.html.vue"]]);
export {
  sign_html as default
};
