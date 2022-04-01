import Vue from 'vue'
import Router from 'vue-router'

// Layout
// import Layout from '@/layout'

Vue.use(Router)

// Router Modules  = 路由器模板
import HelloWorld from '@/components/HelloWorld'

// *不变的 路由
// *没有权限要求的基页
// *所有角色都可以访问
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

export const constantRoutes = [
  {
    path:'/',
    name:'HelloWorld',
    component:HelloWorld
  }
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y:0 }),
  routes: constantRoutes
})

const router = createRouter () 

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher //重定向 路由
}

export default router