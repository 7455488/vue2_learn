<template>
  <div class="tab-bar-item">
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </div>

</template>

<script>
export default {
  name: "tabBarItem",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
