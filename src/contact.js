import map from './map.jpg';

const contact = () => {
    const backgroundDiv = document.getElementById('background');

    const contactCard = {
        phone: '07899 123 456',
        email: 'alfrest@foods.com',
        address: '88 Rose Crescent, London, W1 1TU',
        pic: map,
    }

    const contactDiv = document.createElement('div');
    contactDiv.setAttribute('class', 'contact-box');

    const phone = document.createElement('p');
    const email = document.createElement('p');
    const address = document.createElement('p');
    const pic = document.createElement('img');

    phone.textContent = contactCard.phone;
    email.textContent = contactCard.email;
    address.textContent = contactCard.address;
    pic.src = contactCard.pic;

    contactDiv.appendChild(phone);
    contactDiv.appendChild(email);
    contactDiv.appendChild(address);
    contactDiv.appendChild(pic);

    backgroundDiv.appendChild(contactDiv);

    let a = backgroundDiv.offsetWidth;

    contactDiv.classList.add('slide-in');
}

export { contact }