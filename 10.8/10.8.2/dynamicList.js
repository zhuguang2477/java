const dynamicList = document.getElementById('dynamicList');
const addItemButton = document.getElementById('addItem');
const removeItemButton = document.getElementById('removeItem');

addItemButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент списка';
    dynamicList.appendChild(newItem);
});

removeItemButton.addEventListener('click', () => {
    const items = dynamicList.getElementsByTagName('li');
    if (items.length > 0) {
        dynamicList.removeChild(items[items.length - 1]);
    }
});