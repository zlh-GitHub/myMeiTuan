<template>
  <div class="page-register">
    <div class="header">
      <header>
        <a href="#" class="site-logo"></a>
        <div class="login">
          <span>已有美团账号？</span>
          <router-link :to="{name: 'login'}">登陆</router-link>
        </div>
      </header>
    </div>
    <div class="content">
      <el-form
        :model="registerForm"
        status-icon
        :rules="rules"
        ref="registerForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="userName">
          <el-input v-model="registerForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
          <!-- <div class="pw-strength">
            <div class="bar"></div>
            <div class="letter">
              <span>弱</span>
              <span>中</span>
              <span>强</span>
            </div>
          </div> -->
        </el-form-item>
        <el-form-item label="确认密码" prop="rePassword">
          <el-input type="password" v-model="registerForm.rePassword" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
          <el-button @click="resetForm('registerForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <footer></footer>
  </div>
</template>
<script>
import api from "@/api";
export default {
  data() {
       var checkUser = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else if(value.length < 4 || value.length > 16){
            return callback(new Error('请填写正确的用户名'))
        }else{
            callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else if(value.length < 6) {
            callback(new Error('请输入不少于6位的密码'))
        } else {
          if (this.registerForm.rePassword !== '') {
            this.$refs.registerForm.validateField('rePassword');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.registerForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
      registerForm: {
        userName: "",
        password: "",
        rePassword: ""
      },
      rules: {
        password: [{ validator: validatePass, trigger: "blur" }],
        rePassword: [{ validator: validatePass2, trigger: "blur" }],
        userName: [{ validator: checkUser, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            api.userRegister(this.registerForm).then((res) => {
                if(res.data.status == "success"){
                    this.$store.commit("setUser", res.data.data);
                    this.$router.push("/index");
                }else {
                    alert(res.data.msg);
                }
            })
          } else {
            alert('error submit!!');
            return false;
          }
        });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/register/index.scss";
</style>