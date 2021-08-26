import image from './Assets/image.png'
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/blocks'
const text = 'Around the world Around the world Around the world Around the world Around the world Around the world Around the world Around the world Around the world'
export const model = [
    new TitleBlock('Around the world',  {tag: 'h2',
    styles: {
    background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        'text-align': 'center',
        padding: '1.5rem'
}}),
    new TextBlock (text, {
        styles: {
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            'font-weight': 'bold',
            padding: '1rem'
        }
    }),
    new ImageBlock (image, {
        styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '1200px',
            height: '600px'
        }
    }),
    new ColumnsBlock ( [
        'around the world',
        'around the world',
        'around the world'
    ],{
        styles: {
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            color: '#fff',
            'font-weight': 'bold',
            padding: '2rem'
        }
    } )
]