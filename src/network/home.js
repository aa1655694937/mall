import {request} from './request'

export function getHomeMultidata(){
  return request({
    url: '/home/multidata',
    // url: '/home/swipers/multidata',
  })
} 


export function getHomeGoods(type,page){
  return request({
    url: '/home/data',
    // url:'/home/swiper/data',
    params: {
      type,
      page
    }
  })
}