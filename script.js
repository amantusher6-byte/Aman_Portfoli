const typingText=document.getElementById("typing-text");
const words=["Aspiring Software Engineer","Web Developer","Java Programmer","Problem Solver"];
let wordIndex=0,charIndex=0,deleting=false;

function typeEffect(){
    const word=words[wordIndex];
    if(!deleting){
        typingText.textContent=word.substring(0,charIndex+1);
        charIndex++;
        if(charIndex===word.length){deleting=true;setTimeout(typeEffect,1500);return;}
    }else{
        typingText.textContent=word.substring(0,charIndex-1);
        charIndex--;
        if(charIndex===0){deleting=false;wordIndex=(wordIndex+1)%words.length;}
    }
    setTimeout(typeEffect,deleting?55:90);
}
typeEffect();

const menuBtn=document.getElementById("menu-btn");
const navLinks=document.querySelector(".nav-links");
menuBtn.addEventListener("click",()=>navLinks.classList.toggle("show"));

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click",()=>navLinks.classList.remove("show"));
});

const sections=document.querySelectorAll("section[id]");
const links=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{
    let current="";
    sections.forEach(section=>{
        if(window.scrollY>=section.offsetTop-170) current=section.id;
    });
    links.forEach(link=>{
        link.classList.toggle("active",link.getAttribute("href")==="#"+current);
    });
});

console.log("Aman Upadhyay Portfolio loaded successfully 🚀");
