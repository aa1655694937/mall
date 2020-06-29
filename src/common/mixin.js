import {debounce} from './utils.js'

export const itemListenerMixin = {
	data(){
		return{
			itemImgListener: null,
			newRefresh: null
		}
	},
	mounted(){
		 
		       //图片完成加载的事件监听
		         this.newRefresh = debounce(this.$refs.scroll.refresh, 100)
		 //      对监听的事件进行保存
		         this.itemImgListener = ()=>{
		 //          refresh()
		             this.newRefresh()
		           
		     }
		   // 3.监听item中图片加载完成
		   
		     this.$bus.$on('itemimageLoad' ,this.itemImgListener )
		 
		   
		 // console.log('我是混入中的内容')
	}
}
export const backTopMixin = {
  data: function () {
    return {
      backClick: false
    }
  },
  methods: {
    backClick: function () {
      this.$refs.scroll.scrollTo(0, 0, 300);
    }
  }
}