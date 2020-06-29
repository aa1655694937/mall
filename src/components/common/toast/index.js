import Toast from './index.vue'
const obj = {}

obj.install = function(vue){
	// Vue.extend(trn)
	// console.log(Toast.$el)
	// document.body.appendChild(Toast.$el)
	// 1.创建组件构造器
	const toastContrustor =  vue.extend(Toast)
	
	// 2.new的方式,根据组件构造器,可以创建出来一个对象
	const toast = new toastContrustor()
	
	// 3.将组件对象,手动挂载到某一个元素上
	toast.$mount(document.createElement('div'))
		// 4.toast.$el对应的就是div
		document.body.appendChild(toast.$el)
	
	
	vue.prototype.$toast = Toast
}

export default obj