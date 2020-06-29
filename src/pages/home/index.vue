<!--  -->
<template>
<div class=''>
     <headerCom class="hd"> <div slot="center">购物街</div></headerCom>
    我是主内容
    <footerCom />
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import axios from 'axios'
import headerCom from '@/components/headercom'
import footerCom from '@/components/footercom'
// import { getHomeMultidata } from "@/network/home"
// import {getHomeMultidata,getHomeGoods} from 'network/home';
// import axios from 'axios'
export default {
//import引入的组件需要注入到对象中才能使用
components: {   
     footerCom,
    headerCom},
data() {
//这里存放数据
return {

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
//   getHomeMultidata().then(res=>{
//         console.log(res)
//     })
},
//生命周期 - 挂载完成（可以访问DOM元素）wh
mounted() {
    // getHomeMultidata().then(res=>{
    //     console.log(res)
    // })
    // axios.get('http://123.207.32.32:8000/api/wh').then(res=>{
    //     console.log(res)
    // })
    
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
.hd{
    // background-color: var(--color-tint);
    background: rgb(255, 141, 151);
    color: white;
}
</style>