import _, { result } from 'lodash';
import {html, render} from '@github/jtml'
import './style.css';

const sapa.cw = 'hello'
render(html`<h1>${sapa.cw} index</h1>`, document.body)

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    const results = [''];
    const div = document.getElementById('elements');
    element.innerHTML = results.join('');

    element.classList.add(
        'body',
        'text');

    return element;
 }
 
function button() {
}

 document.body.appendChild(component());
