let ok = true;
let customersData = JSON.parse(localStorage.getItem("customers_data"));
if (!customersData) {
    customersData = defaultdbCustomersData;
}

function orderReder() {
    let order = document.getElementById("my_order");
    order.innerHTML = "";
    order.innerHTML += showOrderInCheckout('mainCourses');
    order.innerHTML += showOrderInCheckout('sideDishes');
    order.innerHTML += `
            <p>Versandkosten: ${cart.deliveryMethod} €</p>
            <div class="line"></div>
            <h3 class="red">Gesamtanzahl: ${cart.totalAmount} </h3>
            <h3 class="red">Gesamtbetrag: ${(cart.totalPaymentPrice).toFixed(2)} €</h3>
        `;
}

function showOrderInCheckout(array) {
    let output="";
    for (let i = 0; i < cart[array].length; i++) {
        output += `
        <h3>${cart[array][i].name} (${cart[array][i].size})</h3>
        <p>${cart[array][i].amount} x ${cart[array][i].price} € = ${((cart[array][i].amount) * (cart[array][i].price)).toFixed(2)} €</p>
        <div class="line"></div>
        `;
    }
    return output;
}

function saveCustomerData() {
    ok = true
    let name = document.getElementById('name');
    let address = document.getElementById('address');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let payment = document.getElementById('payment');
    checkInputCustomerData(name);
    checkInputCustomerData(address);
    checkInputCustomerData(phone);
    checkInputCustomerData(email);
    checkInputCustomerData(payment);
    if (ok) {
        customersData.push({
            "name": name.value,
            "address": address.value,
            "phone": phone.value,
            "email": email.value,
            "payment": payment.value,
            "order": cart,
        })
        localStorage.setItem("customers_data", JSON.stringify(customersData));
        document.getElementById('section_order').classList.add("opacity");
        document.getElementById('section_customers_data').classList.add("opacity");
        document.getElementById('section_successful_message').classList.remove("opacity");
        paymentSuccessfulMessage();
        emptyShoppingCart();
    }
}

function emptyShoppingCart() {
    cart = {
        "mainCourses": [],
        "sideDishes": [],
        "deliveryMethod": 0,
        "totalAmount": 0,
        "totalPaymentPrice": 0,
    };
    localStorage.setItem("cart", JSON.stringify(cart));
}

function checkInputCustomerData(element) {
    if (!element.value) {
        element.style.borderColor = 'red';
        ok = false;
    } else {
        element.style.borderColor = '#d4d4d4';
    }
}

function paymentSuccessfulMessage() {
    let successfulMessage = document.getElementById("successful_message");
    successfulMessage.innerHTML = `
        <h3>Zahlung erfolgreich!</h3>
        <p>Vielen Dank für Ihren Einkauf.</p>
    `;
}

function btnNext() {
    if (cart.totalAmount > 0) {
        document.getElementById('section_order').classList.add("opacity");
        document.getElementById('section_customers_data').classList.remove("opacity");
    } else {
        window.location.href = "index.html";
    }
}

function btnBack() {
    document.getElementById('section_order').classList.remove("opacity");
    document.getElementById('section_customers_data').classList.add("opacity");
}