<template>
  <div class="bodyPro">
      <div class="addProText">新增工作室产品图片：</div>
      <el-upload
        class="avatar-uploader"
        :show-file-list="false"
        action="123"
        :http-request="upLoad"
        :before-upload="beforeAvatarUpload">
        <img v-if="imgUrl" :src="imgUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="addProText">新增工作室产品简介：</div>
<el-input
  type="textarea"
  :rows="5"
  placeholder="请输入内容"
  v-model="intro">
</el-input>

 <el-button class="addBtn" type="primary" @click="confirmAdd()">确认增加</el-button>
 <el-button  class="addBtn"  @click="cancelAdd()">取消</el-button>
  </div>
</template>

<script>
export default {data() {
      return {
        imgUrl:'',
        intro: '',
        file:''
,      
      };
    },
    methods: {
      //获取上传的图片的文件信息
      upLoad (file) {
        console.log(file)
          this.file = file;
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

      //确定新增工作室产品
      confirmAdd() {
        let params = new FormData;
        params.append('Intro',this.intro);
        params.append('Img',this.file.file);
        console.log(params);
          this.$axios
          .post(this.$url + '/admin/upproIntro',params)
          .then((res) => {
            if(res.data.action == '新增'){
              alert('新增成功')
              this.$emit('changeOver',false)
            }
            console.log(res)
          })
          .catch((err) => {
            console.log(err)
          })
      },

      //取消新增
      cancelAdd() {
           alert('增加失败');
           this.$emit('changeOver',false)
      }
    }


}
</script>

<style>
.addProText{
    color: #606266;
    margin-top: 20px;
    margin-bottom: 30px;
}
.bodyPro{
    width: 60%;
   margin-left: -20px;
}
.addBtn{
    margin-top: 20px;
}
</style>