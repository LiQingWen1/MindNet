<template>
  <div class="search">
    <div class="search-left">
      <span class="txt">用户名</span>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
      <el-button type="success" icon="el-icon-search">查询</el-button>
    </div>
    <div class="search-right">
      <el-button type="primary" icon="el-icon-edit">新增</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  },
  methods: {},
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.search {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 65px;
  .search-left {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .txt {
      margin-right: 10px;
      display: block;
      width: 100px;
    }
    .el-button--success {
      margin-left: 10px;
    }
  }
}
</style>
