<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot :data="hotData" />
    </el-row>
    <el-row>
      <hot :data="recentData" />
    </el-row>
    <el-row>
      <categroy />
    </el-row>
  </div>
</template>
<script>
import province from "@/components/changeCity/province.vue";
import hot from "@/components/changeCity/hot.vue";
import categroy from "@/components/changeCity/categroy.vue";
import api from "@/api";
import axios from "@/api/axios";
export default {
  components: {
    province,
    hot,
    categroy
  },
  data() {
    return {
      hotData: {
        title: "热门城市",
        list: [
          {
            acronym: "bj",
            firstChar: "b",
            id: 1,
            name: "北京",
            pinyin: "beijing",
            rank: "S"
          },
          {
            acronym: "gz",
            firstChar: "g",
            id: 2,
            name: "广州",
            pinyin: "guangzhou",
            rank: "S"
          },
          {
            acronym: "sz",
            firstChar: "s",
            id: 3,
            name: "深圳",
            pinyin: "shenzhen",
            rank: "S"
          },
          {
            acronym: "hz",
            firstChar: "h",
            id: 4,
            name: "杭州",
            pinyin: "hangzhou",
            rank: "S"
          },
          {
            acronym: "sh",
            firstChar: "s",
            id: 5,
            name: "上海",
            pinyin: "shanghai",
            rank: "S"
          },
          {
            acronym: "tj",
            firstChar: "t",
            id: 6,
            name: "天津",
            pinyin: "tianjing",
            rank: "S"
          }
        ]
      },
      recentData: {
        title: "最近访问",
        list: [{
            acronym: "mz",
            firstChar: "m",
            id: 7,
            name: "梅州",
            pinyin: "梅州",
            rank: "S"
          }, {
            acronym: "sg",
            firstChar: "s",
            id: 8,
            name: "韶关",
            pinyin: "韶关",
            rank: "S"
          }]
      }
    };
  },
  created() {
    api.getRecentSearch().then(res => {
      this.recentData.list = res.data.data;
    });
    api.getHotCity().then((res) => {
        this.hotData.list = res.data.data;
    })

//     axios.all([api.getRecentSearch(), api.getHotCity()])
//   .then(axios.spread(function (acct, perms) {
//     // 两个请求现在都执行完成
//   }));
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changeCity/select.scss";
@import "@/assets/css/changeCity/iselect.scss";
@import "@/assets/css/changeCity/hot.scss";
@import "@/assets/css/changeCity/categroy.scss";
</style>