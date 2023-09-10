import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as createStaticVNode } from "./app-4319bd3b.js";
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
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="微信支付" tabindex="-1"><a class="header-anchor" href="#微信支付" aria-hidden="true">#</a> 微信支付</h2><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[tokio::main]</span>\n<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">WechatMaClient</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SimpleStorage</span><span class="token operator">&gt;</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> client <span class="token operator">=</span>client<span class="token punctuation">.</span><span class="token function">wxpay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token class-name">Local</span><span class="token punctuation">::</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">to_rfc3339_opts</span><span class="token punctuation">(</span><span class="token class-name">SecondsFormat</span><span class="token punctuation">::</span><span class="token class-name">Secs</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">unified_order_v3</span><span class="token punctuation">(</span><span class="token class-name">TradeType</span><span class="token punctuation">::</span><span class="token class-name">Jsapi</span><span class="token punctuation">,</span> <span class="token class-name">WechatPayRequestV3</span> <span class="token punctuation">{</span>\n        appid<span class="token punctuation">:</span> <span class="token string">&quot;appid&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        mch_id<span class="token punctuation">:</span> <span class="token string">&quot;mchid&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        description<span class="token punctuation">:</span> <span class="token string">&quot;测试商品支付&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        out_trade_no<span class="token punctuation">:</span> <span class="token string">&quot;1602920235sdfsdfas32234234&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        time_expire<span class="token punctuation">:</span> date<span class="token punctuation">,</span>\n        attach<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n        notify_url<span class="token punctuation">:</span> <span class="token string">&quot;https:xxx.cn/trade/notify&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        amount<span class="token punctuation">:</span> <span class="token class-name">Amount</span> <span class="token punctuation">{</span>\n            total<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n            currency<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;CNY&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            payer_total<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n            payer_currency<span class="token punctuation">:</span> <span class="token class-name">None</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        payer<span class="token punctuation">:</span> <span class="token class-name">Payer</span> <span class="token punctuation">{</span>\n            openid<span class="token punctuation">:</span> <span class="token string">&quot;oUVZc6S_uGx3bsNPUA-davo4Dt7Us&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        detail<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n        scene_info<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n        settle_info<span class="token punctuation">:</span> <span class="token class-name">None</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">match</span> result<span class="token punctuation">.</span><span class="token keyword">await</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更多请关注框架内容" tabindex="-1"><a class="header-anchor" href="#更多请关注框架内容" aria-hidden="true">#</a> 更多请关注框架内容</h3>', 3);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      _hoisted_3,
      createBaseVNode("p", null, [
        createTextVNode("更多好用的官方API需要自己发现哦 "),
        createBaseVNode("a", _hoisted_4, [
          createTextVNode("Github地址"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_5
  ]);
}
const wechatpay_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "wechatpay.html.vue"]]);
export {
  wechatpay_html as default
};
