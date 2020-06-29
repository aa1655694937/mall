<template>
  <swiper class="swipera">
    <swiper-item  v-for="item in topImages">
      <img :src="item" alt="" >
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'

  export default {
    name: 'DetailSwiper',
    props: {
      topImages: {
        type: Array,
        default (){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
    }
  }
</script>

<style>
  .swipera{
    height: 300px;
    overflow: hidden;
  }
</style>