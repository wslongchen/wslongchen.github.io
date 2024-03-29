import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, e as createStaticVNode } from "./app-588254f0.js";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "话不多说，我们今天正式开始我们的Rust之旅。老规矩，我们从HelloWorld开始。",
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
    /* @__PURE__ */ createBaseVNode("p", null, "本文首发公众号【一名打字员】")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createStaticVNode('<h1 id="何为helloworld" tabindex="-1"><a class="header-anchor" href="#何为helloworld" aria-hidden="true">#</a> 何为helloworld</h1><p>大部分打字员应该都知道这个，由来是因为《The C Programming Language》中使用它作为第一个演示程序，所以后来的打字员在学习编程或者设备调试时延续了之一习惯；也逐渐成为了一种传统一种仪式，在每学习一门新的语言时我们首先学会HelloWorld应用；也方便我们在初期对编程语言有一个粗略得了解，了解他的代码风格，语法结构等等。</p><h1 id="环境安装" tabindex="-1"><a class="header-anchor" href="#环境安装" aria-hidden="true">#</a> 环境安装</h1><p>工欲善其事，必先利其器；就像准备洗热水澡前需要提前准备热水一样（请忽略这个比喻），在使用Rust之前需要准备好相关得环境。这个不是本篇得重点，在官网上有很详细的列出了各个平台的安装步骤和教程，如果安装过程中遇到困难的朋友们请私聊打字员。</p><h1 id="一顿操作" tabindex="-1"><a class="header-anchor" href="#一顿操作" aria-hidden="true">#</a> 一顿操作</h1><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><p>我们需要为自己的一个项目新建一个目录，并新建一个名为<code>main.rs</code>的文件；rs后缀是Rust源文件特有命名，类似与<code>js</code>与<code>java</code>或者其他语言一样。值得一提得是rust的命名方式是下划线风格又称蛇形风格，比如通常命名为<code>hello_world.js</code>而不是<code>HelloWord.rs</code>。另外命名风格主流得还有驼峰等，每个语言都有各自得风格，这个需要我们慢慢习惯。</p><h2 id="编写并运行" tabindex="-1"><a class="header-anchor" href="#编写并运行" aria-hidden="true">#</a> 编写并运行</h2><p>到现在我们的目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>- project            // 工程目录\n- project / main.rs  // 主源文件\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们编辑<code>main.rs</code>文件，并输入以下代码。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token comment">/// main.js</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存回到我们的project目录，打开我们电脑的命令行窗口；定位到项目目录，然后输入<code>rustc main.rs</code>命令编译我们的程序代码，在这之前需要确保电脑上已经安装了Rust并加入了系统环境。这时候我们会发现在当前目录会产生一个可执行文件，如果你是<code>Linux</code>或<code>MacOs</code>平台，你可以输入<code>./main</code>运行；如果你是<code>Windows</code>平台，可以输入命令<code>.\\main.exe</code>执行该程序。</p><p>不出意外得是，我们都会在屏幕上都到一个同样的打印结果：<code>Hello, world!</code>。那么恭喜你，你现在已经是一名Rust打字员了。</p><h2 id="敲黑板" tabindex="-1"><a class="header-anchor" href="#敲黑板" aria-hidden="true">#</a> 敲黑板</h2><p>回过头来我们细品上面整个过程。首先大家通过上面不难发现这只是一个在屏幕上打印的得程序，这个简单的程序 中涉及到几个知识点：</p><ul><li>fn关键字 在Rust中定义函数的关键字是<code>fn</code>，通常的语法是：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn 方法名(参数名) {\n    \n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果方法有参数的话需要在括号中声明，然后函数体被包裹在花括号<code>{}</code>中；同时<code>main</code>是一个特殊的函数，在大多数语言中，它总是最先运行的代码。</p><ul><li>println!宏 宏的概念我们后面再解释，我们只需要知道<code>println!</code>调用了一个打印的宏，并将字符串<code>&quot;Hello, world&quot;</code>传递过去并打印在屏幕上。</li><li>rustc编译 和Ruby、Python、JavaScript等不一样的是，Rust得编译和运行是彼此独立的。在运行Rust程序之前我们必须先使用编译器对程序进行编译（<code>rustc</code>），然后得到一个二进制的可执行文件。这一点和C/C++或者Java等一样，需要进行预编译，可以将生产的可执行文件直接发给他人，并不需要运行时环境或者VM等。</li></ul><h1 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h1><p>忙活了一阵下来总算见到Rust的相关语法了，总体来说Rust的语法是和其他语言有很多相似的地方的，我们也开始迈出了走向Rust的第一步。每次旅程都有起点，让我们一起开始真正的踏上拥抱Rust的旅途吧！ 有兴趣的朋友们在WX中搜索【一名打字员】一起进行交流鸭！</p>', 22);
const _hoisted_25 = [
  _hoisted_1,
  _hoisted_2,
  _hoisted_3
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_25);
}
const _050401_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "050401.html.vue"]]);
export {
  _050401_html as default
};
