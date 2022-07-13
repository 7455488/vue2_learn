<template>
  <div class="App">
    <router-view/>
    <tar-bar :tabs="tabs" active-color="#a2dd52" default-color="#24292f"/>
  </div>
</template>

<script>
import TarBar from "@/components/tab-bar"

export default {
  name: "App",
  data() {
    return {
      tabs: [{
        name: 'home',
        icon: 'icon-iconfonthome0',
        title: '首页',
      },
        {
          name: 'category',
          icon: 'icon-fenlei',
          title: '分类',
        },
        {
          name: 'cart',
          icon: 'icon-shangcheng',
          title: '购物车',
        },
        {
          name: 'profile',
          title: '我的',
          icon: 'icon-user',
        },]
    };
  },
  components: {
    TarBar
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
