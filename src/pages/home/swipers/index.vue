<!-- 轮播图 -->
<template>
<div class='swiper'>
    
<swiper :options="swiperOption">
  
        <swiper-slide v-for="(item,key) in banners" :key="key">  
            <!-- 给图片添加一个绑定事件，让图片渲染到页面上 -->
            <!-- <img :src="item.image" alt=""> -->
            <a :href="item.link">

            <img :src="item.image" alt="" @load="imageload">
            </a>
        </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>

</swiper>

</div>
</template>

<script>
    import { getHomeMultidata } from "@/network/home"
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {
        swiper, swiperSlide ,
},
data() {
//这里存放数据
return {
        isLoad:false,
              swiperOption: {
　　pagination: {
　　　　el: '.swiper-pagination',
　　　　clickable: true // 允许点击小圆点跳转
　　},
　　autoplay: {
　　　　delay: 3000,
　　　　disableOnInteraction: true ,// 手动切换之后继续自动轮播
　　loop: true,
        stopOnLastSlide: false
　　},
    observer:true,
    observeParents:true,

},
list:[],
    banners: [],

};
},
//监听属性 类似于data概念
computed: {
    swiper() {
        return this.$refs.mySwiper.swiper
      }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
        imageload(){
            if(!this.isLoad){
                 this.$emit('swiperImageLoad')
                 this.isLoad = true
            }
          
        }
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    // 用get传值
          getHomeMultidata().then((res)=>{
        // console.log(res)
        // this.result = res;
        this.banners =  res.data.banner.list
        this.recommends = res.data.recommend
       console.log(this.banners.list)
    })

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>

          .swiper-slide{
        width: 100%;
        /* height: 8rem; */
    }
    .swiper-slide img{
        width: 100%;
        height: 100%;
    }

</style>