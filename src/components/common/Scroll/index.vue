<!--  -->
<template>
<div class='wrapper' ref="wrapper">
    <div class="content">
        <slot></slot>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from 'better-scroll'
export default {
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {
    scroll: null,
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

    scrollTo(x,y,time=300){
    this.scroll &&  this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
        this.scroll.finishPullUp()
    },
   refresh(){
        this.scroll.refresh();
      },
      getScrollY(){
        return this.scroll ? this.scroll.y : 0
        } 
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
    methods: {
		  __initScroll() {
		    // 1.初始化BScroll对象
		    if (!this.$refs.wrapper) return
        this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          click: true,
          pullUpLoad: this.pullUpLoad
        })

        // 2.将监听事件回调
        this.scroll.$on('scroll', pos => {
          this.$emit('scroll', pos)
        })

        // 3.监听上拉到底部
        this.scroll.$on('pullingUp', () => {
          console.log('上拉加载');
          this.$emit('pullingUp')
        })
      },
      refresh() {
        this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      finishPullUp() {
		    this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      scrollTo(x, y, time) {
		    this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      }
    },
   watch:{
	 
   },
props:{
    probeType: {
        type: Number,
        default: 0 
    },
    pullUpLoad :{
        type : Boolean,
        default:false
    }
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
        click : true,
        probeType: this.probeType,
        pullUpLoad : this.pullUpLoad
    })
    //监听滚动的位置 
    if(this.probeType === 2 || this.probeType === 3){
    this.scroll.on('scroll',(position)=>{
        // console.log(position)
        this.$emit('scroll',position)
    })
    } 
//  监听scroll滚动到底部
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
            })
        }
    console.log(this.scroll)
    
    // this.bscroll.on('scroll',(position)=>{
    //   this.$emit('contentScroll',position);
    // })
    
    // this.bscroll.on('pullingUp',()=>{
    //     this.$emit('pullingUp')
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

</style>