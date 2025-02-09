window.addEventListener("load", function () {
    setTimeout(() => {
        alert("Welcome to Everyday Cafe! ☕ Enjoy your coffee experience.");
    }, 500);
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId); 

            if (targetElement) {
                e.preventDefault(); 
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
});


let cartCount = 0;


const cartCounter = document.createElement("div");
cartCounter.id = "cart-counter";
cartCounter.innerText = cartCount;
cartCounter.style.position = "absolute";
cartCounter.style.background = "red";
cartCounter.style.color = "white";
cartCounter.style.fontSize = "14px";
cartCounter.style.padding = "3px 7px";
cartCounter.style.borderRadius = "50%";
cartCounter.style.top = "5px";
cartCounter.style.right = "5px";
cartCounter.style.display = "none"; 

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        navbar.appendChild(cartCounter);
    }

    
    function addToCart() {
        cartCount++;
        cartCounter.innerText = cartCount;
        cartCounter.style.display = "block"; 
    }

    
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", addToCart);
    });
});

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#3d2b1f";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
});