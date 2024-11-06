let cart = [];

function addToCart(productName, price, size) {
  const item = {
    productName,
    price,
    size
  };

  cart.push(item);
  updateCart();
}

function updateCart() {
  const cartItemsElement = document.getElementById('cart-items');
  cartItemsElement.innerHTML = ''; // Очистить текущие товары в корзине

  let total = 0;
  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} (Размер: ${item.size}) - ${item.price} руб.`;
    cartItemsElement.appendChild(listItem);
    total += item.price;
  });

  document.getElementById('total').textContent = `Общая сумма: ${total} руб.`;
}

function checkout() {
  if (cart.length === 0) {
    alert('Ваша корзина пуста!');
  } else {
    alert('Спасибо за покупку!');
    cart = [];
    updateCart();
  }
}