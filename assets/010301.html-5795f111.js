import { _ as _export_sfc, o as openBlock, c as createElementBlock, a as createBaseVNode, e as createStaticVNode } from "./app-87fda56d.js";
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
const _hoisted_2 = /* @__PURE__ */ createStaticVNode('<h3 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h3><p>上一节我们刚刚介绍完node的HTTP和HTTPS模块，相信我们也对nodejs有了更深层次的理解，接下来紧接着上一节的内容继续继续。</p><h3 id="模块概述" tabindex="-1"><a class="header-anchor" href="#模块概述" aria-hidden="true">#</a> 模块概述</h3><ul><li>URL 在我们处理HTTP请求时，URL模块是我们使用频率最高的，因为它可以帮助我们更快的解析、生成和拼接URL。 URL提供了一个<code>parse</code>方法，可以将url变成一个对象。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">)</span>\nurl<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.mrpann.cn:8080/p/a/t/h?query=string#hash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token operator">=&gt;</span>\n<span class="token punctuation">{</span> <span class="token literal-property property">protocol</span><span class="token operator">:</span> <span class="token string">&#39;http:&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;www.mrpann.cn:8080&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token string">&#39;8080&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&#39;www.mrpann.cn&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">hash</span><span class="token operator">:</span> <span class="token string">&#39;#hash&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;?query=string&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">query</span><span class="token operator">:</span> <span class="token string">&#39;query=string&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">pathname</span><span class="token operator">:</span> <span class="token string">&#39;/p/a/t/h&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/p/a/t/h?query=string&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;http://www.mrpann.cn:8080/p/a/t/h?query=string#hash&#39;</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的方法，我们可以很轻松的拿到请求地址中有关的信息，同时，我们也能通过使用<code>format</code>方法，将一个URL对象格式化成一个请求地址。这个时候有的童鞋问了，打字员大大，我想拼接url怎么办呢，除了原始的<code>+</code>来拼接之外，我们还可以用<code>resolve</code>。示例如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>url<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.mrpann.cn/api&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;../user&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token operator">=&gt;</span>\n<span class="token comment">/* http://www.mrpann.cn/api/user */</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>QUERY STRING 在实际运用中，当我们客户端发送请求的时候，我们往往URL参数字符串与参数对象的互相转换。querystring就是为此而生的，举个例子，当我们使用get方法请求一张图片的时候，url地址为<code>www.mpann.cn/resourse/img/user?type=img&amp;isHistory=2</code>。我就可以使用<code>querystring.parse</code>方法，转换为<code>{ type: &#39;img&#39;, isHistory: 2 }</code>。 同理，我们也能够使用<code>querystring.stringify</code>将参数对象转换为url字符串。</li><li>ZLIB 当我们开发一个稍微庞大的系统的时候，往往某个请求中需要发送比较大的数据给服务端或者返回稍大的数据给客户端，但是往往因为数据量过大，导致请求失败或者后台无法接收。这个时候我们就可以使用zlib这个模块，它提供了数据压缩和解压的功能，通过zlib我们能很方便的压缩HTTP响应体数据。在下面这个示例中我们展示了如何使用zlib这个模块。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//服务端</span>\nhttp<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> body <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">var</span> headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers\n    <span class="token comment">//判断是否支持gzip</span>\n    <span class="token keyword">if</span><span class="token punctuation">(</span>headers<span class="token punctuation">[</span><span class="token string">&#39;accept-encoding&#39;</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;gzip&#39;</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n        zlib<span class="token punctuation">.</span><span class="token function">gzip</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n                <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span><span class="token punctuation">,</span>\n                <span class="token string-property property">&#39;Content-Encoding&#39;</span><span class="token operator">:</span> <span class="token string">&#39;gzip&#39;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n        response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n            <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>\n    request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        body<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        body <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token comment">//监听8080端口</span>\n\n<span class="token comment">//客户端</span>\n<span class="token comment">//request模块请求</span>\n<span class="token comment">//构建请求头信息</span>\n<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>  \n    <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&#39;www.mrpann.cn&#39;</span><span class="token punctuation">,</span>  \n    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8880</span><span class="token punctuation">,</span>  \n    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/api/v1/user/login&#39;</span><span class="token punctuation">,</span>  \n    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>  \n    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>  \n        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</span><span class="token punctuation">,</span>\n        <span class="token string-property property">&#39;Accept-Encoding&#39;</span><span class="token operator">:</span> <span class="token string">&#39;gzip, deflate&#39;</span>  \n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//发起服务端请求</span>\n<span class="token keyword">var</span> request <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> body <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        result<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            body<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        result<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            body <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>\n            <span class="token keyword">var</span> headers <span class="token operator">=</span> result<span class="token punctuation">.</span>headers\n            <span class="token comment">//判断是否支持gzip压缩</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>headers<span class="token punctuation">[</span><span class="token string">&#39;content-encoding&#39;</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;gzip&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token comment">//进行解压响应体</span>\n                zlib<span class="token punctuation">.</span><span class="token function">gunzip</span><span class="token punctuation">(</span>body<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token comment">//写入请求体内容</span>\n    request<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span>userName<span class="token punctuation">,</span><span class="token literal-property property">password</span><span class="token operator">:</span>pwd<span class="token punctuation">,</span><span class="token literal-property property">captcha</span><span class="token operator">:</span>cap<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    request<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NET 接触过其它语言网络编程这一块的童鞋应该比较熟悉socket。nodejs里面有没有呢，答案是肯定的。我们利用net模块可以创建一个socket服务端或者是客户端。但是由于前端的局限性，据本猿所知，使用socket的应用场景还很少，在这里仅仅展示一下利用net来创建一个简单的客户端和服务端应用。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//服务端应用</span>\nnet<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">conn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    conn<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        conn<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n            <span class="token string">&#39;HTTP/1.1 200 OK&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;Content-Type: text/plain&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;Content-Length: 11&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;Hello World&#39;</span>\n        <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">//客户端应用</span>\n<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">&#39;www.example.com&#39;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">var</span> client <span class="token operator">=</span> net<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        client<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n            <span class="token string">&#39;GET / HTTP/1.1&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;User-Agent: curl/7.26.0&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;Host: www.baidu.com&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;Accept: */*&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n            <span class="token string">&#39;&#39;</span>\n        <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nclient<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    client<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h3><p>到这里我们的网络模块基本上就结束了。在这一模块里面我们知道了以下几点内容</p><ul><li>我们能够很方便的通过http和https进行一个客户端的请求与搭建一个服务端应用</li><li>处理http请求时往往回家上url.parse方法</li><li>可以通过request和response对象来读写对应的数据</li><li>node中支持压缩和解压数据以及支持socket编程</li><li>人生无奈，我用node</li></ul><p>下一次我们的入门到放弃node系列分享点什么呢，请发送到公众号后台一起投票吧！</p>', 15);
const _hoisted_17 = [
  _hoisted_1,
  _hoisted_2
];
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
const _010301_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "010301.html.vue"]]);
export {
  _010301_html as default
};