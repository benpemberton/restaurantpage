const menu = () => {
    const backgroundDiv = document.getElementById('background');

    const menuItems = [
        {
            name: 'Arancini',
            copy: 'Lovely, scrumptious balls of rice covered in ' + 
            'breadcrumbs and other good things.',
            pic: 'arancini.jpg'
        },
        {
            name: 'Risotto',
            copy: 'Slowly cooked rice with mushrooms. Full of lovely, ' + 
            'wholesome flavours.',
            pic: 'risotto.jpg'
        },
        {
            name: 'Caprese',
            copy: 'The freshest of the fresh! Tomatoes and mozarella, ' + 
            'and a bucketload of oil. Delightful.',
            pic: 'caprese.jpg'
        },
        {
            name: 'Lasagne',
            copy: 'Old faithful. Who can resist this multi-layered ' + 
            'stalwart of the Italian cuisine scene? Not I.',
            pic: 'lasagne.jpg'
        }
    ]

    let menuDivs = [];

    for (let i = 0; i < 4; i++) {
        menuDivs[i] = document.createElement('div');
        menuDivs[i].setAttribute('class', 'menu-item');

        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        img.src = menuItems[i].pic;
        h3.textContent = menuItems[i].name;
        p.textContent = menuItems[i].copy;

        menuDivs[i].appendChild(img);
        menuDivs[i].appendChild(h3);
        menuDivs[i].appendChild(p);

        backgroundDiv.appendChild(menuDivs[i]);
    }

    console.log(menuDivs);
    console.log(menuItems);

    // const p = document.createElement('p');
    // p.innerHTML = `Oh yes indeedy! Welcome to this fancy pants 
    // outside dining experience. All of your culinary desire and 
    // alimentary urges will be sated in double quick time when you come 
    // to luxuriate in the unmatched surroundings of this 'ere eatery.
    // <br/>
    // <br/>
    // What have you a hankering for young master/mistress/unnamed 
    // traveller from the road? Could it be that you have your heart set 
    // firmly upon an intimate rendezvous with a bowl of our famed hunks 
    // of sweaty cheese? Well, I wouldn't blame you if you did. Moreover, 
    // I'd shout your acclaim to the heavens and insist that if ever there 
    // were an individual that needed to be trussed up in finery and 
    // showered with civic honours and chirruping cheers then here, in 
    // fact, stands that person.`;
    // copyDiv.appendChild(p);
}

export { menu }