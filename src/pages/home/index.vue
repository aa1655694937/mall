<!--  -->
<template>
  <div class="home">
    <headerCom class="hd">
      <div slot="center">购物街 -- 栋栋</div>
    </headerCom>
<TabControl  ref="tabControl1"
           :titles="['流行','新款','精选']" 
           @tabClick="tabClick"
           class="tab-control" v-show="isTabFixed"></TabControl>
    <Scroll class="content" 
      ref="scroll" 
      :probeType="3"
       @scroll="contentScroll" 
       :pullUpLoad="true" 
       @pullingUp="loadMore" >
      <div class="wrapper">
        <div>
          <Swipers @swiperImageLoad="swiperImageLoad"></Swipers>
          <jiuhomeVew></jiuhomeVew>
          <Feature></Feature>
         <TabControl  ref="tabControl2"
           :titles="['流行','新款','精选']" 
           @tabClick="tabClick"></TabControl>
          <GoodsList :goods="showGoods" />
        </div>
      </div>
    </Scroll>
    <backTop @click.native="backClick" v-show="isShowBackTop"></backTop>
    <footerCom />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import axios from 'axios'
import BScroll from "better-scroll";
//导入公共组件
import headerCom from "@/components/headercom";
import footerCom from "@/components/footercom";
import TabControl from "@/components/TabControl";
import GoodsList from "@/components/cunrunt/Goods";
import backTop from "@/components/cunrunt/backTop";
import Scroll from "@/components/common/Scroll";

import {BACKTOP_DISTANCE} from "@/common/const";
import { getHomeMultidata, getHomeGoods } from "@/network/home";
import {debounce} from "common/utils"
import {itemListenerMixin} from 'common/mixin.js'

import Swipers from "./swipers";
import jiuhomeVew from "./jiuhomeVew";
import Feature from "./Feature";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    headerCom,
    footerCom,
    TabControl,
    Swipers,
    jiuhomeVew,
    Feature,
    GoodsList,
    Scroll,
    backTop
  },
  	mixins:[itemListenerMixin],
  data() {
    //这里存放数据
    return {
      // result : null
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShowBackTop:true,
      tabOffsetTop : 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: []
    };
  },

  //监听属性 类似于data概念
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
    destroyed(){
        // console.log('home destroyed')
    },
    activated(){
		
        this.$refs.scroll.scrollTo(0,this.saveY, 0)
        this.$refs.scroll.refresh()
    },
    deactivated(){
//      保存Y值
		this.savaY = this.$refs.scroll.getScrollY()
		// console.log(this.savaY)
//  取消全局监听
    this.$bus.$off('itemimageLoad' , this.itemImgListener)
    // console.log(this.saveY)
    },
    
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
      
    // 事件监听的相关方法
    tabClick(key) {
      // console.log(key);
      switch (key) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
          
      }
      this.$refs.tabControl1.currentIndex = key;
      this.$refs.tabControl2.currentIndex = key;
    },
    loadMore(){
    this.getHomeGoods(this.currentType)
    },
    //事件相关的方法
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
      // console.log('backClick')
    },
    contentScroll(position){
     //1、判断BackTop是否显示      
	
      this.isShowBackTop = (-position.y) >400
       //2、决定tabControl 是否吸顶(position:fixed)
       this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    swiperImageLoad(i){
       
         // console.log(i)
         this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    // 网络请求的相关方法
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {

        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        
        //完成了上拉加载更多
        this.$refs.scroll.finishPullUp()
      });
    }
  
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // 1、请求多个数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner;
      this.recommends = res.data.recommend;
    });
    

    // 2、请求商品数据

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    
  },

  //生命周期 - 挂载完成（可以访问DOM元素）wh
  mounted() {},

  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.home {
  // padding-top: 44px;
  position: relative;
  height: 100vh;
}
.hd {
  // background-color: var(--color-tint);
  background: rgb(255, 141, 151);
  color: white;
  text-align: center;
  /*在使用浏览器原生滚动时，为了让导航不跟随一起滚动
   * position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;*/
}
Swipers {
  width: 100%;
  height: 100px;
}
footerCom {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #fff;
}

.content {
  position: absolute;
	height: calc(100% - 44px - 44px);
 overflow: hidden; 
  top: 44px;
  bottom: 44px;
  left: 0;
  right: 0;
  // min-height: 120%;
}
.tab-control{
        position: relative;
        z-index: 99999;
		
		/* top: 44px; */
		left: 0;
}
Feature{
width: 100%;
height: 250px;
}
</style>