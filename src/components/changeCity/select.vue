<template>
    <div class="choose-wrap" @click.stop="showContent">
        <div class="choose" :class="{'disabled': noClick}"  >
            <span>{{value}}</span>
            <i class="el-icon-caret-bottom"></i>
            <div class="mt-content" v-show="show" v-document-click="documentClick">
                <h2>{{title}}</h2>
                <div class="wrapper" :class="clas">
                    <div class="col" v-for="(item, index) in colNum" :key="index">
                        <span class="mt-item" v-for="item in computedList(index)" :key="item.name" @click.stop="changeValue(item.name)">{{item.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            contentActive: false
        }
    },
    props: ["list", "clas", "title", "show", "value", "noClick"],
    computed: {
        colNum: function() {
            let colNum = Math.ceil(this.list.length / 12);
            // console.log(colNum);
            return colNum;
        }
    },
    methods: {
        computedList: function(index) {
            let start = index * 12;
            let end = (index + 1) * 12;
            return this.list.slice(start, end);
        },
        showContent: function() {
            if(!this.noClick){
                this.$emit("change", {status: true});
            }
        },
        changeValue: function(item) {
            // console.log("itemClick");
            // console.log(this);
            this.$emit("change", {status: false, value: item});

        },
        documentClick: function() {
            this.$emit("change", {status: false});
        }
    }
}
</script>
<style scoped>

</style>