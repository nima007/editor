import { defineStore } from 'pinia'

export const useContentStore = defineStore('content', {
  state:()=>{
    return{
      content:{
        name:'',
        image:'',
        imageAlt:'',
        tagList:[],
        category:[],
        url:'',
        content:'',
        other:{},
        target : null,
        rootElement : null
      },
      componentList : [
        {
          name:"Paragraph",
          html:`<p>this is paragraph</p>`,
        },
        {
          name:"SectionParagraph",
          html:`
            <section>
              <p>this is section , paragraph</p>
            </section>
            `,
        },
        {
          name:"SectionParagraph x 2",
          html:`
            <section>
              <p>this is section , paragraph</p>
              <p>this is section ,<span>div</span> paragraph </p>
            </section>
            `,
        },
        {
          name:"SectionParagraphImage",
          html:`
            <section>
              <p>this is section , paragraph</p>
              <img src="src/assets/logo.svg">
            </section>
            `,
        }
      ]
    }
  },
  getters:
  {
    getComponentList:(state)=>state.componentList
  }
}
)
