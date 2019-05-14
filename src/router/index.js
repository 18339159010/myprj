import Vue from 'vue'
import Router from 'vue-router'
import MSite from '@/component/MSite/MSite'
import Order from '@/component/Order/Order'
import Profile from '@/component/Profile/Profile'
import Search from '@/component/Search/Search'
import Login from '@/component/Login/Login'

import Shop from '../component/Shop/Shop.vue'
import ShopGoods from '../component/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../component/Shop/ShopRatings/ShopRatings.vue'
import ShopInfo from '../component/Shop/ShopInfo/ShopInfo.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/msite',
      meta: {
        // 元数据
        showFooter: true
      }
    },
    {
      path: '/MSite',
      name: '首页',
      component: MSite,
      meta: {
        // 元数据
        showFooter: true
      }
    }, {
      path: '/Order',
      name: '会员',
      component: Order,
      meta: {
        // 元数据
        showFooter: true
      }
    }, {
      path: '/Profile',
      name: '购物车',
      component: Profile,
      meta: {
        // 元数据
        showFooter: true
      }
    }, {
      path: '/Search',
      name: '搜索',
      component: Search,
      meta: {
        // 元数据
        showFooter: true
      }
    }, {
      path: '/Login',
      name: '登录',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
  // linkActiveClass: 'mui-active'// 覆盖默认路由高亮的类 默认类名叫做 router-link-active
})
