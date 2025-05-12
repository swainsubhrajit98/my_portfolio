document
  .querySelector(".navbar-brand")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
  });

// Typing effect for the developer roles
const roles = ["Frontend Developer", "Software Developer", "UI/UX Designer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.getElementById("role");

function typeEffect() {
  const currentRole = roles[index];
  if (isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex--);
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentRole.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, isDeleting ? 100 : 150);
  }
}

typeEffect();

// Smooth Scroll for Navbar Links
document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      document.getElementById(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
