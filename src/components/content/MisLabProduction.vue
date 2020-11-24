<template>
<div>
    <div>
      <el-button v-if="!isChanging && !adding" class="newAdd" type="primary" @click="newAdd">+ 新增</el-button>
      <el-row v-if="!isChanging  && !adding" >
    <el-col :span="6" v-for="(item, index) in proMsg" :key="index">
    <el-card style="margin:20px" :body-style="{ padding: '5px'}">
        <div>
             <img :src="item.img" class="image">
        </div>
      <div style="padding: 24px;">
        <span v-model="item.describes">{{item.describes}}</span>
        <div class="bottom clearfix">
           <el-button type="text" class="button" @click="delPro(item.id)">删除</el-button>
          <el-button type="text" class="button" @click="changePro(item.id,item)">修改</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
 

</el-row>
    </div>
<changePro v-if = "isChanging" :imgId = 'changeImgId' :showPro = 'show'  v-on:changeOver = "newIsChanging1"/>
 <newAddPro v-if = "adding" v-on:changeOver = "newIsChanging"/>
    
</div>
  
</template>

<script>
import changePro from '../../components/content/change/ChangePro'
import newAddPro from '../../components/content/add/AddPro'
export default {
    data() {
    return {
      show:'',
      // flag:1,
      adding:false,
      isChanging:false,
      textarea:'',
      changeImgId: '',
      proMsg:[]
    };
  },
  components:{
    changePro,
    newAddPro
  },
mounted() {
  this.getAllPro();
  this.newIsChanging();
  this.newIsChanging1();
},
  methods: {

    //对应的增加产品的子组件的函数
    newIsChanging(e) {
      this.adding = e;
       this.getAllPro();
    },

    //对应的修改的子组件的函数
    newIsChanging1(e) {
      this.isChanging = e;
       this.getAllPro();
    },

    //获取所有工作室产品
    getAllPro() {
      this.$axios
      .post(this.$url + '/admin/All/Pro')
      .then((res) => {
        console.log(res)
        console.log(res.data.msg)
        this.proMsg = res.data.msg
        console.log(this.proMsg)
      })
      .catch((err) => {
        console.log(err)
      })
    },

    //显示修改工作室产品的子组件，隐藏父组件
    changePro(id,item) {
      this.show  = item;
      console.log(id)
      this.changeImgId = id,
      this.isChanging = true

    },

    //删除工作室产品
    delPro(id) {
      let param = {id}
      this.$axios
      .post(this.$url + '/admin/delInfo',param)
      .then((res) => {
        alert('删除成功');
         this.getAllPro();
        console.log(res);
      })
      .catch((err) => {
        console.log(err)
      })

    },

    //显示新增工作室产品的子组件，隐藏父组件
     newAdd() {
        this.adding = true
        
      }
  }

}
</script>

<style>
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 5px 5px 0px  5px;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>