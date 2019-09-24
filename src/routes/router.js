import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Detail from '@/views/Detail'

Vue.use(Router)

const router = new Router({

  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
    props: true
  }, ]
})

export default router