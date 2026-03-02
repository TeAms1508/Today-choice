// ===== REVIEW STORAGE SYSTEM =====

function loadReviews() {
    const storedReviews = JSON.parse(localStorage.getItem("tcol_reviews")) || [];
    const reviewList = document.getElementById("reviewList");
    reviewList.innerHTML = "";

    storedReviews.forEach(r => {
        reviewList.innerHTML += `
            <p>
                ⭐⭐⭐⭐⭐
                <strong>${r.name}</strong>
                <br>
                <small>${r.date}</small>
                <br>
                ${r.message}
            </p>
        `;
    });
}

function saveReview(review) {
    const storedReviews = JSON.parse(localStorage.getItem("tcol_reviews")) || [];
    storedReviews.push(review);
    localStorage.setItem("tcol_reviews", JSON.stringify(storedReviews));
}

const products = [
{ id:1, name:"Flat Tummy Tea", price:10000, image:"./images/flat tummy.jpg"},
{ id:2, name:"Slimming Tea", price:10000, image:"./images/slimming.jpg"},
{ id:3, name:"Zobo Mix", price:5000, image:"./images/zobo mix.jpg"},
{ id:4, name:"Arabian Tea", price:7000, image:"./images/arabian.jpg"},
{ id:5, name:"Soursop Tea", price:7000, image:"./images/soursop.jpg"},
{ id:6, name:"Smokers Tea", price:7000, image:"./images/smokers.jpg"},
{ id:7, name:"Full body Wellness", price:20000, image:"./images/flat tummy & slimming (1).jpg"},
{ id:8, name:"Ginger Shot", price:1000, image:"./images/ginger.jpg"},
{ id:9, name:"Skin Glow Shot", price:1000, image:"./images/skin glow.jpg"},
{ id:10, name:"Immune Booster Shot", price:1000, image:"./images/Radiant.png"},
{ id:11, name:"Green Detox", price:6000, image:"./images/green detox.jpg"},
];

let cart = [];
let invoiceCounter = 1;

const deliveryFees = {
local: {
"Lagos":2000,
"Abuja":2500,
"Port Harcourt":3000
},
international:{
"UK, IRELAND":75000,
"BENIN REP, GHANA GAMBIA,SIERRA LEONE,CONGO, LIBERIA":90000,
"CANADA, USA":87500,
"TURKEY, MALTA, BELGIUM, NORWAY SPAIN, SWEDEN, POLAND, FINLAND, NETHERLANDS, CYPRUS, Switzerland":100500,
"SOUTH AFRICA, KENYA,ZIMBABWE, ZAMBIA. BOTSWANA":105000,
"France, Germany,Italy. DUBAI, OMAN, ISREAL,QATAR ,SAUDI ARABIA":110500,
"AUSTRALIA, INDIA, VIETNAM , Malaysia,China,Philippines":120000,
"Barbados,Bahamas":130000

}
};

function renderProducts(){
const grid = document.getElementById("productGrid");
products.forEach(p=>{
grid.innerHTML += `
<div class="product-card">
<img src="${p.image}">
<h3>${p.name}</h3>
<p>₦${p.price}</p>
<input type="number" min="0" value="0" id="qty-${p.id}">
<button onclick="addToCart(${p.id})">Add</button>
</div>`;
});
}
renderProducts();

function addToCart(id){
const qty = document.getElementById(`qty-${id}`).value;
if(qty>0){
cart.push({id, qty});
updateSummary();
}
}

function updateSummary(){
let total = 0;
let summary = "";

cart.forEach(item=>{
let product = products.find(p=>p.id===item.id);
let subtotal = product.price * item.qty;
total += subtotal;
summary += `<p>${product.name} x${item.qty} = ₦${subtotal}</p>`;
});

const type = document.getElementById("deliveryType").value;
const location = document.getElementById("locationSelect").value;

if(type && location){
let fee = deliveryFees[type][location];
total += fee;
summary += `<p>Delivery (${location}) = ₦${fee}</p>`;
}

document.getElementById("orderSummary").innerHTML = summary;
document.getElementById("totalAmount").innerText = total;
}

document.getElementById("deliveryType").addEventListener("change", function(){
const type = this.value;
let select = document.getElementById("locationSelect");
select.innerHTML = "";
for(let loc in deliveryFees[type]){
select.innerHTML += `<option value="${loc}">${loc}</option>`;
}
updateSummary();
});

function payWithPaystack(){

    if(!validateShipping()) return;

    let total = document.getElementById("totalAmount").innerText;
    let email = document.getElementById("shipEmail").value;

    var handler = PaystackPop.setup({
        key: 'pk_test_f994bf9a65791500a325cbde2ef86d124a126b7c',
        email: email,
        amount: total * 100,
        currency: "NGN",
        callback: function(response){
            generateInvoice();
            addReview();
        }
    });

    handler.openIframe();
}

function generateInvoice(){

    let invoiceNo = `TCOL-2026-${String(invoiceCounter).padStart(4,'0')}`;
    invoiceCounter++;

    const shippingDetails = `
        <p><strong>Name:</strong> ${shipName.value}</p>
        <p><strong>Address:</strong> ${shipAddress.value}</p>
        <p><strong>City:</strong> ${shipCity.value}</p>
        <p><strong>State:</strong> ${shipState.value}</p>
        <p><strong>Country:</strong> ${shipCountry.value}</p>
        <p><strong>Post Code:</strong> ${shipPost.value}</p>
        <p><strong>Phone:</strong> ${shipPhone.value}</p>
        <p><strong>Email:</strong> ${shipEmail.value}</p>
    `;

    document.getElementById("invoiceSection").style.display="block";

    document.getElementById("invoiceContent").innerHTML =
    `
    <img src="./images/logo.png" width="80">
    <h3>Invoice No: ${invoiceNo}</h3>

    <h4>Shipping Details</h4>
    ${shippingDetails}

    <h4>Order Details</h4>
    ${document.getElementById("orderSummary").innerHTML}

    <h3>Total: ₦${document.getElementById("totalAmount").innerText}</h3>
    `;
}
async function downloadPDF(){
const { jsPDF } = window.jspdf;
const doc = new jsPDF();
doc.text(document.getElementById("invoiceContent").innerText, 10, 10);
doc.save("invoice.pdf");
}

function addReview(){
let reviewList = document.getElementById("reviewList");
reviewList.innerHTML += `<p>⭐⭐⭐⭐⭐ New verified purchase completed!</p>`;
}

function validateShipping() {
    const fields = [
        "shipName","shipAddress","shipCity",
        "shipState","shipCountry",
        "shipPost","shipPhone","shipEmail"
    ];

    for (let id of fields) {
        let field = document.getElementById(id);
        if (!field.value.trim()) {
            alert("Please fill all shipping details.");
            field.focus();
            return false;
        }
    }
    return true;
}