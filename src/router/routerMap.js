import Vue from 'vue'
import Router from 'vue-router'

const Frame = () => import('@/components/frames/frame')
const Layout = () => import('@/components/frames/layout')

const Login = () => import('@/views/common/login')
const ErrorPage = () => import('@/views/common/404')

const Index = () => import('@/views/index')

const UserList = () => import('@/views/user_list')

Vue.use(Router)

export const routerMap = [{
  path: '/',
  name: 'frame',
  component: Frame,
  children: [{
    path: '/index',
    name: 'index',
    component: Index,
    meta: {
      auth: true,
      title: '主页',
      icon: 'iconfont icon-index-on'
    }
  },
  {
    path: '/personnel',
    name: 'personnel',
    component: Layout,
    meta: {
      auth: true,
      title: '人员管理',
      icon: 'iconfont icon-renyuanguanli'
    },
    children: [{
      path: '/personnel/userList',
      name: 'userList',
      component: UserList,
      meta: {
        auth: true,
        title: '用户列表'
      }
    }]
  }],
  redirect: '/index'
}]

const router = new Router({
  mode: 'hash',
  linkActiveClass: 'is-active',
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    name: 'error',
    component: ErrorPage
  }].concat(routerMap)
})

export default router
