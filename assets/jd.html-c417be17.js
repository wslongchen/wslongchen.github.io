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
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="京东-目前暂时只支持联盟相关" tabindex="-1"><a class="header-anchor" href="#京东-目前暂时只支持联盟相关" aria-hidden="true">#</a> 京东，目前暂时只支持联盟相关</h2><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">use</span> <span class="token namespace">labrador<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">JDClient</span><span class="token punctuation">,</span> <span class="token class-name">JdOrderRawQueryParam</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">chrono<span class="token punctuation">::</span></span><span class="token punctuation">{</span><span class="token class-name">Local</span><span class="token punctuation">,</span> <span class="token class-name">SecondsFormat</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token attribute attr-name">#[tokio::main]</span>\n<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> client <span class="token operator">=</span>  <span class="token class-name">JDClient</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SimpleStorage</span><span class="token operator">&gt;</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;appkey&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;secert&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> param <span class="token operator">=</span> <span class="token class-name">JdOrderRawQueryParam</span> <span class="token punctuation">{</span>\n        page_index<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        page_size<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        bill_type<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n        start_time<span class="token punctuation">:</span> <span class="token string">&quot;2022-08-02 21:23:00&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        end_time<span class="token punctuation">:</span> <span class="token string">&quot;2022-08-02 21:43:00&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        child_union_id<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n        key<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span>\n        fields<span class="token punctuation">:</span> <span class="token class-name">None</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> result <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">query_raw_order</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">match</span> result<span class="token punctuation">.</span><span class="token keyword">await</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">}</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义请求" tabindex="-1"><a class="header-anchor" href="#自定义请求" aria-hidden="true">#</a> 自定义请求</h3><p>可以实现trait来实现自定义请求</p><ul><li>JDRequest - 京东</li></ul><h3 id="更多请关注框架内容" tabindex="-1"><a class="header-anchor" href="#更多请关注框架内容" aria-hidden="true">#</a> 更多请关注框架内容</h3>', 6);
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
const jd_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "jd.html.vue"]]);
export {
  jd_html as default
};
