import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    const results = ['Test'];
    const div = document.getElementById('elements');
    element.innerHTML = results.join('<br>');
    element.classList.add(
        'body',
        'button');
        
    return element;
 }
 
function button() {


}

 document.body.appendChild(component());