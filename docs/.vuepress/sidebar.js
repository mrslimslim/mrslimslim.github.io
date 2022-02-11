module.exports = {
  '/post/fe/': [
    ['', '前端'],
    {
      title: '浏览器',
      name: 'browser',
      collapsable: false,
      children: [
        ['browser/','目录'],
        ['browser/org','浏览器的架构']
      ]
    }
  ],
  '/post/algorithm/': [
    ['', '介绍'],
    {
      title: '链表',
      name: 'linkedlist',
      collapsable: false,
      children: [
        ['linkedlist/reverse', '链表反转']
      ]
    },
    {
      title: '',
      name: '',
    }
  ]
}