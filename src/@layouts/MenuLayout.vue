<template>
  <div t-menu :class="{'show': show}" class="py-8 pl-8 bg-white animation absolute h-full flex flex-wrap content-between" style='width:80%;'>
      <ul class='w-full'>
          <li class='pb-4'>
              <FakeTextComponent/>
          </li>
          <li class='pb-4'>
              <FakeTextComponent/>
          </li>
          <li class='pb-4'>
              <FakeTextComponent/>
          </li>
          <li class='pb-4'>
              <FakeTextComponent/>
          </li>
      </ul>
      <div class='w-full'>
          <img :src="require('@/@assets/@images/page-not-found-2.png')" alt="">
      </div>
  </div>
</template>

<style lang="scss" scoped>
div[t-menu] {
  transform: translateX(-100%);
  &.show {
    transform: translateX(-20%);
  }
}
</style>

<script>
import FakeTextComponent from '@/@components/FakeTextComponent'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  components:{
      FakeTextComponent
  },
  created() {}
};
</script>