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
    dbShopingCartRender('mainCourses');
    dbShopingCartRender('sideDishes');
    function dbShopingCartRender(array) {
        for (let i = 0; i < cart[array].length; i++) {
            showCart.innerHTML += showInCart(array, i);
            totalAmount += cart[array][i].amount;
            totalPaymentPrice += cart[array][i].amount * cart[array][i].price
        }
    }
    // Not displaying the total amount and shipping method if the shopping cart is empty
    addRemoveDeliveryPaymentCart();
    // Setting the selected radio-box to the user's choice and not the default
    matchingDeliveryWithDb();
    // Show empty shopping cart icon if the shopping cart is empty
    if (totalAmount == 0) {
        showCart.innerHTML = `
            <div class="display_center">
                <img src="assets/imgs/icons/empty-cart.png" alt="empty-cart icon" width="50px">
            </div>`
    }
    totalPaymentPriceRender();
    showMiddleCart.innerHTML = showCart.innerHTML;
}

// Setting the selected radio-box to the user's choice and not the default
function matchingDeliveryWithDb() {
    if (cart.deliveryMethod == 10) {
        document.querySelector(`input[name="deliveryMethod"][value="10"]`).checked = true;
        document.querySelector(`input[name="middle_deliveryMethod"][value="10"]`).checked = true;
    } else {
        document.querySelector(`input[name="deliveryMethod"][value="0"]`).checked = true;
        document.querySelector(`input[name="middle_deliveryMethod"][value="0"]`).checked = true;
    }
}

// Not displaying the total amount and shipping method if the shopping cart is empty
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
    showTotalPaymentPrice.innerHTML = `
    <div class="red_line"></div>
    <div class="display_space">
        <p class="red">${totalAmount}</p>
        <p class="red">${totalPaymentPrice.toFixed(2)}€</p>
    </div>
    <div class="zur_kasse_btn"> 
        <a href="html/checkout.html">
            <img src="assets/imgs/icons/kasse.png"  alt="kasse icon" width="30" height="30" alt="Zur Kasse"> Zur Kasse
        </a>
    </div>     
    `
    showMiddleTotalPaymentPrice.innerHTML = showTotalPaymentPrice.innerHTML;
    cart.totalAmount = totalAmount;
    cart.totalPaymentPrice = totalPaymentPrice;
    localStorage.setItem("cart", JSON.stringify(cart));
}

function deliveryMethod() {
    let selected = document.querySelector(`input[name="deliveryMethod"]:checked`);
    cart.deliveryMethod = selected.value;
    showShoppingCart();
}

function middleDeliveryMethod() {
    let selected = document.querySelector(`input[name="middle_deliveryMethod"]:checked`);
    cart.deliveryMethod = selected.value;
    showShoppingCart();
}

function showInCart(array, i) {
    let amount = cart[array][i].amount;
    let price = parseFloat(cart[array][i].price);
    let totalPrice = amount * price;
    totalPrice = totalPrice.toFixed(2);
    return `
        <div class="display_space"> 
            <h3>${cart[array][i].name}</h3>
            <div>
                <button onclick="removeFromCart('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/delete.png" alt="delete icon" width="20px" height=20px></button>
            </div> 
        </div>
        <p><span class="text_bold">Größe:</span> ${cart[array][i].size}</p>
        <p><span class="text_bold">Preis: </span>${cart[array][i].price} €</p>
        <div class="display_space">
            <p><span class="text_bold">Mange: </span>${cart[array][i].amount}</p>
            <div>
                <button onclick="SubtractOneAmount('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/remove.png" alt="remove icon" width="20px" height=20px></button>
                <button onclick="AddOneToAmount('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/add.png" alt="add icon" width="20px" height=20px></button>
            </div>
            <p class="red">${totalPrice}€</p>
        </div>
        <div class="line"></div>
    `;
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

// ---Middle Shopping Cart
function btnMiddleShoppingCart() {
    document.getElementById('middle_shopping_cart').classList.toggle('display_none')
}