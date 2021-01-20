import _, { result } from 'lodash';
import './style.css';

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
