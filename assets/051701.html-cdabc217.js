import{_ as n,o as s,c as a,d as e}from"./app-39c5096f.js";const c={},t=e(`<p>早些时候又被朋友怼了，产出太慢，今天继续接上回说到的自定义宏。</p><h1 id="直接开码" tabindex="-1"><a class="header-anchor" href="#直接开码" aria-hidden="true">#</a> 直接开码</h1><p>话不多说咱直接开码，我们<code>cargo new my_macro</code>创建一个包。然后修改<code>main.rs</code>：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">extern</span> <span class="token keyword">crate</span> <span class="token module-declaration namespace">my_macro</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[macro_use]</span>
<span class="token keyword">extern</span> <span class="token keyword">crate</span> <span class="token module-declaration namespace">my_macro_derive</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token namespace">my_macro<span class="token punctuation">::</span></span><span class="token class-name">MyMacro</span><span class="token punctuation">;</span>

<span class="token attribute attr-name">#[derive(MyMacro)]</span>
<span class="token keyword">struct</span> <span class="token type-definition class-name">Coder</span><span class="token punctuation">;</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Corder</span><span class="token punctuation">::</span><span class="token function">my_macro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>来来来，我们<code>康康</code>上面的代码，我们看到了<code>#[macro_use]</code>的语法，这是一个注解，可以使被注解的模块重的宏应用到当前的作用域。同样下面的我们又看到一个注解<code>#[derive(MyMacro)]</code>，这个则是用来得到一个hello_macro函数的默认实现，也就是会生成对应的代码，然后再main里面尝试调用这个方法。</p><p>那么现在我们就要定义MyMacro这个trait（类似接口，我们后面再聊，嘤嘤嘤）了，我们需要新建一个库。可以使用以下命令<code>cargo new my_macro --lib</code>，然后编辑生成的lib.rs文件</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">pub</span> <span class="token keyword">trait</span> <span class="token type-definition class-name">MyMacro</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">my_macro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>怎么样，看着语法格式是不是就是一个接口；pub是rust中的关键字，表示这个trait是公开其他域可以访问的。 有了接口之后我们就要实现它对应的功能行为，那么我们希望这个接口打印一段话；我们可以这样修改：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">extern</span> <span class="token keyword">crate</span> <span class="token module-declaration namespace">my_macro</span><span class="token punctuation">;</span>

<span class="token keyword">use</span> <span class="token namespace">my_macro<span class="token punctuation">::</span></span><span class="token class-name">MyMacro</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token type-definition class-name">Coder</span><span class="token punctuation">;</span>

<span class="token keyword">impl</span> <span class="token class-name">MyMacro</span> <span class="token keyword">for</span> <span class="token class-name">Coder</span> <span class="token punctuation">{</span>
    <span class="token keyword">fn</span> <span class="token function-definition function">my_macro</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;热点1:P照片是网红的基本素养&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;热点2:极限挑战&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;热点1:大家还是要坚持戴口罩&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">fn</span> <span class="token function-definition function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Corder</span><span class="token punctuation">::</span><span class="token function">my_macro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们可以任性的给任何想使用我们的my_macro的类型实现这个代码块啦，这样可以节约一部分工作。但是这样还不行，rust这个小伙子没有反射这个功能，所以他就没办法再运行的时候获取类型名，我们刚刚想偷懒的那部分就不行了，所以我们还需要一个再运行时生产代码的宏。我们习惯性的会在名字后面带上<code>xxx_derive</code>来表明这是一个自定义的过程式宏包。<code>cargo new my_macro_derive --lib</code></p><p>这两个lib息息相关，所以再同一个目录下创建是最好不过的事情，而且必须要同时加入依赖，发布的时候也得一起发布。然后我们需要将 my_macro_derive 声明为一个过程式宏的包。同时也需要 syn 和 quote 包中的功能，也需要将其加到依赖中。为 my_macro_derive 将下面的代码加入到 Cargo.toml 文件中， 注意是my_macro_derive包的配置哟。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[lib]
proc-macro = true

[dependencies]
syn = &quot;*&quot;
quote = &quot;*&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改完配置我们需要编辑my_macro_derive的lib.rs文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>extern crate proc_macro;
extern crate syn;
#[macro_use]
extern crate quote;

use proc_macro::TokenStream;

#[proc_macro_derive(MyMacro)]
pub fn my_macro_derive(input: TokenStream) -&gt; TokenStream {
    let s = input.to_string();

    let ast = syn::parse_derive_input(&amp;s).unwrap();

    let gen = impl_hello_macro(&amp;ast);

    gen.parse().unwrap()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重头戏来了，这段代码可算是有点看头了。刚刚我们新加的包是用来干啥的呢，<code>proc_macro</code> 可以将 Rust 代码转换为相应的字符串。<code>syn</code> 则将字符串中的Rust代码解析成为一个可以操作的数据结构。<code>quote</code> 则将 <code>syn</code> 解析的数据结构反过来传入到 Rust 代码中。知道了这些包的作用之后在看上面的代码一切就变得清晰和明了了。</p><p>函数接受一个输入转换为一个字符串类型的变量，然后这个字符串其实就是代表派生<code>MyMacro</code>代码的字符串，然后<code>syn</code>解析转换字符串成一个数据结构。这个结构可以让我们拿到所注解的名字如我们之前定义的<code>Coder</code>名字等信息。</p><p>万事具备，只欠一个在注解类型上面实现我们刚刚<code>MyMacro</code>的代码了。继续在 <code>my_macro_derive</code> 中编辑<code>lib.rs</code>：</p><div class="language-rust line-numbers-mode" data-ext="rs"><pre class="language-rust"><code><span class="token keyword">fn</span> <span class="token function-definition function">impl_my_macro</span><span class="token punctuation">(</span>ast<span class="token punctuation">:</span> <span class="token operator">&amp;</span><span class="token namespace">syn<span class="token punctuation">::</span></span><span class="token class-name">DeriveInput</span><span class="token punctuation">)</span> <span class="token punctuation">-&gt;</span> <span class="token namespace">quote<span class="token punctuation">::</span></span><span class="token class-name">Tokens</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token operator">&amp;</span>ast<span class="token punctuation">.</span>ident<span class="token punctuation">;</span>
    <span class="token macro property">quote!</span> <span class="token punctuation">{</span>
        <span class="token keyword">impl</span> <span class="token class-name">MyMacro</span> <span class="token keyword">for</span> #name <span class="token punctuation">{</span>
            <span class="token keyword">fn</span> <span class="token function-definition function">my_macro</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token macro property">println!</span><span class="token punctuation">(</span><span class="token string">&quot;你好热点送上了! 类型名： {}.&quot;</span><span class="token punctuation">,</span> <span class="token macro property">stringify!</span><span class="token punctuation">(</span>#name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大功告成。在最初的my_macro包中加入对应的依赖：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[dependencies]
hello_macro = { path = &quot;../hello_macro&quot; }
hello_macro_derive = { path = &quot;../hello_macro/hello_macro_derive&quot; }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后执行文章开头的代码，<code>cargo run</code>。就会打印出：<code>你好热点送上了! 类型名：Corder.</code></p><h1 id="码完跑路-偷懒" tabindex="-1"><a class="header-anchor" href="#码完跑路-偷懒" aria-hidden="true">#</a> 码完跑路（偷懒）</h1><p>所以接下来就是你们的时间了，好好捋捋上面说的东西吧。（逃</p>`,23),o=[t];function i(p,l){return s(),a("div",null,o)}const r=n(c,[["render",i],["__file","051701.html.vue"]]);export{r as default};
