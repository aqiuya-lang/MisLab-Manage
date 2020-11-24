<template>
<div class="changeDir">
    <div class="changeDir-header">
        <!-- <div :v-model="id">{{id}}</div> -->
        <el-button type="danger" @click="confirmChange()" round plain size="mini">确认修改</el-button>
       <el-button type="danger" @click="cancleChange()" round plain size="mini">取消</el-button>
    </div>
    <el-input
    class="input"
        type="textarea"    
        autosize
        placeholder="请输入内容"
        v-model="info">
</el-input>
</div>
  
</template>

<script>
export default {
    name: "changeDir",
    data () {
        return {
            id:'',
            info:'',
            changedMsg: '',
            changing: false
        }
    },
    props: {
        item: '',
        changeInfo: ''

    },
    //当也买你挂载好的时候获取从父组件传过来的id值以及各个方向的简介
    mounted() {
        this.id = this.item;
        this.info = this.changeInfo;
    },
    methods: {

        //发送修改请求
        confirmChange(){
            let params = new FormData();
            params.append('Intro',this.info);
            params.append('id',this.id)
            this.$axios
            .post(this.$url + '/admin/upDirect',params)
            .then((res) => {
                console.log(res);
                alert('修改成功');

                 //子组件向父组件传值，表示修改状态结束
                this.$emit('changeOver',this.changing);
            })
            .catch((err) => {
                console.log(err)
            })
        },
        cancleChange() {
            alert('修改失败');
            this.$emit('changeOver',this.changing)
            
        }
    }

}
</script>

<style>
.changeDir-header>div{
    font-size: 36px;
    color: black;
    font-weight: bold;
}
.changeDir-header{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}
.changeDir{
    width: 70%;
    margin-top: 1.25rem;
    margin-left: 2.25rem;
}

</style>