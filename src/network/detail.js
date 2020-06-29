import {request} from './request';
export function getDetail(iid){
            return request({
                url:"/detail",
                params:{
                    iid
                }
            })
}

export function getRecommend(){
    return request({
        url:"/recommend"
    }).catch(err=>err)
}

export class Goods{
    constructor(itemInfo,columns,services){
		this.desc = itemInfo.desc
    //标题
    this.title = itemInfo.title
    //描述
    this.dese = itemInfo.dese
    //当前价格
    this.newPrice = itemInfo.price
    //历史价格
    this.oldPrice = itemInfo.oldPrice
    //打折描述信息
    this.discountDesc = itemInfo.discountDesc
    //打折描述信息的背景颜色
    this.descountBgColor = itemInfo.descountBgColor
    //销量和收藏的数组
    this.columns = columns
    //商品提供的服务数组
    this.service = services
    //最终价格/低
    this.realPrice = itemInfo.lowNowPrice
	
    }
}
export class GoodParams {
  constructor(itemParams){
     // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = itemParams.info.images ? info.images[0] : "";
    this.infos = itemParams.info.set
    this.sizes = itemParams.rule.tables
  }
}


export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

