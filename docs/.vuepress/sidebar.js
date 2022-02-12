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
  '/post/algorithm/': [
    ['', '介绍'],
    ['add-two', '两数之和'],
    {
      title: '链表',
      name: 'linked-list',
      collapsable: false,
      children: [
        ['linked-list/reverse', '链表反转']
      ]
    },
    {
      title: '排序算法',
      name: 'sort',
      collapsable: false,
      children: [
        ['sort/bubble-sort', '冒泡排序'],
        ['sort/quick-sort', '快排']
      ]
    }
  ]
}