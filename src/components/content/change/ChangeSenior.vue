<template>
<div>
    <!-- <div>信息修改ing...</div> -->
    <el-form ref="form" :model="form" label-width="80px"> 

         <!-- 头像修改 -->
       <el-upload
        class="avatar-uploader"
        :show-file-list="false"
        action="123"
        :http-request="upLoad"
        :before-upload="beforeAvatarUpload">
        <img v-if="form.img" :src="form.img" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>

        <el-form-item label="学号">
            <el-input v-model="form.xh"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="公司">
            <el-input v-model="form.company"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
                <el-radio label="2">男</el-radio>
                <el-radio label="1">女</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="简介">
            <el-input type="textarea" v-model="form.info"></el-input>
        </el-form-item>
        <el-form-item>
        <div class="changeBtn">
            <el-button type="primary" @click="confirmChange()">确认修改</el-button>
            <el-button @click="cancelChange()">取消</el-button>
        </div>
           
        </el-form-item>
    </el-form>


</div>
  
</template>

<script>
export default {
    name: 'ChangeSenior',
    data () {
        return {
            file: '',
            imgUrl:'',
            form:{
                xh: '',
                name: '',
                company: '',
                sex:'',
                info:'',
                img:''
            }
        }
    },
    props: {
        changingForm:{}
    },
    mounted() {
        //当页面挂载好的时候将从父组件穿过来的值渲染到子组件
        this.form = this.changingForm;
        console.log(this.form.img)
    },
    methods: {
         upLoad (file) {
          console.log(file.file);
          this.file = file.file;
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
        confirmChange() {

            // 把从父组件传过来的对像转换成Form-data格式
            let formData = new FormData();
            this.form.img = this.file;
            let obj = this.form;
            Object.keys(obj).forEach((key) => {
                formData.append(key,obj[key])
            })
          
           
            // 发送修改请求
            this.$axios
            .post(this.$url + '/admin/upGra',formData)
            .then((res) => {
                if(res.data.msg == 'success') {
                    alert('修改成功');

                    //修改成功之后返回展示页面
                    this.$emit('changeOver',false);
                }
            })
            .catch((err) => {
                console.log(err)
            })
        },


        //取消修改，返回展示页面
        cancelChange(){
             alert('修改失败');
            this.$emit('changeOver',false)
        }
    }

}
</script>

<style>

.avatar-uploader .el-upload {
    border: 3px dashed #d9d9d9;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    
  }
  .avatar-uploader{
    margin-left: 40%;
    margin-bottom: 10px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 7.5rem;
    height: 7.5rem;
    line-height: 7.5rem;
    text-align: center;
  }
  .avatar {
    width: 7.5rem;
    height: 7.5rem;
    display: block;
    
  }
.seniorImg{
    width: 80px;
    height: 80px;
    display: block;
    margin-top: 30px;
    margin-bottom: 20px;
    margin-left: 49%;
    }

</style>