
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // WhatsApp number (with country code, e.g. +91 for India)
    let phone = "+918669147590";

    // Format message
    let whatsappMessage = `Hello Bhushan, my name is ${name}.
    Email: ${email}
    Message: ${message}`;

    // Redirect to WhatsApp
    let url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, "_blank");
});










// ===== Navbar Toggle =====
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");
const closeBtn = document.getElementById("closeBtn");

menuToggle.addEventListener("click", () => {
    mobileNav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    mobileNav.classList.remove("active");
});

function closeMobileNav() {
    mobileNav.classList.remove("active");
}


