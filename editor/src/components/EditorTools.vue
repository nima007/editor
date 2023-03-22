<template>
  <aside class="EditorTools" :class="{open:isOpen}">
    <button id="asideControler" @click="openEditorToolsBox()"> . . . </button>
    <ContentBaseData></ContentBaseData>
    <componentHolder></componentHolder>

  </aside>
</template>
<script>
import { ref } from 'vue';
import {useContentStore} from '../stores/content.js'
import ContentBaseData from './ContentBaseData.vue';
import componentHolder from './componentHolder.vue';
export default {
    components:{
        ContentBaseData,
        componentHolder
    },
    setup(){
        const contetnStore = useContentStore();
        const isOpen = ref(false)
        function openEditorToolsBox(){
            isOpen.value=!isOpen.value;
        }
        return {isOpen,openEditorToolsBox,contetnStore}
    }
}
</script>

<style scoped>
    aside{
        position: fixed;
        right: 0;
        top: 0;
        width: 600px;
        height: 100vh;
        background: #fff;
        transform: translateX(100%);
        transition: 0.3s;
        color: #000;
        padding: 24px;
    }
    aside:hover,aside.open{
        transform: none;
    }
    #asideControler{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%,-50%);
        width: 50px;
        height:50px;
        background: #fff;
        border:none;
        border-radius: 50%;
        display: flex;
        place-content: center;
        place-items: center;
        font-weight: bolder;
    }
</style>