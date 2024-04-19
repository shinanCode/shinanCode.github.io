import{_ as a,c as s,o as i,a4 as e}from"./chunks/framework.Bkp5Egd4.js";const _=JSON.parse('{"title":"事件的传播和事件冒泡","description":"","frontmatter":{},"headers":[],"relativePath":"js/事件的传播和事件冒泡.md","filePath":"js/事件的传播和事件冒泡.md","lastUpdated":null}'),t={name:"js/事件的传播和事件冒泡.md"},l=e('<h1 id="事件的传播和事件冒泡" tabindex="-1">事件的传播和事件冒泡 <a class="header-anchor" href="#事件的传播和事件冒泡" aria-label="Permalink to &quot;事件的传播和事件冒泡&quot;">​</a></h1><p>一个完整的 JS 事件流是从 window 开始，最后回到 window 的一个过程。</p><h2 id="dom-事件流" tabindex="-1">DOM 事件流 <a class="header-anchor" href="#dom-事件流" aria-label="Permalink to &quot;DOM 事件流&quot;">​</a></h2><p>事件传播的三个阶段是：事件捕获、目标和事件冒泡。</p><ul><li><p>事件捕获阶段：事件从祖先元素往子元素查找（DOM 树结构），直到捕获到事件目标 target。在这个过程中，默认情况下，事件相应的监听函数是不会被触发的。</p></li><li><p>事件目标：当到达目标元素之后，执行目标元素该事件相应的处理函数。如果没有绑定监听函数，那就不执行。</p></li><li><p>事件冒泡阶段：事件从事件目标 target 开始，从子元素往冒泡祖先元素冒泡，直到页面的最上一级标签。</p></li></ul><h3 id="阻止冒泡" tabindex="-1">阻止冒泡 <a class="header-anchor" href="#阻止冒泡" aria-label="Permalink to &quot;阻止冒泡&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stopPropagation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="事件代理" tabindex="-1">事件代理 <a class="header-anchor" href="#事件代理" aria-label="Permalink to &quot;事件代理&quot;">​</a></h3><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(event, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useCapture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">useCapture</p><p>可选。布尔值，指定事件是否在捕获或冒泡阶段执行。<br><code>false</code> - 默认。事件句柄在冒泡阶段执行<br><code>true</code> - 事件句柄在捕获阶段执行</p></div><h3 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h3><ol><li><a href="https://zh.javascript.info/bubbling-and-capturing" target="_blank" rel="noreferrer">冒泡和捕获</a></li></ol>',12),n=[l];function r(o,p,h,d,c,k){return i(),s("div",null,n)}const g=a(t,[["render",r]]);export{_ as __pageData,g as default};
