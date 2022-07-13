<template>
  <div>
    <crumbs class="crumbs"></crumbs>
    <router-view></router-view>
  </div>
</template>
<script>
import crumbs from '../../components/crumbs.vue'
export default {
  data() {
    return {}
  },
  methods: {}, //  事件方法
  created() {}, //  页面加载时调用
  mounted() {}, //  页面加载后操作DOM节点
  components: {
    crumbs
  }
}
</script>
<style lang="scss" scoped>
.crumbs{
  background-color: #fff;
  // height: 30px;
  padding: 20px;
}
</style>
