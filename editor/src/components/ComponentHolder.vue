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
            constructor(tag,data)
            {
                this.data = data;
                this.tag=tag.toUpperCase()
            }
            create()
            {
                console.log('created');
                let target = document.getElementById("content");
                this.node = document.createElement(this.tag)
                this.node.innerHTML = this.data
                this.node.conten
                target.appendChild(this.node)
            }
        }
        function paragraph(data = "this is paragraph") 
        {
            console.log('inParagrapg');
            let node = new NewNode('p',data)
            node.create()
            console.log("test");
        }
        return{
            paragraph
        }
    }

}
</script>

<style>

</style>