document.addEventListener('DOMContentLoaded', function() {
    // Modal
    const modal = document.getElementById('product-modal');
    const closeModalBtn = document.querySelector('.close-modal');
    const quantityElement = document.getElementById('quantity');
    const decreaseQtyBtn = document.getElementById('decrease-qty');
    const increaseQtyBtn = document.getElementById('increase-qty');
    const sizeOptions = document.querySelectorAll('.size-option');
    let quantity = 1;

    // Abrir modal al hacer click en "Ver"
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.product-card');
            modal.querySelector('#modal-title').textContent = card.querySelector('.product-title').textContent;
            modal.querySelector('#modal-price').textContent = card.querySelector('.product-price').textContent;
            modal.querySelector('#modal-img').src = card.querySelector('img').src;
            modal.querySelector('#modal-description').textContent = card.getAttribute('data-description') || "Descripción de ejemplo para este producto.";

            // Reset de cantidad y talla
            quantity = 1;
            quantityElement.textContent = quantity;
            sizeOptions.forEach(option => option.classList.remove('selected'));

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Cerrar modal
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    // Control de cantidad
    decreaseQtyBtn.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
        }
    });
    increaseQtyBtn.addEventListener('click', function() {
        quantity++;
        quantityElement.textContent = quantity;
    });

    // Selección de talla
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Botón "Añadir al carrito" y "Comprar ahora" solo muestran notificación visual
    const addToCartButtons = document.querySelectorAll('.add-to-cart, .add-to-cart-modal');
    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const cartNotification = document.getElementById('cart-notification');
            cartNotification.style.display = 'flex';
            setTimeout(() => { cartNotification.style.display = 'none'; }, 2000);
        });
    });

    const buyNowBtn = document.querySelector('.buy-now');
    buyNowBtn.addEventListener('click', function() {
        alert('¡Compra simulada! Este prototipo es solo visual.');
        closeModal();
    });

    // Filtros (solo visual, no filtra productos realmente)
    const categoryFilter = document.getElementById('category-filter');
    const sizeFilter = document.getElementById('size-filter');
    const sortBy = document.getElementById('sort-by');

    [categoryFilter, sizeFilter, sortBy].forEach(select => {
        select.addEventListener('change', function() {
            console.log(`Simulación de filtro: ${categoryFilter.value}, ${sizeFilter.value}, ${sortBy.value}`);
        });
    });
});
