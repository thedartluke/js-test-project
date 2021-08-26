import {block} from '../utils'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from "./blocks";
export class Site {
    constructor(selector){
        this.$el = document.querySelector('#site')
    }
    render(model) {
        this.$el.innerHTML=''
        model.forEach(block => {
            this.$el.insertAdjacentHTML("beforeend", block.toHTML())
        })
    }
}


export class Sidebar {
   constructor(selector, update){
       this.$elem = document.querySelector(selector)

       this.update=update
       this.init()
   }
   init() {
       this.$elem.insertAdjacentHTML('afterbegin', this.template)
       this.$elem.addEventListener('submit', this.addBlock.bind(this))
   }
   get template() {
       return [
           block('text'),
           block('title')
           ].join('')
   }
   addBlock(event){
       event.preventDefault()
       let type = event.target.name
       let value = event.target.value.value
       let styles = event.target.styles.value
       let newBlock = type === 'text'
           ? new TextBlock(value, {styles})
           : new TitleBlock (value, {styles})
       this.update(newBlock)
       event.target.value.value = ''
       event.target.styles.value = ''
   }
}

