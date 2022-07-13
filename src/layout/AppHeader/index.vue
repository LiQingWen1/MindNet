<template>
  <div class="headers">
    <tage-views></tage-views>
    <div class="header-sort">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar :size="40" :src="circleUrl"></el-avatar>
          <span>{{ username }}</span
          ><i class="el-icon-arrow-down el-icon--right"></i>
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
import { getInfo } from '../../api/user'
import TageViews from '../../components/TageViews.vue'
export default {
  data() {
    return {
      username: '',
      circleUrl: '',
      sizeList: ['small']
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
      // console.log(res)
      this.username = res.username
      this.circleUrl = res.avatar
    })
  },
  mounted() {},
  components: {
    TageViews
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.header-sort {
  display: flex;
  align-items: center;
  line-height: 50px;
  .el-dropdown {
    position: fixed;
    right: 20px;
    top: 0px;
  }
  span {
    display: inline-block;
    height: 100%;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.el-icon-s-fold {
  font-size: 20px;
}
.el-avatar {
  margin-right: 10px;
}
</style>
