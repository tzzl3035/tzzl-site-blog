import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const dp = defineNoteConfig({
  dir: '动态规划',
  link: '/dp',
  sidebar: [''],
})

const graph = defineNoteConfig({
  dir: '图论',
  link: '/graph',
  sidebar: [''],
})

const maths = defineNoteConfig({
  dir: '数学',
  link: '/maths',
  sidebar: [''],
})

const data = defineNoteConfig({
  dir: '数据结构',
  link: '/data',
  sidebar: [''],
})

const others = defineNoteConfig({
  dir: '杂项',
  link: '/others',
  sidebar: [''],
})

export const notes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [dp, graph, maths, data, others],
})
