import { pageLoad } from './initial.js';
import { menu } from './menu.js';
import { home } from './home.js';
import { contact } from './contact.js';
import './styles.css';

window.onload = pageLoad();

const tabs = document.querySelectorAll('li');
tabs.forEach(tab => {
    tab.addEventListener('click', switchTabs);
});

function switchTabs(e) {

    if (!(e.target.classList.contains('current'))) {
        clearContents();

        tabs.forEach(tab => {
            if (tab.classList.contains('current')) {
                tab.classList.remove('current');          
            }
        });

        e.target.classList.add('current');

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
    tabs.forEach(tab => {
        tab.style.pointerEvents = 'none';
    });

    const backgroundDiv = document.getElementById('background');
    const content = backgroundDiv.querySelectorAll('.slide-in');

    content.forEach((item, i) => {
        item.style.position = 'absolute';
        item.style.transform = 'translateY(1000px)';

        item.ontransitionend = () => {
            item.remove();
        }

        if (i === content.length - 1) {
            tabs.forEach(tab => {
                tab.style.pointerEvents = 'auto';
            });
        }
    });
}