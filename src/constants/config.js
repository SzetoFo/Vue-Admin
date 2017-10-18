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
    key: '/user',
    title: '用户管理',
    icon: 'navicon',
    children: [
      {
        key: '/user/index',
        title: 'Sub Page',
        icon: 'document'
      },
    ]
  }
]

export function generateRoute(components){
  //获取默认页面组件
  var indexCom=components.filter(function(item){
    if(item.isMain)
    return item;
  });


  var routers=[
    {
      path:'/',
      redirect: '/index'
    },
    {
      path:'/index',
      component:indexCom[0],
      meta:{title:'主页'},
      children:[

      ]
    }
  ];

  menus.forEach(function(item) {
    if(item.children){
      routers.push(
        {

        }
      )
    }
  }, this);

  return components[0].name
}