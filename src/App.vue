<template>
  <router-view/>
</template>

<script>
export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || "default"}-layout`;
    }
  }
};
</script>

<style lang="scss">
@import "@/@assets/css/global.scss";
.text-primary {
  color: $primary-color;
}
.text-primary-100 {
  color: $primary-color-100;
}
.text-priamry-200 {
  color: $primary-color-200;
}
.border-primary{
  border-color: $primary-color;
}
img{
  object-fit: cover;
}
*{
  box-sizing: border-box;
}
</style>