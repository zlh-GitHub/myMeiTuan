<template>
    <div class="page-product">
        <el-row>
            <crumbs />
        </el-row>
        <el-row>
            <el-col :span="19">
                <el-row><categroy /></el-row>
                <el-row><list /></el-row>
            </el-col>
            <el-col :span="5">猜你喜欢</el-col>
        </el-row>
    </div>
</template>
<script>
import crumbs from "../components/product/crumbs"
import categroy from "../components/product/categroy"
import list from "../components/product/list"
export default {
    components: {
        crumbs,
        categroy,
        list
    }
}
</script>
<style lang="scss">
    @import "@/assets/css/products/index.scss";
    @import "@/assets/css/products/list.scss";
</style>