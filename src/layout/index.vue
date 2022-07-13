<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <AppAside></AppAside>
      </el-aside>
      <el-container>
        <el-header>
          <AppHeader></AppHeader>
        </el-header>
        <el-main>
          <AppMain></AppMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppAside from '@/layout/AppAside'
import AppMain from '@/layout/AppMain'
import AppHeader from '@/layout/AppHeader'
export default {
  name: 'index',
  components: {
    AppAside,
    AppHeader,
    AppMain
  },
  data() {
    return {}
  },
  methods: {}, //  事件方法
  created() {}, //  页面加载时调用
  mounted() {} //  页面加载后操作DOM节点
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: $header-bg-color;
  color: hotpink;
  line-height: 60px;
}

.el-aside {
  background-color: $aside-bg-color;
  color: firebrick;
}

.el-main {
  background-color: $main-bg-color;
  color: green;
}
</style>
