<template>
  <el-container class="home_container">
    <!--    头部-->
    <el-header>Header
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <!--    主体-->
    <el-container>
      <!--      侧边栏-->
      <el-aside width="200px">Aside</el-aside>
      <!--      内容-->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    logout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
.el-header{
  background: #373d41;
}
.el-aside{
  background: #333744;
}
.el-main{
  background: #eaedf1;
}
.home_container{
  height: 100%;
}
</style>