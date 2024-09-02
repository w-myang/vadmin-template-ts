import Main from "_c/main/index.vue"

export default [
  {
    path: "/",
    name: "_home",
    redirect: "/home",
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true,
    },
    children: [
      {
        path: "/home",
        name: "home",
        meta: {
          hideInMenu: true,
          title: "首页",
          notCache: true,
        },
        component: () => import("@/views/test/index.vue"),
      },
    ],
  },
  {
    path: '/test',
    name: '页面',
    meta: {
      hideInMenu:false,
      icon: 'TrendCharts',
      title: '测试',
    },
    component: Main,
    children: [
      {
        path: "page1",
        name: "页面1",
        meta: {
          title: "页面1"
        },
        component: () => import("@/views/test/index.vue")
      },
      {
        path: "page2",
        name: "页面2",
        meta: {
          title: "页面2"
        },
        component: () => import("@/views/test/index.vue")
      },
    ]
  },
  // {
  //   path: "/401",
  //   name: "error_401",
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import("@/views/error-page/401.vue")
  // },
  // {
  //   path: "/500",
  //   name: "error_500",
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import("@/views/error-page/500.vue")
  // },
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "error_404",
  //   meta: {
  //     hideInMenu: true
  //   },
  //   component: () => import("@/views/error-page/404.vue")
  // },
];