import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as createStaticVNode } from "./app-e126edf4.js";
const _sfc_main = {};
const _hoisted_1 = { class: "custom-container info" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 24 24"
  },
  [
    /* @__PURE__ */ createBaseVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }, [
      /* @__PURE__ */ createBaseVNode("circle", {
        cx: "12",
        cy: "12",
        r: "9"
      }),
      /* @__PURE__ */ createBaseVNode("path", { d: "M12 8h.01" }),
      /* @__PURE__ */ createBaseVNode("path", { d: "M11 12h1v4h1" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  { class: "custom-container-title" },
  "INFO",
  -1
  /* HOISTED */
);
const _hoisted_4 = {
  href: "https://crates.io/crates/labrador",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<p>主要包含以下几个<code>features</code>:</p><ul><li><code>taobao</code> - 淘宝客</li><li><code>alipay</code> - 支付宝</li><li><code>pdd</code> - 拼多多</li><li><code>jd</code> - 京东</li><li><code>wechat</code> - 微信</li><li><code>qiniu</code> - 七牛云</li></ul><h3 id="主要支持的平台" tabindex="-1"><a class="header-anchor" href="#主要支持的平台" aria-hidden="true">#</a> 主要支持的平台</h3><table><thead><tr><th>平台</th><th>是否支持</th></tr></thead><tbody><tr><td><strong>Wechat:mp</strong>(微信公众号),<br><strong>cp</strong>(企业微信),<br><strong>miniapp</strong>(微信小程序),<br><strong>pay</strong>(微信支付)</td><td>√</td></tr><tr><td><strong>Alipay</strong>(支付宝)</td><td>√</td></tr><tr><td><strong>Taobao</strong>(淘宝客)</td><td>√</td></tr><tr><td><strong>JD</strong>(京东联盟)</td><td>√</td></tr><tr><td><strong>PDD</strong>(拼多多-多多客)</td><td>√</td></tr><tr><td><strong>Qiniu</strong>(七牛云服务)</td><td>√</td></tr></tbody></table>', 4);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      _hoisted_3,
      createBaseVNode("p", null, [
        createTextVNode("Labrador是一个迷你的便捷的第三方服务客户端SDK "),
        createBaseVNode("a", _hoisted_4, [
          createTextVNode("Github地址"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_5
  ]);
}
const home_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "home.html.vue"]]);
export {
  home_html as default
};
