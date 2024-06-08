/* empty css                     */import{A as t}from"./chunks/index.esm.5ACX_qNe.js";import{d,y as a,c as i,I as e,a2 as n,D as o,o as l}from"./chunks/framework.HiRsTrnz.js";const h=n(`<h1 id="autocomplete-自动完成" tabindex="-1">AutoComplete 自动完成 <a class="header-anchor" href="#autocomplete-自动完成" aria-label="Permalink to &quot;AutoComplete 自动完成&quot;">​</a></h1><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-label="Permalink to &quot;基本用法&quot;">​</a></h2><div id="autocomplete1"></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@company-ui/style&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Autocomplete } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@company-ui/dom&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Autocomplete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#autocomplete1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  placeholder: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Input company name&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="其他数据源用法" tabindex="-1">其他数据源用法 <a class="header-anchor" href="#其他数据源用法" aria-label="Permalink to &quot;其他数据源用法&quot;">​</a></h2><div id="autocomplete2"></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@company-ui/style&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Autocomplete } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@company-ui/dom&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Autocomplete</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  api: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;qcc_open&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  target: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;#autocomplete2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  autoFocus: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  submitButtonLabel: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;查一查&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  historyStorageKey: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;qcc-open-company-history&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>target</td><td>HTML元素标签的id</td><td><code>string</code></td><td>-</td></tr><tr><td>api</td><td>查询数据源</td><td><code>string</code></td><td>clearbit</td></tr><tr><td>queryDelay</td><td>查询数据延迟</td><td><code>number</code></td><td>500</td></tr><tr><td>placeholder</td><td>输入占位符内容</td><td><code>string</code></td><td>Input company name</td></tr><tr><td>clearable</td><td>显示清除按钮</td><td><code>boolean</code></td><td>true</td></tr><tr><td>backFill</td><td>使用键盘选择选项的时候把选中项回填到输入框中</td><td><code>boolean</code></td><td>true</td></tr><tr><td>popupAppendToBody</td><td>是否插入至 body 元素上</td><td><code>boolean</code></td><td>true</td></tr><tr><td>autoFocus</td><td>自动获取焦点</td><td><code>boolean</code></td><td>true</td></tr><tr><td>showSubmitButton</td><td>显示提交按钮</td><td><code>boolean</code></td><td>true</td></tr><tr><td>submitButtonLabel</td><td>提交按钮文字</td><td><code>string</code></td><td>Submit</td></tr><tr><td>offsetTop</td><td>距离文本框底部的偏移值</td><td><code>number</code></td><td>5</td></tr><tr><td>autoFlip</td><td>文本框是否自动翻转</td><td><code>boolean</code></td><td>false</td></tr><tr><td>avatarUrl</td><td>头像链接</td><td><code>string</code></td><td>-</td></tr><tr><td>clearIcon</td><td>清除按钮图标</td><td><code>string</code></td><td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"></path></svg></td></tr><tr><td>history</td><td>历史记录配置</td><td><code>HistoryOptions</code></td><td><a href="#historyoptions">HistoryOptions</a></td></tr></tbody></table><h3 id="historyoptions" tabindex="-1">HistoryOptions <a class="header-anchor" href="#historyoptions" aria-label="Permalink to &quot;HistoryOptions&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>enabled</td><td>打开保存历史记录</td><td><code>boolean</code></td><td>true</td></tr><tr><td>type</td><td>保存历史记录模式</td><td><code>string</code></td><td>localStorage</td></tr><tr><td>key</td><td>保存历史记录键</td><td><code>string</code></td><td>company-history</td></tr><tr><td>showClear</td><td>显示历史记录清除按钮</td><td><code>boolean</code></td><td>true</td></tr><tr><td>itemIcon</td><td>历史记录图标</td><td><code>string</code></td><td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m15.1 19.37l1 1.74c-.96.44-2.01.73-3.1.84v-2.02c.74-.09 1.44-.28 2.1-.56zM4.07 13H2.05c.11 1.1.4 2.14.84 3.1l1.74-1c-.28-.66-.47-1.36-.56-2.1zM15.1 4.63l1-1.74c-.96-.44-2-.73-3.1-.84v2.02c.74.09 1.44.28 2.1.56zM19.93 11h2.02c-.11-1.1-.4-2.14-.84-3.1l-1.74 1c.28.66.47 1.36.56 2.1zM8.9 19.37l-1 1.74c.96.44 2.01.73 3.1.84v-2.02c-.74-.09-1.44-.28-2.1-.56zM11 4.07V2.05c-1.1.11-2.14.4-3.1.84l1 1.74c.66-.28 1.36-.47 2.1-.56zm7.36 3.1l1.74-1.01c-.63-.87-1.4-1.64-2.27-2.27l-1.01 1.74c.59.45 1.1.96 1.54 1.54zM4.63 8.9l-1.74-1c-.44.96-.73 2-.84 3.1h2.02c.09-.74.28-1.44.56-2.1zm15.3 4.1c-.09.74-.28 1.44-.56 2.1l1.74 1c.44-.96.73-2.01.84-3.1h-2.02zm-3.1 5.36l1.01 1.74c.87-.63 1.64-1.4 2.27-2.27l-1.74-1.01c-.45.59-.96 1.1-1.54 1.54zM7.17 5.64l-1-1.75c-.88.64-1.64 1.4-2.27 2.28l1.74 1.01a7.7 7.7 0 0 1 1.53-1.54zM5.64 16.83l-1.74 1c.63.87 1.4 1.64 2.27 2.27l1.01-1.74a7.7 7.7 0 0 1-1.54-1.53zM13 7h-2v5.41l4.29 4.29l1.41-1.41l-3.7-3.7V7z"></path></svg></td></tr><tr><td>clearIcon</td><td>清除历史记录按钮图标</td><td><code>string</code></td><td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74zm7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z"></path><path fill="currentColor" d="M16.5 12H15v5l3.6 2.1l.8-1.2l-2.9-1.7z"></path></svg></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>onInput</td><td>当输入值改变时触发</td><td><code>Function</code></td></tr><tr><td>onChange</td><td>当输入值改变时触发</td><td><code>Function</code></td></tr><tr><td>onFetch</td><td>查询数据时触发</td><td><code>Function</code></td></tr><tr><td>onAbortFetch</td><td>当中止查询数据时触发</td><td><code>Function</code></td></tr><tr><td>onSelect</td><td>当单击建议时触发</td><td><code>Function</code></td></tr><tr><td>onClear</td><td>当单击文本框清除按钮时触发</td><td><code>Function</code></td></tr><tr><td>onFocus</td><td>当输入聚焦时触发</td><td><code>Function</code></td></tr><tr><td>onBlur</td><td>当输入取消聚焦时触发</td><td><code>Function</code></td></tr><tr><td>submitCallback</td><td>按钮提交时触发</td><td><code>Function</code></td></tr><tr><td>onDropdownVisibleChange</td><td>当下拉菜单出现/消失时触发</td><td><code>Function</code></td></tr></tbody></table>`,14),m=JSON.parse('{"title":"AutoComplete 自动完成","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"zh/components/dom/autocomplete.md","filePath":"zh/components/dom/autocomplete.md"}'),r={name:"zh/components/dom/autocomplete.md"},y=d({...r,setup(p){return a(()=>{new t({target:"#autocomplete1"}),new t({api:"qcc_open",target:"#autocomplete2",autoFocus:!1,submitButtonLabel:"查一查",historyStorageKey:"qcc-open-company-history",placeholder:"请输入企业名称或统一社会信用代码"})}),(c,k)=>{const s=o("el-backtop");return l(),i("div",null,[e(s),h])}}});export{m as __pageData,y as default};
