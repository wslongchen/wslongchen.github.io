import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, f as createStaticVNode } from "./app-c3ba1599.js";
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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h1 id="简单说两句" tabindex="-1"><a class="header-anchor" href="#简单说两句" aria-hidden="true">#</a> 简单说两句</h1><p>对不住各位老铁了，年前说好要更几波JAVA的东西，又偷懒了，没办法，在这里用小锤锤偷偷锤了自己几下。由于工作原因，更新时间不定，各位老铁有问题可以私聊我哈。</p><p>对于初学者或者是正在向中高级的Java程序猿（打字员）来说，时刻梳理自己所掌握的知识是十分重要的，近期本打字员会整理一下关于J2EE下面的几种常用的设计模式，并逐个解析，希望大家能够一起巩固一下相关掌握的知识点。</p><h1 id="为什么要用设计模式" tabindex="-1"><a class="header-anchor" href="#为什么要用设计模式" aria-hidden="true">#</a> 为什么要用设计模式</h1><p>相信很多人都有这个疑问，有的人说在50万行以下的项目中，设计模式基本是没有用的。当然，除了让我们code显得更加专业之外，在自己所学习或者工作的项目中，适当合理的使用设计模式，能够给项目带来很大的好处。首先，使用了合理的模式，团队里进行沟通协作会很方便，交流成本有时候特别高，特别是在程序员之间。其次恰当的使用设计模式可以用以解决特定场景的问题的一系列方法，帮助我们改善系统的设计，增强系统的健壮性、可扩展性，为以后铺平道路。</p><p>最后用网络上的一句概括来说，设计模式（Designpattern）就是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。</p><h1 id="模式概览" tabindex="-1"><a class="header-anchor" href="#模式概览" aria-hidden="true">#</a> 模式概览</h1><p>在实际的学习或者工作中，大家或多或少的会接触或者使用一些Java的设计模式，在Java中存在23种设计模式，其图如下：</p><p><img src="https://segmentfault.com/img/bV5o5f?w=717&amp;h=697" alt="Java的23种设计模式"></p><p>其中主要分为三大类：</p><ul><li><h4 id="创建型模式" tabindex="-1"><a class="header-anchor" href="#创建型模式" aria-hidden="true">#</a> 创建型模式</h4></li><li><h4 id="结构型模式" tabindex="-1"><a class="header-anchor" href="#结构型模式" aria-hidden="true">#</a> 结构型模式</h4></li><li><h4 id="行为型模式" tabindex="-1"><a class="header-anchor" href="#行为型模式" aria-hidden="true">#</a> 行为型模式</h4></li></ul><p>在文末会贴出所有的设计模式，其中本打字员映象里自己常用的模式一般有：</p><ol><li>工厂模式、工厂方法模式、抽象工厂模式、单例模式等，这些都属于创建型模式。</li><li>观察者模式，模版模式，策略模式等，这些都属于行为型模式。</li><li>包装模式，适配器模式，组合模式，代理模式等，这些属于结构型模式。</li></ol><h1 id="六大原则" tabindex="-1"><a class="header-anchor" href="#六大原则" aria-hidden="true">#</a> 六大原则</h1><p>在学习使用设计模式的时候，我们需要了解这六大原则：</p><ul><li><h4 id="单一原则" tabindex="-1"><a class="header-anchor" href="#单一原则" aria-hidden="true">#</a> 单一原则</h4></li></ul><p>意思就是，我们在编写bug，不对，编写代码的时候在一个功能类中尽量负责单一的功能，这个功能应当尽量的烤炉周全，保持极致。</p><ul><li><h4 id="里氏替换原则" tabindex="-1"><a class="header-anchor" href="#里氏替换原则" aria-hidden="true">#</a> 里氏替换原则</h4></li></ul><p>这个原则可能大家乍一眼不怎么能够理解，与C#中里氏替换原则一致，这个意思就是一个子类能够替换父类并且能够正常的工作。有机智的童鞋要举手提问了，那Java中的多态会不会违背这种原则呢，其实不然。所谓的里氏替换原则就是让你的某一段程序耦合于基类或者接口，而不是具体继承了基类的子类或实现接口的具体类型。仅替换子类不会让你这个程序的属性有所改变。所谓多态机制，则是给了你达成上述原则的其中一种能力。</p><ul><li><h4 id="接口隔离原则" tabindex="-1"><a class="header-anchor" href="#接口隔离原则" aria-hidden="true">#</a> 接口隔离原则</h4></li></ul><p>这个应该比较好理解，见字如意。这个接口也叫做接口最小化原则，强调的是一个接口拥有的行为应该尽可能的小。</p><ul><li><h4 id="依赖倒置原则" tabindex="-1"><a class="header-anchor" href="#依赖倒置原则" aria-hidden="true">#</a> 依赖倒置原则</h4></li></ul><p>这个强调了高层模块不该依赖于低层模块，二者都应该依赖于抽象，抽象不应该依赖于细节，细节应该依赖于抽象。</p><ul><li><h4 id="迪米特原则" tabindex="-1"><a class="header-anchor" href="#迪米特原则" aria-hidden="true">#</a> 迪米特原则</h4></li></ul><p>也称最小知道原则，即一个类应该尽量不要知道其他类太多的东西，不要和陌生的类有太多接触。</p><ul><li><h4 id="开闭原则" tabindex="-1"><a class="header-anchor" href="#开闭原则" aria-hidden="true">#</a> 开闭原则</h4></li></ul><p>其实本打字员也对这个原则有点模糊，但是大体的意思就是一句话对修改关闭，对扩展开放。在网上浏览相关文章的时候提到过一句在大话设计模式中出现的总结，“用抽象构建框架，用细节实现扩展”。我想这句话也许是对整体的原则做出的最好的解释了吧。</p><h1 id="写在最后" tabindex="-1"><a class="header-anchor" href="#写在最后" aria-hidden="true">#</a> 写在最后</h1><p>说实话，本打字员也不知道自己何时放弃，会停止编程，会不再撸代码，因为这份工作对精神上的消耗确实很大。但是既然我们依然坚持在这个岗位上，我们就应该本着一名程序员的心态，去学习新的技术与知识，维护和巩固现有的知识点，为成为自己想象中的自己而努力吧。</p><p>附：</p><table><thead><tr><th>模式</th><th>名称</th><th>所属分类</th></tr></thead><tbody><tr><td>Abstract Factory</td><td>抽象工厂模式</td><td>创建型</td></tr><tr><td>Builder</td><td>建造模式</td><td>创建型</td></tr><tr><td>Factory Method</td><td>工厂方法模式</td><td>创建型</td></tr><tr><td>Prototype</td><td>原始模型模式</td><td>创建型</td></tr><tr><td>Singleton</td><td>单例模式</td><td>创建型</td></tr><tr><td>Adapter</td><td>适配器（变压器）模式</td><td>结构型</td></tr><tr><td>Bridge</td><td>桥梁模式</td><td>结构型</td></tr><tr><td>Composite</td><td>合成模式</td><td>结构型</td></tr><tr><td>Decorator</td><td>装饰模式</td><td>结构型</td></tr><tr><td>Facade</td><td>门面模式</td><td>结构型</td></tr><tr><td>Flyweight</td><td>享元模式</td><td>结构型</td></tr><tr><td>Proxy</td><td>代理模式</td><td>结构型</td></tr><tr><td>Chain Of Responsibility</td><td>责任链模式</td><td>行为型</td></tr><tr><td>Command</td><td>命令模式</td><td>行为型</td></tr><tr><td>Interpreter</td><td>解释器模式</td><td>行为型</td></tr><tr><td>Iterator</td><td>迭代子模式</td><td>行为型</td></tr><tr><td>Mediator</td><td>调停者模式</td><td>行为型</td></tr><tr><td>Memento</td><td>备忘录模式</td><td>行为型</td></tr><tr><td>Observer</td><td>观察者模式</td><td>行为型</td></tr><tr><td>State</td><td>状态模式</td><td>行为型</td></tr><tr><td>Strategy</td><td>策略模式</td><td>行为型</td></tr><tr><td>Template Method</td><td>模板方法模式</td><td>行为型</td></tr><tr><td>Visitor</td><td>访问者模式</td><td>行为型</td></tr></tbody></table>', 31);
const _hoisted_33 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_33);
}
const _121601_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "121601.html.vue"]]);
export {
  _121601_html as default
};
