import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-c3ba1599.js";
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
  href: "https://crates.io/crates/akita",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<h2 id="快速使用" tabindex="-1"><a class="header-anchor" href="#快速使用" aria-hidden="true">#</a> 快速使用</h2><details><summary> Click to show Cargo.toml. <a href="https://play.rust-lang.org/?version=nightly&amp;mode=debug&amp;edition=2018&amp;gist=bc95328e2b8691b4396222b080fdb1c3" target="_blank">Run this code in the playground.</a></summary><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>\n\n<span class="token comment"># The core APIs, including the Table traits. Always</span>\n<span class="token comment"># required when using Akita. using #[derive(AkitaTable)] </span>\n<span class="token comment"># to make Akita work with structs defined in your crate.</span>\n<span class="token key property">akita</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.4.0&quot;</span><span class="token punctuation">,</span> <span class="token key property">features</span> <span class="token punctuation">=</span> <span class="token punctuation">[</span><span class="token string">&quot;akita-mysql&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p></p><h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3>', 4);
const _hoisted_9 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-rust line-numbers-mode",
    "data-ext": "rs"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-rust" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "use"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, [
          /* @__PURE__ */ createTextVNode("akita"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "::")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "*"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "/// Annotion Support: AkitaTable、table_id、field (name, exist, fill(function, mode))"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attribute attr-name" }, "#[derive(AkitaTable, Clone, Default)]"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attribute attr-name" }, [
          /* @__PURE__ */ createTextVNode("#[table(name = "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"t_system_user"'),
          /* @__PURE__ */ createTextVNode(")]")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "struct"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token type-definition class-name" }, "User"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attribute attr-name" }, [
          /* @__PURE__ */ createTextVNode("#[table_id(name = "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"id"'),
          /* @__PURE__ */ createTextVNode(")]")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" pk"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "i64"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" id"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "String"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" headline"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "Option"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "NaiveDateTime"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "/// 状态"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" status"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "u8"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "/// 用户等级 0.普通会员 1.VIP会员"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" level"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "u8"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "/// 生日"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" birthday"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "Option"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "<"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "NaiveDate"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, ">"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "/// 性别"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" gender"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "u8"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attribute attr-name" }, [
          /* @__PURE__ */ createTextVNode("#[field(exist = "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"false"'),
          /* @__PURE__ */ createTextVNode(", fill="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"is_org_build"'),
          /* @__PURE__ */ createTextVNode(")]")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" is_org"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "bool"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token attribute attr-name" }, [
          /* @__PURE__ */ createTextVNode("#[field(name = "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"token"'),
          /* @__PURE__ */ createTextVNode(", fill(function = "),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"token_build"'),
          /* @__PURE__ */ createTextVNode(", mode="),
          /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"default"'),
          /* @__PURE__ */ createTextVNode("))]")
        ]),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "pub"),
        /* @__PURE__ */ createTextVNode(" url_token"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "String"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "static"),
        /* @__PURE__ */ createTextVNode(" area"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ":"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "&"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "str"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"china"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fn"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function-definition function" }, "is_org_build"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "->"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "bool"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    area"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "eq"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '"china"'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fn"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function-definition function" }, "token_build"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "->"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "String"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token comment" }, "// generate the token"),
        /* @__PURE__ */ createTextVNode("\n    "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token macro property" }, "todo!"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n")
      ])
    ]),
    /* @__PURE__ */ createBaseVNode("div", {
      class: "line-numbers",
      "aria-hidden": "true"
    }, [
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" }),
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "更多请关注框架内容",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#更多请关注框架内容",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 更多请关注框架内容")
  ],
  -1
  /* HOISTED */
);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
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
    _hoisted_5,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "Rust" }, {
          default: withCtx(() => [
            _hoisted_9
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_10
  ]);
}
const api_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "api.html.vue"]]);
export {
  api_html as default
};
