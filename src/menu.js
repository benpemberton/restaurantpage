import arancini from './arancini.jpeg';
import risotto from './risotto.jpg';
import caprese from './caprese.jpg';
import lasagne from './lasagne.jpg';

const menu = () => {
    const backgroundDiv = document.getElementById('background');
    const menuContainer = document.createElement('div');
    menuContainer.setAttribute('class', 'menu-box');

    backgroundDiv.appendChild(menuContainer);

    const menuItems = [
        {
            name: 'Arancini',
            copy: 'Lovely, scrumptious balls of rice covered in ' + 
            'breadcrumbs and other good things.',
            pic: arancini
        },
        {
            name: 'Risotto',
            copy: 'Slowly cooked rice with mushrooms. Full of lovely, ' + 
            'wholesome flavours.',
            pic: risotto
        },
        {
            name: 'Caprese',
            copy: 'The freshest of the fresh! Tomatoes and mozarella, ' + 
            'and a bucketload of oil. Delightful.',
            pic: caprese
        },
        {
            name: 'Lasagne',
            copy: 'Old faithful. Who can resist this multi-layered ' + 
            'stalwart of the Italian cuisine scene? Not I.',
            pic: lasagne
        }
    ]

    let menuDivs = [];

    for (let i = 0; i < 4; i++) {
        menuDivs[i] = document.createElement('div');
        menuDivs[i].classList.add('menu-item');

        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        img.src = menuItems[i].pic;
        h3.textContent = menuItems[i].name;
        p.textContent = menuItems[i].copy;

        menuDivs[i].appendChild(img);
        menuDivs[i].appendChild(h3);
        menuDivs[i].appendChild(p);

        menuContainer.appendChild(menuDivs[i]);     
    }

    let a = backgroundDiv.offsetWidth;

    menuContainer.classList.add('slide-in');

}

export { menu }