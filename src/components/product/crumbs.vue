<template>
  <div class="m-crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.city}}美团</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
};
</script>
<style scoped>
</style>