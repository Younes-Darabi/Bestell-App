let totalAmount = 0;
let totalPaymentPrice = 0;
let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
    cart = defaultCart;
}

function showShoppingCart() {
    defaultCart = cart;
    localStorage.setItem("cart", JSON.stringify(cart));
    totalAmount = 0;
    totalPaymentPrice = 0;
    let showCart = document.getElementById("ShoppingCart");
    let showMiddleCart = document.getElementById("middle_ShoppingCart");
    showCart.innerHTML = "";
    showMiddleCart.innerHTML = "";
    dbShopingCartRender('mainCourses',showCart);
    dbShopingCartRender('sideDishes',showCart);
    addRemoveDeliveryPaymentCart();
    matchingDeliveryWithDb();
    if (totalAmount == 0) {
        showCart.innerHTML = `
            <div class="display_center">
                <img src="assets/imgs/icons/empty-cart.png" alt="empty-cart icon" width="50px">
            </div>`
    }
    totalPaymentPriceRender();
    showMiddleCart.innerHTML = showCart.innerHTML;
}

function dbShopingCartRender(array,showCart) {
    for (let i = 0; i < cart[array].length; i++) {
        showCart.innerHTML += showInCart(array, i);
        totalAmount += cart[array][i].amount;
        totalPaymentPrice += cart[array][i].amount * cart[array][i].price
    }
}

function matchingDeliveryWithDb() {
    if (cart.deliveryMethod == 10) {
        document.querySelector(`input[name="deliveryMethod"][value="10"]`).checked = true;
        document.querySelector(`input[name="middle_deliveryMethod"][value="10"]`).checked = true;
    } else {
        document.querySelector(`input[name="deliveryMethod"][value="0"]`).checked = true;
        document.querySelector(`input[name="middle_deliveryMethod"][value="0"]`).checked = true;
    }
}

function addRemoveDeliveryPaymentCart() {
    if (totalAmount >= 1) {
        document.getElementById('delivery_method').classList.remove('display_none');
        document.getElementById('total_payment_price').classList.remove('display_none');
        document.getElementById('middle_delivery_method').classList.remove('display_none');
        document.getElementById('middle_total_payment_price').classList.remove('display_none');
    } else {
        document.getElementById('delivery_method').classList.add('display_none');
        document.getElementById('total_payment_price').classList.add('display_none');
        document.getElementById('middle_delivery_method').classList.add('display_none');
        document.getElementById('middle_total_payment_price').classList.add('display_none');
    }
}

function totalPaymentPriceRender() {
    let showTotalPaymentPrice = document.getElementById("total_payment_price");
    let showMiddleTotalPaymentPrice = document.getElementById("middle_total_payment_price");
    totalPaymentPrice += parseFloat(cart.deliveryMethod);
    showTotalPaymentPrice.innerHTML = showTotalPaymentPriceHTML(totalAmount, totalPaymentPrice);
    showMiddleTotalPaymentPrice.innerHTML = showTotalPaymentPrice.innerHTML;
    cart.totalAmount = totalAmount;
    cart.totalPaymentPrice = totalPaymentPrice;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function deliveryMethod(idName) {
    let selected = document.querySelector(`input[name="${idName}"]:checked`);
    cart.deliveryMethod = selected.value;
    showShoppingCart();
}

function showInCart(array, i) {
    let amount = cart[array][i].amount;
    let price = parseFloat(cart[array][i].price);
    let totalPrice = amount * price;
    totalPrice = totalPrice.toFixed(2);
    return showInCartReturn(array, i, totalPrice);
}

function SubtractOneAmount(array, i) {
    if (cart[array][i].amount > 1) {
        cart[array][i].amount--;
    } else {
        removeFromCart(array, i);
    }
    showShoppingCart()
}

function AddOneToAmount(array, i) {
    cart[array][i].amount++;
    showShoppingCart()
}

function removeFromCart(array, i) {
    cart[array].splice(i, 1);
    showShoppingCart()
}

function btnMiddleShoppingCart() {
    document.getElementById('middle_shopping_cart').classList.toggle('display_none')
}