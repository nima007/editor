<template>
  <main id="editorEnv" >
    <div id="content" contenteditable="true">
    </div>
  </main>
</template>

<script>
import { useContentStore } from '../stores/content';
export default {
components:{
    // contenteditable
},
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