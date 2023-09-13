import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, e as createStaticVNode } from "./app-07b098a2.js";
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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>之前有基友说写的不够看，所以今天特意加餐说一下宏。之前的案例中有提到过可以使用<code>println!</code>宏进行打印。今天我们就简单来说说有关宏的几个方面：</p><ul><li>宏与函数的区别</li><li>如何定义声明式宏（元编程）</li></ul><h1 id="宏与函数的区别" tabindex="-1"><a class="header-anchor" href="#宏与函数的区别" aria-hidden="true">#</a> 宏与函数的区别</h1><p>宏其实就是我们通常所谓的元编程，在rust中使用宏来扩展生成比我们手写更多的代码。</p><p>大家应该知道元编程对于减少大量编写和维护的代码试非常有用的，但他又和函数有点区别，比如一个函数必须要声明它的参数个数和类型。但是宏只接受一个可变参数，而且可以在编译器翻译代码之前展开。这样就意味着我们想要实现一个宏比定义函数更加复杂，也更难理解和维护。</p><p>同时在rust中宏定义无法出现在模块命名空间，而且必须要在调用之前定义或者将其导入，而函数则可以在任意地方。</p><h1 id="声明式宏" tabindex="-1"><a class="header-anchor" href="#声明式宏" aria-hidden="true">#</a> 声明式宏</h1><p>我们可以使用<code>macro_rules!</code>来定义宏，这在Rust中使用的比较广泛。接下来我们介绍一下vector，这是rust中的一种集合类型。和数组不一样的是他存储在堆上，而且长度是动态增长的。而且vector是std中用泛型实现的，数组是原生内建的类型。具体有关vector的我们暂时不展开，我们只需要了解到可以使用<code>vec!</code>来生成一个给定值的vector。如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let v: Vec&lt;i32&gt; = vec![1, 2, 3];\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后我们移步<code>vec!</code>的实现，这是简化过的定义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#[macro_export]\nmacro_rules! vec {\n    ( $( $x:expr ),* ) =&gt; {\n        {\n            let mut temp_vec = Vec::new();\n            $(\n                temp_vec.push($x);\n            )*\n            temp_vec\n        }\n    };\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先我们看到的是一个注解，这个说明了该宏是可用的。然后<code>macro_rules!</code>定义了名字vec后面跟上大括号。然后就是<code>( $( $x:expr ),* )</code>，这句也就是一个模式（pattern），如果模式匹配了后面的相关代码就会执行。这和后面要说的match表达式的结构类似。然后，一对括号包含了全部模式。接下来是后跟一对括号的美元符号（ $ ），其通过替代代码捕获了符合括号内模式的值。$() 内则是 $x:expr ，其匹配 Rust 的任意表达式或给定 $x 名字的表达式。</p><p>$() 之后的逗号说明一个逗号分隔符可以有选择的出现代码之后，这段代码与在 $() 中所捕获的代码相匹配。紧随逗号之后的 * 说明该模式匹配零个或多个 * 之前的任何模式。</p><p>所以当 vec![1, 2, 3]; 调用宏时，$x 模式与三个表达式 1、2 和 3 进行了三次匹配。</p><p>就此打住，不然再讲下去打字员也是一脸懵逼了。</p><h1 id="自定义过程式宏" tabindex="-1"><a class="header-anchor" href="#自定义过程式宏" aria-hidden="true">#</a> 自定义过程式宏</h1><p>在rust中第二种形式的宏叫做过程式宏。接收rust代码作为输入，然后在代码上进行操作产生另外一些代码输出。由于篇幅较长而且打字员也需要补补课所以我们下次再介绍。</p><h1 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h1><p>看到这里，大家是不是回忆起了C语言中的宏，种个草慢慢去研究趴。</p>', 19);
const _hoisted_21 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_21);
}
const _051001_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "051001.html.vue"]]);
export {
  _051001_html as default
};
