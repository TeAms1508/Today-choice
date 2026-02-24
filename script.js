let cart = [];

const products = {
  1: { name: "Zobo Tea", price: 5000 },
  2: { name: "Slimming Tea Tea", price: 7000 },
  3: { name: "Flat Tummy Tea", price: 7000 },
  4: { name: "Flat Tummy & Slimming Tea", price: 7000 },
  5: { name: "Soursop Leaf Tea", price: 7000 },
  6: { name: "Smokers Tea", price: 7000 },
  7: { name: "Arabian Tea", price: 7000 },
  8: { name: "Ginger Shot", price: 7000 },
  9: { name: "Green Detox Shot", price: 7000 },
  10: { name: "Skin Glow Shot", price: 7000 },
  11: { name: "Immune Booster Shot", price: 7000 }
};

function addToCart(id) {
  let qty = document.getElementById("qty" + id).value;
  let product = products[id];

  cart.push({
    name: product.name,
    price: product.price,
    qty: parseInt(qty)
  });

  renderCart();
}

function renderCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.name} x${item.qty} - ₦${item.price * item.qty}`;
    cartList.appendChild(li);
  });

  calculateTotal();
}

function calculateTotal() {
  let subtotal = cart.reduce((sum, item) =>
    sum + (item.price * item.qty), 0);

  let delivery = parseInt(document.getElementById("location").value);
  document.getElementById("deliveryFee").innerText = delivery;

  document.getElementById("total").innerText = subtotal + delivery;
}

function calculateTotal() {
  let subtotal = cart.reduce((sum, item) =>
    sum + (item.price * item.qty), 0);

  let delivery = parseInt(document.getElementById("location2").value);
  document.getElementById("deliveryFee").innerText = delivery;

  document.getElementById("total").innerText = subtotal + delivery;
}

function payNow() {
  let email = document.getElementById("email").value;
  let total = parseInt(document.getElementById("total").innerText);

  PaystackPop.setup({
    key: "sk_live_e62519130f14cf71a9f21314fae4f462401d7234",
    email: email,
    amount: total * 100,
    currency: "NGN",
    callback: function(response) {
      alert("Payment Successful! Ref: " + response.reference);
    }
  }).openIframe();
}

function downloadReceipt() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 20;

  doc.text("Todays Choice Organic Limited", 20, y);
  y += 10;

  cart.forEach(item => {
    doc.text(`${item.name} x${item.qty} - ₦${item.price * item.qty}`, 20, y);
    y += 10;
  });

  let total = document.getElementById("total").innerText;
  doc.text("Total: ₦" + total, 20, y);

  doc.save("receipt.pdf");
}

function orderWhatsApp() {
  let message = "Order Details:%0A";

  cart.forEach(item => {
    message += `${item.name} x${item.qty} - ₦${item.price * item.qty}%0A`;
  });

  message += `Total: ₦${document.getElementById("total").innerText}`;

  window.open(`https://wa.me/2348073555226?text=${message}`);
}