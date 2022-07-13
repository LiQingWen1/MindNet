<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理 </el-breadcrumb-item>
      <el-breadcrumb-item>{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {},
  created() {},
  mounted() {},
  computed: {
    ...mapState('mabel', ['item'])
  }
}
</script>
<style lang="scss" scoped></style>
