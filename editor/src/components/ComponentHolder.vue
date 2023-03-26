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
            constructor(tag,data)
            {
                this.data = data;
                this.tag=tag.toUpperCase();
            }
            create()
            {
                console.log('created');
                let node = document.createElement(this.tag);
                node.innerHTML = this.data;
                node.setAttribute('contentEditable','true');
                console.log(node);

                // node.
                return node
            }
        }
        function paragraph(data = "this is paragraph") {
            console.log('inParagrapg');
            let node = new NewNode('p',data)
            contentStore.content.target.appendChild(node.create())
        }
        function DC(data = "this is paragraph") {
            let node = new NewNode('div',data)
            contentStore.content.target.appendChild(node.create())
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