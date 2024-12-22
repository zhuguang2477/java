function getProductData() {
    let productName = prompt("Введите название товара:");
    let productPrice = parseFloat(prompt("Введите стоимость товара:"));
    let productCount = parseInt(prompt("Введите количество товара:"));

    return {
        name: productName,
        price: productPrice,
        count: productCount
    };
}

let product1 = getProductData();
let product2 = getProductData();
let product3 = getProductData();

let totalSum = 0;

console.log(product1.name, product1.price * product1.count);
totalSum += product1.price * product1.count;

console.log(product2.name, product2.price * product2.count);
totalSum += product2.price * product2.count;

console.log(product3.name, product3.price * product3.count);
totalSum += product3.price * product3.count;

console.log("Сумма всей покупки:", totalSum);