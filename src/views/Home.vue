<template>
  <div class="home">
      <el-container>
          <el-header class="header">
              <header-component />
          </el-header>
          <el-container class="content-box">
              <el-aside width="250px" >
                  <aside-component />
              </el-aside>
              <el-container class="content">
                  <el-main>
                      <router-view></router-view>
                  </el-main>
              </el-container>
          </el-container>
      </el-container>

  </div>
</template>

<script>
import headerComponent from '../components/Header'
import asideComponent from '../components/Tabar'
export default {
    name: 'home',
    components: {
        headerComponent,
        asideComponent
    }
}
</script>

<style>
/* .header{
    height: 700px;
} */
/* .aside{
    background-color:rgb(84, 92, 100) ;
} */
.content{
    margin-left: 5.667vw;
}
</style>