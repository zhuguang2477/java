document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const distance = parseFloat(document.getElementById('distance').value);

    if (weight < 0 || distance < 0) {
        alert('Вес и расстояние должны быть положительными числами.');
        return;
    }

    const shippingCost = (weight * distance) / 10;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${weight}</td>
        <td>${distance}</td>
        <td>${shippingCost.toFixed(2)} ₽</td>
    `;

    document.getElementById('productList').appendChild(newRow);

    document.getElementById('deliveryForm').reset();
});