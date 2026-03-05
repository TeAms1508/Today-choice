const products = [
{ id:1, name:"Flat Tummy Tea", price:10000, desc:"Our Flat Tummy Tea has been specifically designed to kick out bloated, sluggish feeling. This tea has a natural, gentle, cleansing effect that is best for your body. <p>Benefits.</p><ul> <li>Cleanse System</li> <li>Support Digestion</li><li>Reduce Bloaring</li> <li>Burns Fat</li></ul> <p>Ingredients</p><ul><li>Ginger</li> <li>Cummin</li> <li>Green Tea</li><li>Lotus Leaf</li><li>Cinnamon</li></ul> <p>Directions</p><ul> <li>Add 1 tea bag to cup</li><li>Infuse in 1 cup of hot water for 3-5 minutes</li> <li>Remove Tea bag and drink</li><li>Repeat Daily.</li> </ul>", img:"./images/flat tummy.jpg"},
{ id:2, name:"Slimming Tea", price:10000, desc:"Our weight loss tea is a 100% natural way to detoxify and cleanse your body, while reducing and suppressing your appetite for healthy weight loss. <p>Description.</p><ul> <li>Add 1 tea bag to cup of hot waterfor 3-4 minutes.</li> <li>Drink every morning before breakfast</li> </ul>  <p>Benefits</p><ul> <li>Boost Metabolism</li><li>Support Fat Oxidation</li> <li>Provides AntiOxidants</li> <li>Aids Digestion and Detoxification</li><li>Natural Ingredients</li> </ul>   <p>Ingredients</p><ul><li>Honey Suckle Flower</li> <li>Ginger</li><li>Senna Leaf</li><li>Green Tea</li> </ul>", img:"./images/slimming.jpg"},
{ id:3, name:"Zobo Mix", price:5000, desc:"Supports blood circulation and immune strength. Rich in antioxidants, improves digestion, Supports cardiovascular health.", img:"./images/zobo mix.jpg"},
{ id:4, name:"Arabian Tea", price:7000, desc:"Arabian tea is a strong, aromatic, and fragrant beverage central to Middle Eastern hospitality, often infused with spices like cardamom, saffron, cinnamon, and ginger, or herbs such as mint and sage. It is traditionally served hot, often with dates or sweets, and is deeply rooted in cultural, social, and, at times, ceremonial gatherings.  <p>Benefits.</p><ul><li>Healthy Skin</li><li>Oral Health</li><li>Weight Loss</li> <li>Improves Mood</li> <li>Lower Stress & Anxiety</li> <li>Pain Relief</li> <li>Reduces Inflammation</li></ul> <p>Ingredients</p> <ul> <li>Black Tea</li> <li>Ginger</li><li>Cinnamon</li> <li>Black pepper</li><li>Cloves</li><li>Mint Leaves</li><li>Kimba & Garuda</li> </ul>", img:"./images/arabian.jpg"},
{ id:5, name:"Soursop Tea", price:7000, desc:"Soursop (Annona muricata) leaves have been used for centuries in traditional medicine, offering numerous benefits such as: <ul><li>Cancer Prevention</li> <li>Anti-Inflammatory</li>  <li>Antimicrobial</li> <li>Aid Digestion </li> <li>Boost Immune System</li> <li>Regulates blood sugar levels</li> <li>Lowers blood pressure</li> <p>Preparation</p> <ul> <li>Steep 1 tea bag in boiling water.</li>  <li>Steep Tea in hot water for 5-10 minutes.</li> ", img:"./images/soursop.jpg"},
{ id:6, name:"Smokers Tea", price:7000, desc:"Smokers Detox Tea aims to support lung Health and nicotine recovery byreducing oxidative stress and inflammation caused by smoking. This tea helpcleanse the lungs, aid in quitting smoking, and support respiratory capacity, and potentially reduce damage from smoke. <p>Instruction.</p><ul><li>place a teabag in a cup & pour fresh boiled water , steep for 2-5 minutes, remove the tea bag and savor the  aroma.</li> </ul> <p>Ingredients</p> <ul> <li>Mullen</li> <li>Senna Leaf</li> <li>Ginger</li> <li>Dandelion</li> </ul> <p>Benefits</p><ul> <li>Lung Detoxifocation and Cleansing</li><li>Reduce Inflammation and Damage</li> <li>Support for Quitting</li><li>Improves Respiratory Function</li> <li>Antioxidants Support</li> </ul>", img:"./images/smokers.jpg"},
{ id:7, name:"Full body Wellness", price:30000, desc:"Our Full Body Wellness tea is a 100% natural way to cleanse your body, while reducing and suppressing your appetite for  healthy weight loss, it also helps kick out bloated stomach and burns belly fat.  <p>Benefits</p> <ul><li>Cleanse System</li> <li>Support digestion</li><li>Reduce Bloating</li><li>Boost Metabolism</li><li>Support Fat Oxidation</li> <li>Provides Antioxidants</li><li>Aid Digestion and Detoxification</li> <li>Natural Ingredients</li></ul> <p>Ingredients</p> <ul><li>Honey Suckle Flower</li> <li>Ginger</li><li>Senna Leaf</li> <li>Green Tea</li><li>Lotus</li> <li>Cinnamon</li> </ul>", img:"./images/flat tummy & slimming (1).jpg"},
{ id:8, name:"Ginger Shot", price:1000, desc:"A ginger shot is a highly concentrated 1–2 ounce, 100% natural, and usually raw juice made primarily from fresh ginger root. It is a popular, potent, and fiery wellness drink consumed for potential immune support, digestion aid, and anti-inflammatory benefits, often mixed with lemon, turmeric, or honey.   <p>Benefits</p> <ul> <li>Reduce Inflammation</li> <li>Aids Weight Loss</li> <li>Blood Sugar Control</li> <li>Improves Gut Health</li> <li>Potentially Improving Heart Health</li> <li>Boosting Immunity with Antioxidants</li> <li>Aiding Digestion</li></ul><p>Ingredients</p><ul> <li>Ginger</li> <li>Tumeric</li><li>Garlic</li><li>Lime</li>  <li>Lemon</li> <li>Honey</li> </ul>", img:"./images/ginger.jpg"},
{ id:9, name:"Skin Glow Shot", price:1000, desc:"Carrot skin glow shots are nutrient-dense,, raw, and fresh juices designed to promote radiant skin through high levels of beta-carotene, antioxidants, and vitamin C. Typically made with carrots, ginger, lemon, and orange, these shots support skin cell turnover, reduce inflammation, and improve skin resilience. <p>Ingredients</p><ul> <li>Carrot</li> <li>Pineapple</li> <li>Lemon</li><li>Ginger</li> <li>Orange</li></ul>  <p>Benefits</p><ul><li>Boosts Skin Radiance</li><li>Speeds Cell Turnover</li> <li>Collagen Support</li><li>Reduces Inflammation</li><li>atural Tanning</li> ", img:"./images/skin glow.jpg"},
{ id:10, name:"Immune Booster Shot", price:1000, desc:"A Beetroot Red Radiant Immune Booster Shot is a nutrient-dense,, antioxidant-rich,, and vibrant, anti-inflammatory, and detoxifying, beverage designed to support immunity, skin health, and energy levels. These shots combine the earthy, nitrate-rich,, and antioxidant-heavy beetroot with, for instance, ginger, which is anti-inflammatory and aids in digestion, and lemon, which is high in vitamin C, and which together help to detoxify the liver, boost, immunity, and, improve, circulation. They are a, quick, and, effective, way, to, start, the, day, or, provide, an, afternoon, energy, boost, and, may, offer, a, range, of, benefits, from, enhanced, cardiovascular, health, to, improved, skin, and, hair, health. <p>Ingredients</p> <ul> <li>Watermelon</li> <li>Apple</li> <li>Ginger</li> <li>Beetroot</li> <li>Lemon</li> </ul> <p>Benefits</p> <ul><li>Immune System Support</li> <li>Cardiovascular Health & Blood Pressure</li> <li>Increased Energy, Stamina, and Performance </li> <li>Skin Radiance and Detoxification </li>", img:"./images/Radiant.png"},
{ id:11, name:"Green Detox", price:1000, desc:"Green detox shots are concentrated, nutrient-dense beverages typically made from blended or juiced leafy greens, cucumber, lemon, and ginger. Designed to be consumed quickly for a rapid health boost, they promote detoxification, reduce inflammation, and improve skin health <p>Ingredients</p><ul> <li>Green</li><li>Apple</li> <li>Cucumber</li> <li>Ginger</li> <li>Lemon</li> </ul> <p>Benefits</p> <ul> <li>Boosts Immunity & Metabolism</li> <li>Supports Detoxification</li> <li>Improves Digestion & Reduces Bloating</li> <li>High Nutrient Density</li> <li>Reduces Inflammation</li> <li>Hydration</li>", img:"./images/green detox.jpg"}
];

