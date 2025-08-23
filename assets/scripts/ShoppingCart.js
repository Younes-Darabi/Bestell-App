let totalAmount = 0;
let TotalPaymentPrice = 0;

function showShoppingCart() {
    totalAmount = 0;
    TotalPaymentPrice = 0;
    let showCart = document.getElementById("ShoppingCart");
    showCart.innerHTML = "";
    for (let i = 0; i < cart.mainCourses.length; i++) {
        showCart.innerHTML += showInCart('mainCourses', i);
        totalAmount += cart.mainCourses[i].amount;
        TotalPaymentPrice += cart.mainCourses[i].amount * cart.mainCourses[i].price
    }
    for (let i = 0; i < cart.sideDishes.length; i++) {
        showCart.innerHTML += showInCart('sideDishes', i);
        totalAmount += cart.sideDishes[i].amount;
        TotalPaymentPrice += cart.sideDishes[i].amount * cart.sideDishes[i].price
    }
    // Not displaying the total amount and shipping method if the shopping cart is empty
    if (totalAmount>=1){
        document.getElementById('delivery_method').classList.remove('display_none');
        document.getElementById('total_payment_price').classList.remove('display_none');
    }else{
        document.getElementById('delivery_method').classList.add('display_none');
        document.getElementById('total_payment_price').classList.add('display_none');
    }

    totalPaymentPriceRender();
}

function totalPaymentPriceRender() {
    let showTotalPaymentPrice = document.getElementById("total_payment_price");
    TotalPaymentPrice = TotalPaymentPrice + parseFloat(cart.deliveryMethod);
    showTotalPaymentPrice.innerHTML = `
    <div class="red_line"></div>
    <div class="display_space">
        <p class="red">${totalAmount}</p>
        <p class="red">${TotalPaymentPrice.toFixed(2)}€</p>
    </div>
    <div class="zur_kasse_btn">
        <button onclick="addPizzaToCart()"><img src="assets/imgs/icons/kasse.png" width="30px" height=30px>Zur Kasse</button>
    </div>       
    `
    cart.totalAmount=totalAmount;
    cart.TotalPaymentPrice=TotalPaymentPrice;
}

function deliveryMethod() {
    let selected = document.querySelector(`input[name="deliveryMethod"]:checked`);
    cart.deliveryMethod = selected.value;
    console.table(cart);
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
                <button onclick="removeFromCart('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/delete.png" width="20px" height=20px></button>
            </div> 
        </div>
        <p><span class="text_bold">Größe:</span> ${cart[array][i].size}</p>
        <p><span class="text_bold">Preis: </span>${cart[array][i].price} €</p>
        <div class="display_space">
            <p><span class="text_bold">Mange: </span>${cart[array][i].amount}</p>
            <div>
                <button onclick="SubtractOneAmount('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/remove.png" width="20px" height=20px></button>
                <button onclick="AddOneToAmount('${array}',${i})" class="btn_add_pizza"><img src="assets/imgs/icons/add.png" width="20px" height=20px></button>
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