<template>
    <div class="hd"> 
      <div class="hd-left">
          <slot name="left"></slot>
      </div>
        
      <div class="hd-center">
          <slot name="center">标题</slot>
      </div>
        
      <div class="right">
          <slot name="right"></slot>
      </div>
        
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'此处为页面标题'

        }
    },
    data() {
        return {

        }
    },
    methods:{}
}
</script>

<style lang="scss" scoped>
.hd {
    position: relative;
    z-index: 10;
    background: #fff;
    display: flex;
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
     // border-bottom: 1px solid black;
    
    .hd-left{
         width: 60px;
         /*border: 1px solid darkblue;*/
    }
    .hd-center{
        flex: 1;
        // text-align: center;
    }
    .right{
        width: 60px;
        /*border: 1px solid darkblue;*/
    }

    } 


</style>