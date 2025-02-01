function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
        .then(() => {
            alert("Message sent successfully!");
        }, (error) => {
            alert("Failed to send message: " + JSON.stringify(error));
        });
});