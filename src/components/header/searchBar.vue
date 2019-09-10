<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col class="left">
        <router-link :to="{path: '/index'}">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </router-link>
      </el-col>
      <el-col class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="请输入内容" @focus="focus" @blur="blur" @input="input"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
            <dl class="hotPlace" v-if="isHotPlace">
                <dt>热门搜索</dt>
                <dd v-for="(item, index) in hotPlaceList" :key="index"><router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link></dd>
            </dl>
            <dl class="searchList" v-if="isSearchList">
                <dd v-for="(item, index) in searchList" :key="index"><router-link :to="{path: '/blank'}">{{item}}</router-link></dd>
             </dl>
        </div>
        <p class="suggest">
          <router-link v-for="(item, index) in suggestList" :key="index" :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import api from "@/api"
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      searchList: ["火锅", "火锅自助餐", "火锅底料"],
      hotPlaceList: ["广州长隆水上乐园", "广州长隆欢乐世界", "广州融创雪世界", "广东科学中心", "珠江夜游"],
      suggestList: ["广州长隆水上乐园", "广州长隆欢乐世界", "广州融创雪世界", "广东科学中心", "珠江夜游"],
    }
  },
  computed: {
    isSearchList: function () {
      return this.isFocus && this.searchWord != ''
    },
    isHotPlace: function () {
      return this.isFocus && this.searchWord == ''
    }
  },
  methods: {
    focus: function (event) {
      this.isFocus = true
    },
    blur: function () {
      this.isFocus = false
    },
    input: function () {
      let val = this.searchWord;
      api.getSearchList().then ((res) => {
        this.searchList = res.data.data.list.filter((item) => {
          return item.indexOf(val) > -1;
        });
      })
    }
  },
  created() {
     api.searchHotWord().then((res) => {
       this.hotPlaceList = this.suggestList = res.data.data;
     })
  }
}
</script>
<style>
</style>
