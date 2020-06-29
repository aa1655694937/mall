<template>
  <div class="base-info" v-if="Object.keys(goods).length !==0">
<!--<div class="base-info">-->
    <div class="info-title">{{ goods.title }} </div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}} </span>
      <span class="o-price">{{goods.oldPrice}} </span>
           
      <span v-if="goods.discountDesc" class="discount" :style="discountBgColor">{{goods.discountDesc}} </span>
    </div>
    
    <div class="info-other">
        <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}} </span>
      <span>{{goods.columns[2]}} </span>
      <span>{{goods.service[goods.service.length - 1].name}} </span>    </div>
    
    <div class="info-service">
      <div v-for="item in goods.service" :key="item.name" class="info-service-item">
        <img :src="item.icon" alt="">
        <span>{{item.name}} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    discountBgColor(){
      return this.goods.discountBgColor ? {backgroundColor:this.goods.discountBgColor} : '#ff5777';
    }
  },
};
</script>

<style scoped>
  .base-info{
    width: 94%;
    margin-top: 15px;
    padding: 0 10px 10px ;
    color: #999999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    text-align: justify;
    color: #222222;
  }
  .info-price {
    margin-top: 10px;
  }
  .info-price .n-price {
    font-size: 20px;
    color: #ff5777;
  }
  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discounts{
	  
  }
  .info-price .discount {
    font-size: 12px;
    position: relative;
    top: -4px;
    margin-left: 3px;
    padding: 3px 6px;
    color: #ffffff;
    border-radius: 8px;
	background: #F13E3A;
  }
  .info-other {
    font-size: 13px;
    padding: 15px 0 8px;

    display: flex;
    flex: 1;
    justify-content: space-between;

    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-service {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 8px;
    
  }
  .info-service-item{
    margin-top: 2px;
  }
  .info-service-item img{
    position: relative;
    top: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
  }
  .info-service-item span {
    font-size: 13px;
    margin-left: 4px;
    color: #333333;
  }
</style>