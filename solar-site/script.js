let count = 0;
let total = 0;

function addToCart(price) {
    count++;
    total += price;

    document.getElementById("cart-count").innerText = count;
    document.getElementById("total-price").innerText = total;
}

function checkout() {
    if (count === 0) {
        alert("Корзина пустая!");
        return;
    }

    alert("Оплата прошла успешно! Спасибо за покупку.");
    count = 0;
    total = 0;
    document.getElementById("cart-count").innerText = 0;
    document.getElementById("total-price").innerText = 0;
}