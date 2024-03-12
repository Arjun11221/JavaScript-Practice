const cart = ["kurta", "Pant", "Shirts"];

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return orderId;
  })
  .then((orderId) => {
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
  })
  .catch((err) => {
    console.log(err.message);
  });

function createOrder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart isn't Validate");
      reject(err);
    }
    const orderId = "1233";
    if (orderId) {
      resolve(orderId);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Successfull");
  });
}

function validateCart(cart) {
  return true;
}
