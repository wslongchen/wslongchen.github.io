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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<p>算起来，从真正开始用<code>Rust</code>进行项目开发已经快一年了，对Rust也愈发青睐；在这过程中踩了很多坑，由于<code>Rust</code>的变态也不得不恶补了很多被废弃的知识；当然对计算机的理解也更深了，头发自然也越发稀疏了。</p><h1 id="圆-规正传" tabindex="-1"><a class="header-anchor" href="#圆-规正传" aria-hidden="true">#</a> ”圆“规正传</h1><p>今天给大家分享一个自己的一个<code>crate</code>，因为近几年转<code>Rust</code>的小伙伴越来越多，很多都是从<code>Java</code>岗转的，他们转过来的第一件事就是疯狂的寻找一个好用的ORM框架，但是<code>Rust</code>中目前比较好用的相关数据库框架有<code>diesel</code>、<code>sqlx</code>等，基本上都能满足日常的工作需求。为了方便更多小伙伴过渡<code>Rust</code>，就手撸了一个小框架，参考<code>MyBatisPlus</code>的相关API，相信只要用过该框架的小伙伴应该基本可以无缝过渡。目前已经过渡到0.2.0版本，基本上更新还是比较频繁，因为前期想法比较多，也没有一个固定的方向所以经常推翻重来。</p><p>这个crate叫做<code>akita</code>，翻译过来就是秋田犬的意思，也代表了呆萌可爱的意思。基本的实现思路就是通过<code>Rust</code>的过程宏来完成对数据库表结构的映射，然后封装了一些便捷的<code>SQL</code>组装的工具方法。目前项目暂时只支持<code>MySQL</code>，所使用的线程池为<code>r2d2</code>，即将计划支持<code>ClickHouse</code>、<code>SQLite</code>、<code>MSSQL</code>、<code>ORACLE</code>等数据库。</p><h1 id="直接开码" tabindex="-1"><a class="header-anchor" href="#直接开码" aria-hidden="true">#</a> 直接开码</h1><p>话不多说咱直接码，好不好用咱用一个试试。首先添加依赖，现在目前版本在0.2.4。</p><div class="language-toml line-numbers-mode" data-ext="toml"><pre class="language-toml"><code><span class="token punctuation">[</span><span class="token table class-name">dependencies</span><span class="token punctuation">]</span>\n\n<span class="token comment"># The core APIs, including the Table traits. Always</span>\n<span class="token comment"># required when using Akita. using #[derive(Table)] </span>\n<span class="token comment"># to make Akita work with structs defined in your crate.</span>\n<span class="token key property">akita</span> <span class="token punctuation">=</span> <span class="token punctuation">{</span> <span class="token key property">version</span> <span class="token punctuation">=</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先我们定义一个结构体<code>SystemUser</code>，<code>Akita</code>提供了三个trait，分别是<code>FromAkita</code>、<code>ToAkita</code>还有<code>Table</code>，主要是用来解析结构体的字段结构以及生成基本的CRUD成员方法。另外提供了<code>table</code>注解用来标注数据库表名，<code>field</code>和<code>table_id</code>标注列名和主键，分别都有name属性，同时保留了<code>MyBatisPlus</code>中的exist属性。</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>\n<span class="token attribute attr-name">#[derive(Debug, FromAkita, ToAkita, Table, Clone)]</span>\n<span class="token attribute attr-name">#[table(name=<span class="token string">&quot;t_system_user&quot;</span>)]</span>\n<span class="token keyword">struct</span> <span class="token type-definition class-name">SystemUser</span> <span class="token punctuation">{</span>\n    <span class="token attribute attr-name">#[field = <span class="token string">&quot;name&quot;</span>]</span>\n    id<span class="token punctuation">:</span> <span class="token class-name">Option</span><span class="token operator">&lt;</span><span class="token keyword">i32</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>\n    <span class="token attribute attr-name">#[table_id]</span>\n    username<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">,</span>\n    <span class="token attribute attr-name">#[field(name=<span class="token string">&quot;ages&quot;</span>, exist = <span class="token string">&quot;false&quot;</span>)]</span>\n    age<span class="token punctuation">:</span> <span class="token keyword">i32</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来来来，<code>Akita</code>中提供了两个公共的管理器，<code>AkitaManager</code>和<code>AkitaEntityManager</code>，前者主要封装了一些原始的SQL操作，后者则加入了比较完整的API，同时在结构体中也实现了这些API。我们以CRUD操作举例：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code>\n<span class="token keyword">use</span> <span class="token namespace">akita<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>\n<span class="token keyword">use</span> <span class="token namespace">akita<span class="token punctuation">::</span>prelude<span class="token punctuation">::</span></span><span class="token operator">*</span><span class="token punctuation">;</span>\n\n<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> pool <span class="token operator">=</span> <span class="token class-name">Pool</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token class-name">AkitaConfig</span><span class="token punctuation">{</span> max_size<span class="token punctuation">:</span> <span class="token class-name">None</span><span class="token punctuation">,</span> url<span class="token punctuation">:</span> <span class="token class-name">String</span><span class="token punctuation">::</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token string">&quot;mysql://root:password@localhost:3306/akita&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> log_level<span class="token punctuation">:</span> <span class="token class-name">None</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unwrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> em <span class="token operator">=</span> pool<span class="token punctuation">.</span><span class="token function">entity_manager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;must be ok&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token class-name">SystemUser</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">.</span><span class="token function">into</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> username<span class="token punctuation">:</span> <span class="token string">&quot;fff&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> age<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 新增</span>\n    <span class="token keyword">match</span> em<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">/// 结构体示例</span>\n    <span class="token keyword">match</span> user<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> em<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 删除</span>\n    <span class="token keyword">match</span> em<span class="token punctuation">.</span><span class="token function">remove_by_id</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SystemUser</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">.</span><span class="token function">to_string</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 修改</span>\n    <span class="token keyword">match</span> em<span class="token punctuation">.</span><span class="token function">update_by_id</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 查询分页</span>\n    <span class="token keyword">let</span> <span class="token keyword">mut</span> wrapper <span class="token operator">=</span> <span class="token class-name">UpdateWrapper</span><span class="token punctuation">::</span><span class="token function">new</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    wrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ussd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">match</span> em<span class="token punctuation">.</span><span class="token function">page</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SystemUser</span><span class="token punctuation">,</span> <span class="token class-name">UpdateWrapper</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> wrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token comment">// 查询单条</span>\n    <span class="token keyword">match</span> em<span class="token punctuation">.</span><span class="token function">select_one</span><span class="token punctuation">::</span><span class="token operator">&lt;</span><span class="token class-name">SystemUser</span><span class="token punctuation">,</span> <span class="token class-name">UpdateWrapper</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&amp;</span><span class="token keyword">mut</span> wrapper<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Ok</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n        <span class="token class-name">Err</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token punctuation">...</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看完是不是很感动，对于手写了大半年SQL的我，简直是个福音...另外性能方面的话还有很多我们正在优化，比如大数据量的分页以及相关慢SQL的拦截以及一些其他的优化。</p><h1 id="计划" tabindex="-1"><a class="header-anchor" href="#计划" aria-hidden="true">#</a> 计划</h1><p>项目目前只有几个人进行维护，所以未来更新速度并不会很快，我们也会在生产上使用这个框架，逐步的去优化。未来我们计划做的事：</p><ul><li>支持<code>ORACLE</code>、<code>ClickHouse</code>、<code>SQLite</code>、<code>MSSQL</code>多个feature</li><li>强化注解，增加配置映射，支持更多自定义的注解</li><li>支持更多数据结构，优化内部参数处理</li><li>完善自动代码生成工具，减少重复工作</li></ul><h1 id="码完跑路-偷懒" tabindex="-1"><a class="header-anchor" href="#码完跑路-偷懒" aria-hidden="true">#</a> 码完跑路（偷懒）</h1><p>所以接下来就是你们的时间了，该抄的抄，该溜的溜了。（逃</p>', 17);
const _hoisted_19 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_19);
}
const _081601_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "081601.html.vue"]]);
export {
  _081601_html as default
};
