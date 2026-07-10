console.log("MAIN JS LOADED");


"use strict";

/*====================================================
                PORTFOLIO INITIALIZATION
====================================================*/

console.log("Welcome to Ujwal Verma Portfolio 🚀");

/*======================================================
                TYPING EFFECT
======================================================*/

// Words to display one by one

const typingWords = [
    "Frontend Developer",
    "Web Designer",
    "JavaScript Developer",
    "UI Enthusiast"
];

// Selecting HTML Element

const typingText = document.getElementById("typing-text");

// Variables

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

// Typing Function

function typingEffect() {

    const currentWord = typingWords[wordIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === currentWord.length) {

            isDeleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, isDeleting ? 60 : 120);

}

// Start Typing

typingEffect();

/*=========================================
            CUSTOM CURSOR
=========================================*/



const cursor = document.querySelector(".cursor");

const blur = document.querySelector(".cursor-blur");

const hoverItems = document.querySelectorAll(
    "a, button, .skill-card, .project-card, .social-icon"
);

document.addEventListener("mousemove",(e)=>{

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    blur.style.left = e.clientX + "px";
    blur.style.top = e.clientY + "px";

});

hoverItems.forEach(item=>{

    item.addEventListener("mouseenter",()=>{

        cursor.style.width="65px";
        cursor.style.height="65px";

        cursor.style.borderColor="#ff4d4d";

    });

    item.addEventListener("mouseleave",()=>{

        cursor.style.width="42px";
        cursor.style.height="42px";

        cursor.style.borderColor="rgba(255,255,255,.8)";

    });

});

/*=========================================
        SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});



/*=========================================
        ACTIVE NAVBAR
=========================================*/

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 180;

        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
        NAVBAR HIDE / SHOW
=========================================*/

const header = document.querySelector(".header");

let lastScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.pageYOffset;

    if(currentScroll > lastScroll && currentScroll > 120){

        header.classList.add("hide");

    }

    else{

        header.classList.remove("hide");

    }

    lastScroll = currentScroll;

});

/*=========================================
        SCROLL REVEAL
=========================================*/

const reveals = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

function revealSections(){

    reveals.forEach(section=>{

        const windowHeight = window.innerHeight;

        const revealTop = section.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSections);

revealSections();

/*=========================================
        MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".nav-links");

menuBtn.addEventListener("click",()=>{

    mobileNav.classList.toggle("active");

});


document.querySelectorAll(".nav-link").forEach(link=>{

    link.addEventListener("click",()=>{

     mobileNav.classList.remove("active"); 

    });

});