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
                        <button @click="implementNode(component.html)"
                        >{{ component.name }}</button>
                    </li>
                </ul>
            </div>
        </div>
        <button id="NimaTest">Test</button>
    </section>
</template>

<script>
import { onMounted } from 'vue';
import { useContentStore } from '../stores/content';
export default {
    setup(){
        onMounted(()=>{
            let nima = document.getElementById('NimaTest');
            nima.addEventListener('click',TT)
        })
        function TT(t){
            // console.log(t);
            let bt = document.createElement('button')
            bt.innerHTML="nima"
            bt.addEventListener('click',()=>console.log("hui"))
            document.getElementById('app').appendChild(bt)
        }
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
                return fragment
            }
        }
        function implementNode(node){
            let newNode = new NewNode(node)
            contentStore.content.target.appendChild(newNode.create())
            AddComponentBoxsToElement()
        }
        function GetAllElementInRoot(){
            return contentStore.content.rootElement.querySelectorAll("*:not(.editor_plugElement):not(.editor_plugElement *)"); 
        }
        function CreateListOfComponent(){
                let UL = document.createElement("UL");
                contentStore.getComponentList.forEach(component=>{
                    let BUTTON = document.createElement("BUTTON");
                    // BUTTON.onClick =()=>implementNode(component.html)
                    BUTTON.addEventListener('click',()=>console.log("hui"))

                    BUTTON.innerHTML=component.name
                    let LI = document.createElement("LI")
                    LI.appendChild(BUTTON)
                    UL.classList.add("edContext")
                    UL.appendChild(LI)

                })

                return UL
            }
        function AddComponentBoxsToElement(elList=GetAllElementInRoot()) {        
            let ListOfComponents = CreateListOfComponent()

            removeComponentBoxsFromElement()    
            let box = document.createElement("div");
            box.setAttribute('class','ComponentListHolder hide_hover editor_plugElement')
            box.innerHTML ="+"
            box.appendChild(ListOfComponents)
            let compoentBox = box
            document.getElementById('app').appendChild(compoentBox)
              
            // elList.forEach(el=>{
            //     el.parentElement.insertBefore(compoentBox.cloneNode(true),el);
            //     el.appendChild(compoentBox.cloneNode(true));
            // })
        }
        function removeComponentBoxsFromElement(){
            let hide_ComponentList = contentStore.content.rootElement.querySelectorAll(".ComponentListHolder"); 
            hide_ComponentList.forEach(el=>{
                el.remove()
            })
        }
        return{
            implementNode,
            contentStore
        }
    }

}
</script>

<style>
  /* document.createRange().createContextualFragment(
                    `<div class="ComponentListHolder hide_hover editor_plugElement">
                        <span>+</span>
                        <div>
                            <ul>
                            ${ListOfComponents}
                            </ul>
                        </div>
                    </div>`
                ) */
</style>