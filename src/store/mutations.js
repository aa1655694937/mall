export default{
	  addCounter(state,payload){
		  pauload.count++
	  },
	  addToCart(state,payload){
		  payload.checked = true
		  state.cartList.push(payload)
	  }
		}