<template>
<div class="changeSenior">
  
  <el-button v-if="!isChanging && !adding" class="newAdd" type="primary" @click="newAdd">+ 新增</el-button>
  <el-table
   v-if="!isChanging && !adding"
    :data="tableData"
    style="width: 100%">
   
    <!-- 对应学号 -->
    <el-table-column
      label="学号"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.xh }}</span>
      </template>
    </el-table-column>

    <!-- 对应名字 -->
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
          <!-- <div slot="reference" class="name-wrapper"> -->
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          <!-- </div> -->
      </template>
    </el-table-column>

     <!-- 对应公司 -->
    <el-table-column
      label="公司"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.company }}</span>
      </template>
    </el-table-column>

    <!-- 相关操作 -->
    <el-table-column label="操作">
      <template slot-scope="scope">

          <!-- 信息修改 -->
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>

          <!-- 信息删除 -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <changeSenior v-if = "isChanging" :changingForm = "this.sendMsg" v-on:changeOver = "newIsChanging" />
  <newAdd v-if = "adding" v-on:changeOver = "newIsChanging1"/>
</div>
</template>

<script>
import newAdd from '../../components/content/add/addSenior'
import changeSenior from '../../components/content/change/ChangeSenior'
export default {
    data() {
      return {
        flag : 0,
        adding: false,
        isChanging: false,
        sendMsg: {},
        tableData: []
      }
    },
    components: {
        changeSenior,
        newAdd
    },

    //当页面挂载完毕时，请求所有学长学姐的信息，同时判断父组组件的状态
    mounted() {
        this.newIsChanging();
        this.newIsChanging1();
        this.getAllSeniorMsg();
    },
 
    methods: {

      //修改的子组件对应的函数
      newIsChanging(e){
          this.isChanging = e;
          this.getAllSeniorMsg();
      },

      //增加的子组件对应的函数
      newIsChanging1(e){
          this.adding = e;
          this.getAllSeniorMsg();
      },

      //获取所有学长学姐的信息
      getAllSeniorMsg() {
        this.$axios
        .post(this.$url + '/admin/allGra')
        .then((res) => {
          console.log(res)
          this.tableData = res.data.Gra
          console.log(res.data.Gra)
        })
        .catch((err) => {
          console.log(err)
        })
      },

      //显示修改学长学姐的信息的子组件，隐藏父组件
      handleEdit(index, item) {
        this.isChanging = true;
        this.sendMsg = item;
        console.log(this.sendMsg);
      },

      //删除学长学姐的信息
      handleDelete(index, row) {
        let param = {
          xh: (row.xh + '')
        }
        this.$axios
        .post(this.$url + '/admin/delGra',param)
        .then((res) => {
          console.log(res)
          alert('删除成功')
          this.getAllSeniorMsg()

        })
        .catch((err) => {
          console.log(err)
        })
      },

      //显示新增学长学姐的信息子组件，隐藏父组件
      newAdd() {
        this.adding = true
        
      }
    }
  }
</script>

<style>
.newAdd{
 margin-left: 1.25rem;
  margin-bottom: 1.25rem;

}
.changeSenior{
    width: 60%;
    margin: 0 auto;
    margin-left: 2.5rem;

}

</style>