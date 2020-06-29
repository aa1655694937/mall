<!--  -->
<template>
    <div>
        <div class='comment-info' v-if="Object.keys(commentInfo).length !== 0">
        <div class="info-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">
                更多
            </div>
        </div>
    <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
        <p>{{commentInfo.content}}</p>
    </div>
    <div class="info-other">
        <span class="data">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
    </div>
    <div class="info-imgs">
        <img :src="i" alt="" v-for="(i,k) in commentInfo.images" :key="k" />
    </div>
    </div>

    <div class="comment-info" style="color: red;" v-else>暂无用户评论</div>
        <!--<div class="comment-info" style="color: red;" v-else>暂无用户评论</div>-->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import {formatDate}  from "common/utils"
export default {
   
//import引入的组件需要注入到对象中才能使用
name:"DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object
    }
  },
   filters: {
    showDate(value) {
//      1.将时间戳转换Date对象
      const date = new Date(value * 1000);
//    将Date进行格式化 
      return formatDate(date, "yyyy-MM-dd hh:mm");
    }
},
components: {},
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
/*//@import url(); 引入公共css类*/
.comment-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #F2F5F8;
    .info-header{
        line-height: 50px;
        height: 50px;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        .header-title{
            font-size: 15px;
            float: left;
        }
        .header-more{
            font-size: 13px;
            float: right;
            margin-right: 13px;
        }
    }
    .info-user{
        padding: 9px 0 5px;
        img{
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        span{
            font-size: 16px;
            position: relative;
            top: -15px;
            padding-left: 13px;
        }
    }
    .info-detail{
        padding:  0 5px 15px;
        p{
            font-size: 14px;
            line-height: 1.3;
            color: #777;
        }
    }
   .info-detail .info-other{
        font-size: 12px;
        margin-top: 10px;
        color: #999;
    
    }
       .info-other .date{
            margin-right: 8px;
        }
        .info-imgs{
            margin-top: 10px;
            img{
                width: 70px;
                height: 70px;
                margin-right: 5px;
            }
        }
}
</style>