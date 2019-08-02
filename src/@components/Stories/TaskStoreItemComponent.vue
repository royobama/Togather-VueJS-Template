<template>
  <div class='click:scale'>
    <div scale class="animation mb-3 cursor-pointer w-85px h-85px rounded-full p-1 border-primary border-3">
      <div  class="w-full h-full overflow-hidden rounded-full">
        <img :src="src" class="w-full h-full" alt="Store">
      </div>
    </div>
    <p class='text-center text-black'>
        abcd
    </p>
  </div>
</template>

<style lang="scss" scoped>
.h-85px {
  height: 85px;
}
.w-85px {
  width: 85px;
}
.click\:scale{
  
  &:active div[scale]{
    transform:scale(1.1);
  }
}
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      default: ""
    }
  }
};
</script>