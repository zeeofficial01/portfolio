// const text = "AI Student | Python Developer | ML Enthusiast";
let i = 0;

// ===== Typing Effect =====
function typingEffect(){
    const el = document.querySelector(".typing");

    if(!el) return;

    if(i < text.length){
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typingEffect, 100);
    }
}

// ===== Dark Mode Toggle =====
function toggleDark(){
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }
}

// ===== Mobile Menu Toggle (MISSING BEFORE - NOW FIXED) =====
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

// ===== Load saved theme + start everything =====
document.addEventListener("DOMContentLoaded", function(){

    // Apply saved theme
    if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark");
    }

    // Start typing effect
    typingEffect();
});