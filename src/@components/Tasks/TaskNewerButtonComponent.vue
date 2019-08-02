<template>
  <div @click="showNewTaskLayout" class="rounded-full bTn"></div>
</template>

<script>
export default {
  methods: {
    showNewTaskLayout() {
      this.$router.push({
        query: { ...this.$route.query, ...{ newTask: true } }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.bTn {
  width: 65px;
  height: 65px;
  background: linear-gradient(to bottom, #4d5dff, #0018ff);
  box-shadow: 0px 8px 12px 0px #9da5ee;
}
</style>