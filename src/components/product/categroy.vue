<template>
  <div class="m-product-categroy">
    <dl class="classic">
        <dt>分类</dt>
        <dt>全部</dt>
        <dd v-for="(item, index) in menuList" :key="index"><m-select :name="item.title" :list="item.subList"/></dd>
    </dl>
    <dl class="classic">
        <dt>区域</dt>
        <dt>全部</dt>
        <dd v-for="(item, index) in areaList" :key="index"><m-select :name="item.title" :list="item.subList"/></dd>
    </dl>
  </div>
</template>
<script>
import mSelect from "./select"
import api from "@/api"
export default {
  data() {
    return {
      menuList: [
          {
            title: "美食",
            type: "food",
            subList: [
              {
                name: "日本菜",
                id: "Japan"
              }
            ]
          },
          {
            title: "酒店住宿",
            type: "hotal",
            subList: [
              {
                name: "温泉酒店",
                id: "hot_spring"
              }
            ]
          }
        ],
        areaList: [{
        "title": "推荐商圈",
        "subList": [{
            "name": "望京",
            "id": 120000
        }, {
            "name": "昌平",
            "id": 12222
        }]
    }]
    };
  },
  components: {
      mSelect
  },
  created() {
    api.getCategroyList().then((res) => {
      this.menuList = res.data.data;
    })
    api.getAreaList().then((res) => {
      var len = res.data.length;
      var data = res.data + "]}";//后端传回来的数据错误，加以修改
      data = JSON.parse(data);
      this.areaList = data.data;
    })
  }
};
</script>
<style scoped>
</style>