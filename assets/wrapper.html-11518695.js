import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-c3ba1599.js";
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
const _hoisted_5 = /* @__PURE__ */ createBaseVNode(
  "h2",
  {
    id: "wrapper",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#wrapper",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" Wrapper")
  ],
  -1
  /* HOISTED */
);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode(
  "div",
  {
    class: "language-ignore line-numbers-mode",
    "data-ext": "ignore"
  },
  [
    /* @__PURE__ */ createBaseVNode("pre", { class: "language-ignore" }, [
      /* @__PURE__ */ createBaseVNode("code", null, [
        /* @__PURE__ */ createBaseVNode("span", { class: "token entry string" }, 'let mut wrapper = Wrapper::new().like(true, "column1", "ffff")'),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token entry string" }, '.eq(true, "column2", 12)'),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token entry string" }, '.eq(true, "column3", "3333")'),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token entry string" }, [
          /* @__PURE__ */ createTextVNode('.inside(true, "column4", vec!'),
          /* @__PURE__ */ createBaseVNode("span", { class: "token regex" }, "[1,44,3]"),
          /* @__PURE__ */ createTextVNode(")")
        ]),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token entry string" }, '.not_between(true, "column5", 2, 8)'),
        /* @__PURE__ */ createTextVNode("\n"),
        /* @__PURE__ */ createBaseVNode("span", { class: "token entry string" }, '.set(true, "column1", 4);'),
        /* @__PURE__ */ createTextVNode("\n\n")
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
      /* @__PURE__ */ createBaseVNode("div", { class: "line-number" })
    ])
  ],
  -1
  /* HOISTED */
);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode(
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
            _hoisted_6
          ]),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _hoisted_7
  ]);
}
const wrapper_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "wrapper.html.vue"]]);
export {
  wrapper_html as default
};
