<template>
  <div>
    
       <div class="login-box">
         <h1>后台管理系统</h1>
         <el-form
        class="register-form"
        :model="loginForm"
        :rules="loginRules"
        ref="ruleForm"
      >
        <!-- 学号 -->
        <el-form-item  prop="ssNumber">
          <img src="../assets/img/stuid.png" alt="">
          <el-input  v-model="loginForm.ssNumber" placeholder="请输入你的学号"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item  prop="password">
          <img src="../assets/img/password.png" alt="">
          <el-input  type="password" v-model="loginForm.password" placeholder="请输入你的密码"></el-input>
        </el-form-item>

        <!-- 点击登录 -->
          <el-button
           class="btn"
            type="primary"
            @click="sendLogin()"
            size="small"
          >登录</el-button>

          <!-- 跳转到登录页面 -->
          <div class="go-reg" @click="goRegister">没有帐号，去注册</div>
          <!-- <button class="btn">登录</button> -->

          <!-- 重置按钮 -->
          <!-- <el-button type="info" @click="resetForm('ruleForm')" size="small">重置</el-button> -->

          <!-- 去注册 -->
          <!-- <el-button type="warning" round size="small" class="go-reg" @click="goRegister">去注册</el-button> -->
        <!-- </el-row> -->
      </el-form>
         

         
     </div>
  </div>
</template>

<script>

export default {
  name: 'login',
  data () {
    return {

      //双向绑定用户输入信息
      loginForm:{
        ssNumber: '',
        password: ''
      },

      //表单验证规则
      loginRules: {

       //学号验证规则
        ssNumber:[
          {required: true, message: '请输入你的学号',trigger: 'blur'},
          {min: 10, max: 10, trigger: 'blur'}
        ],

        //密码验证规则
        password: [
          {required: true, message: "请输入密码", trigger: "blur" },
          {min: 6, max: 15,message: "长度在 6 到 15 个字符", trigger: "blur",},
        ],
      },

      //重置
      // resetForm(formName) {
      //   this.$refs[formName].resetFields();
      // },
    }
  },
  methods: {

    //跳转到注册页面
    goRegister () {
      this.$router.push("/register")
    },
    
    //发送登录请求
    sendLogin (ssNumber, password) {
      let params = {
        stuId: Number(this.loginForm.ssNumber),
        password: this.loginForm.password
      }
      this.$axios
      .post(this.$url + '/login', params)
      .then(res => {
        console.log(res.data.msg)
        if(res.data.msg == 'success') {
          alert('登录成功');

          //登录成功之后跳转到首页
          this.$router.push('/index')
        }
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

}
</script>

<style>
body{
  background-color: #ebeef7;
}
.login-box{
  width: 25%;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
}
h1{
    text-align: center;
    color: #545d66;
    margin-bottom: 20px;
    z-index: 0;
}
input{
  margin-top: 10px;
}
.btn{
  margin-top: 20px;
   margin-left: 50%;
   transform: translate(-50%);
}
.go-reg{ 
 float: right;
 margin-top: 50px;
 font-size: 15px;
 color: #606368;
}
.go-reg:hover{
  cursor: pointer;
  color: #F56C6C;;
}
img{
  width: 25px;
  height: 25px;
  position: absolute;
   right: 10px;
   top: 17px;
  z-index: 999;
}

</style>