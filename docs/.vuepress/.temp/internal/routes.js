export const redirects = JSON.parse("{\"/%E6%9D%82%E9%A1%B9/markdown.html\":\"/article/2usip6o0/\",\"/%E6%9D%82%E9%A1%B9/%E4%BB%8B%E7%BB%8D.html\":\"/article/eqmcpm7m/\",\"/notes/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92/\":\"/dp/\",\"/notes/%E5%9B%BE%E8%AE%BA/\":\"/graph/\",\"/notes/%E6%95%B0%E5%AD%A6/\":\"/maths/\",\"/notes/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/\":\"/data/\",\"/notes/%E6%9D%82%E9%A1%B9/\":\"/others/\",\"/notes/%E6%9D%82%E9%A1%B9/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3.html\":\"/others/o9uyfhib/\"}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/2usip6o0/", { loader: () => import(/* webpackChunkName: "article_2usip6o0_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/article/2usip6o0/index.html.js"), meta: {"title":"Markdown"} }],
  ["/article/eqmcpm7m/", { loader: () => import(/* webpackChunkName: "article_eqmcpm7m_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/article/eqmcpm7m/index.html.js"), meta: {"title":"介绍"} }],
  ["/dp/", { loader: () => import(/* webpackChunkName: "dp_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/dp/index.html.js"), meta: {"title":"动态规划"} }],
  ["/graph/", { loader: () => import(/* webpackChunkName: "graph_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/graph/index.html.js"), meta: {"title":"图论"} }],
  ["/maths/", { loader: () => import(/* webpackChunkName: "maths_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/maths/index.html.js"), meta: {"title":"数学"} }],
  ["/data/", { loader: () => import(/* webpackChunkName: "data_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/data/index.html.js"), meta: {"title":"数据结构"} }],
  ["/others/", { loader: () => import(/* webpackChunkName: "others_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/others/index.html.js"), meta: {"title":"杂项"} }],
  ["/others/o9uyfhib/", { loader: () => import(/* webpackChunkName: "others_o9uyfhib_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/others/o9uyfhib/index.html.js"), meta: {"title":"滑动窗口"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"D:/documents/Langston_code/tzzl-site-blog/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
