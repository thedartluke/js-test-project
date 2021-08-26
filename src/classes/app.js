import {Sidebar, Site} from "./site";
export class App {
    constructor (model){
        this.model = model
    }
    init () {
        const site = new Site ('#site')
        site.render(this.model)
        let update = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)
        }
        new Sidebar ('#panel', update)
    }
}