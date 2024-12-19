import{_ as i,c as a,a as n,o as h}from"./app-B38YvpGI.js";const k={};function t(l,s){return h(),a("div",null,s[0]||(s[0]=[n(`<h3 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h3><p>又称<mark>Trie树</mark>，顾名思义，长得像字典的树。</p><h3 id="基本思想" tabindex="-1"><a class="header-anchor" href="#基本思想"><span>基本思想</span></a></h3><p>维护一棵<mark>带有边权的树</mark>，已解决<mark>字符串</mark>相关问题。</p><h3 id="例题" tabindex="-1"><a class="header-anchor" href="#例题"><span>例题</span></a></h3><p><a href="https://www.luogu.com.cn/problem/P8306" target="_blank" rel="noopener noreferrer">【模板】字典树</a></p><h3 id="模板代码" tabindex="-1"><a class="header-anchor" href="#模板代码"><span>模板代码</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> nex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3000003</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">][</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">75</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">],</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> cnt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 插入</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">auto</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ins </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&amp;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">std</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> nod </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ++</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> c </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">nex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nod</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line highlighted"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">      nex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nod</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ++</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">cnt</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    nod </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> nex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nod</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 查询</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">auto</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> fin </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&amp;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">](</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">std</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">string</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> -&gt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> bool</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">  int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> nod </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">size</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ++</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> c </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> s</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> -</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &#39;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&#39;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">    if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">nex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nod</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">])</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line highlighted"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">      return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line highlighted"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    nod </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> nex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">nod</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">][</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">];</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  }</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">  return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const e=i(k,[["render",t],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/others/qmyu3xvm/","title":"字典树","lang":"zh-CN","frontmatter":{"title":"字典树","createTime":"2024/12/17 13:18:55","permalink":"/others/qmyu3xvm/","tags":["字符串"],"description":"简介 又称Trie树，顾名思义，长得像字典的树。 基本思想 维护一棵带有边权的树，已解决字符串相关问题。 例题 【模板】字典树 模板代码","head":[["meta",{"property":"og:url","content":"https://tzzl.site/others/qmyu3xvm/"}],["meta",{"property":"og:site_name","content":"tzzl.site"}],["meta",{"property":"og:title","content":"字典树"}],["meta",{"property":"og:description","content":"简介 又称Trie树，顾名思义，长得像字典的树。 基本思想 维护一棵带有边权的树，已解决字符串相关问题。 例题 【模板】字典树 模板代码"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-17T05:35:17.000Z"}],["meta",{"property":"article:tag","content":"字符串"}],["meta",{"property":"article:modified_time","content":"2024-12-17T05:35:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"字典树\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-17T05:35:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.51,"words":152},"git":{"updatedTime":1734413717000,"contributors":[{"name":"tzzl3035","username":"tzzl3035","email":"tzzl3035@163.com","commits":2,"avatar":"https://avatars.githubusercontent.com/tzzl3035?v=4","url":"https://github.com/tzzl3035"}]},"autoDesc":true,"filePathRelative":"notes/杂项/字典树.md","bulletin":false}');export{e as comp,r as data};
