import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Article from '@/components/Article'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'homepage',
      path: '/',
      component: Homepage
    },
    {
      name: 'article',
      path: '/article/:articleId',
      component: Article
    },
    {
      name: 'page',
      path: '/page/:pageId',
      component: Page
    }
  ]
})
