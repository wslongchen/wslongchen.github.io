import { _ as _export_sfc, o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app-588254f0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="统一下单" tabindex="-1"><a class="header-anchor" href="#统一下单" aria-hidden="true">#</a> 统一下单</h2><p>统一下单</p><h3 id="请求地址" tabindex="-1"><a class="header-anchor" href="#请求地址" aria-hidden="true">#</a> 请求地址</h3><ul><li>生产环境</li></ul><p>请求方式：<code>POST</code> 请求路径：<code>{{BASE_URL}}/pay/api/v1/unified_order</code></p><h3 id="请求头参数" tabindex="-1"><a class="header-anchor" href="#请求头参数" aria-hidden="true">#</a> 请求头参数</h3><table><thead><tr><th>字段名</th><th>字段说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td><strong>Content-Type</strong></td><td>媒体类型</td><td>string</td><td>必填</td></tr><tr><td><strong>Accept</strong></td><td>接受响应媒体类型</td><td>string</td><td>必填</td></tr><tr><td><strong>Authorization</strong></td><td>请求认证凭证(通过应用APPID与SECRET换取)</td><td>string</td><td>必填</td></tr></tbody></table><h3 id="请求参数" tabindex="-1"><a class="header-anchor" href="#请求参数" aria-hidden="true">#</a> 请求参数</h3><table><thead><tr><th>字段名</th><th>字段说明</th><th>类型</th><th>是否必填</th></tr></thead><tbody><tr><td><strong>sign</strong></td><td>签名</td><td>string</td><td>必填</td></tr><tr><td><strong>signType</strong></td><td>签名方式（目前仅支持MD5）</td><td>string</td><td>必填</td></tr><tr><td><strong>mchOrderNo</strong></td><td>商户订单号</td><td>string</td><td>必填</td></tr><tr><td><strong>wayCode</strong></td><td>支付方式(见后台支付方式。如：WX_JSAPI 微信Jsapi)</td><td>string</td><td>必填</td></tr><tr><td><strong>amount</strong></td><td>支付金额(单位：分)</td><td>int</td><td>必填</td></tr><tr><td><strong>currency</strong></td><td>币种(目前仅支持CNY)</td><td>string</td><td></td></tr><tr><td><strong>clientIp</strong></td><td>客户端IP</td><td>string</td><td>必填</td></tr><tr><td><strong>subject</strong></td><td>商品标题</td><td>string</td><td>必填</td></tr><tr><td><strong>body</strong></td><td>支付方式商品描述信息</td><td>string</td><td></td></tr><tr><td><strong>notifyUrl</strong></td><td>异步通知地址</td><td>string</td><td>必填</td></tr><tr><td><strong>returnUrl</strong></td><td>同步通知地址</td><td>string</td><td>必填</td></tr><tr><td><strong>expiredTime</strong></td><td>订单失效时间, 单位：秒</td><td>string</td><td>必填</td></tr><tr><td><strong>channelExtra</strong></td><td>特定渠道发起额外参数</td><td>string</td><td></td></tr><tr><td><strong>extParam</strong></td><td>商户扩展参数</td><td>string</td><td></td></tr><tr><td><strong>divisionMode</strong></td><td>分账模式： 0-该笔订单不允许分账, 1-支付成功按配置自动完成分账, 2-商户手动分账(解冻商户金额)</td><td>string</td><td>必填</td></tr></tbody></table><h3 id="请求示例" tabindex="-1"><a class="header-anchor" href="#请求示例" aria-hidden="true">#</a> 请求示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;sign&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0DCFB04521E3D44664B7CE448520D3C5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;signType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MD5&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;mchOrderNo&quot;</span><span class="token operator">:</span> <span class="token number">511109055593612000</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;wayCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;WX_JSAPI&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;amount&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;currency&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CNY&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;clientIp&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;subject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试商品&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;测试商品&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;notifyUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8383/pay/api/v1/callback&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;returnUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:8383/pay/api/v1/callback&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;expiredTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-08-15 18:08:11&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;channelExtra&quot;</span><span class="token operator">:</span> <span class="token string">&quot;openid&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;extParam&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;divisionMode&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="响应参数" tabindex="-1"><a class="header-anchor" href="#响应参数" aria-hidden="true">#</a> 响应参数</h3><table><thead><tr><th>字段名</th><th>字段说明</th><th>类型</th></tr></thead><tbody><tr><td><strong>payOrderId</strong></td><td>支付订单号</td><td>string</td></tr><tr><td><strong>mchOrderNo</strong></td><td>商户订单号</td><td>string</td></tr><tr><td><strong>orderStatus</strong></td><td>订单状态可选值：0-订单生成 , 1-支付中 , 2-支付成功 , 3-支付失败 , 4-已撤销 , 5-已退款 , 6-订单关闭</td><td>string</td></tr><tr><td><strong>payDataType</strong></td><td>支付参数类型:payUrl-跳转链接的方式 , form-表单方式 , wxapp-微信支付参数(微信公众号,小程序,app支付时) , aliapp-支付宝app支付参数 , ysfapp-云闪付app支付参数 , codeUrl-二维码地址 , codeImgUrl-二维码图片地址 , none-空支付参数</td><td>string</td></tr><tr><td><strong>payData</strong></td><td>发起支付用到的支付参数，如微信公众号支付等</td><td>string</td></tr><tr><td><strong>errCode</strong></td><td>渠道返回错误代码</td><td>string</td></tr><tr><td><strong>errMsg</strong></td><td>渠道返回错误信息</td><td>string</td></tr></tbody></table><h3 id="响应示例" tabindex="-1"><a class="header-anchor" href="#响应示例" aria-hidden="true">#</a> 响应示例</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;payOrderId&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mho1624005752661&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;mchOrderNo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mho1624005752661&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;orderStatus&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;payDataType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;payData&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;errCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;errMsg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Business Failed【支付失败，获取顾客账户信息失败，请顾客刷新付款码后重新收款，如再次收款失败，请联系管理员处理。[SOUNDWAVE_PARSER_FAIL]】&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>', 15);
const _hoisted_16 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_16);
}
const order_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "order.html.vue"]]);
export {
  order_html as default
};