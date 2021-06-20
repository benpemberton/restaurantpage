import { pageLoad } from './initial.js';
import { menu } from './menu.js';

window.onload = pageLoad();

const tabs = document.querySelectorAll('li');
tabs.forEach(tab => {
    tab.addEventListener('click', switchTabs);
})

function switchTabs(e) {
    if (!(e.target.classList.contains('current'))) {
        clearContents();

        e.target.classList.add('current');

        tabs.forEach(tab => {
            if (tab.id !== (e.target.id) && 
            tab.classList.contains('current')) {

                tab.classList.remove('current');
            
            }
        });

        const module = e.target.id;

        switch(module) {
            case 'menu':
                menu();
                break;
            case 'home':
                home();
                break;
            case 'contact':
                contact();
                break;
        }  

    }
}

function clearContents() {
    const backgroundDiv = document.getElementById('background');
    const divs = backgroundDiv.querySelectorAll('div');

    divs.forEach(div => div.remove());
}