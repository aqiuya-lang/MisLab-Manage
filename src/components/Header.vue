<template>
  <div class="header">
      <div class="title">
          MisLab后台管理端
      </div>
      <div class="actions" @click="toLogin">
         退出登录
      </div>
  </div>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        toLogin () {
            this.$router.replace('/login')
        }

    }

}
</script>

<style>
.header{
    width: 100%;
    color: #ffffff;
    background: #000000;
    font-weight: 800;
    font-size: 20px;
    display: flex;
    justify-content: space-between;

}
.header div{
    line-height: 50px;
    
}
.actions:hover{
    color: #66c338;
    cursor: pointer;

}

</style>