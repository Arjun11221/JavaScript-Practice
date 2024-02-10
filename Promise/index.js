const cart = ["Pants ", "Kurta", "Shirts"];

createOrder(cart, (orderId) => {
  proceedToPayment(orderId, (paymentInfo) => {
    showOrderSummary(paymentInfo, (paymentInfo) => {
      updateWalletBalance(paymentInfo);
    });
  });
});

// But Above Code has an issue of Inversion of Control

// So we use Promise

createOrder(cart)
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then((paymentInfo) => updateWalletBalance(paymentInfo));



// const GITHUP_API = "https://api.github.com/users/Arjun11221";

// const user = fetch(GITHUP_API);

// console.log(user);