let cart = {};
let invoiceCounter = 1;

const deliveryFees = {
local: { Lagos:2000, Abuja:2500, Kano:3000 },
international: { 
    "UK, IRELAND":125000,
"BENIN REP, GHANA GAMBIA,SIERRA LEONE,CONGO, LIBERIA":90000,
"CANADA, USA":87500,
"TURKEY, MALTA, BELGIUM, NORWAY SPAIN, SWEDEN, POLAND, FINLAND, NETHERLANDS, CYPRUS, Switzerland":100500,
"SOUTH AFRICA, KENYA,ZIMBABWE, ZAMBIA. BOTSWANA":105000,
"France, Germany,Italy. DUBAI, OMAN, ISREAL,QATAR ,SAUDI ARABIA":110500,
"AUSTRALIA, INDIA, VIETNAM , Malaysia,China,Philippines":120000,
"BARBADOS,BAHAMAS":130000}
};

function renderProducts(){
const grid = document.getElementById("productGrid");
products.forEach(p=>{
grid.innerHTML += `
<div class="product-card">
<img src="${p.img}">
<h3>${p.name}</h3>
<p class="price">₦${p.price}</p>
<div class="description">${p.desc}</div>
<div class="card-footer">
<input type="number" min="0" value="0" id="qty-${p.id}">
<button onclick="addToCart(${p.id})">Add</button>
</div>
</div>`;
});
}
renderProducts();

