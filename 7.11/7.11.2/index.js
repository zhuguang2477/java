const heights = [150, 160, 165, 170];

const allElements = document.querySelector('.all-elements');
const addHeightButton = document.querySelector('.add-height');
const filterButton = document.querySelector('.filter');

function renderHeights() {
    allElements.textContent = heights.join(', ');
}

addHeightButton.addEventListener('click', () => {
    const newHeight = prompt("Введите рост ученика:");
    if (newHeight) {
        heights.push(Number(newHeight));
        renderHeights();
    } else {
        alert("Рост не введён!");
    }
});

filterButton.addEventListener('click', () => {
    const minHeight = prompt("Введите минимальный рост для фильтрации:");
    if (minHeight) {
        const filteredHeights = heights.filter(height => height >= Number(minHeight));
        allElements.textContent = filteredHeights.join(', ');
    } else {
        renderHeights();
    }
});

renderHeights();