document.addEventListener("DOMContentLoaded", function () {
    let cart = [];

    function updateCartUI() {
        const cartContainer = document.querySelector(".cart-container");
        const checkoutButton = document.getElementById("checkout-btn");

        cartContainer.innerHTML = "";
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p class='text-white'>No items in the cart yet.</p>";
            checkoutButton.disabled = true;
            return;
        }

        let cartHTML = "<ul class='text-white'>";
        cart.forEach((item, index) => {
            cartHTML += `<li>${item.name} - ${item.quantity} x $${item.price.toFixed(2)} 
                <button class='btn btn-danger btn-sm' onclick="removeFromCart(${index})">Remove</button>
            </li>`;
        });
        cartHTML += "</ul>";

        cartContainer.innerHTML = cartHTML;
        checkoutButton.disabled = false;
    }

    function addToCart(name, price, inputElement) {
        let quantity = parseInt(inputElement.value);
        if (isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        let existingItem = cart.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ name, price, quantity });
        }

        updateCartUI();
    }

    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    document.getElementById("checkout-btn").addEventListener("click", function (event) {
        event.preventDefault();
        if (cart.length === 0) {
            alert("Your cart is empty!");
            return;
        }

        console.log("Proceeding to checkout with items:", cart);
        alert("Checkout successful! Check the console for cart details.");
    });

    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".coffee-card");
            const name = card.querySelector(".coffee-title").textContent;
            const price = parseFloat(card.querySelector(".coffee-price").textContent.replace("$", ""));
            const quantityInput = card.querySelector(".quantity-input");

            addToCart(name, price, quantityInput);
        });
    });

    updateCartUI();
});