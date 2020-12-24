import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    const results = ["1","2","3","4","1","2","3","4"];
    const div = document.getElementById('elements');
    element.innerHTML = results.join('<br>');
    element.classList.add(
        'body',
        'button');

    return element;
 }
 
 document.body.appendChild(component());