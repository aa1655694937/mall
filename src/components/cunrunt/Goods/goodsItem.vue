<!--  -->
<template>
<div class='goods' @click="itemClick">
    <img  v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
        <p > {{goodsItem.title}} </p>
        <span class="proce"> {{goodsItem.price}} </span>
        <span class="collect"> {{goodsItem.cfav}} </span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
    showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    imageLoad(){
        this.$bus.$emit('itemimageLoad')
    },
    itemClick(){
//  console.log('跳转到详情页')
       this.$router.push('./detail/' + this.goodsItem.iid)
    }   
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
.goods{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
    .goods-info{
        font-size: 12px;
        position: absolute;
        bottom:5px;
        left: 0;
        right:0;
        overflow: hidden;
        text-align: center;
        p{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom:3px;
        }
        .proce{
            color:tomato;
            margin-right: 20px;
        }
        .collect{
            position: relative;
        }
        
    }
}
</style>