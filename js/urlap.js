document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const errors = [];

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const address = document.getElementById("address").value.trim();

  if (name.length < 10) errors.push("A név legyen legalább 10 karakter.");
  if (subject.length < 10) errors.push("A tárgy legyen legalább 10 karakter.");
  if (message.length < 10) errors.push("Az üzenet legyen legalább 10 karakter.");
  if (address.length < 10) errors.push("A cím legyen legalább 10 karakter.");

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) errors.push("Az email cím nem érvényes.");

  const errorDiv = document.getElementById("formErrors");

  if (errors.length > 0) {
    errorDiv.innerHTML = errors.join("<br>");
  } else {
    errorDiv.innerHTML = "";
    alert("Űrlap sikeresen elküldve!");
    document.getElementById("contactForm").reset();
  }
});