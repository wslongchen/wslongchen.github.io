import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, e as createStaticVNode } from "./app-335ca978.js";
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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h1 id="简单说几句" tabindex="-1"><a class="header-anchor" href="#简单说几句" aria-hidden="true">#</a> 简单说几句</h1><p>说起这个单例，简直是人名中的张伟、代码圈中的八阿哥，已经被广泛的所使用。但是你真的会单例么？来我们拭目以待吧。</p><h1 id="各种写法" tabindex="-1"><a class="header-anchor" href="#各种写法" aria-hidden="true">#</a> 各种写法</h1><p>单例的写法有很多，相信大家都知道的应该是饿汉与饱汉式。</p><ul><li><h3 id="饿汉式" tabindex="-1"><a class="header-anchor" href="#饿汉式" aria-hidden="true">#</a> 饿汉式</h3></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>  \n    \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  \n        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>  \n    <span class="token punctuation">}</span>  \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所谓饿汉式，就是饿了太久了，上来就开始吃。这种方式在这个类加载的时候就创建了实例，方便我们可以在其他地方直接使用，但是缺点就是不管有没有用到这个类的方法，他都会创建，会造成不必要的开销。</p><ul><li><h3 id="饱汉式" tabindex="-1"><a class="header-anchor" href="#饱汉式" aria-hidden="true">#</a> 饱汉式</h3></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> instance <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  \n        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">==</span> instance<span class="token punctuation">)</span><span class="token punctuation">{</span>  \n            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n        <span class="token punctuation">}</span>  \n        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>  \n    <span class="token punctuation">}</span>  \n<span class="token punctuation">}</span>  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>显而易见，饱汉式与饿汉式刚好对立，一个饿太久了，上来就吃，一个没吃就吃、吃饱了就不吃了。在需要获取实例的时候才回去创建新的对象，在我们使用频率比较少的时候以及创建一次实例需要消耗比较大的资源时，推荐使用这种方式。</p><ul><li><h3 id="双重检查锁" tabindex="-1"><a class="header-anchor" href="#双重检查锁" aria-hidden="true">#</a> 双重检查锁</h3></li></ul><p>但是，与饿汉式不会存在多线程创建多个实例不同的是，饱汉式无法保证线程安全，可能会导致多个线程使用创建多个实例，机智的我们肯定会加上一个同步锁，但是这样效率肯定就不行了。因为每次调用生成实例的话都需要在同步那里进行等待，所以，就出现了双重检查锁。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span><span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n     \n    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n     \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">if</span><span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                <span class="token keyword">if</span><span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                    singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>    \n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><h3 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h3></li></ul><p>先贴上代码：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>\n    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Holder</span> <span class="token punctuation">{</span>\n        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n     \n    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n         \n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token class-name">Holder</span><span class="token punctuation">.</span>singleton<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的方法，既保证了线程的安全，也能按需加载，貌似看起来是最优的方法了。</p><ul><li><h3 id="枚举" tabindex="-1"><a class="header-anchor" href="#枚举" aria-hidden="true">#</a> 枚举</h3></li></ul><p>相信很多打字员都应该知道还有一种很优雅的写法，就是枚举。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>\n\n    <span class="token constant">INSTANCE</span><span class="token punctuation">;</span>\n    \n    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n    \n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">return</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    \n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这种方法本打字员是在Effective Java中了解到了，之前还真的没了解过，而且在书中推荐的就是这种写法，原因是Prevent reflection forcibly call the constructor，意思差不多就是防止反射强行调用构造器吧。</p><h1 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后" aria-hidden="true">#</a> 写在最后</h1><p>本打字员觉得，单例模式实在是所有模式中用情最专一的模式了，知道为什么吗，因为使用了它以后，你一生只能而且只会拥有一个对象了！</p>', 23);
const _hoisted_25 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_25);
}
const _040901_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "040901.html.vue"]]);
export {
  _040901_html as default
};
