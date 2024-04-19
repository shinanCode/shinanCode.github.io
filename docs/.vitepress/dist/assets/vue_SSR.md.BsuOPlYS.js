import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.Bkp5Egd4.js";const p=JSON.parse('{"title":"SSR","description":"","frontmatter":{},"headers":[],"relativePath":"vue/SSR.md","filePath":"vue/SSR.md","lastUpdated":null}'),r={name:"vue/SSR.md"},l=o('<h1 id="ssr" tabindex="-1">SSR <a class="header-anchor" href="#ssr" aria-label="Permalink to &quot;SSR&quot;">​</a></h1><blockquote><p><code>SSR</code>（<code>Server-Side Rendering</code>，服务器端渲染）是一种将应用程序的界面在服务器上进行预先渲染并以 HTML 形式发送到客户端的技术。</p></blockquote><p>而在 SSR 中，服务器接收到请求后，会根据请求的路由和数据，预先生成完整的 HTML 页面，其中包含了初始状态下的页面内容。服务器将这个完整的 HTML 页面发送给浏览器，浏览器无需再执行额外的 JavaScript，即可直接展示出页面内容。</p><h3 id="ssr-的优势包括" tabindex="-1">SSR 的优势包括： <a class="header-anchor" href="#ssr-的优势包括" aria-label="Permalink to &quot;SSR 的优势包括：&quot;">​</a></h3><ul><li>更快的首次渲染：由于服务器在响应请求时已经生成了完整的 HTML 页面，所以用户打开页面时可以立即看到内容，无需等待 JavaScript 下载和执行。</li><li>更好的搜索引擎优化（SEO）：搜索引擎爬虫能够抓取到完整的 HTML 页面，并且页面内容可直接被搜索引擎索引。</li><li>更好的用户体验：页面内容在服务器端渲染完成后即可展示，减少了白屏时间和加载等待。</li></ul><h3 id="vue-如何实现" tabindex="-1">Vue 如何实现 <a class="header-anchor" href="#vue-如何实现" aria-label="Permalink to &quot;Vue 如何实现&quot;">​</a></h3><ol><li>使用<code>Nuxt.js</code>框架</li></ol>',7),i=[l];function s(c,d,S,n,_,u){return t(),a("div",null,i)}const R=e(r,[["render",s]]);export{p as __pageData,R as default};