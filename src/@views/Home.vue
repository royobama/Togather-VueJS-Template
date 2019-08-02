<template>
  <div>
    <div class="overflow-hidden mx-auto mobile-size">
      <div :class="{'showMenu': showMenu}" class="animation relative w-full h-full">
        <div :class="{'coverLayoutEffect':showNewTask}" class="w-full h-full relative animation">
          <MenuLayout/>
          <HomeLayout/>
        </div>
        <NewTaskLayout :class="{'hideNewTaskLayout': !showNewTask}"/>
        <div v-show="showMenu" t-goback class="w-full h-full absolute top-0 left-0"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.showMenu {
  transform: translateX(80%);
}
.hideNewTaskLayout {
  transform: translateY(100%);
}
.coverLayoutEffect {
  position: relative;
  // transform: scale(0.9);
  &:before {
    transition: all 0.5s cubic-bezier(0.69, 0.04, 0.31, 0.9);
    content: "";
    background-color: #ECF0F8;
    opacity: .7;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
}
</style>

<script>
let _self = null;

class ListenLayout {
  constructor() {}

  handler = {
    HomeOnClick: null
  };

  listenHomeClickEvent() {
    const tHome = document.querySelector("div[t-goback]");
    this.handler.HomeOnClick = tHome.addEventListener("click", function() {
      _self.showMenu = false;
      _self.$router.push({
        query: { ..._self.$route.query, ...{ menu: _self.showMenu } }
      });
    });
  }
  unlistenHomeClickEvent() {
    const tHome = document.querySelector("div[t-goback]");
    tHome.removeEventListener("click", this.handler.HomeOnClick, true);
  }
}

import MenuLayout from "@/@layouts/MenuLayout";
import HomeLayout from "@/@layouts/HomeLayout";
import NewTaskLayout from "@/@layouts/NewTaskLayout";
export default {
  components: {
    MenuLayout,
    HomeLayout,
    NewTaskLayout
  },
  data() {
    return {
      showMenu: false,
      showNewTask: false
    };
  },
  created() {
    _self = this;

    /* 
        init
    */
    this.$router.push({ query: { menu: false, newTask: false } });
  },
  mounted() {},
  watch: {
    $route(newPath, oldPath) {
      if (newPath.query.hasOwnProperty("menu")) {
        const listenerLayout = new ListenLayout();

        if (newPath.query.menu.toString() === "true") {
          this.showMenu = true;
          listenerLayout.listenHomeClickEvent();
        } else {
          listenerLayout.unlistenHomeClickEvent();
          this.showMenu = false;
        }
      }
      if (newPath.query.hasOwnProperty("newTask")) {
        if (newPath.query.newTask.toString() === "true") {
          this.showNewTask = true;
          // listenerLayout.listenHomeClickEvent();
        } else {
          // listenerLayout.unlistenHomeClickEvent();
          this.showNewTask = false;
        }
      }
    }
  }
};
</script>