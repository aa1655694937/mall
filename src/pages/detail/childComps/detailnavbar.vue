<template>
<div class="ccc">
<nav-bar>
    <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/detail/back.svg" alt="" />
    </div>
<div slot="center" class="title">
        <div v-for="(item,index) in titles" 
        class="title-item"
        :class="{active : index=== currentIndex}"
        @click="titleClick(index)"> 
        {{item}}
        </div>
</div>

</nav-bar>
</div>
</template>

<script>
import NavBar from '@/components/headercom'
export default{
 components:{
    NavBar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods:{
  
        titleClick(index){
            this.currentIndex = index
			this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.back()
        }
    },
}
</script>

<style scoped>

    .title{
        display: flex;
        font-size: 13px;
        background: white;
    }
    .title-item{
        flex: 1;
    }
    .active{
        color: #ff5777;
    }
    .back{
        background: #fff;
    }
    .back img{
          width: 15px;
    height: 15px;
    margin-top: 11px;
    }
    .right{
    background: white;
    }
</style>sss