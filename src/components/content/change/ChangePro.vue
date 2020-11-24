<template>
  <div class="bodyPro">
      <div class="changeProText">修改工作室产品图片：</div>
      <!-- <div v-model="imgId">{{imgId}}</div> -->
      <el-upload
        class="avatar-uploader"
        :show-file-list="false"
        action="123"
        :http-request="upLoad"
        :before-upload="beforeAvatarUpload">
        <img v-if="imgUrl" :src="imgUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
<div class="changeProText">修改工作室产品简介：</div>
<el-input
  type="textarea"
  :rows="5"
  placeholder="请输入内容"
  v-model="Intro">
</el-input>
 <el-button class="changeBtn" type="primary" @click="confirmChange()">确认修改</el-button>
 <el-button class="changeBtn"  @click="cancelChange()">取消</el-button>
  </div>
</template>

<script>
export default {
  data() {
      return {
        Intro: '',
        imgUrl:'',
        file:''  
      };
    },
    props: {
      imgId: '',
      showPro:{},
    },
    mounted() {
      this.Intro = this.showPro.describes;
      this.imgUrl = this.showPro.img;
    },
    methods: {

      //上传图片的时候获取图片文件的信息
      upLoad (file) {
          console.log('file')
          console.log('file')
          this.file = file.file;
          console.log(this.file);
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

      //发送修改请求
       confirmChange() {
           let params = new FormData;
           params.append('Img',this.file);
           params.append('id',this.imgId);
           params.append('Intro',this.Intro)
           this.$axios
           .post(this.$url + '/admin/upIntro',params)
           .then((res) => {
             if(res.data.msg == 'success'){
               alert('修改成功');
               this.$emit('changeOver',false)
             }
             console.log(res)
           })
           .catch((err) => {
             console.log(err)
           })
      },
      cancelChange() {
           alert('修改失败');
           this.$emit('changeOver',false)
      }
    }
}
</script>

<style>
.avatar-uploader .el-upload {
    border: 3px dashed #d9d9d9;
    border-radius: 5px;
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
.changeProText{
    color: #606266;
    margin-top: 20px;
    margin-bottom: 30px;
}
.changeBtn{
  margin-top: 20px;
}
</style>