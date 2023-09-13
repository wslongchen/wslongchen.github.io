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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h1 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h1><p>作为一名全干打字员，干活时经常会被要求使用各种各样的语言去实现各种各样的需求，来回切换起来写的代码就会或多或少有点不规范。今天我们以JAVA为例，讲讲在代码中，我们需要注意的某些规范。（本文标准依赖于阿里巴巴的JAVA开发代码规范）</p><h1 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h1><p>以下举出本猿在工作中常常出现的问题，包括但不仅限于：</p><ul><li>逻辑判断语句</li></ul><p>在 <code>if/else/for/while/do</code> 语句中必须使用大括号，即使只有一行代码，避免使用下面的形式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>condition<span class="token punctuation">)</span> statements<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>属性copy</li></ul><p>很多童鞋喜欢使用 <code>Apache Beanutils</code> 进行属性的copy， <code>Apache BeanUtils</code> 性能较差，我们应该尽量避免使用,可以使用其他方案比如 <code>Spring BeanUtils</code> , <code>Cglib BeanCopier</code> 。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TestObject</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">TestObject</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\na<span class="token punctuation">.</span><span class="token function">setX</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">getX</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\na<span class="token punctuation">.</span><span class="token function">setY</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">getY</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>覆写方法</li></ul><p>所有的覆写方法，都必须要加上 <code>@Override</code> 注解。</p><ul><li>类方法命名</li></ul><p>方法名、参数名、成员变量、局部变量都应该统一使用 <code>lowerCamelCase</code> ，类名使用 <code>UpperCamelCase</code> 风格，遵从驼峰命名的标准，尽量避免如 <code>_</code> <code>-</code>等字符连接,但以下情形例外：（领域模型的相关命名）DO / BO / DTO / VO / DAO。另外，类都应该加上创建者的信息，方法名也应该加上对应的参数及用途说明。</p><p>常量命名应该全部大写，但此间使用下划线隔开，力求语义表达完整清楚，不要嫌名字长。</p><ul><li>Random实例</li></ul><p>首先 <code>Random</code> 示例包括 <code>java.util.Random</code> 或者 <code>Math.random()</code>，我们应该避免其被多线程使用，虽然共享该实例是线程安全的，但会因竞争统一 <code>seed</code> 导致性能下降。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">ThreadFactory</span> namedThreadFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadFactoryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNameFormat</span><span class="token punctuation">(</span><span class="token string">&quot;demo-pool-%d&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token class-name">ExecutorService</span> singleThreadPool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">MILLISECONDS</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">,</span> namedThreadFactory<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>AbortPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    singleThreadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    singleThreadPool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>+字符串拼接</p><p>在循环体内，我们应当使用 <code>StringBuilder</code> 的 <code>append</code> 方法进行字符串的连接。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>反例:\n    String result;\n    for (String string : tagNameList) {\n        result = result + string;\n    }   \n正例:\n    StringBuilder stringBuilder = new StringBuilder();\n    for (String string : tagNameList) {\n        stringBuilder.append(string);\n    }\n    String result = stringBuilder.toString();   \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>equals判断</li></ul><p>很多人喜欢使用下面的代码进行 <code>equals</code> 判断是否为某个值：</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>public static final String type = &quot;FOOD&quot;;\nif(Object.equals(type)){\n    //do something\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象中的equals很容易抛空指针异常，所以我们应该尽量使用常量或者确定有值的对象来调用equals。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>public void f(String str){\n        String inner = &quot;hi&quot;;\n        if(inner.equals(str)){\n            System.out.println(&quot;hello world&quot;);\n        }\n    }\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>集合初始化</li></ul><p>我们往往在集合初始化的时候忘记指定集合的初始值大小，在高并发的情况下，这样很可能会造成内存的使用不当引起一系列的问题。所以在使用诸如 <code>HashMap</code> 的时候尽量指定初始值的大小。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>反例:   \n   Map&lt;String, String&gt; map = new HashMap&lt;String, String&gt;();   \n正例: \n   Map&lt;String, String&gt; map = new HashMap&lt;String, String&gt;(16);   \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>注释</li></ul><p>方法内部应当使用单行注释，在被注释语句的上方另起一行，使用 <code>//</code> 进行注释，多行注释则使用 <code>/* */</code> ，强迫症下应注意与代码对齐。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>public void method() {\n        // Put single line comment above code. (Note: align &#39;//&#39; comment with code)\n        int a = 3;\n    \n        /**\n        * Some description about follow code. (Note: align &#39;/**&#39; comment with code)\n        */\n        int b = 4;\n    } \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Switch语句</li></ul><p>在每一个switch块内，每一个case都必须通过 <code>break/return</code> 来终止或者是注释说明程序继续执行到某一个case为止，并且都应该包含一个 <code>default</code> 语句放在最后，即便没有代码。</p><div class="language-JAVA line-numbers-mode" data-ext="JAVA"><pre class="language-JAVA"><code>switch( x ){\n        case 1 :\n        break ;\n        case 2 :\n        break ;\n        default :\n    }  \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h1><p>虽然我们往往写出的代码可能不是很高效、简洁，但是我们一定注意代码的可读性，毕竟代码除了机器看之外，也是给人看的。</p><h1 id="福利" tabindex="-1"><a class="header-anchor" href="#福利" aria-hidden="true">#</a> 福利</h1><p>送福利送福利啦，本猿最近获得了三张 <code>5QB</code> 的抵用卷，本着蚊子再小也是肉的原则，把它送给在公众号上留言的前三位童鞋，留言的前三位童鞋看到后记得在后台留下QQ号联系打字员大大领取福利哟~</p>', 39);
const _hoisted_41 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_41);
}
const _010101_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "010101.html.vue"]]);
export {
  _010101_html as default
};
