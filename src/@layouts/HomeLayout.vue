<template>
  <div t-home class="animation h-full w-full bg-white">
    <div class="px-8">
      <TaskHeaderComponent/>
    </div>
    <div class="pl-8">
      <TaskStoriesComponent/>
    </div>
    <div class="px-8">
      <TaskCalenderComponent/> 
    </div>
    <div class="pl-8">
      <task-panel-component v-for="(key, index) in mockTasksData" :key="index">
        <h1 class="pb-4 select-none text-primary">{{key[0]}}</h1>
        <ul>
          <li class="pb-3" v-for="(subkey, subindex) in key[1].data" :key="subindex">
            <FakeTaskComponent/>
          </li>
        </ul>
      </task-panel-component>
    </div>
    <TaskNewerButtonComponent
      class="absolute cursor-pointer"
      style="right: 32px; bottom:32px;"
    />
  </div>
</template>

<script>
import TaskCalenderComponent from '@/@components/TaskCalenderComponent.vue'
import MockTasksData from "@/@data/mock-tasks-data.js";

import TaskHeaderComponent from "@/@components/TaskHeaderComponent";
import TaskStoriesComponent from "@/@components/TaskStoriesComponent";
import TaskPanelComponent from "@/@components/TaskPanelComponent";

import FakeTaskComponent from "@/@components/FakeTaskComponent.vue";

import TaskNewerButtonComponent from "@/@components/Tasks/TaskNewerButtonComponent.vue";

import ClassifyData from "@/@function/ClassifyData.js";
export default {
  components: {
    TaskHeaderComponent,
    TaskStoriesComponent,
    TaskPanelComponent,
    TaskCalenderComponent,
    FakeTaskComponent,
    TaskNewerButtonComponent, TaskCalenderComponent
  },
  data() {
    return {
      mockTasksData: null
    };
  },
  computed: {},
  mounted() {
    this.mockTasksData = new ClassifyData(MockTasksData());
    this.mockTasksData = Object.entries(this.mockTasksData.result);
  },

};
</script>