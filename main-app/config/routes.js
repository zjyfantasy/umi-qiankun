export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          {
            name: 'login',
            path: '/user/login',
            component: './user/Login',
          },
        ],
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  // 配置微应用 app1 关联的路由
  {
    name: '子应用1',
    path: '/app1',
    microApp: 'sub-app-1',
    routes: [
      {
        name: 'Welcome',
        icon: 'smile',
        path: '/app1/welcome',
      },
      {
        name: 'table-list',
        icon: 'table',
        path: '/app1/list',
      },
    ],

  },
  // 配置微应用 app1 关联的路由
  {
    name: '子应用2',
    path: '/app2',
    microApp: 'sub-app-2',
    routes: [
      {
        name: 'Welcome',
        icon: 'smile',
        path: '/app2/welcome',
      },
      {
        name: 'table-list',
        icon: 'table',
        path: '/app2/list',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
