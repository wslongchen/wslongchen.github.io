import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, e as createStaticVNode } from "./app-e126edf4.js";
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
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
    /* @__PURE__ */ createBaseVNode("p", null, "昨天的文章里相信大家对rust有了一个基本的了解，今天我们重新完整的介绍一次rust。")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h1 id="为什么选择rust" tabindex="-1"><a class="header-anchor" href="#为什么选择rust" aria-hidden="true">#</a> 为什么选择Rust</h1><p>这是一门赋予每个人，构建可靠且高效软件能力的语言。在这里你写不出不安全的代码（unsafe块不在讨论范围），绝大多数的错误rust都通过语法、编译时错误规避了。</p><h1 id="用rust能构建哪些应用" tabindex="-1"><a class="header-anchor" href="#用rust能构建哪些应用" aria-hidden="true">#</a> 用Rust能构建哪些应用</h1><ul><li><h2 id="命令行应用" tabindex="-1"><a class="header-anchor" href="#命令行应用" aria-hidden="true">#</a> 命令行应用</h2></li></ul><p>当我们需要编写某些命令行应用或者控制台工具的时候非常方便，终于可以很方便的写出工作或者学习专属终端命令工具啦。</p><ul><li><h2 id="webassembly" tabindex="-1"><a class="header-anchor" href="#webassembly" aria-hidden="true">#</a> WebAssembly</h2></li></ul><p>WebAssembly是一种新的字节码格式，一个通用二进制、文本格式，这个项目由谷歌、火狐、苹果、微软几家大佬一起合作开发。不得不提一下，WebAssembly可以嵌入在已经开发好的js或者html中，比如项目中需要做动画或者压缩，这时候可以使用WebAssembly模块能给web应用增强类似本地的性能体验。</p><ul><li><h2 id="网络服务器类" tabindex="-1"><a class="header-anchor" href="#网络服务器类" aria-hidden="true">#</a> 网络服务器类</h2></li></ul><p>Rust有丰富的网络库能够编写web应用以及发起网络请求。如reqwest、flash、actix-web、rocket等。</p><ul><li><h2 id="嵌入式开发" tabindex="-1"><a class="header-anchor" href="#嵌入式开发" aria-hidden="true">#</a> 嵌入式开发</h2></li></ul><p>有了它，在stm32或者树莓派上写自己的定制os不再需要到处找镜像啦。</p><h1 id="rust适合哪些人群" tabindex="-1"><a class="header-anchor" href="#rust适合哪些人群" aria-hidden="true">#</a> rust适合哪些人群？</h1><p>适合那些希望能够编写C / C ++程序的人，但却发现这些语言无法接近。 同时Rust适合想要更高级语言的嵌入式程序员，但是需要编译成与C代码一样小和高效的代码。</p><h1 id="crates" tabindex="-1"><a class="header-anchor" href="#crates" aria-hidden="true">#</a> crates</h1><p>和其他语言如node的npm，Java中常用的maven，rust也自带了一个小巧而又实用的构建工具。crates.io 上拥有成千上万的软件包，您想要的解决方案在这里几乎都能找到。工欲善其事必先利其器，选择一个实用的库在项目架构中尤为重要，那么都有哪些实用的库呢，打字员备的妥妥的，咱下回再分解。</p><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><p>rust的发展趋势越来越好，与其他语言的优势也越来越明显。作为一门社区性项目，rust离不开使用者的反馈和建议，特别是刚孵化出来正在迅速成长的语言，随着社区的发展和完善，融合进来更多易用的特性，相信在不远的将来会有更多的人选择拥抱rust，开发出更简洁更高效的应用系统。</p><p>有兴趣的朋友可以在WX中关注「一名打字员」一起交流鸭。</p>', 18);
const _hoisted_21 = [
  _hoisted_1,
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_21);
}
const _043001_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "043001.html.vue"]]);
export {
  _043001_html as default
};
