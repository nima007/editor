<template>
    <section class="componentHolder sectionBox">
        <div class="secTitle">
            <h2>Components : </h2>
            <div class="icon"></div>
        </div>
        <div class="content">
            <div class="row">
                <button @click="paragraph()">add paragraph</button>
            </div>
        </div>
    </section>
</template>

<script>
import { useContentStore } from '../stores/content';
export default {

    setup(){
        const contentStore = useContentStore();
        class NewNode{
            constructor(tag,data){
                this.node=`<${tag}>${data}</${tag}>`
            }
            create(){
                console.log('created');
                contentStore.content.content+=this.node
            }
        }
        function paragraph(data = "this is paragraph") {
            console.log('inParagrapg');
            let node = new NewNode('p',data)
            node.create()
        }
  
        return{
            paragraph
        }
    }

}
</script>

<style>

</style>