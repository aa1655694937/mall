<!--  -->
<template>
<div class='recommends'>
    
    <div v-for="(item,key) in recommend" :key="key" class="aa">
        <a :href="item.link">
            <img :src="item.image" alt="">
            <p>{{item.title}}</p>
        </a>
    </div>
    <div class="aaa"></div>
</div>
</template>

<script>

    import { getHomeMultidata } from "@/network/home"
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
  

export default {
//import引入的组件需要注入到对象中才能使用
components: {},

data() {
    //这里存放数据
return {
    recommend:[]

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
        getHomeMultidata().then((res)=>{
            // console.log(res)
            this.recommend = res.data.recommend.list
            // console.log(this.recommend)
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
<style lang='scss' scoped>
//@import url(); 引入公共css类
    .recommends{
        display: flex;
        width: 100%;
        text-align: center;
        // background: #ccc;
        
        padding:  10px  0 20px;
        a{

            text-decoration: none;
            color: #000;
            font-size: 18px;
        }
        .aa{
            background: #fff;
            flex:1;
            img{
                width: 80px;
                height: 80px;
            }
        }
       
    }
   
</style>