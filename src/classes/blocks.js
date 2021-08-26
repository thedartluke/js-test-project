import {col, css, row} from "../utils";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML () {
        throw new Error('Метод toHTML должен быть реализован')
    }
}
export class TitleBlock extends Block {
    constructor (value, options) {
        super(value, options);
    }
    toHTML(){
        let {tag = 'h1', styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}
export class TextBlock extends Block {
    constructor (value, options) {
        super(value, options);
    }
    toHTML(){
        let styles = this.options.styles
        return row (col(`<p>${this.value}</p>`), css(styles))
    }
}
export class ColumnsBlock extends Block {
    constructor (value, options) {
        super(value, options);
    }
    toHTML(){
        let styles = this.options.styles
        let html = this.value.map(col)
        return row(html.join(''), css(styles))
    }
}
export class ImageBlock extends Block {
    constructor (value, options) {
        super(value, options);
    }
    toHTML(){
        let {imageStyles, styles} = this.options
        return row ((`<img src = "${this.value}" alt = '' style="${css(imageStyles)}"/>`), css(styles))
    }
}