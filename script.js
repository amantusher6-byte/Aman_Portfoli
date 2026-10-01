// ================================
// AMAN UPADHYAY PORTFOLIO
// ================================


// ================================
// TYPING EFFECT
// ================================

const typingText = document.getElementById("typing-text");

const words = [
    "Aspiring Software Engineer",
    "Web Developer",
    "Java Programmer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        deleting ? 60 : 100
    );
}


typeEffect();


// ================================
// MOBILE MENU
// ================================

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("show");

});


// ================================
// CLOSE MOBILE MENU
// ================================

const links = document.querySelectorAll(".nav-links a");


links.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

    });

});


// ================================
// ACTIVE NAVIGATION
// ================================

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


// ================================
// PROJECT MESSAGE
// ================================

const projectLinks =
    document.querySelectorAll(".project-link");


projectLinks.forEach(link => {

    link.addEventListener("click", function (event) {

        if (this.getAttribute("href") === "#") {

            event.preventDefault();

            alert(
                "Project link will be added soon 🚀"
            );

        }

    });

});


// ================================
// CONSOLE MESSAGE
// ================================

console.log(
    "Welcome to Aman Upadhyay's Portfolio 🚀"
);