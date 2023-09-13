import { _ as _export_sfc, o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app-07b098a2.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="channelextra参数说明" tabindex="-1"><a class="header-anchor" href="#channelextra参数说明" aria-hidden="true">#</a> channelExtra参数说明</h2><p>当 <code>wayCode=AUTO_BAR</code> 或 <code>wayCode=ALI_BAR</code> 或 <code>wayCode=WX_BAR</code> 或 <code>wayCode=YSF_BAR</code> 时，<code>channelExtra</code>必须传<code>auth_code</code>，为用户的付款码值， <code>channelExtra</code>示例数据如：</p><p><code>{&quot;auth_code&quot;: &quot;13920933111042&quot;}</code></p><p>当 <code>wayCode=ALI_JSAPI</code> 时，<code>channelExtra</code>必须传<code>buyerUserId</code>，为支付宝用户<code>ID</code>，<code>channelExtra</code>示例数据如：</p><p><code>{&quot;buyerUserId&quot;: &quot;2088702585070844&quot;}</code> 当 <code>wayCode=WX_JSAPI</code> 或 <code>wayCode=WX_LITE</code> 时，<code>channelExtra</code>必须传<code>openid</code>，<code>channelExtra</code>示例数据如：</p><p><code>{&quot;openid&quot;: &quot;o6BcIwvSiRpfS8e_UyfQNrYuk2LI&quot;}</code> 当 <code>wayCode=QR_CASHIER</code> 或 <code>wayCode=ALI_QR</code>或 <code>wayCode=WX_NATIVE</code> 时，<code>channelExtra</code>可以传<code>payDataType</code>设置返回支付数据支付类型。此时<code>payDataType</code>可以为：<code>codeUrl</code>-二维码地址,<code>codeImgUrl</code>-二维码图片地址，不传<code>payDataType</code>默认返回<code>codeUrl</code>类型, <code>channelExtra</code>示例数据如：</p><p><code>{&quot;payDataType&quot;: &quot;codeImgUrl&quot;}</code> 当 <code>wayCode=ALI_WAP</code> 时，<code>channelExtra</code>可以传payDataType设置返回支付数据支付类型。此时<code>payDataType</code>可以为：<code>form</code>-返回自动跳转的支付表单,<code>codeImgUrl</code>-返回一个二维码图片URL,<code>payUrl</code>-返回支付链接，不传<code>payDataType</code>默认返回payUrl类型, <code>channelExtra</code>示例数据如：</p><p><code>{&quot;payDataType&quot;: &quot;form&quot;}</code> 当 <code>wayCode=ALI_PC</code> 时，<code>channelExtra</code>可以传<code>payDataType</code>设置返回支付数据支付类型。此时<code>payDataType</code>可以为：<code>form</code>-返回自动跳转的支付表单,<code>payUrl</code>-返回支付链接，不传<code>payDataType</code>默认返回<code>payUrl</code>类型, <code>channelExtra</code>示例数据如：</p><p><code>{&quot;payDataType&quot;: &quot;form&quot;}</code></p><p>如有任何问题请直接联系我们。邮箱：wslongchen@vip.qq.com</p>', 10);
const _hoisted_11 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_11);
}
const extra_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "extra.html.vue"]]);
export {
  extra_html as default
};
