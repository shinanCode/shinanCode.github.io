import{_ as e,c as a,o as t,a4 as o}from"./chunks/framework.Bkp5Egd4.js";const p=JSON.parse('{"title":"NextTick","description":"","frontmatter":{},"headers":[],"relativePath":"vue/nextTick.md","filePath":"vue/nextTick.md","lastUpdated":null}'),i={name:"vue/nextTick.md"},l=o('<h1 id="nexttick" tabindex="-1">NextTick <a class="header-anchor" href="#nexttick" aria-label="Permalink to &quot;NextTick&quot;">​</a></h1><blockquote><p>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM</p></blockquote><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>如果想要在修改数据后立刻得到更新后的DOM结构，可以使用<code>Vue.nextTick()</code></p><h2 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-label="Permalink to &quot;原理&quot;">​</a></h2><ol><li>将回调函数放到callbacks等待执行</li><li>将执行函数放到任务队列中</li><li>事件循环到任务队列，执行函数一次执行callbacks里的回调</li></ol><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ol><li><a href="https://juejin.cn/post/6844904147804749832" target="_blank" rel="noreferrer">Vue中$nextTick源码解析</a></li></ol>',8),c=[l];function r(n,s,d,h,_,k){return t(),a("div",null,c)}const x=e(i,[["render",r]]);export{p as __pageData,x as default};