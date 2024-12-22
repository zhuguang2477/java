function totalSum(price, quantity, discount) {
    const totalPrice = price * quantity;
    const discountAmount = totalPrice * (discount / 100);
    return totalPrice - discountAmount;
}

const priceItem = 25000;
const amountItem = 3;
const discountItem = 20;

console.log(totalSum(priceItem, amountItem, discountItem));