module.exports = {
  '/post/fe/': [
    ['', '前端'],
    {
      title: '浏览器',
      name: 'browser',
      collapsable: false,
      children: [
        ['browser/', '目录'],
        ['browser/org', '浏览器的架构']
      ]
    }
  ],
  '/post/react/': [
    ['', '介绍'],
    ['redux', 'redux原理'],
    {
      title: 'react技术',
      name: 'react-tech',
      collapsable: false,
      children: [
        ['react-tech/hooks', 'hooks原理'],
      ]
    }
  ],
  '/post/algorithm/': [
    ['', '介绍'],
    ['add-two', '两数之和'],
    ['add-three', '三数之和'],
    ['shuffle', '洗牌算法'],
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
  ],
  '/post/computer/': [
    ['', '计算机基础'],
    {
      title: 'http相关',
      name: 'http',
      collapsable: false,
      children: [
        ['http/cache', 'http缓存'],
        ['http/detail', 'http组成'],
        ['http/safety', 'http安全'],
        ['http/http2', 'http1.1和http2'],
      ]
    }
  ]
}