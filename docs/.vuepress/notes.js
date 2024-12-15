import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const dp = defineNoteConfig({
  dir: '动态规划',
  link: '/dp',
  sidebar: 'auto',
})

const graph = defineNoteConfig({
  dir: '图论',
  link: '/graph',
  sidebar: 'auto',
})

const maths = defineNoteConfig({
  dir: '数学',
  link: '/maths',
  sidebar: 'auto',
})

const data = defineNoteConfig({
  dir: '数据结构',
  link: '/data',
  sidebar: 'auto',
})

const others = defineNoteConfig({
  dir: '杂项',
  link: '/others',
  sidebar: 'auto',
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [dp, graph, maths, data, others],
})
