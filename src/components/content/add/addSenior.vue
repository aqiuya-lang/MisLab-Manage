<template>
<div>
    <!-- <div>信息修改ing...</div> -->
    <el-form ref="form" :model="form" label-width="80px">   
        <!-- 头像上传 -->
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
                <el-radio label="1">女</el-radio>
                <el-radio label="2">男</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="简介">
            <el-input type="textarea" v-model="form.info"></el-input>
        </el-form-item>
        <el-form-item>
            <div class="changeBtn">
                <el-button type="primary" @click="confirmAdd()">确认增加</el-button>
                <el-button @click="cancelChange()">取消</el-button>
            </div>
            
        </el-form-item>
    </el-form>


</div>
  
</template>

<script>
export default {
    name: 'ChangeSenior',
    img:'',
    data () {
        return {
            
            form:{
                xh: '',
                name: '',
                company: '',
                sex:'',
                info:'',
                img:'',
            }
        }
    },
    methods: {
        //获取上传的图片的文件信息
      upLoad (file) {
          console.log('file')
          console.log(file.file);
          this.form.img = file.file;
          console.log(this.form.img);
          console.log('file');
      },
      beforeAvatarUpload(file) {
        console.log(file)
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

      //发送新增请求
       confirmAdd() {
           console.log('请求开始了')
           console.log(this.file)
            let params = new FormData();
            let obj = this.form;
            Object.keys(obj).forEach((key) => {
                params.append(key,obj[key])
            })
            // 发送新增请求
            this.$axios
            .post(this.$url + '/admin/upGra',params)
            .then((res) => {
                console.log(res);
                alert('新增成功')
                this.$emit('changeOver',false)
            })
            .catch((err) => {
                console.log(err)
            })
        },
        cancelChange(){
            alert('新增失败')
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
.changeBtn{
    text-align: center;
}



</style>