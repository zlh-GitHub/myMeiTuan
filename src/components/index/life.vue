<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link :to="{}">美团外卖</router-link>
        </li>
        <li>
          <router-link :to="{}">猫眼电影</router-link>
        </li>
        <li>
          <router-link :to="{}">美团酒店</router-link>
        </li>
        <li>
          <router-link :to="{}">民宿/公寓</router-link>
        </li>
        <li>
          <router-link :to="{}">商家入驻</router-link>
        </li>
        <li>
          <router-link :to="{}">美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <el-row>
      <el-col :span="14">
        <slide />
      </el-col>
      <el-col :span="4">
        <div class="m-life-pic"></div>
      </el-col>
      <el-col :span="6">
        <div class="m-life-login" v-if="!$store.state.userName">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt />
          </h4>
          <p class="m-life-login-name">Hi! 你好</p>
          <p>
            <router-link :to="{path: '/register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p>
            <router-link :to="{path: '/login'}">
              <el-button round>立即登陆</el-button>
            </router-link>
          </p>
        </div>
        <div class="m-life-login" v-else-if="$store.state.userName">
          <h4>
            <img src="//s0.meituan.net/bs/fe-web-meituan/b87badd/img/head-img.png" alt="">
          </h4>
          <p class="m-life-login-name">Hi! {{this.$store.state.userName}}</p>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="7">
        <router-link :to="{path: '/blank'}">
          <div class="m-life-hotel"></div>
        </router-link>
      </el-col>
      <el-col :span="7">
        <router-link :to="{path: '/blank'}">
          <div class="m-life-music"></div>
        </router-link>
      </el-col>
      <el-col :span="4">
        <router-link :to="{path: '/blank'}">
          <div class="m-life-coop"></div>
        </router-link>
      </el-col>
      <el-col :span="6">
          <div class="m-life-downapp">
              <div class="qucode-box">
                  <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="下载APP">
              </div>
              <p>美团APP手机版</p>
              <p class="last-p">
                  <span>1元起</span>
                  <em>吃喝玩乐</em>
              </p>
          </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import slide from "./slide";
export default {
  components: {
    slide
  }
};
</script>
<style scoped>
</style>