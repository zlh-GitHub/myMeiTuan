<template>
  <div class="page-login">
    <div class="login-header">
      <a class="logo" href="http://www.meituan.com"></a>
    </div>
    <div class="login-panel">
      <div class="banner">
        <img
          src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg"
          width="480"
          height="370"
          alt="美团网"
        />
      </div>
      <div class="form">
          <h4 class="tips" v-if="error != ''"><i class="el-icon-warning"></i>{{error}}</h4>
        <p>账号登陆</p>
        <el-input v-model="userName" placeholder="手机号" prefix-icon="el-icon-user" @focus="focus"></el-input>
        <el-input v-model="password" placeholder="密码" prefix-icon="el-icon-lock" @focus="focus" show-password></el-input>
        <div class="foot">
          <a>忘记密码?</a>
        </div>
        <el-button class="btn-login" @click="submit">登陆</el-button>
        <p class="reg">
          还没有账号？
          <router-link :to="{name: 'register'}">免费注册</router-link>
        </p>
        <div class="oauth-wrapper J-oauth-wrapper">
          <h3 class="title-wrapper">
            <span class="title">用合作网站账号登录</span>
          </h3>
          <div class="oauth cf">
            <span
              class="oauth__link oauth__link--qq third-login-btn"
              data-href="/account/connect/tencent"
              target="_blank"
              id="J-third-tencent"
            ></span>
            <span
              class="oauth__link oauth__link--weibo third-login-btn"
              data-href="/account/connect/sina"
              target="_blank"
              id="J-third-sina"
            ></span>
          </div>
          <i id="thirdLoginRiskpartner" data-riskpartner="0"></i>
        </div>
      </div>
    </div>
    <footer>
        <ul>
            <li><a href="#">关于美团</a></li>
            <li><a href="#">加入我们</a></li>
            <li><a href="#">商家入驻</a></li>
            <li><a href="#">帮助中心</a></li>
            <li><a href="#">美团手机版</a></li>
        </ul>
        <p>©2019 美团网团购 meituan.com 京ICP证070791号 京公网安备11010502025545号</p>
    </footer>
  </div>
</template>
<script>
import api from "@/api"
import myCookie from "@/cookie.js"
export default {
  data() {
    return {
      userName: "",
      password: "",
      error: ""
    };
  },
  methods: {
      submit() {
          if(this.userName.length < 1 || this.password.length < 6){
              this.error = "请输入正确的手机号和不少于6位的密码！"
          }
            api.userLogin(this.userName, this.password).then((res)=>{
                if(res.data.status == "fail"){
                    this.error = res.data.msg;
                }else if(res.data.status == "success") {
                    this.$store.commit("setUser", res.data.data);
                    myCookie.setCookie("username", res.data.data, 3);
                    this.$router.push("/index");
                }
            })
      },
      focus() {
          this.error = "";
      }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/login/index.scss";
</style>