<template>
  <div class="tab-bar">
    <tab-bar-item
        class="tab-bar-item"
        v-for="item in tabs"
        :key="item.name"
        @click.native="switchTabBar(item.name)"
        :style="{ color: item.name === $route.name ? activeColor : defaultColor }"
    >
      <span slot="icon" :class="['iconfont', item.icon]"></span>
      <div slot="title">{{ item.title }}</div>
    </tab-bar-item>
  </div>
</template>

<script>
import TabBarItem from "@/components/tab-bar/tab-bar-item";

export default {
  name: "tabBar",
  props: {
    tabs: {
      type: Array,
      default: [],
    },
    activeColor: {
      type: String,
      default: "red",
    },
    defaultColor: {
      type: String,
      default: "black",
    },
  },
  data() {
    return {};
  },
  components: {
    TabBarItem,
  },
  methods: {
    switchTabBar(name) {
      if (name !== this.$route.name) {
        this.$router.replace({name});
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.tab-bar {
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;

  .tab-bar-item {
    flex: 1;

    .iconfont {
      font-size: 25px;
    }
  }
}
</style>
