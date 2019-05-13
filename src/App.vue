<template>
  <div id="app">
    <!-- 顶部header区域 -->
    <!-- <mt-header fixed title="我的VUE"></mt-header> -->
    <!-- 中级 -->

    <!-- 底部 -->
    <!-- $route指当前路由 -->
      <tabbar v-show="$route.meta.showFooter"></tabbar>

    <router-view/>
  </div>
</template>

<script>
// import tabbar from './components/tabbar'
import {reqCategorys} from './api'
import tabbar from './components/FooterGuide/FooterGuide.vue'

export default {
  data () {
    return {}
  },
  async mounted () {
    this.$store.dispatch('getAddress')
  },
  components: {
    tabbar
  },
  name: 'App'
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
