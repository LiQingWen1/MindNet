<template>
  <div class="head">
    <div class="right">
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-rank" style="font-size: 20px"></i>
            <i class="el-icon-circle-close" style="font-size: 20px"></i>
            <span>Duck</span>
            <i class="el-icon-arrow-down" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人设置</el-dropdown-item>
              <el-dropdown-item command="logOut">安全退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped></style>
