import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Test from '@/components/Test'
import Posts from '@/components/Posts'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: Index
    },
    {
      path:'/test',
      name:'Test',
      component: Test
    },
    {
      path:'/posts',
      name:'Posts',
      component: Posts
    }
  ]
})
