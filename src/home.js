const home = () => {
    const backgroundDiv = document.getElementById('background');

    const copyDiv = document.createElement('div');
    copyDiv.setAttribute('id', 'copy');
   
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

    backgroundDiv.appendChild(copyDiv);
}

export { home }