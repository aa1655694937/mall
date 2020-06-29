<template>
<div class="detail">
	
       <DetailNavBar  background="#fff" ref="nav"style="border-bottom: 1px solid black;"   @titleClick="titleClick"/>
       <Scroll class="content"
		@scroll="contentScroll"
		 :probe-type="3" ref="scroll">
       <DetailSwiper :topImages="topImages"/>
		
		<DetailBaseInfo :goods="goods"/>
        <DetailShopInfo :shop="shop"/>
        <DetailGoodsInfo :detailInfo="detailInfo" @detailImageLoad="detailImageLoad" />
        <DetailGoodParams ref="params" :paramInfo="paramInfo"/>
        <DetailCommentInfo ref="comment" :commentInfo="commentInfo"/>
        <p class="today-recommend">今日推荐</p>
        <GoodsList ref="recommend" :goods="recommends"/> 
       </Scroll>
	   <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
        <backTop @click.native="backClick" v-show="isShowBackTop"></backTop>
		<Toast :message="message" :show="show"></Toast>
	</div>
</template>

<script>

     import DetailNavBar from './childComps/detailnavbar'
     import DetailSwiper from './childComps/DetailSwiper' 
     import DetailBaseInfo from './childComps/DetailBaseInfo';
     import DetailShopInfo from './childComps/DetailShopInfo';
     import DetailGoodsInfo from './childComps/DetailGoodsInfo';
     import DetailGoodParams from './childComps/DetailGoodParams';
     import DetailCommentInfo from './childComps/DetailCommentInfo';
	 import DetailBottomBar from './childComps/DetailBottomBar';
	 
    import backTop from "@/components/cunrunt/backTop";
    import Scroll from 'components/common/Scroll'
    import GoodsList from "components/cunrunt/Goods"
	import {BACKTOP_DISTANCE} from "@/common/const";
	import {getDetail , Goods ,Shop,GoodParams,getRecommend} from 'network/detail'
	import { mapActions } from 'vuex'
	import {debounce} from 'common/utils'
	import {itemListenerMixin} from 'common/mixin.js'
	
	import Toast from '@/components/common/toast'
    export default{
    name:"detail",
    components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
	DetailBottomBar,
    Scroll,
    DetailGoodsInfo,
    DetailGoodParams,
    DetailCommentInfo,
     GoodsList,
	 backTop,
	 Toast, 
    },
	mixins:[itemListenerMixin],
    data(){
       return {
        iid:null,
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        GoodParams:{},
        commentInfo:{},
        recommends:[],
		themeTopYs:[],
		getThemeTopY : null,
		currentIndex:0,
		isShowBackTop:false,
		message: '',
		show: false
       }
    },
    created(){
      //1.保存传入的iid
 // console.log(this.$route.params.iid)
        this.iid = this.$route.params.iid
		// console.log(this.iid)
//      2.根据iid请求详情的数据  
        getDetail(this.iid).then( res =>{
//      1获取顶部的轮播数据
        // console.log( getDetail(this.iid))
           const data = res.result
        this.topImages = data.itemInfo.topImages
        
//      2.获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
		console.log(this.goods)
//         3.创建店铺信息的对象
        this.shop = new Shop(data.shopInfo)
//      4.保存商品的详情数据
        this.detailInfo = data.detailInfo
//      5.获取参数信息
      this.paramInfo = new GoodParams(data.itemParams);
//    6.取出评论信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0] || {};
        }
        
        })
//      3.请求推荐数据
        getRecommend().then(res=>{
            // console.log(res)
            this.recommends = res.data.list
        })
		this.getThemeTopY = debounce(()=>{
			this.themeTopYs = []
			this.themeTopYs.push(0)
			this.themeTopYs.push(this.$refs.params.$el.offsetTop)
			this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
			this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
			// this.themeTopYs.push(Number.MAX_VALUE)
			this.themeTopYs.push(Number.MAX_VALUE)
			console.log(this.themeTopYs)
		},100)
		
		
		
    },
    mounted(){
		
    },
	destroyed() {
		this.$bus.$off('itemImgLoad', this.itemImgListener)
		
	},
	updated() {
		
	},
	methods:{
		...mapActions(['addCart']),
		detailImageLoad(){
			
			this.getThemeTopY()
			// console.log('++++')
			this.newRefresh()
		},
		titleClick(index){
			// 获取下标
			// console.log(index)
			this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],100)
		},
		contentScroll(position){
			
			// 1.获取y值
			const positionY = -position.y
			// console.log(positionY)
			// console.log(Number.MAX_VALUE)
			let length = this.themeTopYs.length
			//2.positionY和主题的值进行对比
			for(let i = 0; i< length-1;i++){
				
				if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
					this.currentIndex = i;
					this.$refs.nav.currentIndex = this.currentIndex
				}
				
			}
			this.isShowBackTop = (-position.y) >400
		},
	backClick() {
	  this.$refs.scroll.scrollTo(0, 0);
	  // console.log('backClick')
	},
	addToCart(){
			//获取购物车需要展示的信息
			const product ={}
			product.image = this.topImages[0];
			product.title = this.goods.title;
			product.desc = this.goods.desc;
			product.price = this.goods.newPrice;
			product.iid = this.iid;
			product.realPrice = this.goods.realPrice
			// console.log(product)Wx	
			//将商品添加到购物车里
			// this.$store.commit('addCart',product)
			this.addCart(product).then(res => {
				this.show = true; 
				this.message = res;
				
				setTimeout(()=>{
					this.show = false;
					this.message = ''
				},1500)
				// this.$toast.show(res,1500)
				// console.log(this.$toast)
				console.log(res)
				// console.log(setTimeout)
			})
			// this.$store.dispatch('addCart',product).then(res =>{
			// 	console.log(res)
			// })
			// 添加购物车成功
	},
	}
    }
</script>

<style scoped="scoped">

.detail{
    height: 100vh;
    }
.content{
	overflow: hidden;
    height: calc(100% - 44px - 58px);
}
  .today-recommend {
    padding: 20px 8px;
    color: black;
     text-align: center;
  }
</style>