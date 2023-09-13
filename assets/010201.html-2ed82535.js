import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode } from "./app-a78375d3.js";
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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>入门到放弃之node系列终于新鲜出炉了，这个系列覆盖了从基础到进阶的基本知识与方向，适合入门的打字员们，系列结束后你可以建立一个自己的网站，写一个自己的服务端应用或者更多。系列中大都是打字员们口口相传的言论，不代表官方观点。</p><p>本系列环境 <code>MAC OS 10.12.6</code>,<code>node v8.0</code>,<code>npm 5.0.4</code>.</p><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3>', 4);
const _hoisted_6 = {
  href: "https://en.wikipedia.org/wiki/Node",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = /* @__PURE__ */ createStaticVNode('<p>大家只需要知道基于node，可以轻松的写出高性能的WEB服务器，也能够写出提高工作效率的工具，实在是前端人员的福音。</p><h3 id="npm" tabindex="-1"><a class="header-anchor" href="#npm" aria-hidden="true">#</a> NPM</h3><p>在进行下一步之前不得不介绍一下npm，node拥有一个强大的生态圈，npm则是全球最大的开源库生态系统。它是一个包管理器，能在代码部署上解决很多问题。 通常我们可以这样使用NPM。</p><ol><li><p>下载别人开源的第三方包到本地使用。</p></li><li><p>将自己编写的包开源供别人使用。</p></li></ol><p>我们可以通过<code>nom install argv</code>来安装node应用中所需要的模块。使用<code>npm init</code>初始化项目。</p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>', 6);
const _hoisted_13 = {
  href: "http://nodejs.cn",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_14 = /* @__PURE__ */ createStaticVNode('<p>当我们输入<code>node -v</code>能够打印出node的对应版本信息时，代表已经成功安装node。</p><h3 id="helloword" tabindex="-1"><a class="header-anchor" href="#helloword" aria-hidden="true">#</a> HelloWord</h3><p>是的，令人激动的helloword要开始了，每当我们接触到新的语言时，我们通常写的第一段代码就是HelloWord。我们下载好node之后如何运行呢，我们可以新建一个js文件，在里面写上以下内容：</p><p><img src="https://segmentfault.com/img/bVYYoV?w=570&amp;h=390" alt="clipboard.png"></p><p>运行<code>node helloword.js</code><img src="https://segmentfault.com/img/bVYYo7?w=558&amp;h=28" alt="clipboard.png"></p><p>是不是看到了熟悉的Hello Word。 是的，你没有看错，这就是你熟悉的js语法，和你平常写的代码一毛一样，但是你却可以直接使用命令交互模式调试js代码片段。这样无论你是前端写写js特效、flash写脚本效果、untity3D脚本游戏打字员（请允许我这么称呼）或者其它打字员，你都可以方便的使用起来。 ￼</p><h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3><p>学习node我们需要掌握以下几个概念：</p><ol><li>模块 通常我们写的应用程序都会比较大，我们会将其进行模块化，在node中我们可以将代码进行整理，放在不同的文件中，每一个文件就是一个模块，路径名称就是模块名。我们可以使用<code>require</code>来导入其它模块，也可以使用ES2015的语法<code>import</code>。如下所示：</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> func1<span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./func&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> func2 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./func.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> func3 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;/home/mrpan/func&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">var</span> func4 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;/home/mrpan/func.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//当然我们也可以这样引入一个json文件</span>\n<span class="token keyword">var</span> data <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;./data.json&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常我们可以使用<code>export</code>来到出一个模块对象的公有方法和属性，下面我们把刚才的helloword方法导出一下。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>exports<span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常我们使用<code>module</code>对象可以访问到当前模块的一些相关信息，但它最多的用途是替换当前模块的导出对象。如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.包 从上面的知识我们大概知道了node里面模块就是一个个的js，然后多个模块则组成了一个包。在一个包的所有子模块中，通常我们需要一个入口模块，入口模块的导出对象被作为包的导出对象。如下图，则是一个标准的node程序模块图：</p><p><img src="https://segmentfault.com/img/bVYYIp?w=472&amp;h=195" alt="clipboard.png"></p><p>其中index.js则是入口文件。另外，当模块的文件名是index.js，加载模块时可以使用模块所在目录的路径代替模块文件路径。如果想自定义入口模块的文件名和存放位置，就需要在包目录下包含一个package.json文件，并在其中指定入口模块的路径。 其内容一般如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;helloword&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1.0.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node test&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;main&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./index.js&quot;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>工程目录 看完上面的童鞋一定已经被绕晕了，完全不知道我们的工程目录结构一般到底是咋样得了。在这里重申一次，一个简单明了的目录，能够帮助开发人员更方便的阅读源码。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- /home/user/workspace/node-echo/   # 工程目录\n    - bin/                          # 存放命令行相关代码\n        node-echo\n    + doc/                          # 存放文档\n    - lib/                          # 存放API相关代码\n        echo.js\n    - node_modules/                 # 存放三方包\n        + argv/\n    + tests/                        # 存放测试用例\n    package.json                    # 元数据文件\n    README.md                       # 说明文件\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h3><p>通过上面的文章，大家应该已经知道了基础的node知识，以及能够编写并执行简单的应用了。接下来希望想学的童鞋们赶紧去恶补一下js的基础语法，下一次我们将会讲述在node中的网络操作。</p><p>另外，有童鞋问本猿有没有做过什么应用可以开源出来让大家学习的，在这里贴出两个项目:</p>', 23);
const _hoisted_37 = {
  href: "https://github.com/wslongchen/fullstack-api",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_38 = {
  href: "https://github.com/wslongchen/webwx-api",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("众所周知Node.js是一个基于V8引擎的JavaScript运行环境，由Ryan Dahl开发。它使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。关于node的详细在这里就不做多的介绍，大家可以在"),
      createBaseVNode("a", _hoisted_6, [
        createTextVNode("wiki"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("或者在搜索引擎中查看更多详细介绍。")
    ]),
    _hoisted_7,
    createBaseVNode("p", null, [
      createTextVNode("关于node的安装这里不多费口舌，我们可以进入node的"),
      createBaseVNode("a", _hoisted_13, [
        createTextVNode("中文官网"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("下载最新版本，然后进行安装。MAC中一般会自带node环境，Linux和Windows下均需要自行下载编译安装。")
    ]),
    _hoisted_14,
    createBaseVNode("ol", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_37, [
          createTextVNode("FullStack"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" --基于node.js的express模块编写的全干社区 原本是想做一个社区的，现在暂时用来做个人网站.")
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_38, [
          createTextVNode("webwx-api"),
          createVNode(_component_ExternalLinkIcon)
        ]),
        createTextVNode(" -- 网页版的微信API（node版）")
      ])
    ])
  ]);
}
const _010201_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "010201.html.vue"]]);
export {
  _010201_html as default
};
