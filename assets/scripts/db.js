let defaultCart = {
  "mainCourses": [],
  "sideDishes": [],
  "deliveryMethod": 10,
  "totalAmount": 0,
  "TotalPaymentPrice": 0,
};

let extrasMenu = [
  {
    "name": "Cola",
    "type": "Getränk",
    "price": ["2.50", "3.00"],
    "size": ["0.33L", "0.5L"],
    "calories": 140,
    "image": "cola.jpg",
  },
  {
    "name": "Fanta",
    "type": "Getränk",
    "price": ["2.50", "3.00"],
    "size": ["0.33L", "0.5L"],
    "calories": 160,
    "image": "fanta.jpg",
  },
  {
    "name": "Wasser",
    "type": "Getränk",
    "price": ["2.00", "2.20", "2.50"],
    "size": ["still", "medium", "classic"],
    "calories": 0,
    "image": "wasser.jpg",
  },
  {
    "name": "Ketchup",
    "type": "Soße",
    "price": ["0.50"],
    "size": ["portion"],
    "calories": 20,
    "image": "ketchup.jpg",
  },
  {
    "name": "Mayonnaise",
    "type": "Soße",
    "price": ["0.50"],
    "size": ["portion"],
    "calories": 90,
    "image": "mayonnaise.jpg",
  },
  {
    "name": "Curry-Soße",
    "type": "Soße",
    "price": ["0.70"],
    "size": ["portion"],
    "calories": 60,
    "image": "currysoße.jpg",
  },
  {
    "name": "Chili-Soße",
    "type": "Soße",
    "price": ["0.70"],
    "size": ["portion"],
    "calories": 50,
    "image": "chili-soße.jpg",
  },
];


let pizzaMenu = [
  {
    "name": "Pizza Margherita",
    "ingredients": ["Tomatensoße", "Mozzarella", "Basilikum"],
    "price": ["7.50", "9.50", "18.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 850,
    "type": "vegetarisch",
    "image": "margherita.jpg"
  },
  {
    "name": "Pizza Salami",
    "ingredients": ["Tomatensoße", "Mozzarella", "Salami"],
    "price": ["8.50", "10.50", "19.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 950,
    "type": "normal",
    "image": "salami.jpg"
  },
  {
    "name": "Pizza Prosciutto",
    "ingredients": ["Tomatensoße", "Mozzarella", "Schinken"],
    "price": ["8.50", "10.50", "19.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 930,
    "type": "normal",
    "image": "prosciutto.jpg"
  },
  {
    "name": "Pizza Funghi",
    "ingredients": ["Tomatensoße", "Mozzarella", "Champignons"],
    "price": ["8.00", "10.00", "18.50"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 870,
    "type": "vegetarisch",
    "image": "funghi.jpg"
  },
  {
    "name": "Pizza Hawaii",
    "ingredients": ["Tomatensoße", "Mozzarella", "Schinken", "Ananas"],
    "price": ["9.00", "11.50", "20.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 960,
    "type": "normal",
    "image": "hawaii.jpg"
  },
  {
    "name": "Pizza Tonno",
    "ingredients": ["Tomatensoße", "Mozzarella", "Thunfisch", "Zwiebeln"],
    "price": ["9.00", "11.50", "20.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 980,
    "type": "normal",
    "image": "tonno.jpg"
  },
  {
    "name": "Pizza Quattro Formaggi",
    "ingredients": ["Mozzarella", "Gorgonzola", "Parmesan", "Fontina"],
    "price": ["9.50", "12.00", "21.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 1100,
    "type": "vegetarisch",
    "image": "quattro-formaggi.jpg"
  },
  {
    "name": "Pizza Diavola",
    "ingredients": ["Tomatensoße", "Mozzarella", "scharfe Salami", "Chili"],
    "price": ["9.00", "11.50", "20.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 1020,
    "type": "normal",
    "image": "diavola.jpg"
  },
  {
    "name": "Pizza Vegetaria",
    "ingredients": ["Tomatensoße", "Mozzarella", "verschiedenes Gemüse"],
    "price": ["8.50", "10.50", "19.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 890,
    "type": "vegetarisch",
    "image": "vegetaria.jpg"
  },
  {
    "name": "Pizza Quattro Stagioni",
    "ingredients": [
      "Tomatensoße",
      "Mozzarella",
      "Schinken",
      "Champignons",
      "Artischocken",
      "Oliven"
    ],
    "price": ["9.50", "12.00", "21.00"],
    "size": ["26cm", "32cm", "Familienpizza"],
    "calories": 1050,
    "type": "normal",
    "image": "quattro-stagioni.jpg"
  }
];
