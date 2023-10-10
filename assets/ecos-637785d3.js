import { g as defineComponent, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, F as Fragment, h as renderList, d as createVNode, f as withCtx, t as toDisplayString, p as pushScopeId, i as popScopeId, b as createTextVNode, _ as _export_sfc } from "./app-e126edf4.js";
const _imports_0 = "/assets/snack_logo-12493372.png";
const _withScopeId = (n) => (pushScopeId("data-v-260f8790"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "works_container" };
const _hoisted_2 = ["innerHTML"];
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "div",
  null,
  [
    /* @__PURE__ */ createBaseVNode("p", { align: "center" }, [
      /* @__PURE__ */ createBaseVNode("img", {
        src: _imports_0,
        alt: "Heroicons",
        width: "248",
        height: "248"
      })
    ]),
    /* @__PURE__ */ createBaseVNode("p", { align: "center" }, [
      /* @__PURE__ */ createBaseVNode("strong", null, "猫狗试验室")
    ]),
    /* @__PURE__ */ createBaseVNode("p", { align: "center" }, [
      /* @__PURE__ */ createTextVNode(" 这是一个热爱🫶技术，热爱🔥生活的团队. "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode("很欢迎大家能够一起学习📑、沟通💬 . ")
    ])
  ],
  -1
  /* HOISTED */
));
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ecos",
  setup(__props) {
    const data = [
      {
        title: "🥧 点心付",
        desc: "一个比想象中更方便的支付框架",
        link: "https://snack-pay-wslongchen.doc.coding.io"
      },
      {
        title: "🎨 Labrador",
        desc: "一个集成了微信/支付宝/京东/拼多多/七牛云的三方应用API请求框架.",
        link: "https://github.com/wslongchen/labrador",
        detail: '<a href="https://crates.io/crates/labrador"><img src="https://img.shields.io/crates/v/labrador?style=plastic" alt="Latest Release"></a>'
      },
      {
        title: "📊 Akita",
        desc: "一个小巧的Rust数据库ORM框架，语法类似Mybatis-Plus.",
        link: "https://github.com/wslongchen/akita",
        detail: '<a href="https://crates.io/crates/akita"><img src="https://img.shields.io/crates/v/akita?style=plastic" alt="Latest Release"></a>'
      }
    ];
    const jumpLink = (link) => {
      if (link) {
        window.open(link, "_blank");
      }
    };
    return (_ctx, _cache) => {
      const _component_MagicCard = resolveComponent("MagicCard");
      return openBlock(), createElementBlock(
        Fragment,
        null,
        [
          createBaseVNode("div", _hoisted_1, [
            (openBlock(), createElementBlock(
              Fragment,
              null,
              renderList(data, (item, index) => {
                return createVNode(_component_MagicCard, {
                  class: "works_item",
                  key: index,
                  onClick: () => jumpLink(item.link)
                }, {
                  default: withCtx(() => [
                    createBaseVNode(
                      "h4",
                      null,
                      toDisplayString(item.title),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode(
                      "p",
                      null,
                      toDisplayString(item.desc),
                      1
                      /* TEXT */
                    ),
                    createBaseVNode("p", {
                      innerHTML: item.detail
                    }, null, 8, _hoisted_2)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["onClick"]);
              }),
              64
              /* STABLE_FRAGMENT */
            ))
          ]),
          _hoisted_3
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
});
const ecos_vue_vue_type_style_index_0_scoped_260f8790_lang = "";
const ecos = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-260f8790"], ["__file", "ecos.vue"]]);
export {
  ecos as default
};
