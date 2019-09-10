<template>
    <div class="m-menu nav">
        <dl class="nav">
            <dt>全部分类</dt>
            <dd v-for="(item, index) in menuList" :key="`${item.name}-${index}`" @mouseenter="menuEnter($event, item)" @mouseleave="menuLeave">
                <i :class="item.type"></i>
                {{item.name}}
                <span class="arrow"></span>
            </dd>
        </dl>
        <div class="detail" v-if="curDetail != null" @mouseenter="detailEnter" @mouseleave="detailLeave">
            <template v-for="(item, index) in curDetail.items" >
                <h4 :key="`${item.title}-${index}`">{{item.title}}</h4>
                <span v-for="(v, i) in item.items" :key="`${v}-${i}`">{{v}}</span>
            </template>
        </div>
    </div>
</template>
<script>
import api from "@/api"
export default {
    data() {
        return {
            curDetail: null,
            menuList: [
                {
                    name: "美食",
                    type: "food",
                    items: [
                        {
                            title: "美食分类",
                            items: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐", "日韩料理"]
                        }
                    ]
                },
                {
                    name: "外卖",
                    type: "takeout",
                    items: [
                        {
                            title: "外卖",
                            items: ["美团外卖"]
                        }
                    ]
                },
                {
                    name: "酒店",
                    type: "hotel",
                    items: [
                        {
                            title: "酒店星级",
                            items: ["经济型", "舒适/三星", "高档四星", "豪华五星"]
                        }
                    ]
                },
                {
                    name: "榛果民宿",
                    type: "homestay",
                    items: [
                        {
                            title: "热门城市",
                            items: ["广州", "深圳", "北京", "上海", "杭州", "武汉"]
                        },
                        {
                            title: "热门房源",
                            items: ["复式Loft", "别墅"]
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        menuEnter: function(e, item) {
            this.curDetail = item;
            clearTimeout(this.timer);
        },
        menuLeave: function() {
            this.timer = setTimeout(() => {
                this.curDetail = null;
            }, 200)
        },
        detailEnter: function() {
            clearTimeout(this.timer);
        },
        detailLeave: function() {
            this.curDetail = null;
        }
    },
    created() {
        api.leftNavList().then((res) => {
            this.menuList = res.data.data;
        })
    }
}
</script>
<style scoped>

</style>