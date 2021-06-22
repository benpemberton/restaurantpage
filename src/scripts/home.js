import { backgroundDiv } from './initial.js'
import border from '../assets/border.svg';

const home = () => {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home-box');

    const topBorder = document.createElement('img');
    topBorder.classList.add('top-border');
    topBorder.src = border;

    const bottomBorder = document.createElement('img');
    bottomBorder.classList.add('bot-border');
    bottomBorder.src = border;

    const copyDiv = document.createElement('div');
    copyDiv.setAttribute('class', 'copy');
   
    const p = document.createElement('p');
    p.innerHTML = `Oh yes indeedy! Welcome to this fancy pants 
    outside dining experience. All of your culinary desire and 
    alimentary urges will be sated in double quick time when you come 
    to luxuriate in the unmatched surroundings of this 'ere eatery.
    <br/>
    <br/>
    What have you a hankering for young master/mistress/unnamed 
    traveller from the road? Could it be that you have your heart set 
    firmly upon an intimate rendezvous with a bowl of our famed hunks 
    of sweaty cheese? Well, I wouldn't blame you if you did. Moreover, 
    I'd shout your acclaim to the heavens and insist that if ever there 
    were an individual that needed to be trussed up in finery and 
    showered with civic honours and chirruping cheers then here, in 
    fact, stands that person.`;
    copyDiv.appendChild(p);

    homeDiv.appendChild(topBorder);
    homeDiv.appendChild(copyDiv);
    homeDiv.appendChild(bottomBorder);

    backgroundDiv.appendChild(homeDiv);

    let a = backgroundDiv.offsetWidth;

    homeDiv.classList.add('slide-in');
}

export { home }