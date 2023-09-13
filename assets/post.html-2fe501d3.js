import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as createStaticVNode } from "./app-190c37ee.js";
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
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="参与贡献" tabindex="-1"><a class="header-anchor" href="#参与贡献" aria-hidden="true">#</a> 参与贡献</h2><p>我们将逐步完善相应的API</p><ol><li>首先非常欢迎和感谢对本项目发起 <code>Pull Request</code> 的热心小伙伴们。</li><li><strong>特别提示：请务必在 <code>develop</code> 分支提交 <code>PR</code>，<code>release</code> 分支目前仅是正式版的代码，即发布正式版本后才会从 <code>develop</code> 分支进行合并。</strong></li><li>本项目代码风格为使用2个空格代表一个Tab，因此在提交代码时请注意一下，否则很容易在IDE格式化代码后与原代码产生大量diff，这样会给其他人阅读代码带来极大的困扰。</li><li><strong>提交代码前，请检查代码是否已经格式化，并且保证新增加或者修改的方法都有完整的参数说明，而pub方法必须拥有相应的单元测试并通过测试。</strong></li></ol><h2 id="贡献者" tabindex="-1"><a class="header-anchor" href="#贡献者" aria-hidden="true">#</a> 贡献者</h2><pre><code>MrPan &lt;1049058427@qq.com&gt;\n</code></pre><h2 id="获取帮助" tabindex="-1"><a class="header-anchor" href="#获取帮助" aria-hidden="true">#</a> 获取帮助</h2><p>拉布拉多是个人项目。一开始，我只是喜欢拉布拉多犬，因为我的爱好。 我希望这个项目会变得越来越可爱。许多实用的其他函数将 将在将来添加。我希望你能积极帮助这个项目成长并提出建议。 我相信未来会越来越好。</p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><sup> Licensed under either of <a href="LICENSE-APACHE">Apache License, Version 2.0</a> or <a href="LICENSE-MIT">MIT license</a> at your option. </sup><br><sub> Unless you explicitly state otherwise, any contribution intentionally submitted for inclusion in Labrador by you, as defined in the Apache-2.0 license, shall be dual licensed as above, without any additional terms or conditions. </sub>', 11);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      _hoisted_3,
      createBaseVNode("p", null, [
        createTextVNode("👏期待您的加入～ "),
        createBaseVNode("a", _hoisted_4, [
          createTextVNode("Github地址"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_5
  ]);
}
const post_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "post.html.vue"]]);
export {
  post_html as default
};
