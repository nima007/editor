<template>
   <section class="contentOrginalData sectionBox" >
        <div class="secTitle">
            <h2>base data : </h2>
            <div class="icon"></div>
        </div>
        <div class="content">
            <div class="row">
            <div class="col">
                <label for="">Name :</label>
                <input type="text" v-model="contentStore.content.name"> 
            </div>
            <div class="col hidOver">
                <label for="">thumbnail :</label>
                <input type="file" @change="changeImage()"> 
            </div>
            <div class="col">
                <label for="">thumbnail Alt :</label>
                <input type="text" v-model="contentStore.content.imageAlt"> 
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import {useContentStore} from '../stores/content.js'
export default {
setup(){
    const contentStore = useContentStore();
    function changeImage(event){
        const target = event.target
        if (target && target.files) {
                contentStore.content.image = event.target.files[0];
        }
    }
    return {contentStore,changeImage}
}
}
</script>

<style scoped>
    label{
        background: #000;
        color: #fff;
        padding: 8px;
    }
    .contentOrginalData{
        overflow: hidden;
    }
</style>