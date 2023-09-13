import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as createStaticVNode } from "./app-07b098a2.js";
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
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "前言",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#前言",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" 前言")
  ],
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "p",
  null,
  "上一次相信大家都基本了解node的用法了，有做功课的童鞋肯定回去温习了一下js的语法。这些年来js发展很快，出了很多类似许多vue、react、node等等众所周知的玩意儿，对应的社区配套也越来越完善。好的，接下来我们补充一下node的内置网络模块，顺带复习一下网络编程的相关知识，毕竟“技多不压身”。",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "h3",
  {
    id: "api概览",
    tabindex: "-1"
  },
  [
    /* @__PURE__ */ createBaseVNode("a", {
      class: "header-anchor",
      href: "#api概览",
      "aria-hidden": "true"
    }, "#"),
    /* @__PURE__ */ createTextVNode(" API概览")
  ],
  -1
  /* HOISTED */
);
const _hoisted_5 = {
  href: "http://nodejs.org/api/http.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = /* @__PURE__ */ createStaticVNode('<ul><li>HTTP</li><li>HTTPS</li><li>URL</li><li>QUERY STRING</li><li>ZLIB</li><li>NET</li></ul><p>今天我们先主要介绍一下HTTP与HTTPS。</p><ul><li>HTTP与HTTPS</li></ul><p>HTTP与HTTPS模块基本上都一样，唯一不同的地方就是HTTPS访问我们通常是需要证书的嘛，所以需要单独处理一下SSL证书。在这里先介绍一下HTTP模块，使用HTTP模块有两种用途，一是作为服务端，创建一个HTTP服务器，监听客户端并响应。二是作为客户端，进行HTTP请求，获取服务端信息。</p><p>说到HTTP请求，不得不插一句，相信很多人对其既陌生又熟悉。它大致上分为请求头和请求体，也就是我们常说的Request hearders和Request Body。就从访问某搜索引擎的请求来说，他的访问静态资源时请求内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>host:ss0.bdstatic.com\nmethod:GET\npath:/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png\nscheme:https\nversion:HTTP/1.1\naccept:image/webp,image/*,*/*;q=0.8\naccept-encoding:gzip, deflate, sdch\naccept-language:zh-CN,zh;q=0.8\ncache-control:max-age=0\nif-modified-since:Tue, 06 Jun 2017 06:04:45 GMT\nif-none-match:&quot;593645fd-e7a&quot;\nreferer:https://www.baidu.com/?tn=57095150_6_oem_dg\nuser-agent:Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于这里是一个GET方法，所以上面都是请求头部分，当我们使用POST请求时，则会加上body。当客户端发送请求到我们服务端时，我们接收到对应的请求，就会调用相应的回调函数。在回调函数中我们就可以使用request对象来读取请求头的数据以及请求体的数据。 贴出新建一个HTTP服务器的示例代码，示例中创建了一个服务端应用并监控8080端口，当接收到客户端请求时，将会打印出请求头部内容以及请求体内容：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建一个服务</span>\nhttp<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> body <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>headers<span class="token punctuation">)</span>\n    request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        body<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        body <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>body<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token comment">//监听8080端口</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HTTP响应与请求一样，也分为响应头和响应体。我们可以使用response对象来操作响应数据。我们将上面的例子改一下，将客户端的请求数据再返给客户端。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建一个服务</span>\nhttp<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> body <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token comment">//写入响应数据</span>\n    response<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;text/plain&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">chunk</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        response<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>\n        body<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;end&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        body <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>body<span class="token punctuation">)</span>\n        response<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">)</span><span class="token comment">//监听8080端口</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是服务端所操作的过程，那么有人问了，客户端该如何操作呢。下面我们介绍一下客户端的流程，下面使用的是node中网络请求比较方便的模块<code>request</code>，当然node也提供了一个便捷的API供我们使用，各取所需嘛。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//HTTP内置API</span>\nhttp<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.example.com/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//request模块请求</span>\n<span class="token comment">//构建请求头信息</span>\n<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>  \n    <span class="token literal-property property">hostname</span><span class="token operator">:</span> <span class="token string">&#39;www.mrpann.cn&#39;</span><span class="token punctuation">,</span>  \n    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">8880</span><span class="token punctuation">,</span>  \n    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/api/v1/user/login&#39;</span><span class="token punctuation">,</span>  \n    <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span>  \n    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span>  \n        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/x-www-form-urlencoded; charset=UTF-8&#39;</span>  \n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n<span class="token comment">//发起服务端请求</span>\n<span class="token keyword">var</span> request <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n  	request<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token comment">//写入请求体内容</span>\n	request<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>qs<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">username</span><span class="token operator">:</span>userName<span class="token punctuation">,</span><span class="token literal-property property">password</span><span class="token operator">:</span>pwd<span class="token punctuation">,</span><span class="token literal-property property">captcha</span><span class="token operator">:</span>cap<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n	request<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样一个完整的客户端发起请求到服务端响应返回数据的流程就结束了，最后我们介绍一下HTTPS中使用证书的步骤，因为HTTPS提供一个安全的加密的环境，保证了互联网请求的安全性。与上面的代码类似，我们只需要在创建服务时增加俩个参数即可。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">key</span><span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./ssl/default.key&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token literal-property property">cert</span><span class="token operator">:</span> fs<span class="token punctuation">.</span><span class="token function">readFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./ssl/default.cer&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n<span class="token comment">//创建一个HTTPS服务</span>\nhttp<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span>options<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">request<span class="token punctuation">,</span> response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>\n    <span class="token comment">//请求处理</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有的童鞋在这里肯定自己动手搭建了起来，会发现客户端https在用自建证书时客户端访问不了被拒绝了，尝试着在请求的头部中加上这一句，<code>rejectUnauthorized: false</code>是不是发现可以了呢，赶紧试一试吧。</p><h3 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h3><p>今天介绍了nodejs中利用HTTP以及HTTPS模块建立一个简单的服务端程序以及客户端的请求。下次我们会介绍node同样在网络编程中比较有用的模块。</p><h3 id="彩蛋" tabindex="-1"><a class="header-anchor" href="#彩蛋" aria-hidden="true">#</a> 彩蛋</h3><p>细心的同学就会发现了，打字员大大，你的程序里咋都没有结束符号<code>;</code>呀。最后一个函数咋变成了<code>(res)=&gt;{}</code>了,是不是BUG写多了手抖了。答案当然不是，这是ES6的语法，out了吧。ES6是JavaScript语言的一个标准，已经在2015发布，ES是ECMAScript，简单来说ECMAScript是JavaScript语言的国际标准，JavaScript是ECMAScript的实现。在这里你会看到一个不一样的js，对一个面向对象编程的打字员来说也很友好，有兴趣的同学可以自己去研究一下。（逃</p>', 20);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    _hoisted_3,
    _hoisted_4,
    createBaseVNode("p", null, [
      createTextVNode("其实nodejs一开始就是帮助编写高性能的web服务器，在这里简单介绍一下相关的API，好让大家知道什么情况下该使用哪个API，具体使用的方法还是去"),
      createBaseVNode("a", _hoisted_5, [
        createTextVNode("官网"),
        createVNode(_component_ExternalLinkIcon)
      ]),
      createTextVNode("上瞄一下，毕竟官网已经解释的不能再详细了。我们将会介绍")
    ]),
    _hoisted_6
  ]);
}
const _010101_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "010101.html.vue"]]);
export {
  _010101_html as default
};
