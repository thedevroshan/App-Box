let addButtonIcon = document.getElementsByClassName('add-app')
let addWindow = document.getElementsByClassName('add-window')
let cancelButton = document.getElementById('cancel-button')
let addButton = document.getElementById('add-button')
let url = document.getElementById('url')
let urlName = document.getElementById('url-name')
let link = document.getElementById('link')




const createApp = (url, urlName) => {
    // Find the target element (the element you want to insert before)
    const targetElement = document.querySelector('.add-app'); // Replace with your target selector

    // Create div element
    const appContainer = document.createElement('div');
    appContainer.className = 'app-container';

    // Creating anchor tag
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.target = '_blank'

    // Create img element
    const img = document.createElement('img');
    const trimmed = url.replace(/(https?:\/\/)?(www\.)?/, '').split('.')[0];
    img.src = `https://api.iconify.design/fa-brands:${trimmed}.svg`;
    img.id = 'app-icon';
    anchor.appendChild(img)

    // Create input element
    const input = document.createElement('input');
    input.id = 'app-name';
    input.value = urlName;
    input.readOnly = true;

    // Append img and input to the div
    appContainer.appendChild(anchor);
    appContainer.appendChild(input);

    // Insert the appContainer before the target element
    targetElement.parentNode.insertBefore(appContainer, targetElement);
}


addButtonIcon[0].addEventListener('click', () => {
    addWindow[0].style.display = 'flex'
})

cancelButton.addEventListener('click', () => {
    url.value = ''
    urlName.value = ''
    addWindow[0].style.display = 'none'
})

addButton.addEventListener('click', () => {
    if (url.value === '' || urlName.value === '') {
        return;
    }

    createApp(url.value, urlName.value)

    localStorage.setItem(urlName.value, url.value)

    url.value = ''
    urlName.value = ''
    addWindow[0].style.display = 'none'
})


if (localStorage.length != 0) {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let value = localStorage.getItem(key)
        createApp(value, key)
    }
}