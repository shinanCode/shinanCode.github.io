import{_ as e,c as a,o,a4 as t}from"./chunks/framework.Bkp5Egd4.js";const p=JSON.parse('{"title":"Tree shaking","description":"","frontmatter":{},"headers":[],"relativePath":"vue/treeShaking.md","filePath":"vue/treeShaking.md","lastUpdated":null}'),r={name:"vue/treeShaking.md"},i=t('<h1 id="tree-shaking" tabindex="-1">Tree shaking <a class="header-anchor" href="#tree-shaking" aria-label="Permalink to &quot;Tree shaking&quot;">​</a></h1><blockquote><p><code>Tree shaking</code> 是一种通过清除多余代码方式来优化项目打包体积的技术，专业术语叫 <code>Dead code elimination</code></p></blockquote><h3 id="问-vue2为什么没有使用" tabindex="-1">问：Vue2为什么没有使用 <a class="header-anchor" href="#问-vue2为什么没有使用" aria-label="Permalink to &quot;问：Vue2为什么没有使用&quot;">​</a></h3><p>Vue2中，Vue实例在项目中是单例，捆绑程序无法检测到对象的哪些属性在代码中使用到。 Vue3源码引入tree shaking特性，将全局API分模块。</p><h2 id="tree-shaking原理" tabindex="-1">Tree shaking原理 <a class="header-anchor" href="#tree-shaking原理" aria-label="Permalink to &quot;Tree shaking原理&quot;">​</a></h2><blockquote><p><code>Tree shaking</code>是基于ES6模板语法（<code>import与export</code>），主要是借助<code>ES6</code>模块的静态编译思想，在编译时就能确定模块的依赖关系，以及输入和输出的变量</p></blockquote><p><code>Tree shaking</code>无非就是做了两件事：</p><ul><li>编译阶段利用<code>ES6 Module</code>判断哪些模块已经加载</li><li>判断那些模块和变量未被使用或者引用，进而删除对应代码</li></ul><h2 id="优势" tabindex="-1">优势 <a class="header-anchor" href="#优势" aria-label="Permalink to &quot;优势&quot;">​</a></h2><ul><li>减少源码体积（更小）</li><li>减少程序执行时间（更快）</li><li>便于将来对程序架构进行优化（更友好）</li></ul><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ol><li><a href="https://fe.ecool.fun/topic/c1ee1a9b-5955-4dc1-a89d-2ce7b017616a?orderBy=updateTime&amp;order=desc&amp;tagId=14" target="_blank" rel="noreferrer">Vue 3.0中Treeshaking特性是什么，并举例进行说明？</a></li></ol>',12),l=[i];function n(c,d,h,s,u,k){return o(),a("div",null,l)}const g=e(r,[["render",n]]);export{p as __pageData,g as default};
