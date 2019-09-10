<template>
  <div class="m-istyle">
    <dl :class="nav.clas" @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd v-for="(item, index) in nav.list" :key="index" :class="{active: type == item.tag }" :data-type="item.tag">{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item, index) in nav.data[type]" :key="index" @click="toDetail(item)">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img
            :src="item.image"
            class="image"
          />
          <div class="cbody">
            <div class="title" :title="item.title">{{item.title}}</div>
            <div class="sub-title" :title="item.subTitle">{{item.subTitle}}</div>
            <div class="price-info" v-if="!item.rentNum || !item.currentPrice || !item.oldPrice || !item.avgPrice">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">￥</span>
                <span class="current-price numfont">{{item.price}}</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="item.rentNum && item.currentPrice && item.oldPrice">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.currentPrice}}</span>
              </span>
              <span class="old-price">门市价¥{{item.oldPrice}}</span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="!item.rentNum">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">抢光了</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
            <div class="price-info" v-else-if="item.avgPrice">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.avgPrice}}</span>
                <span class="units">/人均</span>
              </span>
              <span class="sold bottom-right-info">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import api from "@/api"
export default {
    data() {
        return{
            type: "all"
        }
    },
    props: ["nav"],
    methods: {
        over(event) {
            if(event.target.nodeName != "DD"){
                return false;
            }
            this.type = event.target.getAttribute("data-type");
            //发送请求获取list
        },
        toDetail(item) {
        this.$router.push({name: 'detail' , params:{name: item.title}});
      }
    },
    created() {

    }
};
</script>
<style scoped>
</style>