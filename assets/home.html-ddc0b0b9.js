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
  href: "https://crates.io/crates/akita",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = /* @__PURE__ */ createStaticVNode('<p>我们能做什么？</p><ul><li>MySql 数据库的操作工具;</li><li>SQLite 数据库的操作工具;</li><li>一个便捷的ORM框架</li></ul><h2 id="feature" tabindex="-1"><a class="header-anchor" href="#feature" aria-hidden="true">#</a> Feature.</h2><ul><li><code>akita-mysql</code> - to use mysql</li><li><code>akita-sqlite</code> - to use sqlite</li><li><code>akita-auth</code> - to use some auth mehod</li><li><code>akita-fuse</code> - to use some fuse feature</li></ul><h2 id="annotions" tabindex="-1"><a class="header-anchor" href="#annotions" aria-hidden="true">#</a> Annotions.</h2><ul><li><code>AkitaTable</code> - to make Akita work with structs</li><li><code>FromValue</code> - from value with akita</li><li><code>ToValue</code> - to value with akita</li><li><code>table_id</code> - to make Table Ident</li><li><code>field</code> - to make struct field with own database.</li><li><code>name</code> - work with column, make the table&#39;s field name. default struct&#39; field name.</li><li><code>exist</code> - ignore struct&#39;s field with table. default true.</li></ul><h2 id="support-field-types" tabindex="-1"><a class="header-anchor" href="#support-field-types" aria-hidden="true">#</a> Support Field Types.</h2><ul><li><code>Option&lt;T&gt;</code></li><li><code>u8, u32, u64</code></li><li><code>i32, i64</code></li><li><code>usize</code></li><li><code>bool</code></li><li><code>f32, f64</code></li><li><code>str, String</code></li><li><code>serde_json::Value</code></li><li><code>NaiveDate, NaiveDateTime</code></li></ul><p>Features:</p><ul><li>其他数据库支持,如 Oracle, MSSQL...;</li><li>支持自定义字段format方法;</li></ul><hr><h3 id="主要支持的平台" tabindex="-1"><a class="header-anchor" href="#主要支持的平台" aria-hidden="true">#</a> 主要支持的平台</h3><table><thead><tr><th>平台</th><th>是否支持</th></tr></thead><tbody><tr><td><strong>MySQL</strong></td><td>√</td></tr><tr><td><strong>SQLite</strong></td><td>√</td></tr></tbody></table><h3 id="更多请关注框架内容" tabindex="-1"><a class="header-anchor" href="#更多请关注框架内容" aria-hidden="true">#</a> 更多请关注框架内容</h3>', 14);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      _hoisted_3,
      createBaseVNode("p", null, [
        createTextVNode("Akita是一个小巧的Rust ORM框架 "),
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
