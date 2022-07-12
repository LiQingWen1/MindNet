<template>
  <div class="headers">
    <div class="header-sort">
      <el-dropdown>
        <span class="el-dropdown-link" :username="username">
          <!-- <el-avatar :src="circleUrl"></el-avatar> -->
          duck<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="withdrawing"
            >安全退出</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { removeItem } from '@/utils/storage'
import { getInfo } from '@/api/user'
export default {
  data() {
    return {
      username: '',
      circleUrl: '',
      sizeList: ['large', 'medium', 'small']
    }
  },
  methods: {
    withdrawing() {
      console.log(1)
      this.$router.push('/login')
      removeItem('token')
    }
  },
  created() {
    getInfo().then((res) => {
      console.log(res)
      this.username = res.username
      this.circleUrl = res.avtar
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header-sort {
  display: flex;
  align-items: center;
  .el-dropdown {
    position: fixed;
    right: 20px;
    top: 0px;
  }
  span {
    color: #fff;
    font-size: 20px;
  }
}
.el-icon-s-fold {
  font-size: 20px;
}
.el-avatar {
  margin-top: 10px;
}
</style>
