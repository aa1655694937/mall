<template>
  <div class="footer">
    <router-link
      v-for="(item,index) in nav"
      :key="index"
      :to="item.url"
      tag="div"
      class="F_routers"
    >
      <p>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="`#icon-${item.icon}`"></use>
        </svg>
      </p>
      <p>
        <span>{{item.title}}</span>
      </p>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { title: "首页", url: "/home", icon: "index" },
        { title: "分类", url: "/cate", icon: "fenlei" },
        { title: "购物车", url: "/cart", icon: "gouwuche" },
        { title: "我的", url: "/my", icon: "wode" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  height: 44px;
  display: flex;
  border-top: 1px solid #999;
  // width: 375px;
  background: white;
  // padding-bottom: -44px;
  .F_routers {
    text-decoration: none;
    flex: 1;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 25%;
    flex-direction: column;
  }
  .active {
    color: #f00;
    svg {
      fill: #f00;
      font-size: 14px;
      
    }
  }
}

</style>

