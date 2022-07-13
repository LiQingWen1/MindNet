<template>
  <div class="aside">
    <el-menu
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
      >
      <el-menu-item index="/profile">
        <i class="el-icon-setting"></i>
        <span slot="title">控制台</span>
      </el-menu-item>

      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/users">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="/roles">
          <i class="el-icon-setting"></i>
          <span slot="title">角色管理</span>
        </el-menu-item>
        <el-menu-item index="/menus">
          <i class="el-icon-setting"></i>
          <span slot="title">菜单管理</span>
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss" scoped>
.aside {
  width: 100%;
  height: 100vh;
  background: #222d32;
}
.el-menu{
  background-color: $aside-bg-color;
}
</style>
