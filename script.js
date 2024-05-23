document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.querySelector('.cart-icon');
    const cartDropdown = document.querySelector('.cart-dropdown');
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.querySelector('.cart-items');

    let cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();

            const item = {
                imgSrc: this.previousElementSibling.src,
                alt: this.previousElementSibling.alt
            };

            cart.push(item);
            updateCart();
        });
    });

    cartIcon.addEventListener('click', function() {
        cartDropdown.style.display = cartDropdown.style.display === 'block' ? 'none' : 'block';
    });

    function updateCart() {
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            img.src = item.imgSrc;
            img.alt = item.alt;

            const span = document.createElement('span');
            span.textContent = item.alt;

            li.appendChild(img);
            li.appendChild(span);
            cartItems.appendChild(li);
        });

        cartCount.textContent = cart.length;
    }
});
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const galleryImages = document.querySelectorAll('.gallery-image');
let currentIndex = 0;


prevButton.addEventListener('click', () => {
    galleryImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    galleryImages[currentIndex].classList.add('active');
});


nextButton.addEventListener('click', () => {
    galleryImages[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % galleryImages.length;
    galleryImages[currentIndex].classList.add('active');
});




function mostrarMensagem() {
    alert('Obrigado por comprar!');
}