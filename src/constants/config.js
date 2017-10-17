//
//
export default {
  logoUrl: require('../assets/logo.png'),
  appName: 'mdmp',
  defaultPage: '/dashboard',
}


export const menus = [
  {
    key: '/index',
    title: '首页',
    icon: 'stats-bars',
  },
  {
    key: '/User',
    title: '用户管理',
    icon: 'navicon',
    children: [
      {
        key: '/User/index',
        title: 'Sub Page',
        icon: 'document'
      },
    ]
  }
]
