const FE_CONFIG = [
  ['', '前端'],
  {
    title: '浏览器',
    name: 'browser',
    collapsable: false,
    children: [
      ['browser/', '目录'],
      ['browser/org', '浏览器的架构']
    ]
  },
  {
    title: 'React',
    name: 'react',
    collapsable: false,
    children: [
      ['react/hooks', 'Hooks原理'],
      ['react/redux', 'Redux'],
      ['react/optimize', 'React优化']
    ]
  },
  {
    title: 'Vue',
    name: 'vue',
    collapsable: false,
    children: [
      ['vue/feature3', 'Vue3新的特性'],
      ['vue/keep-alive', 'keep-alive'],
      ['vue/reactive', 'Vue响应式原理'],
      ['vue/source','Vue源码分析']
    ]
  },
  {
    title: 'Webpack',
    name: 'webpack',
    collapsable: false,
    children: [
      ['web-pack/', 'webpack介绍'],
      ['web-pack/loader', 'loader使用与原理'],
      ['web-pack/plugin', 'plugin使用与原理'],
      ['web-pack/treeshaking', 'TreeShaking'],
    ]
  },
  {
    title: '工程化',
    name: '工程化',
    collapsable: false,
    children: [
      ['engineering/module', '模块化(CommonJS,CMD,ESM)'],
    ]
  },
  {
    title: 'TypeScript',
    name: 'typescript',
    collapsable: false,
    children: [
      ['ts/background', '使用场景'],
    ]
  },
  {
    title: '工程实践',
    name: 'practice',
    collapsable: false,
    children: [
      ['practice/upload', '大文件上传'],
      ['practice/css-theme', 'CSS主题设置'],
    ]
  },
]

const ALGORITHM_CONFIG =  [
  ['', '介绍'],
  ['add-two', '两数之和'],
  ['add-three', '三数之和'],
  ['shuffle', '洗牌算法'],
  ['lazy-man', 'Lazyman算法'],
  ['currying', '函数柯里化'],
  {
    title: '链表',
    name: 'linked-list',
    collapsable: false,
    children: [
      ['linked-list/reverse', '链表反转'],
      ['linked-list/add-two-number', '两数相加'],
      ['linked-list/merge-linked-list', '合并两个有序链表']
    ]
  },
  {
    title: '字符串',
    name: 'string',
    collapsable: false,
    children: [
      ['string/longest-palindrome', '最长子串'],
      ['string/length-of-longest-substring', '无重复字符串的最长字串'],
      ['string/youxiaokuohao', '有效括号'],
      ['string/kuohaoshengcheng', '括号生成']
    ]
  },
  {
    title: '排序算法',
    name: 'sort',
    collapsable: false,
    children: [
      ['sort/bubble-sort', '冒泡排序'],
      ['sort/quick-sort', '快速排序'],
      ['sort/binary-sort', '二分排序']
    ]
  }
]

const COMPUTER_CONFIG = [
  ['', '计算机基础'],
  {
    title: 'http相关',
    name: 'http',
    collapsable: false,
    children: [
      ['http/cache', 'http缓存'],
      ['http/detail', 'http组成'],
      ['http/cookie', 'http cookie'],
      ['http/safety', 'http安全'],
      ['http/http2', 'http1.1和http2'],
    ]
  }
]

const LEADING_CONFIG = [
  ['', '前沿技术'],
  ['pnpm', 'pnpm与npm和yarn'],
  {
    title: 'go',
    name: 'go',
    collapsable: false,
    children: [
    ],
  },
  {
    title: 'rust',
    name: 'rust',
    collapsable: false,
    children: [
    ]
  }
]

module.exports = {
  '/post/fe/': FE_CONFIG,
  '/post/algorithm/': ALGORITHM_CONFIG,
  '/post/computer/': COMPUTER_CONFIG,
  '/post/leading/': LEADING_CONFIG
}