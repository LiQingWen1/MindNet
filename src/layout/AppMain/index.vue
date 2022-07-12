<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
    </el-breadcrumb>
    <h1 style="margin-top: 20px; font-size: 20px; color: #1e1e1e">
      用户名
      <input
        type="text"
        placeholder="请输入内容"
        style="width: 200px; height: 35px"
      />
      <el-button type="success" icon="el-icon-search">查询</el-button>
      <el-button type="primary" icon="el-icon-edit">新增</el-button>
    </h1>
    <el-container>
      <el-main>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column
            prop="code"
            label="序号"
            width="140"
          ></el-table-column>
          <el-table-column prop="username" label="用户名" width="120">
          </el-table-column
          ><el-table-column prop="avatar" label="头像" width="140">
          </el-table-column
          ><el-table-column prop="name" label="角色" width="140">
          </el-table-column>
          <el-table-column prop="email" label="邮箱" width="140">
          </el-table-column>
          <el-table-column prop="updateTime" label="注册时间" width="140">
          </el-table-column>
          <el-table-column prop="status" label="状态" width="140">
            <el-switch active-color="#13ce66" inactive-color="#ff4949">
            </el-switch>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
    <el-pagination
      :page-sizes="[5, 10, 15, 20]"
      :page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="100"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data() {
    const item = {
      code: '1',
      username: '王小虎',
      avatar: '',
      name: '超级管理员',
      email: '65335@qq.com',
      updateTime: '2016-05-02',
      status: ''
    }
    return {
      tableData: Array(2).fill(item)
    }
  }
}
</script>
