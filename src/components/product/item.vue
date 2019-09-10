<template>
    <dl class="s-item">
        <dt @click="toDetail(storeData.title)">
            <img :src="storeData.image" :alt="storeData.title">
        </dt>
        <dd>
            <h3><router-link :to="{name: 'productDetail'}">{{storeData.title}}</router-link></h3>
            <p>
                <el-rate
                v-model="storeData.score"
                disabled
                text-color="#ff9900"
                score-template="{value}">
                </el-rate>
                <span v-if="storeData.score > 4.5">很好</span>
                <span v-else-if="storeData.score > 4">好</span>
                <span v-else-if="storeData.score > 3.5">不错</span>
                <span v-else-if="storeData.score > 4.5">一般</span>
                <span v-else>很差</span>
                <span>{{storeData.score}}分</span>
                <span class="s-item-comment-total">{{storeData.commentNum}}人评论</span>
            </p>
            <p>
                <span>
                    <span v-for="(item, index) in storeData.tab" :key="index">
                    <span v-if="index < storeData.tab.length - 1">{{item}}|</span>
                    <span v-else>{{item}}</span>
                </span>
                </span>
                <span>{{storeData.address}}</span>
                <span class="map"><i class="el-icon-location"></i>查看地图</span>
            </p>
            <p>
                <span class="avg-price">人均￥{{storeData.avgPrice}}</span>
            </p>
            <ul class="deal-items">
                <li class="items" v-for="(item, index) in storeData.dealItems" :key="index" >
                    <p class="deal-title">{{item.title}}
                    </p>
                    <p>
                        <span class="deal-price">￥{{item.price}}</span>
                        <span class="deal-old-price">门市价￥{{item.counterPrice}}</span>
                        <span class="deal-sales">已售{{item.saleNum}}</span>
                    </p>
                </li>
            </ul>
            <span v-if="storeData.dealItems.length - 2 > 0" @click="more" class="more">更多{{storeData.dealItems.length-2}}个优惠<i class="el-icon-arrow-down"></i></span>
        </dd>
    </dl>
</template>
<script>
export default {
    props: ["storeData"],
    data() {
        return {
            showMore : false
        }
    },
    methods: {
        toDetail(title) {
            this.$router.push({name: 'detail', params: {name: title}})
        }
    }
}
</script>
<style scoped>

</style>