function addToCart(id){
let qty = parseInt(document.getElementById(`qty-${id}`).value);
if(qty>0) cart[id] = qty;
updateSummary();
}

document.getElementById("deliveryType").addEventListener("change",function(){
let type=this.value;
let select=document.getElementById("locationSelect");
select.innerHTML="";
for(let loc in deliveryFees[type]){
select.innerHTML+=`<option value="${loc}">${loc}</option>`;
}
updateSummary();
});

function updateSummary(){
let total=0;
let summary="";
for(let id in cart){
let p=products.find(x=>x.id==id);
let subtotal=p.price*cart[id];
total+=subtotal;
summary+=`<p>${p.name} x${cart[id]} = ₦${subtotal}</p>`;
}
let type=document.getElementById("deliveryType").value;
let loc=document.getElementById("locationSelect").value;
if(type && loc){
let fee=deliveryFees[type][loc];
total+=fee;
summary+=`<p>Delivery (${loc}) = ₦${fee}</p>`;
}
document.getElementById("summary").innerHTML=summary;
document.getElementById("total").innerText=total;
}

function validate(){
return document.getElementById("shippingForm").checkValidity();
}

function pay(){
if(!validate()) return alert("Complete shipping details.");
let total=document.getElementById("total").innerText;
PaystackPop.setup({
key:"pk_test_f994bf9a65791500a325cbde2ef86d124a126b7c",
email:document.getElementById("email").value,
amount:total*100,
currency:"NGN",
callback:function(){
generateInvoice();
addReview();
}
}).openIframe();
}

function bankTransfer(){
if(!validate()) return alert("Complete shipping details.");
generateInvoice();
}

function generateInvoice(){
let invoiceNo=`TCOL-2026-${String(invoiceCounter).padStart(4,'0')}`;
invoiceCounter++;
let content=document.getElementById("summary").innerHTML;
document.getElementById("invoiceSection").style.display="block";
document.getElementById("invoiceContent").innerHTML=
`<img src="./images/logo.png" width="80">
<h3>Invoice No: ${invoiceNo}</h3>
<p>${name.value}<br>${address.value}<br>${city.value}, ${state.value}<br>${country.value}</p>
${content}
<h3>Total: ₦${total.innerText}</h3>`;
}

async function downloadPDF(){
const { jsPDF }=window.jspdf;
const doc=new jsPDF();
doc.text(document.getElementById("invoiceContent").innerText,10,10);
doc.save("invoice.pdf");
}

function addReview(){
let reviews=JSON.parse(localStorage.getItem("tcol_reviews"))||[];
reviews.push({msg:"⭐⭐⭐⭐⭐ Verified purchase!",date:new Date().toLocaleDateString()});
localStorage.setItem("tcol_reviews",JSON.stringify(reviews));
loadReviews();
}

function loadReviews(){
let reviews=JSON.parse(localStorage.getItem("tcol_reviews"))||[];
let list=document.getElementById("reviewList");
list.innerHTML="";
reviews.forEach(r=>{
list.innerHTML+=`<p>${r.msg}<br><small>${r.date}</small></p>`;
});
}
loadReviews();
