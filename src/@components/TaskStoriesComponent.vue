<template>
    <div class='flex'>
        <div class='pr-3' >
             <TaskStoreItemComponent :src="require('@/@assets/@images/no-connection-5.png')"/>
        </div>
        <div class='pr-3' >
             <TaskStoreItemComponent :src="require('@/@assets/@images/page-not-found-2.png')"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>

<script>
import TaskStoreItemComponent from "./Stories/TaskStoreItemComponent";
export default {
    components: {
        TaskStoreItemComponent
    }
}
</script>

