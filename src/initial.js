const pageLoad = (() => {
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('id', 'header');

    const title = document.createElement('h1');
    title.textContent = 'Al Fresco Restaurant';
    headerDiv.appendChild(title);

    const backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('id', 'background');

    const copyDiv = document.createElement('div');
    copyDiv.setAttribute('id', 'copy')
    
}