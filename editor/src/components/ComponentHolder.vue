<template>
    <section class="componentHolder sectionBox">
        <div class="secTitle">
            <h2 id="content2">Components : </h2>
            <div class="icon"></div>
        </div>
        <div class="content">
            <div class="row">
                <!-- <button @click="paragraph()">add paragraph</button> -->
                <ul>
                    <li v-for="(component,cIndex) in contentStore.getComponentList" :key="cIndex">
                        <button @click="inplimentNode(component.html)"
                        >{{ component.name }}</button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import { useContentStore } from '../stores/content';
export default {
    setup(){
        const contentStore = useContentStore();
        console.log(contentStore.getComponentList);
        class NewNode{
            constructor(tag)
            {
                this.tag=tag
                
            }
            create()
            {
                let range = document.createRange();
                let fragment = range.createContextualFragment(this.tag)
                return fragment
            }
        }
        function inplimentNode(node){
            let newNode = new NewNode(node)
            contentStore.content.target.appendChild(newNode.create())
            AddComponentBoxsToElement()
        }
        function GetAllElementInRoot(){
            return contentStore.content.rootElement.querySelectorAll("*:not(.editor_plugElement):not(.editor_plugElement *)"); 
        }
        function AddComponentBoxsToElement(elList=GetAllElementInRoot()) {
            console.log(elList);
            removeComponentBoxsFromElement()    
            elList.forEach(el=>{
                let componentList =  contentStore.getComponentList();
                let compoentBox = 
                document.createRange().createContextualFragment(
                    `<div class="ComponentListHolder hide_hover editor_plugElement">
                        <span>+</span>
                    </div>`
                )
                console.log('el',el,'parentEl',el.parentElement);
                el.parentElement.insertBefore(compoentBox,el);
                el.appendChild(
                    document.createRange().createContextualFragment(
                    `<div class="ComponentListHolder hide_hover editor_plugElement">
                        <span>+</span>
                        <div>
                            <ul>

                    </div>`
                )
                    // compoentBox.cloneNode(true)
                );
            })
        }
        function removeComponentBoxsFromElement(){
            let hide_ComponentList = contentStore.content.rootElement.querySelectorAll(".ComponentListHolder"); 
            hide_ComponentList.forEach(el=>{
                el.remove()
            })
        }
        return{
            inplimentNode,
            contentStore
        }
    }

}
</script>

<style>

</style>