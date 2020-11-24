<template>
<div>
  
       <div class="reg-box">
         <h1>后台管理系统</h1>
         <el-form
       
        class="register-form"
        :model="registerForm"
        :rules="registerRules"
        ref="ruleForm"
      >
        <!-- 学号 -->
        <el-form-item  prop="ssNumber">
          <img src="../assets/img/stuid.png" alt="">
          <el-input placeholder="请输入您的学号" v-model="registerForm.ssNumber"></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <img src="../assets/img/password.png" alt="">
          <el-input placeholder="请输入您的密码" type="password" v-model="registerForm.password"></el-input>
        </el-form-item>

        <!-- 邮箱 -->
  
        <el-form-item prop="email">
          <img src="../assets/img/email.png" alt="">
          <el-input placeholder="邮箱" v-model="registerForm.email"></el-input>
        </el-form-item>
       
            <!-- 注册按钮 -->
          <el-button
            class="btn"
            type="primary"
            @click="sendRegister()"
            size="small"
          >注册</el-button>

          <div class="go-login" @click="goLogin">已有帐号，去登录</div>

          <!-- 重置按钮 -->
          <!-- <el-button type="info" @click="resetForm('ruleForm')" size="small">重置</el-button> -->

          <!-- 去登录 -->
          <!-- <el-button type="warning" round size="small" class="go-reg" @click="goLogin">去登录</el-button> -->

       
      </el-form>
     </div>

</div>
</template>

<script>

export default {
    name: 'register',
    data() {
        return {

            //双向绑定用户输入的信息
            registerForm: {
                ssNumber: '',
                password: '',
                email: ''
            },

            //表单验证规则
            registerRules: {

                //学号验证规则
                ssNumber:[
                    {required: true, message: '请输入你的学号',trigger: 'blur'},
                    {min: 10, max: 10,message: "长度为10个数字", trigger: 'blur'}
                ],

                //密码验证规则
                password: [
                    {required: true, message: "请输入密码", trigger: "blur" },
                    {min: 6, max: 15,message: "长度在 6 到 15 个字符", trigger: "blur",},
                ],

                //邮箱验证规则
                email: [
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                ]
            },


            //重置
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    },
     methods: {
                //跳转到登陆页面
                goLogin () {
                    this.$router.push("/login");
                },


                sendRegister(stuld, password, email){
                    let params = {
                    stuId: Number(this.registerForm.ssNumber),                   
                    password: this.registerForm.password,        
                    email: this.registerForm.email
                    };
                  this.$axios
                  .post(this.$url + '/reg',params)
                  .then((res) => {
                    console.log(res);
                    this.$router.push('/login');
                  })
                  .catch((err) => {
                    console.log(err)
                  })
                }
                
                
            },
}
</script>

<style>
body{
  background-color: #ebeef7;
}
.reg-box{
    width: 25%;
    position: absolute;
    top: 50%;
    left: 50%;
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
.go-login{ 
 float: right;
 margin-top: 50px;
 font-size: 15px;
 color: #606368;
}
.go-login:hover{
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