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
 // Simple mobile menu toggle
 const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
 const navLinks = document.querySelector('.nav-links');
 
 mobileMenuBtn.addEventListener('click', () => {
   navLinks.classList.toggle('active');
 });
   // Initialize EmailJS
emailjs.init("zs308np3HqeWlikkp"); // Replace with your EmailJS User ID

document.getElementById("contactForm").addEventListener("submit", function (e) {
e.preventDefault(); // Prevent the form from reloading the page

const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const email = document.getElementById("email").value;
const phoneNumber = document.getElementById("phoneNumber").value;
const query = document.getElementById("query").value;

// Prepare the email parameters
const templateParams = {
firstName: firstName,
lastName: lastName,
email: email,
phoneNumber: phoneNumber,
query: query
};

// Send the email via EmailJS
emailjs.send("service_v2ogi2q", "template_nuhapsh", templateParams)
.then(function(response) {
 alert("Message sent successfully!");
 document.getElementById("contactForm").reset(); // Reset the form
}, function(error) {
 alert("Failed to send message. Please try again.");
});
});
var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
 document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
  
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("myHeader");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("myHeader"); // Change to your header ID
    const sticky = header.offsetTop;
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  });
