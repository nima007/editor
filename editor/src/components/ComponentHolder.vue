<template>
    <section class="componentHolder sectionBox">
        <div class="secTitle">
            <h2 id="content2">Components : </h2>
            <div class="icon"></div>
        </div>
        <div class="content">
            <div class="row">
                <button @click="paragraph()">add paragraph</button>
                <button @click="DC()">add Div</button>
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
            constructor(tag)
            {
                this.tag=tag
                
            }
            create()
            {
                let range = document.createRange();
                let fragment = range.createContextualFragment(this.tag)
                if(fragment.childNodes[0].nodeName=='IMG'){
                    fragment.children[0].innerHTML=prompt("Write ImageAdress")
                }
                return fragment
            }
            setFile(){

            }
        }
        function paragraph(data = "this is paragraph") {
            console.log('inParagrapg');
            let node = new NewNode(`<p>${data}</p>`)
            contentStore.content.target.appendChild(node.create())
        }
        function DC(data = "this is Div") {
            // let node = new NewNode('div',data)
            // contentStore.content.target.appendChild(node.create().content)
        }
        return{
            paragraph,
            DC
        }
    }

}
</script>

<style>

</style>