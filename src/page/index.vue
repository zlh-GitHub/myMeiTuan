<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5" class="menu">
        <m-menu />
      </el-col>
      <el-col :span="19">
        <life />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="nav" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <container :nav="offer" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import mMenu from "@/components/index/menu.vue";
import life from "@/components/index/life.vue";
import container from "@/components/index/container.vue";
import api from "@/api";
export default {
  components: {
    mMenu,
    life,
    container
  },
  data() {
    return {
      nav: {
        title: "有格调",
        list: [
          { tag: "all", text: "全部" },
          { tag: "food", text: "约会聚餐" },
          { tag: "spa", text: "丽人SPA" },
          { tag: "movie", text: "电影演出" },
          { tag: "travel", text: "品质出游" }
        ],
        data: {},
        clas: "istyle"
      },
      offer: {
        title: "狠优惠",
        list: [
          { tag: "all", text: "全部" },
          { tag: "food", text: "美食" },
          { tag: "relax", text: "休闲" }
        ],
        data: {
          all: [
            {
              title: "OL's Cake鲜荟千层（流行前线店）",
              image:
                "//p1.meituan.net/ugcpic/6f28a90bcb1b5d6d47b04fab746df8e9@460w_260h_1e_1c",
              subTitle: "8英寸蛋糕7选1，两店自提+11个地铁站免费配送",
              price: 68,
              currentPrice: 68,
              oldPrice: 128,
              avgPrice: null,
              units: null,
              address: "中山二三路/东山口",
              rentNum: 0
            },
            {
              title: "小幸运蛋糕店（中山六路）",
              image:
                "//p1.meituan.net/bbia/9e9d8322fb54999971c544947745160f287603.jpg@460w_260h_1e_1c",
              subTitle: "数码生日蛋糕1个，约8英寸，圆形、心形、方形",
              price: 138,
              currentPrice: 138,
              oldPrice: 238,
              avgPrice: null,
              units: null,
              address: "中山六路",
              rentNum: 10
            },
            {
              title: "云顶阁旋转餐厅",
              image:
                "//p0.meituan.net/deal/__29754698__6120981.jpg@460w_260h_1e_1c",
              subTitle: "单人自助晚餐",
              price: 68,
              currentPrice: 0,
              oldPrice: 0,
              avgPrice: 199,
              units: null,
              address: "越秀区",
              rentNum: 10
            },
            {
              title: "Bon Cake生日蛋糕（越华路店）",
              image:
                "//p1.meituan.net/bbia/52ce08cdaa15f01f2ce82cb79de82858435693.jpg@460w_260h_1e_1c",
              subTitle: "布朗熊巧克力淋面蛋糕1个，约2英磅，圆形",
              price: 138,
              currentPrice: 138,
              oldPrice: 188,
              avgPrice: null,
              units: null,
              address: "北京路商业区",
              rentNum: 10
            }
          ],
          food: [
            {
              title: "OL's Cake鲜荟千层（流行前线店）",
              image:
                "//p1.meituan.net/ugcpic/6f28a90bcb1b5d6d47b04fab746df8e9@460w_260h_1e_1c",
              subTitle: "8英寸蛋糕7选1，两店自提+11个地铁站免费配送",
              price: 68,
              currentPrice: 68,
              oldPrice: 128,
              avgPrice: null,
              units: null,
              address: "中山二三路/东山口",
              rentNum: 0
            },
            {
              title: "小幸运蛋糕店（中山六路）",
              image:
                "//p1.meituan.net/bbia/9e9d8322fb54999971c544947745160f287603.jpg@460w_260h_1e_1c",
              subTitle: "数码生日蛋糕1个，约8英寸，圆形、心形、方形",
              price: 68,
              currentPrice: 138,
              oldPrice: 238,
              avgPrice: null,
              units: null,
              address: "中山六路",
              rentNum: 10
            }
          ],
          relax: [
            {
              title: "云顶阁旋转餐厅",
              image:
                "//p0.meituan.net/deal/__29754698__6120981.jpg@460w_260h_1e_1c",
              subTitle: "单人自助晚餐",
              price: 68,
              currentPrice: 0,
              oldPrice: 0,
              avgPrice: 199,
              units: null,
              address: "越秀区",
              rentNum: 10
            },
            {
              title: "Bon Cake生日蛋糕（越华路店）",
              image:
                "//p1.meituan.net/bbia/52ce08cdaa15f01f2ce82cb79de82858435693.jpg@460w_260h_1e_1c",
              subTitle: "布朗熊巧克力淋面蛋糕1个，约2英磅，圆形",
              price: 68,
              currentPrice: 138,
              oldPrice: 188,
              avgPrice: null,
              units: null,
              address: "北京路商业区",
              rentNum: 10
            }
          ]
        },
        clas: "youhui"
      }
    };
  },
  created() {
    api.youGeDiao().then(res => {
      // console.log(res.data.data);
      this.nav.data = res.data.data;
    });
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
@import "@/assets/css/index/life.scss";
@import "@/assets/css/index/artistic.scss";
</style>