<template>
  <div class="flex select-none cursor-pointer items-center">
    <div class="pr-4">
      <div style="height: 8px; width: 8px;" :style="randomColor"  class="rounded-full"></div>
    </div>
    <div class="fake-text"></div>
  </div>
</template>

<script>
let colors = ["6236FF", "44D7B6", "FA6400", "131E77"];
export default {
    computed:{
        randomColor(){
            return `background-color: #${colors[parseInt(Math.random() * 3)]}`
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
  width: 78px;
}
</style>