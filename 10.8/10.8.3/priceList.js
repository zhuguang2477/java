const originalPrices = [100, 500, 250, 750, 300];
const priceList = document.getElementById('priceList');

function displayPrices(prices) {
    priceList.innerHTML = '';
    prices.forEach(price => {
        const li = document.createElement('li');
        li.textContent = `$${price}`;
        priceList.appendChild(li);
    });
}

function sortPricesAsc() {
    const sortedPrices = [...originalPrices].sort((a, b) => a - b);
    displayPrices(sortedPrices);
}

function sortPricesDesc() {
    const sortedPrices = [...originalPrices].sort((a, b) => b - a);
    displayPrices(sortedPrices);
}

document.getElementById('sortAsc').addEventListener('click', sortPricesAsc);
document.getElementById('sortDesc').addEventListener('click', sortPricesDesc);

displayPrices(originalPrices);