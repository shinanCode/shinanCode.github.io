import{_ as e,c as a,o,a4 as l}from"./chunks/framework.Bkp5Egd4.js";const m=JSON.parse('{"title":"BFC","description":"","frontmatter":{},"headers":[],"relativePath":"css/BFC.md","filePath":"css/BFC.md","lastUpdated":null}'),c={name:"css/BFC.md"},t=l('<h1 id="bfc" tabindex="-1">BFC <a class="header-anchor" href="#bfc" aria-label="Permalink to &quot;BFC&quot;">​</a></h1><p>是页面盒模型中的一种 <code>CSS</code> 渲染模式</p><p>相当于一个独立的容器，里面的元素和外部的元素相互不影响。</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>块级格式化上下文，是web页面css渲染的一部分，决定了自元素的排列和其他元素的关系。垂直方向从上而下的排列，两个上下的BFC的容器margin会重叠，浏览器因为四舍五入造成多列布局换行</p></div><h3 id="创建-bfc-的方式有" tabindex="-1">创建 <code>BFC</code> 的方式有： <a class="header-anchor" href="#创建-bfc-的方式有" aria-label="Permalink to &quot;创建 `BFC` 的方式有：&quot;">​</a></h3><ol><li><p><code>html</code> 根元素</p></li><li><p><code>float</code> 浮动</p></li><li><p>绝对定位</p></li><li><p><code>overflow</code> 不为 <code>visible</code></p></li><li><p><code>display</code> 为表格布局或者弹性布局；</p></li></ol><p><code>BFC</code> 主要的作用是：</p><ol start="6"><li><p>清除浮动</p></li><li><p>防止同一 <code>BFC</code> 容器中的相邻元素间的外边距重叠问题</p></li></ol><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><ol><li><a href="https://zhuanlan.zhihu.com/p/30168984" target="_blank" rel="noreferrer">深度剖析Margin塌陷，BFC，Containing Block之间的关系</a></li></ol>',10),i=[t];function s(d,r,p,n,_,h){return o(),a("div",null,i)}const C=e(c,[["render",s]]);export{m as __pageData,C as default};