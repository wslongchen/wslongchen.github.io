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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h1 id="简单说几句" tabindex="-1"><a class="header-anchor" href="#简单说几句" aria-hidden="true">#</a> 简单说几句</h1><p>今天打字员要给大家安利一门编程语言Rust，这是一门神奇的语言，能够帮助大家成功的寻找挫败感，本来很早就有和大家分享这个寻找挫败感的想法，无奈最近忙的不成人样，同时也沉浸在寻找Rust挫败感上无法自拔。所以今天特意把自己寻找挫败感1.0系列的第一部分分享给大家，希望能够帮助更多人能够更好的寻找挫败。</p><h1 id="看黑板" tabindex="-1"><a class="header-anchor" href="#看黑板" aria-hidden="true">#</a> 看黑板</h1><p>那么熟悉一名打字员的筒子们就要抬杠了，之前你才写了一个nodejs的入门到放弃的系列，然后还鸽子了设计模式剩下来的java实现系列，现在怎么又要安利这个叫Rust的不知道是哪旮旯里面蹦出来的野生语言，是不是又来坑我们这些高级程序员？相信有的同学对Rust也早有耳闻，毕竟最近几年stackoverflow上最受程序员欢迎的语言第二是python，其次是php，第一就是我们要说的Rust了。</p><h1 id="敲重点" tabindex="-1"><a class="header-anchor" href="#敲重点" aria-hidden="true">#</a> 敲重点</h1><p>现在让我们简单而又低调的介绍一下我们今天的主角，Rust是一门系统编程语言，专注于安全尤其是并发安全，支持函数式和命令式以及泛型等编程范式的多范式语言，语法和C++类似。最初是由Mozilla研究院的Graydon Hoare设计的，然后在Dave Herman, Brendan Eich以及很多其他人的贡献下逐步完善的。听完上面的介绍是不是心中对Rust的形象突然一下高大起来了，不得不承认，Rust是一门很优秀的编程语言，拥有极高的性能以及极低的入坑门槛，具体其他更多的优点我们后面再一个一个探究。</p><p>今天我们先说说何来之挫败感吧。</p><ol><li><p>处理应用程序依赖版本和依赖冲突所带来的挫败感 这方面对于习惯了用库管理以及构建工具的打字员来说感觉还好，gradle和npm等类似的已经深入人心了，所以这类挫败感可能相对而言比较低。</p></li><li><p>恶心的生命周期标注 Rust里面有生命周期这个概念，主要还是用来应对复杂类型系统中资源管理的问题，其中就会牵扯到很多复杂类型，另外还有Rust圣经中同时使用了泛型、特性、生命周期机制的程序，泛型、特性与生命周期协同作战，真可谓挫败感十足。</p></li><li><p>社区不完善 Rust现在虽然crate越来越多，但是生态环境以及社区相比较其他老牌语言而言还是有点薄弱，像我们这样的新人除了看文档之外，国内能和其他rust爱好者交流的平台比较少。</p></li><li><p>debug要了老命 这个就不说了，都是泪。</p></li></ol><h1 id="学霸说" tabindex="-1"><a class="header-anchor" href="#学霸说" aria-hidden="true">#</a> 学霸说</h1><p>很多年前谷歌的首席架构师曾说过:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>选择一种语言时，所考虑的不仅仅是一系列技术上的权衡，而是在选择一个社群。这就像选择一个酒吧。你希望去一个提供美酒的酒吧，但是美酒不是最重要的。主要是那个酒吧里都有什么样的人，他们在谈论些什么。选择计算机语言也是这样的。时间一长，就这门语言也形成了一个社群，社群里不仅仅有人群，还有他们的软件成果，如工具、库等。这就是有些理论上看起来更好的语言无法成功的原因，他们无法在周围构建成功的社群。学习一种新语言的时候，要利用以前所学的语言的功底，但是也要保持开放的心态。有些人执著于一种理念：“这就是写所有程序必须遵循的方法。”我不说是哪种语言，但是某些语言，出于某种原因，令人执著于这样的理念。当他们开始学习新的语言的时候，他们批评这种语言跟真正的神的语言的所有不同之处。当他们使用新的语言时，他们极力使用真正的神的语言的方法去写。这样，你就会错过这个新语言真正的独特之处。你在生活中看到的很多东西，不管是架构上的，即建筑物构建的方法，还是在语言上的，即人们进行沟通的方法，很多思想都是可以借用的。当然包括数学。数学和编程相当类似。所以要睁大双眼，积极地吸收重组各种思想，这样做绝对错不了。\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后" aria-hidden="true">#</a> 写在最后</h1><p>rust的优势有很多，其实对我来说，rust把c++的智能指针变成rust的基本类型。变量会有一个所有权，不用智能指针的话，就只能借用。引入了模块管理系统，十分的灵活，最重要的一点，写个小项目终于不用写makefile了。有兴趣的朋友可以在WX中关注「一名打字员」一起交流鸭。</p>', 13);
const _hoisted_15 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_15);
}
const _042801_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "042801.html.vue"]]);
export {
  _042801_html as default
};
