<!--  -->
<template>
<div class='botton-bar'>
	<div class="check-content">
		<CheckButton 
		:isChecked="isSelectAll" 
		class="check-button"
		@click.native="checkClick"></CheckButton>
		<span>全选</span>
	</div>
	<div class="price">
		合计：{{totalPrice}}
	</div>
	<div class="calculate" @click="calcClick">
		结算：{{checkLength}}
	</div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CheckButton from './CheckButton.vue'
import { mapGetters } from 'vuex'
export default {
//import引入的组件需要注入到对象中才能使用
components: {
	CheckButton
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {
	...mapGetters(['cartList']),
	totalPrice(){
		return '￥' + this.cartList.filter(item=>{
			return item.checked
		}).reduce((preValue,item)=>{
			return preValue + item.realPrice * item.count
		},0).toFixed(2) + '元'
		
	},
	checkLength(){
		return this.cartList.filter(item => item.checked).length
	},
	isSelectAll(){
	 // return	!(this.cartList.filter(item => !item.checked).length)
	 if (this.cartList.length === 0) return false
		// return !this.cartList.find(item => !item.checked)
		
		for(let item of this.cartList) {
			if(!item.checked){ 
				return false
			}
		}
		return true
	}
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
checkClick(){
	if(this.isSelectAll){//全部选中
		this.cartList.forEach(item => item.checked = false)
	}else{ //部分或全部不选中
		this.cartList.forEach(item => item.checked = true)
	}
	// this.cartList.forEach(item => item.checked = !this.isSelectAll)
},
calcClick(){
	if(!this.isSelectAll){
		this.$toast.show(res,1500)
	}
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
.botton-bar{
	position: relative;
	background-color: #eee;
	display: flex;
	height: 40px;
	line-height: 40px;
	font-size: 14px;
}
.check-content{
	display: flex;
	align-items: center;
	margin-left: 10px;
	width: 60px;
}
.check-button{
	width: 22px;
	height: 22px;
	line-height: 24px;
	text-align: center;
	margin-right: 5px;
}
.price{
	margin-left: 20px;
	flex: 1;
	
}
.calculate{
	width: 80px;
	background: red;
	color: #fff;
	text-align: center;
}
</style>
