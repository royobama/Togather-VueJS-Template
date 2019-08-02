<template>
  <div class="relative py-4 flex justify-between items-center" style="z-index: 100;">
    <div>
      <div @click="showMenuLayout" class="select-none cursor-pointer">
        <MenuIconSVG/>
      </div>
    </div>
    <div class="select-none">
      <h1>TASK</h1>
    </div>
    <div>
      <div class="cursor-pointer select-none">
        <ClockIconSVG/>
      </div>
    </div>
  </div>
</template>

<script>
import MenuIconSVG from "@/@assets/@svg/task-menu.svg";
import ClockIconSVG from "@/@assets/@svg/task-clock.svg";
export default {
  components: {
    MenuIconSVG,
    ClockIconSVG
  },
  data() {
    return {
      showMenu: false
    };
  },
  watch: {
    $route(newPath, oldPath) {
      this.showMenu = this.$route.query.menu;
    }
  },
  methods: {
    showMenuLayout() {
      this.showMenu = !this.showMenu;
      this.$router.push({
        query: { ...this.$route.query, ...{ menu: this.showMenu } }
      });
    }
  }
};
</script>
