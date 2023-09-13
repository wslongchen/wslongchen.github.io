import { _ as _export_sfc, o as openBlock, c as createElementBlock, e as createStaticVNode } from "./app-335ca978.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2><p>点心支付 API 遵循 REST 标准进行设计。 我们的 API 是 可预期的 以及 面向资源 的，接受 form-encoded 请求正文，返回 JSON-encoded 响应， 使用标准的 HTTP 响应代码 ，认证（OAuth 2.0）和参数。 所有请求和响应的编码均为 UTF-8。</p><h2 id="基础路径" tabindex="-1"><a class="header-anchor" href="#基础路径" aria-hidden="true">#</a> 基础路径</h2><ul><li>生产环境</li></ul><p><code>https://pay.snackcloud.cn</code></p><h2 id="认证说明" tabindex="-1"><a class="header-anchor" href="#认证说明" aria-hidden="true">#</a> 认证说明</h2><p>本文档所有接口需要调用<code>getAccessToken</code>根据应用编号和密钥获取应用请求凭证，应用编号与密钥均可在后台管理页面获取。 获取凭证后需要在请求时在请求头中携带<code>Authorization</code>。</p><p>另外为保证消息安全性，需要传入<code>sign</code>与<code>signType</code>字段，目前签名方式仅支持MD5。 所以所有接口中都会包含以下基础字段:</p><table><thead><tr><th>字段名</th><th>字段说明</th><th>示例</th></tr></thead><tbody><tr><td><strong>sign</strong></td><td>请求签名（详见签名说明）</td><td>CD88C66F157613EF16D5D86A3FBE23F5</td></tr><tr><td><strong>signType</strong></td><td>签名方式（目前仅支持MD5）</td><td>MD5</td></tr></tbody></table>', 9);
const _hoisted_10 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
const home_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "home.html.vue"]]);
export {
  home_html as default
};
