<template>
  <div class="layout-default">
    <el-container>
      <el-header height="100%">
          <my-header />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer height="100%">
          <my-footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import myHeader from '../components/header/index'
import myFooter from '../components/footer/index'
export default {
  components: {
    myHeader: myHeader,
    myFooter
  }
}
</script>
<style lang="scss">
    @import "../assets/css/public/layout.scss"
</style>
