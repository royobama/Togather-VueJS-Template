<template>
  <div class="flex select-none items-center">
    <div @click="onSelect" class="cursor-pointer pr-4 select-none">
      <div
        style="height: 16px; width: 16px; border-color: #FF67B5;"
        :class="{'bg-pink':selected}"
        class="border-2 rounded"
      ></div>
    </div>
    <div class="fake-text"></div>
  </div>
</template>

<script>
export default {
  computed: {},
  watch: {},
  data() {
    return {
      selected: false
    };
  },
  methods: {
    onSelect() {
      this.selected = !this.selected;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/@assets/css/global.scss";
.fake-text {
  background-color: $base-color;
  border-radius: 5px;
  height: 24px;
  width: 108px;
}

.bg-pink {
  background-color: #ff67b5;
}
</style>