import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, e as createStaticVNode } from "./app-588254f0.js";
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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>今天我们来介绍Rust中一个重要的神器：Cargo，它是Rust中用来构建系统和管理相关依赖包的工具。之前我们也提过可以使用Cargo来处理代码构建、依赖下载等等。</p><h1 id="构建项目" tabindex="-1"><a class="header-anchor" href="#构建项目" aria-hidden="true">#</a> 构建项目</h1><p>还记得上一次我们新建的HelloWorld程序么，我们需要手工新建目录和源文件。接下来我们使用Cargo来进行创建，看看有啥不一样的地方。</p><p>在这之前我们需要确认安装了Cargo，可以输入<code>cargo --version</code>来检查是否安装Cargo。</p><p>然后我们进入项目目录，输入以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">cargo</span> new hello_world\n$ <span class="token builtin class-name">cd</span> hello_world\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令新建了一个hello_world的项目，我们进入该目录会发现Cargo生产了两个文件和一个目录，整体结构如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- src\n- src/main.rs\n- Cargo.toml\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们打开Cargo.toml文件，</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token punctuation">[</span>package<span class="token punctuation">]</span>\nname <span class="token operator">=</span> <span class="token string">&quot;hello_world&quot;</span>\nversion <span class="token operator">=</span> <span class="token string">&quot;0.1.0&quot;</span>\nauthors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;mrpan &lt;1049058427@qq.com&gt;&quot;</span><span class="token punctuation">]</span>\nedition <span class="token operator">=</span> <span class="token string">&quot;2018&quot;</span>\n\n<span class="token punctuation">[</span>dependencies<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是Cargo配置文件的格式，类似的如npm的package.json文件一样。配置了项目的名称、版本、作者以及依赖等。</p><p>然后我们打开src目录下的main.rs文件看看。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {\n    println!(&quot;Hello, world!&quot;);\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是看起来很熟悉，这不就是上次我们刚学的程序嘛。Cargo为我们默认生产了一个程序，唯一的区别就是Cargo将源文件放入了src目录，这样有助于保持项目整洁、干净。</p><h2 id="运行" tabindex="-1"><a class="header-anchor" href="#运行" aria-hidden="true">#</a> 运行</h2><p>那我们开始运行Cargo项目，只需要输入<code>cargo build</code>构建项目。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cargo build\n   Compiling hello_world v0.1.0 (file:///projects/hello_cargo)\n    Finished dev [unoptimized + debuginfo] target(s) in 2.85 secs\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令和上次的rustc命令效果一样，同样会生成一个可执行文件。不同的是Cargo会新建一个target目录，我们可以的target中的debug目录下找到这个文件。为什么在debug目录下，因为默认是开发环境，经常需要快速重新构建，当我们已经测试完所有的代码，我们可以使用<code>cargo build --release</code>来优化编译项目。</p><p>然后我们回到项目根目录，使用<code>cargo run</code>命令开始运行项目：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ cargo run\n   Compiling hello_world v0.1.0 (file:///projects/hello_cargo)\n    Finished dev [unoptimized + debuginfo] target(s) in 0.33 secs\n     Running `target/debug/hello_cargo`\nHello, world!\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到同样的输出，我们激动的抹上眼泪。</p><h1 id="下课" tabindex="-1"><a class="header-anchor" href="#下课" aria-hidden="true">#</a> 下课</h1><p>不难发现，Cargo真的是一个很好的助手，它能够帮助我们更好的管理项目，特别是项目越来越大，依赖的crate库越来多，把它交给Cargo将会变的十分简单。</p><p>所以我们已经知道了如何使用Cargo来构建应用了，打字员们可以在下方以及WX搜索【一名打字员】留言自己的相关问题哟。</p>', 24);
const _hoisted_26 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_26);
}
const _050501_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "050501.html.vue"]]);
export {
  _050501_html as default
};
