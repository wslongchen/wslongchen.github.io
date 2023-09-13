import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as withCtx } from "./app-87fda56d.js";
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
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "feature",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#feature",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Feature")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "Labrador推荐使用openssl进行相关加密处理，考虑到使用者的多种机器以及环境，所以如果没有指定使用openssl的加密的话则不会使用。",
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "openssl-crypto",
  -1
  /* HOISTED */
);
const _hoisted_8 = /* @__PURE__ */ createBaseVNode(
  "code",
  null,
  "openssl-crypto",
  -1
  /* HOISTED */
);
const _hoisted_9 = {
  href: "https://docs.rs/openssl/0.10.41/openssl/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = /* @__PURE__ */ createBaseVNode(
  "ul",
  null,
  [
    /* @__PURE__ */ createBaseVNode("li", null, "默认加密")
  ],
  -1
  /* HOISTED */
);
const _hoisted_11 = {
  href: "https://docs.rs/rust-crypto/0.2.36/crypto/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_12 = {
  href: "https://docs.rs/x509-parser/0.14.0/x509_parser/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_13 = {
  href: "https://docs.rs/rsa/0.6.1/rsa/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "其他使用",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#其他使用",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 其他使用")
  ],
  -1
  /* HOISTED */
);
const _hoisted_15 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "也可以单独使用项目中的加密方式",
  -1
  /* HOISTED */
);
const _hoisted_16 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-rust line-numbers-mode",
    "data-ext": "rs"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-rust" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "fn"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function-definition function" }, "main"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n   "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" key "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" key"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "unwrap"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n   "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" prp "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token class-name" }, "PrpCrypto"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "::"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "new"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("key"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n   "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "let"),
        /* @__PURE__ */ createTextVNode(" result "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token operator" }, "="),
        /* @__PURE__ */ createTextVNode(" prp"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "aes_128_cbc_decrypt_data"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token namespace" }, [
          /* @__PURE__ */ createTextVNode("hex"),
          /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "::")
        ]),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "decode"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createTextVNode("text"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "unwrap"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ","),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token constant" }, "IV"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "into"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ";"),
        /* @__PURE__ */ createTextVNode("\n   "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "if"),
        /* @__PURE__ */ createTextVNode(" result"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "is_err"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "{"),
        /* @__PURE__ */ createTextVNode("\n     "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token keyword" }, "return"),
        /* @__PURE__ */ createTextVNode(),
        /* @__PURE__ */ createBaseVNode("span", { class: "token string" }, '""'),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "."),
        /* @__PURE__ */ createBaseVNode("span", { class: "token function" }, "to_string"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "("),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, ")"),
        /* @__PURE__ */ createTextVNode("\n   "),
        /* @__PURE__ */ createBaseVNode("span", { class: "token punctuation" }, "}"),
        /* @__PURE__ */ createTextVNode("\n "),
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
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
        createTextVNode("Labrador中内置了多种第三方需要的加密方式，其中包含不仅限于MD5、AES、DES、RSA、SM2等 "),
        createBaseVNode("a", _hoisted_4, [
          createTextVNode("Github地址"),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _hoisted_5,
    _hoisted_6,
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        _hoisted_7,
        createBaseVNode("p", null, [
          createTextVNode("如果你开起来了 "),
          _hoisted_8,
          createTextVNode(" feature， 则本项目所有加密都是用openssl进行，后续会支持其他加密库以供挑选，所以需要引入openssl相关，详情见"),
          createBaseVNode("a", _hoisted_9, [
            createTextVNode("openssl"),
            createVNode(_component_ExternalLinkIcon)
          ]),
          createTextVNode("相关说明。")
        ])
      ])
    ]),
    _hoisted_10,
    createBaseVNode("p", null, [
      createTextVNode("默认加密主要采用 "),
      createBaseVNode("a", _hoisted_11, [
        createTextVNode("rust-crypto"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" & "),
      createBaseVNode("a", _hoisted_12, [
        createTextVNode("x509_parser"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode(" & "),
      createBaseVNode("a", _hoisted_13, [
        createTextVNode("rsa"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("，感兴趣的可以去相关文档查看。")
    ]),
    _hoisted_14,
    _hoisted_15,
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "Rust" }, {
          default: withCtx(() => [
            _hoisted_16
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const crypt_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "crypt.html.vue"]]);
export {
  crypt_html as default
};
