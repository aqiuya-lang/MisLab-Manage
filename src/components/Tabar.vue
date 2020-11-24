<template>
<div class="aside">
     <el-col :span="24">
    <el-menu
      default-active="/index"
      @select="selectMenu"
      :router="true"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
       <el-menu-item index="/index" >
        <i class="el-icon-menu"></i>
        <span slot="title">工作室主页</span>
      </el-menu-item>
       <el-menu-item index="/index/direction" >
        <i class="el-icon-document" ></i>
        <span slot="title">工作室方向修改</span>
      </el-menu-item>
      <el-menu-item index="/index/production" >
        <i class="el-icon-setting" ></i>
        <span slot="title">工作室产品修改</span>
      </el-menu-item>
       <el-menu-item index="/index/senior" >
        <i class="el-icon-edit-outline" ></i>
        <span slot="title">学长学姐信息修改</span>
      </el-menu-item>
    
    </el-menu>
  </el-col>
</div>
  
</template>

<script>
export default {
  name: "Tabar",
  data() {
    return {

    }
  },
  methods: {
    selectMenu(index,indexpath) {
      console.log(index,indexpath)
    }
  }

}
</script>

<style>
.aside{
  height: 100vh;
  background: rgb(84, 92, 100);
}

</style>