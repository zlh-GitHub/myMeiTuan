<template>
    <div class="m-geo">
        <div class="position">
            <i class="el-icon-location"></i>
            {{$store.state.city}}
            <router-link :to="{name: 'changeCity'}" class="changeCity">切换城市</router-link>
            [
                <a href="#" v-for="(item, index) in currentPosition.nearCity" :key="index"> {{item.name}} </a>
            ]
        </div>
        <div class="m-user" v-if="!$store.state.userName">
            <router-link :to="{name: 'login'}" class="login">立即登陆</router-link>
            <router-link :to="{name: 'register'}" class="register">注册</router-link>
        </div>
        <div class="m-user" v-else-if="$store.state.userName">
            <router-link :to="{}" class="login">{{this.$store.state.userName}}</router-link>
            <span  class="register" @click.prevent="logout">退出</span>
        </div>
    </div>
</template>
<script>
import api from "@/api"
import myCookie from "@/cookie.js"
export default {
    data() {
        return {
            currentPosition: {}
        }
    },
    created() {
        api.getPosition().then((res) => {
            this.currentPosition = res.data.data;
            // console.log(res.data.data);
            var city = this.currentPosition.name;
            this.$store.dispatch("setCity", {"city": city});
        })
    },
    methods: {
        logout() {
            console.log("logout");
            this.$store.commit("setUser", null);
            myCookie.setCookie("username", null, 0);
            this.$router.push("/account/login");
        }
    }
}
</script>
<style scoped>

</style>
