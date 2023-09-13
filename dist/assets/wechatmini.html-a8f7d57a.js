import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as createStaticVNode } from "./app-07b098a2.js";
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
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="微信小程序" tabindex="-1"><a class="header-anchor" href="#微信小程序" aria-hidden="true">#</a> 微信小程序</h2><h3 id="codesssion" tabindex="-1"><a class="header-anchor" href="#codesssion" aria-hidden="true">#</a> codesssion</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[tokio::main]</span>\n<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">WechatMaClient</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SimpleStorage</span><span class="token operator">&gt;</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> codesssion_client <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">code_session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// code换取session</span>\n    codesssion_client<span class="token punctuation">.</span><span class="token function">jscode_2_session</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="codesssion-1" tabindex="-1"><a class="header-anchor" href="#codesssion-1" aria-hidden="true">#</a> codesssion</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[tokio::main]</span>\n<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">WechatMaClient</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SimpleStorage</span><span class="token operator">&gt;</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> codesssion_client <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">code_session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// code换取session</span>\n    codesssion_client<span class="token punctuation">.</span><span class="token function">jscode_2_session</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二维码" tabindex="-1"><a class="header-anchor" href="#二维码" aria-hidden="true">#</a> 二维码</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[tokio::main]</span>\n<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">WechatMaClient</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SimpleStorage</span><span class="token operator">&gt;</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> qrcode_client <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">qrcode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 获取小程序页面二维码.</span>\n    qrcode_client<span class="token punctuation">.</span><span class="token function">create_qrcode</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;width&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户" tabindex="-1"><a class="header-anchor" href="#用户" aria-hidden="true">#</a> 用户</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[tokio::main]</span>\n<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">WechatMaClient</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SimpleStorage</span><span class="token operator">&gt;</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> user_client <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">user</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 解密用户敏感数据</span>\n    user_client<span class="token punctuation">.</span><span class="token function">decrypt_user_info</span><span class="token punctuation">(</span><span class="token string">&quot;code&quot;</span><span class="token punctuation">)</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="媒体" tabindex="-1"><a class="header-anchor" href="#媒体" aria-hidden="true">#</a> 媒体</h3><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token attribute attr-name">#[tokio::main]</span>\n<span class="token keyword">async</span> <span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> client <span class="token operator">=</span> <span class="token class-name">WechatMaClient</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SimpleStorage</span><span class="token operator">&gt;</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token string">&quot;appid&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;secret&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> media_client <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">media</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 新增临时素材</span>\n    media_client<span class="token punctuation">.</span><span class="token function">upload_media</span><span class="token punctuation">(</span><span class="token string">&quot;media_type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;file_name&quot;</span> <span class="token punctuation">,</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更多请关注框架内容" tabindex="-1"><a class="header-anchor" href="#更多请关注框架内容" aria-hidden="true">#</a> 更多请关注框架内容</h3>', 12);
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
const wechatmini_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "wechatmini.html.vue"]]);
export {
  wechatmini_html as default
};
