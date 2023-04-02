<template>
  <main id="editorEnv" >
    <div id="content" contenteditable="true">
    </div>
  </main>
</template>

<script>
import { onMounted } from 'vue';
import { useContentStore } from '../stores/content';
export default {
setup(){
    const contentStore = useContentStore();
      onMounted(()=>{
        contentStore.content.rootElement = document.getElementById('content');
        contentStore.content.target = contentStore.content.rootElement;
      })
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