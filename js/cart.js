// JavaScript for increasing and decreasing quantity

function increaseQuantity(spanId) {
    const span = document.getElementById(spanId);
    const currentQuantity = parseInt(span.innerText, 10);
    span.innerText = currentQuantity + 1;
    updateTotalPrice();
}

function decreaseQuantity(spanId) {
    const span = document.getElementById(spanId);
    const currentQuantity = parseInt(span.innerText, 10);
    if (currentQuantity > 1) {
        span.innerText = currentQuantity - 1;
        updateTotalPrice();
    }
}

function removeProduct(productId) {
    const product = document.getElementById(productId);
    product.remove();
    updateTotalPrice();
}

function updateTotalPrice() {
    const quantities = document.querySelectorAll('[id^="quantity"]');
    const prices = [7000, 7000, 7000]; // the prices of our products
    let totalPrice = 0;

    quantities.forEach((quantity, index) => {
        totalPrice += parseInt(quantity.innerText, 10) * prices[index];
    });

    document.getElementById('total-price').innerText = `Total Price: Rs. ${totalPrice.toFixed(2)}`;
}

// Initial update of total price
updateTotalPrice();
