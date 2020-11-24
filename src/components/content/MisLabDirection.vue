<template>
<div>
  <div v-if="!isChanging" class="directions">
    <div class="front">
      <img src="../../assets/img/web .png" alt="">
      <el-card class="box-card">
        
        <div class="title">
          <!-- <img src="" alt=""> -->
          <div>Web</div>
          <el-tag type="danger" class="change" @click="allChange(frontForm.id,frontForm.describes)">修改信息</el-tag>
        </div>
        <div :v-model="frontForm.describes">{{frontForm.describes}}</div>
      </el-card>
    </div>


    <div class="java">
      <img src="../../assets/img/java.png" alt="">
      <el-card class="box-card">
       
        <div class="title">
          <!-- <img src="" alt=""> -->
          <div>java</div>
         <el-tag type="danger" class="change" @click="allChange(javaForm.id)">修改信息</el-tag>
        </div>
        <div :v-model="javaForm.describes">{{javaForm.describes}}</div>
      </el-card>
    </div>


    <div class="android">
      <img src="../../assets/img/android.png" alt="">
      <el-card class="box-card">
        
        <div class="title">
          <!-- <img src="" alt=""> -->
          <div>安卓</div>
         <el-tag type="danger" class="change" @click="allChange(androidForm.id)">修改信息</el-tag>
        </div>
        <div :v-model="androidForm.describes">{{androidForm.describes}}</div>
       <img src="" alt="">
      </el-card>
    </div>


    <div class="machine">
      <img src="../../assets/img/machine.png" alt="">
      <el-card class="box-card">
       <div class="title">
         <!-- <img src="" alt=""> -->
         <div>机器学习</div>
         <el-tag type="danger" class="change" @click="allChange(machineForm.id)">修改信息</el-tag>
        </div>
        <div :v-model="machineForm.describes">{{machineForm.describes}}</div>
       
      </el-card>
    </div>
  </div>
  <changeDir v-else :item="choseId" :changeInfo = "info" v-on:changeOver = 'newIsChanging'/>

</div>
  
</template>

<script>
import changeDir from '../../components/content/change/ChangeDirection'
export default {
  data() {
    return {
      choseId: '',
      info: '',
      isChanging: false,
      frontForm:{},
      javaForm: {},
      androidForm: {},
      machineForm: {}
    }
  },
  components: {
    changeDir
  },

  //页面挂载好的时候就获取所有工作室方向的信息，并判断父子组件的状态
  mounted(){
    this.getAllDirMsg()
    this.newIsChanging();
  },
  methods: {
    
    //得到所有工作室方向信息
    getAllDirMsg() {
      this.$axios
      .post(this.$url + '/admin/All/Dir')
      .then((res) => {
        console.log(res)
        this.frontForm = res.data.msg[0];
        this.javaForm = res.data.msg[1];
        this.androidForm = res.data.msg[2];
        this.machineForm = res.data.msg[3];
      })
      .catch((err) => {
        console.log(err)
      })

    },

    //修改工作室子组件 给相应父组件进行传值的函数
    newIsChanging (changing) {
      this.isChanging = changing;
      this.getAllDirMsg()
    },

    //显示修改工作室放向的子组件，隐藏父组件
    allChange(id,info) {
      //修改状态开始
      this.isChanging = true;
      this.choseId = id;
      this.info = info;
      console.log(this.choseId);
    },
    
  }

}
</script>

<style>
.directions>div{
  margin-top: 20px;
}
.title{
  display: flex;
  justify-content: space-between;
}
.text {
    font-size: 14px;
  }

  .item {
    padding: 10px 0;
  }

  .box-card , .directions{
    width: 60vw;
  }
  img{
     display: block;
     margin: 0 auto;
      width: 55px;
      margin-bottom: 5px;
      /* height: 50px; */
 }
 .change:hover{
   color: red;
   cursor: pointer;
 }
 /* .change{
   margin-top: -20px;
 } */




</style>