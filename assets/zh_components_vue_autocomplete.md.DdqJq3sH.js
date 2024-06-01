/* empty css                     */import{d as c,s as a,y as u,c as k,I as s,j as d,a as r,a2 as h,D as l,o as E}from"./chunks/framework.D0RADW2p.js";const b=d("h1",{id:"autocomplete-自动完成",tabindex:"-1"},[r("AutoComplete 自动完成 "),d("a",{class:"header-anchor",href:"#autocomplete-自动完成","aria-label":'Permalink to "AutoComplete 自动完成"'},"​")],-1),y=d("h2",{id:"基本用法",tabindex:"-1"},[r("基本用法 "),d("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),m=h('<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">autocomplete</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><h2 id="其他数据源用法" tabindex="-1">其他数据源用法 <a class="header-anchor" href="#其他数据源用法" aria-label="Permalink to &quot;其他数据源用法&quot;">​</a></h2>',2),g=h(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">autocomplete</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  api</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qcc_open&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  history-storage-key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qcc-open-company-history&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">auto-focus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  submit-button-label</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;查一查&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  placeholder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;请输入企业名称或统一社会信用代码&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>v-model</td><td>绑定值</td><td><code>string</code></td><td>-</td></tr><tr><td>api</td><td>查询数据源</td><td><code>string</code></td><td>clearbit</td></tr><tr><td>query-delay</td><td>查询数据延迟</td><td><code>number</code></td><td>500</td></tr><tr><td>placeholder</td><td>输入占位符内容</td><td><code>string</code></td><td>Input company name</td></tr><tr><td>clearable</td><td>显示清除按钮</td><td><code>boolean</code></td><td>true</td></tr><tr><td>backFill</td><td>使用键盘选择选项的时候把选中项回填到输入框中</td><td><code>boolean</code></td><td>true</td></tr><tr><td>popup-append-to-body</td><td>是否插入至 body 元素上</td><td><code>boolean</code></td><td>true</td></tr><tr><td>auto-focus</td><td>自动获取焦点</td><td><code>boolean</code></td><td>true</td></tr><tr><td>show-submit-button</td><td>显示提交按钮</td><td><code>boolean</code></td><td>true</td></tr><tr><td>submit-button-label</td><td>提交按钮文字</td><td><code>string</code></td><td>Submit</td></tr><tr><td>offset-top</td><td>距离文本框底部的偏移值</td><td><code>number</code></td><td>5</td></tr><tr><td>auto-flip</td><td>文本框是否自动翻转</td><td><code>boolean</code></td><td>false</td></tr><tr><td>history-enabled</td><td>打开保存历史记录</td><td><code>boolean</code></td><td>true</td></tr><tr><td>history-type</td><td>保存历史记录模式</td><td><code>string</code></td><td>localStorage</td></tr><tr><td>history-storage-key</td><td>保存历史记录键</td><td><code>string</code></td><td>company-history</td></tr><tr><td>history-clearable</td><td>显示历史记录清除按钮</td><td><code>boolean</code></td><td>true</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>input</td><td>当输入值改变时触发</td><td><code>Function</code></td></tr><tr><td>change</td><td>当输入值改变时触发</td><td><code>Function</code></td></tr><tr><td>fetch</td><td>查询数据时触发</td><td><code>Function</code></td></tr><tr><td>abort-fetch</td><td>当中止查询数据时触发</td><td><code>Function</code></td></tr><tr><td>select</td><td>当单击建议时触发</td><td><code>Function</code></td></tr><tr><td>clear</td><td>当单击文本框清除按钮时触发</td><td><code>Function</code></td></tr><tr><td>focus</td><td>当输入聚焦时触发</td><td><code>Function</code></td></tr><tr><td>blur</td><td>当输入取消聚焦时触发</td><td><code>Function</code></td></tr><tr><td>submit</td><td>按钮提交时触发</td><td><code>Function</code></td></tr><tr><td>dropdown-visible-change</td><td>当下拉菜单出现/消失时触发</td><td><code>Function</code></td></tr></tbody></table>`,6),_=JSON.parse('{"title":"AutoComplete 自动完成","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"zh/components/vue/autocomplete.md","filePath":"zh/components/vue/autocomplete.md"}'),F={name:"zh/components/vue/autocomplete.md"},B=c({...F,setup(v){a("clearbit");const i=a(""),o=a("");return u(()=>{}),(C,t)=>{const p=l("el-backtop"),n=l("autocomplete",!0);return E(),k("div",null,[s(p),b,y,s(n,{modelValue:i.value,"onUpdate:modelValue":t[0]||(t[0]=e=>i.value=e),placeholder:"Input company name"},null,8,["modelValue"]),m,s(n,{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=e=>o.value=e),api:"qcc_open","history-storage-key":"qcc-open-company-history","auto-focus":!1,"submit-button-label":"查一查"},null,8,["modelValue"]),g])}}});export{_ as __pageData,B as default};
