import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as createStaticVNode } from "./app-588254f0.js";
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
  "h1",
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
const _hoisted_3 = {
  href: "http://www.express-gateway.io",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = /* @__PURE__ */ createStaticVNode('<h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><ul><li>安装Express Gateway</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install -g express-gateway\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>创建一个项目</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>eg gateway create\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>初始一些基本信息配置</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>eg gateway create\n ? What is the name of your Express Gateway? my-gateway\n ? Where would you like to install your Express Gateway? my-gateway\n ? What type of Express Gateway do you want to create? (Use arrow keys)\n ❯ Getting Started with Express Gateway\n   Basic (default pipeline with proxy)\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>启动</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd my-gateway &amp;&amp; npm start\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样基本的一个项目就已经成型了。</p><h1 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h1><h3 id="指定服务并把api暴露出来-api提供者" tabindex="-1"><a class="header-anchor" href="#指定服务并把api暴露出来-api提供者" aria-hidden="true">#</a> 指定服务并把API暴露出来（API提供者）</h3><ul><li>第一步</li></ul><p>我们会发现，项目中已经把代理了一个现有的服务 <code>https://httpbin.org/ip</code> ,并对其进行管理。它提供了一个json的输出，我们可以展示一下快速网关的功能。访问 <code>https://httpbin.org/ip</code> ，会有以下输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{\n  &quot;origin&quot;: &quot;218.80.1.67&quot;  #自己的IP\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二步</li></ul><p><img src="https://segmentfault.com/img/bV0pEQ" alt="clipboard.png"></p><p>该服务被指定为快速网关中默认管道的服务端，网关有自己的代理策略，之前的 <code>https://httpbin.org/ip</code> 则是网关设置的一个服务请求。配置在config目录下的 <code>gateway.config.yml</code> 文件。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http:\n  port: 8080\nadmin:\n  port: 9876\n  hostname: localhost\napiEndpoints:\n  api:\n    host: localhost\n    paths: &#39;/ip&#39;\nserviceEndpoints:\n  httpbin:\n    url: &#39;https://httpbin.org&#39;\npolicies:\n  - basic-auth\n  - cors\n  - expression\n  - key-auth\n  - log\n  - oauth2\n  - proxy\n  - rate-limit\npipelines:\n  default:\n    apiEndpoints:\n      - api\n    policies:\n    # Uncomment `key-auth:` when instructed to in the Getting Started guide.\n    # - key-auth:\n      - proxy:\n          - action:\n              serviceEndpoint: httpbin \n              changeOrigin: true\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到这里配置了一个默认的服务端点，网关会在默认代理策略中找到 <code>httmbin</code> 。</p><ul><li>第三步</li></ul><p><img src="https://segmentfault.com/img/bV0pES" alt="clipboard.png"></p><p>接下来我们需要让 <code>httpbin</code> 服务作为一个API端点穿过网关，并当这个API公开时，可以被外部所访问。 在上面的 <code>gateway.config.yml</code> 配置文件中，我们找到 <code>apiEndpoints</code> 这个设置，其中有一个 <code>api</code> 的设置项。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apiEndpoints:\n  api:\n    host: localhost\n    paths: &#39;/ip&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS:默认情况下，API请求路径将被代理策略挂在服务端点中。</p><ul><li>第四步</li></ul><p><img src="https://segmentfault.com/img/bV0pEW" alt="clipboard.png"></p><p>现在我们就可以通过网关来访问API了，访问 <code>http://localhost:8080/ip</code> 。</p><h3 id="创建api消费者" tabindex="-1"><a class="header-anchor" href="#创建api消费者" aria-hidden="true">#</a> 创建API消费者</h3><p>方便管理API，我们将允许使用API的授权用户称为“消费者”。如用户的创建，进入项目根目录，创建：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>eg users create\n Enter username [required]: mrpan\n Enter firstname [required]: coder\n Enter lastname [required]: coder\n Enter email: 1049058427@qq.com\n Enter redirectUri: www.baidu.com\n√ Created 892775c8-80c5-480e-b596-6cb3133691f2\n\n &quot;firstname&quot;: &quot;coder&quot;,\n &quot;lastname&quot;: &quot;coder&quot;,\n &quot;email&quot;: &quot;1049058427@qq.com&quot;,\n &quot;redirectUri&quot;: &quot;www.baidu.com&quot;,\n &quot;isActive&quot;: true,\n &quot;username&quot;: &quot;mrpan&quot;,\n &quot;id&quot;: &quot;892775c8-80c5-480e-b596-6cb3133691f2&quot;,\n &quot;createdAt&quot;: &quot;Sat Dec 16 2017 13:21:13 GMT+0800 (中国标准时间)&quot;,\n &quot;updatedAt&quot;: &quot;Sat Dec 16 2017 13:21:13 GMT+0800 (中国标准时间)&quot;\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="api权限认证" tabindex="-1"><a class="header-anchor" href="#api权限认证" aria-hidden="true">#</a> API权限认证</h3><ul><li>第一步</li></ul><p>现在我们的API是公开的，没有进行权限的控制，所以任何人都可以对它进行访问。我们现在用密钥授权对它进行保护，首先必须要将这个授权策略加入在配置文件 <code>gateway.config.yml</code> 中。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>pipelines:\n  - name: getting-started\n    apiEndpoints:\n      - api\n    policies:\n      - key-auth:\n      - proxy:\n        - action:\n          serviceEndpoint: httpbin\n          changeOrigin: true\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二步</li></ul><p><img src="https://segmentfault.com/img/bV0pGZ" alt="clipboard.png"></p><p>将密钥分给上面的用户 <code>mrpan</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>eg credentials create -c mrpan -t key-auth -q\n10b9Yaalb982DreBukZvGf:3A2bhd1xzqwAvNWX0QfjD5\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>PS：上面的-q选项是将输出限制为api的key，便于粘贴复制。</p><ul><li>第三步</li></ul><p><img src="https://segmentfault.com/img/bV0pHl" alt="clipboard.png"></p><p>再次访问 <code>http://localhost:8080/ip</code> ，这个时候便不会打印结果了，只会打印出 <code>Unauthorized</code> 。</p><ul><li>第四步</li></ul><p><img src="https://segmentfault.com/img/bV0pHE" alt="clipboard.png"></p><p>我们在访问的时候把key加上。这样，就能继续使用API了。</p><p>到这里，网关的基本使用也就差不多了，大家可以梳理一下在自己的系统中进行扩展。</p><h1 id="结语" tabindex="-1"><a class="header-anchor" href="#结语" aria-hidden="true">#</a> 结语</h1><p>现在大多大型网站架构都采用了微服务的模式，把系统拆分成一个一个的微服务，服务层可能会使用java或者使用其它语言编写，毕竟有Netflix这样的先例，成功的使用Node.js API网关及其JAVA后端来支持广泛的客户端。</p>', 49);
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    _hoisted_2,
    createBaseVNode("p", null, [
      createTextVNode("网上墙内关于这方面的文章真的很少，本猿也是通过官网一点一点学习，希望能够帮助到大家。"),
      createBaseVNode("a", _hoisted_3, [
        createTextVNode("express-gateway官网"),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    _hoisted_4
  ]);
}
const _010801_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "010801.html.vue"]]);
export {
  _010801_html as default
};
