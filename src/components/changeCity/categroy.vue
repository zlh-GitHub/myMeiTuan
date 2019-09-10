<template>
  <div class="categroy">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(item, index) in allStr" :key="index"><a :href="`#${item}`">{{item}}</a></dd>
    </dl>
    <dl class="m-categroy-section" v-for="(item, index) in cityList" :key="index" :id="index">
      <dt>{{index}}</dt>
      <div><dd v-for="(v, i) in cityList[index]" :key="i" @click="changeCity(v.name)"><span>{{v.name}}</span></dd></div>
    </dl>
  </div>
</template>
<script>
import city from "@/assets/data/city.js";
import api from "@/api"
export default {
  data() {
    return {
      allStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      cityList: {}
    };
  },
  methods: {
    changeCity(item) {
      this.$store.dispatch("setCity", {city: item})
    }
  },
  created() {
    var list = city.list;
    //   console.log(list);
    var len = list.length;
    for (var i = 0; i < len; i++) {
      var temp = {
        id: i,
        name: list[i].name,
        pinyin: list[i].pinyin,
        acronym: "",
        rank: "",
        firstChar: list[i].pinyin[0].toUpperCase()
      };
      if(!this.cityList[temp.firstChar]){
          this.$set(this.cityList, temp.firstChar, []);
            // this.cityList[temp.firstChar] = [];
            // this.$set(this.cityList, index, []);
        }else{
            this.cityList[temp.firstChar].push(temp);
        }
    }
    // var _this = this;
    // api.getCityList().then((res) => {
    //   var list = res.data.data;
    //   var len = list.length;
    //   console.log(list);
    //   for (var i = 0; i < len; i++) {
    //   var fc = list[i].firstChar.toUpperCase();
    //   if(!_this.cityList[fc]){
    //       _this.$set(_this.cityList, fc, []);
    //     }else{
    //         _this.cityList[fc].push(list[i]);
    //     }
    // }
    // })

  }
};
</script>
<style scoped>
</style>