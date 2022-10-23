export const MenuData = [
  {
    id: 0,
    title: '主页',
    url: 'homepage',
    isSingle: true
  },
  {
    id: 1,
    title: '字典管理',
    children: [
      {
        id: 2,
        title: '字典数据',
        url: 'home/dict/info'
      }
    ]
  },
  {
    id: 6,
    title: '文章管理',
    children: [
      {
        id: 7,
        title: '文章列表',
        url: 'home/articleList'
      }
    ]
  },
  {
    id: 3,
    title: '文章编译',
    url: 'home/editor',
    isSingle: true
  },
  {
    id: 4,
    title: '评论管理',
    url: 'home/record',
    isSingle: true
  }
]
