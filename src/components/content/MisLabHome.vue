<template>
  <div>
      <div v-model="aa">这里要写什么啊？？？</div>
  </div>
</template>

<script>
export default {
    data() {
        
        return {
            
            aa:'',

        }
    },
    mounted() {
        this.getInformation()
    },
    methods: {
        getInformation() {
            this.$axios
            .post(this.$url + '/All')
            .then((res) => {
                this.aa = res
                console.log(res)
            })
        }
        
    }

}
</script>

<style>

</style>