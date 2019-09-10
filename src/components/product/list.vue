<template>
  <div class="m-products-list">
    <ul>
      <li v-for="item in nav" :key="item.key" :class="{'s-nav-active': item.active}">{{item.name}}</li>
    </ul>
    <el-row>
      <item v-for="(item, index) in storeData" :key="index" :storeData="item"/>
    </el-row>
  </div>
</template>
<script>
import api from "@/api"
import item from "../product/item";
export default {
  data() {
    return {
      nav: [
        {
          key: "s-default",
          name: "智能排序",
          active: true
        },
        {
          key: "s-price",
          name: "价格排序",
          active: false
        },
        {
          key: "s-hot",
          name: "人气排序",
          active: false
        },
        {
          key: "s-score",
          name: "评价最高",
          active: false
        }
      ],
      storeData: [
        {
          image: "//p0.meituan.net/msmerchant/054b5de0ba0b50c18a620cc37482129a45739.jpg@275w_156h_1e_1c",
          title: "火鸡老店",
          type: "food",
          score: 4.1,
          commentNum: 100,
          comment: [
            {
              username: "xxxx",
              evalaute: "好吃"
            }
          ],
          tab: ["火锅", "沙河"],
          address: "昌平区小汤山尚信村沿温榆河畔北岸向西3.5公里",
          avgPrice: 64,
          dealItems: [
            {
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元"
            },{
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元"
            },{
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元"
            },{
              title: "火鸡宴，建议10-14人使用",
              price: 909,
              counterPrice: 1150,
              saleNum: 0,
              priceType: "元"
            }
          ]
        }
      ]
    };
  },
  components: {
    item
  },
  created() {
    api.getGoodList().then((res)=> {
      this.storeData = res.data.data;
    })
  }
};
</script>
<style scoped>
</style>