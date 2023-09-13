import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, e as createStaticVNode } from "./app-87fda56d.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "div",
  { class: "custom-container info" },
  [
    /* @__PURE__ */ createBaseVNode("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      viewBox: "0 0 24 24"
    }, [
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
    ]),
    /* @__PURE__ */ createBaseVNode("p", { class: "custom-container-title" }, "INFO"),
    /* @__PURE__ */ createBaseVNode("p", null, "本文首发公众号【一名打字员】")
  ],
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>今天推荐一个比较简单又好玩的模块 <code>qrcode-terminal</code> ，这是一个在控制端生成二维码的模块，在我们编写某些控制台应用的时候可以很方便的进行某些操作。</p><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> qrcode <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;qrcode-terminal&#39;</span><span class="token punctuation">)</span>\n\nqrcode<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">&#39;来来来，大家一起入门到放弃!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">//我们也可以这样写</span>\nqrcode<span class="token punctuation">.</span><span class="token function">generate</span><span class="token punctuation">(</span><span class="token string">&#39;来来来，大家一起入门到放弃!&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">small</span><span class="token operator">:</span> <span class="token boolean">false</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以通过传入一个字符串生成一个很普通的二维码。</p><p><img src="https://segmentfault.com/img/bVZpnc" alt="clipboard.png"></p><h3 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h3><p><code>qrcode-terminal</code>支持windows和linux机器，所以无论是终端还是dos窗口都能够使用，还在犹豫啥，赶紧动手玩玩看吧！</p>', 8);
const _hoisted_10 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_10);
}
const _010701_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "010701.html.vue"]]);
export {
  _010701_html as default
};
