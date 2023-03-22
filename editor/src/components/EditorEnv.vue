<template>
  <main id="editorEnv" v-model="contentStore.content.content" contenteditable="true">
    
  </main>
</template>

<script>
import { useContentStore } from '../stores/content';
import contenteditable
export default {
setup(){
    const contentStore = useContentStore();

    return{
        contentStore
    }
}
}
</script>

<style scoped>
main{
    color: #fff !important;
}
</style>