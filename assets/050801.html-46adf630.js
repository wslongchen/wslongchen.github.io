import{_ as e,o as d,c as i,d as n}from"./app-39c5096f.js";const a={},s=n(`<p>接触一门新语言，我们应该首先了解一下它的相关基础性的概念，所以今天我们来聊一下Rust的数据类型，有基础的打字员可以大致的与已知体系过对比着一遍。</p><p>Rust里面每一个值都有一个数据类型，这样Rust才会知道这个值是哪种处理方式；总的来说氛围两种：标量类型和复合类型，另外Rust要求在编译的时候就必须知道所有变量的类型。</p><h1 id="标量类型" tabindex="-1"><a class="header-anchor" href="#标量类型" aria-hidden="true">#</a> 标量类型</h1><p>整型、浮点型、布尔类型以及字符类型是Rust的四种标量类型，也是最基本的类型，如果有其他语言基础的可以略过。</p><h2 id="整型" tabindex="-1"><a class="header-anchor" href="#整型" aria-hidden="true">#</a> 整型</h2><p>整型也就是没有小数的数字类型（整数类型），整型的默认是i32。i表示一个有符号的整数类型，32表示它占用的长度是32-bit。有符号和无符号也就是代表数字能否为负值，每一个变体都是可以有符号或者是无符号的。在下面列出所有的整型类型：</p><table><thead><tr><th>有符号</th><th>无符号</th><th>占用长度</th></tr></thead><tbody><tr><td>i8</td><td>u8</td><td>8个字节</td></tr><tr><td>i16</td><td>u16</td><td>16个字节</td></tr><tr><td>i32</td><td>u32</td><td>32个字节</td></tr><tr><td>i64</td><td>u64</td><td>64个字节</td></tr></tbody></table><p>另外Rust允许使用<code>_</code>作为分割符以方便识别数字字面值。如<code>2_000</code>。同时还可以使用类型后缀来声明数字值，除了byte类型意外的所有数字值都可以使用，如<code>50u8</code>。</p><p>接下来我们整理一下声明整型的几种方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    let x = 2000; // i32
    
    let x = 2000i32;
    
    let x = 2_000;
    
    let x: i32 = 2000;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浮点" tabindex="-1"><a class="header-anchor" href="#浮点" aria-hidden="true">#</a> 浮点</h2><p>浮点型简单来说也就是带小数点数字（浮点数）类型。Rust中的浮点数类型是<code>f32</code>和<code>f64</code>，从字面中可以看出它们分别占用32位和64位。</p><p>所以我们直接给出案例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    let x = 5.0;
    
    let x: f32 = 5.0;
    
    let x = 5.0f32;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="布尔" tabindex="-1"><a class="header-anchor" href="#布尔" aria-hidden="true">#</a> 布尔</h2><p>我们一般会在条件表达式中用到布尔值，它们的情况就只有是或者不是，Rust中的布尔类型有两个可能值：true与false。用<code>bool</code>表示。直接上代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    let x = true;
    
    let x: bool = true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字符" tabindex="-1"><a class="header-anchor" href="#字符" aria-hidden="true">#</a> 字符</h2><p>字符类型<code>char</code>是语言中原生的字母类型，由单引号指定。说到字符肯定不得不提字符串，Rust中只有一种字符串类型<code>str</code>，字符串slice，可以理解为字节的集合再加一些方法实现的字符串，这个概念我们后面再详细描述。我们先看一下如何使用字符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    let x = &#39;z&#39;;
    let x = &#39;Y&#39;;
    let x = &#39;?&#39;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="复合类型" tabindex="-1"><a class="header-anchor" href="#复合类型" aria-hidden="true">#</a> 复合类型</h1><p>Rust中有两种原生的复合类型：元祖和数组，可以将多个值组合成一个类型。</p><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><p>数组中包含了多个值，每个元素的类型必须相同，长度固定；一旦被声明，长度是无法改变的。这一点和其他语言有所不同。数组的数据是存放在栈上的，在Rust标准库中与数组类似的集合类型vector则是在堆上，这个大家可以先去做做功课。</p><p>以下代码展示使用数组存放了一个星期名字的两种方式：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    let weeks = [
        &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, 
        &quot;Saturday&quot;, &quot;Sunday&quot;
    ];
    
    let weeks: [&amp;str; 7] = [
        &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, 
        &quot;Saturday&quot;, &quot;Sunday&quot;
    ];
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们如何访问数组的元素呢？上面说过数组是一整块都分配在栈上的内存。那我们可以通过索引来访问数组元素，我们使用索引来访问上面的星期三和星期四元素：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    let weeks = [
        &quot;Monday&quot;, &quot;Tuesday&quot;, &quot;Wednesday&quot;, &quot;Thursday&quot;, &quot;Friday&quot;, 
        &quot;Saturday&quot;, &quot;Sunday&quot;
    ];
    
    let wed = weeks[2];
    let thurs = weeks[3];
    // 小白提示：计算机索引是从0开始的哦
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，如果我们访问数组之外索引值时会导致运行错误<code>index out of bounds</code></p><h2 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h2><p>和数组不一样的是，元祖可以允许不同的类型进行组合，每一个元素都有一个类型。如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    let rectangle:(i32,f64) = (200, 6.4);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比较复杂的是，我们需要使用模式匹配来解构元组值或者通过<code>.</code>后面跟上索引值，这样才可以从元组中获取单个值。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    let rectangle:(i32,f64) = (200, 6.4);
    
    let height = x.0;
    let width = x.1;
    
    let (height, width) = rectangle;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="小黑板" tabindex="-1"><a class="header-anchor" href="#小黑板" aria-hidden="true">#</a> 小黑板</h1><p>我们大概知道了Rust中的基础数据类型以及如何使用他们。在这里敲一下小黑板，补充一下数字类型的数值运算:<code>+、-、*、/</code>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>fn main() {
    // 加
    let plus = 1 + 1;

    // 减
    let minus = 2 - 1;

    // 乘
    let multiply = 1 * 2;

    // 除
    let divide = 2 / 1;

    // 取余
    let remainder = 3 % 2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="下课" tabindex="-1"><a class="header-anchor" href="#下课" aria-hidden="true">#</a> 下课</h1><p>很多打字员看到这可能觉得比较基础，而且并没有感受到任何挫折感，这几篇文章完全是按照打字员学习Rust的成长路径来的，在分享的同时也在帮助打字员梳理基础的理论知识。觉得没有感受到挫折感没关系，期待后面的狂风暴雨趴。（逃</p>`,39),t=[s];function l(r,u){return d(),i("div",null,t)}const c=e(a,[["render",l],["__file","050801.html.vue"]]);export{c as default};
