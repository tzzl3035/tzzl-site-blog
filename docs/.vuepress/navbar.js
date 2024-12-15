import { defineNavbarConfig } from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '博客', link: '/blog/' },
  { text: '标签', link: '/blog/tags/' },
  { text: '归档', link: '/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '动态规划', link: '/notes/动态规划/README.md' }, 
            { text: '图论', link: '/notes/图论/README.md' }, 
            { text: '数学', link: '/notes/数学/README.md' }, 
            { text: '数据结构', link: '/notes/数据结构/README.md' }, 
            { text: '杂项', link: '/notes/杂项/README.md' }]
  },
])
