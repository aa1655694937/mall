<template>
<div class="image-info">
    <div class="info-desc clear-fix">
		<!-- aaaaa -->
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
    </div>
    <div v-for="(e,i) in detailInfo.detailImage" :key="i">
        <div class="info-key">{{e.key}}</div>
        <div class="info-list">
			
            <img :src="image" :key="index" v-for="(image,index) in e.list" @load="imgLoad" alt="" />
        </div>
    </div>
</div> 
</template>

<script>
export default{
    data(){
        return {
            count:0,
            imagesLength:0
        }
    },
    props:{
        detailInfo:{
            type:Object,
            // default(){
            //     return{};
            // }
        }
    },
    methods:{
        imgLoad(){
        //判断，所有图片都加载完了，那么进行一次回调就可以了
			// console.log('-----')
			this.$emit('detailImageLoad')
            // if(++this.count === this.imagesLength){
            //     this.$emit("imgLoad")
            // }
        }
    },
    wath:{
        // detailInfo(){
        // //获取图片的个数
        // this.imagesLength = this.detailInfo.detailImage[0].list.length
        // }
    }
}
</script>

<style scoped="scoped">
    .image-info{
        padding: 20px 0;
        border-bottom: 5px solid #F2F5F8;
    }
    .info-desc{
    padding: 0 15px;
    }
    .info-desc .start,
    .info-desc .end{
        position: relative;
        width: 90px;
        height: 1px;
        background: #a3a3a5;
    }
    .info-desc .start{
        float: left;
    }
    .info-desc .end{
        float: right;
    }
    .info-desc .start::before,
    .info-desc .end::after{
    position: absolute;
    bottom: 0;
    width: 5px;
    height: 5px;
    content: "";
    background: #333;
    }
    .info-desc .end::after{
    right: 0;}
    .info-desc .desc{
        font-size: 14px;
        padding: 15px 0;
    }
    .info-key{
        font-size: 15px;
        margin: 10px 0 10px 15px;
        color: #333;
    }
    .info-list img{
    width: 100%;}
</style>