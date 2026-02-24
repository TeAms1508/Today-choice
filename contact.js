// GENERAL CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if(name.length < 3){
    alert("Name must be at least 3 characters");
    return;
  }

  if(!email.includes("@")){
    alert("Enter valid email");
    return;
  }

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: name,
    email: email,
    phone: phone,
    message: message
  }).then(function(){
    document.getElementById("formStatus").innerText = "Message sent successfully!";
  }, function(error){
    document.getElementById("formStatus").innerText = "Failed to send message.";
  });
});


// DISTRIBUTOR FORM
document.getElementById("distributorForm").addEventListener("submit", function(e){
  e.preventDefault();

  const dname = document.getElementById("dname").value.trim();
  const demail = document.getElementById("demail").value.trim();
  const location = document.getElementById("location").value.trim();
  const dmessage = document.getElementById("dmessage").value.trim();

  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
    name: dname,
    email: demail,
    message: "Distributor Inquiry | Location: " + location + " | " + dmessage
  }).then(function(){
    document.getElementById("distributorStatus").innerText = "Inquiry submitted successfully!";
  }, function(error){
    document.getElementById("distributorStatus").innerText = "Submission failed.";
  });
});