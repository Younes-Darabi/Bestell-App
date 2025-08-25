let dbKundenDaten = JSON.parse(localStorage.getItem("dbKundenDaten"));
if (!dbKundenDaten) {
    dbKundenDaten = defaultdbKundenDaten;
}

orderReder();

function orderReder() {
    let order = document.getElementById("my_order");
    order.innerHTML = null;

    for (let i = 0; i < cart.mainCourses.length; i++) {
        order.innerHTML += `
            <h3>${cart.mainCourses[i].name} (${cart.mainCourses[i].size})</h3>
            <p>${cart.mainCourses[i].amount} x ${cart.mainCourses[i].price} € = ${((cart.mainCourses[i].amount) * (cart.mainCourses[i].price)).toFixed(2)} €</p>
            <div class="line"></div>
        `;
    }
    for (let i = 0; i < cart.sideDishes.length; i++) {
        order.innerHTML += `
            <h3>${cart.sideDishes[i].name} (${cart.sideDishes[i].size})</h3>
            <p>${cart.sideDishes[i].amount} x ${cart.sideDishes[i].price} € = ${(cart.sideDishes[i].amount) * (cart.sideDishes[i].price)} €</p>
            <div class="line"></div>
        `;
    }
    order.innerHTML += `
            <p>Versandkosten: ${cart.deliveryMethod} €</p>
            <div class="line"></div>
            <h3 class="red">Gesamtanzahl: ${cart.totalAmount} </h3>
            <h3 class="red">Gesamtbetrag: ${(cart.totalPaymentPrice).toFixed(2)} €</h3>
        `;

}

function kundenDatenSpeichern() {
    let name = document.getElementById('name');
    let address = document.getElementById('address');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let payment = document.getElementById('payment');

    let ok = true;

    checkInput(name);
    checkInput(address);
    checkInput(phone);
    checkInput(email);
    checkInput(payment);

    function checkInput(element) {
        if (!element.value) {
            element.style.borderColor = 'red';
            ok = false;
        } else {
            element.style.borderColor = '#d4d4d4';
        }
    }

    if (ok) {
        dbKundenDaten.push({
            "name": name.value,
            "address": address.value,
            "phone": phone.value,
            "email": email.value,
            "payment": payment.value,
            "order": cart,
        })
        localStorage.setItem("dbKundenDaten", JSON.stringify(dbKundenDaten));
        document.getElementById('section_order').classList.add("opacity");
        document.getElementById('section_kunden_daten').classList.add("opacity");
        document.getElementById('section_successful_message').classList.remove("opacity");
        paymentSuccessfulMessage();
        cart = {
            "mainCourses": [],
            "sideDishes": [],
            "deliveryMethod": 0,
            "totalAmount": 0,
            "totalPaymentPrice": 0,
        };
        localStorage.setItem("cart", JSON.stringify(cart));
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
        document.getElementById('section_kunden_daten').classList.remove("opacity");
    }else{
        window.location.href = "index.html";
    }
}

function btnBack() {
    document.getElementById('section_order').classList.remove("opacity");
    document.getElementById('section_kunden_daten').classList.add("opacity");
}