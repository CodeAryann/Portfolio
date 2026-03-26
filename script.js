// Wait until page is loaded (Page Loader)
window.addEventListener("load", function () {
  // 1.5 seconds timeout
  setTimeout(function () {
    // Hide the loader
    document.getElementById("loader").style.display = "none";
    // Show the main content
    // document.getElementById("main-content").style.display = "block";
  }, 1500);
});

// Navebar active border
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Greeting by IST
function updateGreeting() {
  try {
    const nowIST = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" }),
    );
    const h = nowIST.getHours();
    let text;

    if (h >= 5 && h < 12) text = "Good Morning!";
    else if (h >= 12 && h < 17) text = "Good Afternoon!";
    else if (h >= 17 && h < 21) text = "Good Evening!";
    else text = "Good Night!";

    const el = document.getElementById("greeting");
    if (el) el.textContent = text;
  } catch (e) {
    const el = document.getElementById("greeting");
    if (el) el.textContent = "Hello";
  }
}
// Page load hote hi call karo
window.addEventListener("DOMContentLoaded", updateGreeting);

// Theme toggle for light and dark mode
const themeToggle = document.getElementById("switch");

function applySavedTheme() {
  const saved = localStorage.getItem("theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
  themeToggle.checked = saved === "dark";
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

themeToggle.addEventListener("change", toggleTheme);
applySavedTheme();

// Social carousel
const socials = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/aryansahu30",
    icon: "assets/LinkedIn.png",
  },
  {
    name: "GitHub",
    url: "https://github.com/CodeAryann",
    icon: "assets/Github.png",
  },
  // {
  //   name: "Twitter / X",
  //   url: "https://x.com/",
  //   icon: "https://cdn-icons-png.flaticon.com/512/5968/5968804.png",
  // },
];

let index = 0;
const linkEl = document.getElementById("socialLink");
const iconEl = document.getElementById("socialIcon");

function showSocial(i) {
  // Start with fade out
  iconEl.style.opacity = 0;

  setTimeout(() => {
    iconEl.src = socials[i].icon;
    iconEl.alt = socials[i].name;
    linkEl.href = socials[i].url;

    // Fade in new icon
    iconEl.style.opacity = 1;
  }, 300); // Half of the transition time
}

showSocial(index);

setInterval(() => {
  index = (index + 1) % socials.length;
  showSocial(index);
}, 5000); // Every 5 seconds

// hamburger Menu
function toggleMobileNav() {
  const nav = document.getElementById("mobileNav");
  nav.classList.toggle("show");
}
