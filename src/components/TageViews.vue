<template>
  <div>
    <el-tag
      class="tagviwe"
      :key="index"
      v-for="(tag, index) in itemList"
      @click="$router.push(`${tag.pathTo}`)"
    >
      {{ tag.title }} <span @click.stop="delto(index)">x</span>
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState('dynamic', ['itemList'])
  },
  methods: {
    delto(index) {
      this.del(index)
    },
    ...mapActions({
      del: 'dynamic/del'
    })
  }, //  事件方法
  created() {}, //  页面加载时调用
  mounted() {} //  页面加载后操作DOM节点
}
</script>

<style lang="scss" scoped>
.tagviwe {
  height: 50px;
  line-height: 50px;
  font-size: 24px;
  margin-left: 20px;
  span {
    cursor: pointer;
  }
}
</style>
