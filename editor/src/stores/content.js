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
        target : null
      },
      componentList : [
        {
          name:"Paragraph",
          tag:'p',
          attributeList:['innerHtml']
        }
      ]
    }
  }
}
)
