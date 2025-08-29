
        document.addEventListener('DOMContentLoaded', function() {
            // Variables globales
            let cartCount = 0;
            const cartNotification = document.getElementById('cart-notification');
            const cartCounter = document.querySelector('.cart-count');
            const modal = document.getElementById('product-modal');
            const closeModalBtn = document.querySelector('.close-modal');
            const decreaseQtyBtn = document.getElementById('decrease-qty');
            const increaseQtyBtn = document.getElementById('increase-qty');
            const quantityElement = document.getElementById('quantity');
            const sizeOptions = document.querySelectorAll('.size-option');
            
            // Datos de productos (simulados)
            const products = {
                1: {
                    title: "Skull Design",
                    price: "$39.99",
                    image: 'img/tshirt.png',
                    description: "Camiseta de alta calidad con estampado de calavera estilo tradicional del tatuaje. Confeccionada en 100% algodón para mayor comodidad. Diseño exclusivo de Art by Felix."
                },
                2: {
                    title: "Dragon Ink",
                    price: "$42.99",
                    image: "https://img.freepik.com/vector-premium/estampa-diseno-camisetas-ropa-calle_562337-208.jpg",
                    description: "Dragón japonés en estilo Irezumi. Esta camiseta presenta colores vibrantes y detalles intricados que reflejan el arte del tatuaje tradicional. Ideal para los amantes del estilo oriental."
                },
                3: {
                    title: "Tribal Art",
                    price: "$37.99",
                    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Diseños tribales inspirados en los tatuajes polinesios. Patrones geométricos que simbolizan fuerza y protección. Hecha con algodón premium para máximo confort."
                },
                4: {
                    title: "Dark Rose",
                    price: "$45.99",
                    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Rosa negra con espinas, un clásico del tatuaje tradicional. Este diseño combina la belleza floral con la estética oscura. Edición limitada."
                },
                5: {
                    title: "Raven Skull",
                    price: "$41.99",
                    image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Calavera con cuervo, un diseño siniestro y popular en la cultura del tatuaje. Simboliza la transformación y el misterio. Confeccionada con los más altos estándares de calidad."
                },
                6: {
                    title: "Fire Dragon",
                    price: "$44.99",
                    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Dragón escupiendo fuego con colores intensos. Inspirado en los tatuajes orientales y la mitología asiática. Un diseño audaz para quienes no pasan desapercibidos."
                }
            };
            
            // Funciones de filtrado
            const categoryFilter = document.getElementById('category-filter');
            const sizeFilter = document.getElementById('size-filter');
            const sortBy = document.getElementById('sort-by');
            const productGrid = document.getElementById('product-grid');
            const productCards = document.querySelectorAll('.product-card');
            
            function filterProducts() {
                const categoryValue = categoryFilter.value;
                const sizeValue = sizeFilter.value;
                
                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');
                    const cardSizes = card.getAttribute('data-size').split(',');
                    
                    const categoryMatch = categoryValue === 'all' || cardCategory === categoryValue;
                    const sizeMatch = sizeValue === 'all' || cardSizes.includes(sizeValue);
                    
                    if (categoryMatch && sizeMatch) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
            
            function sortProducts() {
                const sortValue = sortBy.value;
                const productsArray = Array.from(productCards);
                
                if (sortValue === 'price-asc') {
                    productsArray.sort((a, b) => {
                        const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
                        const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
                        return priceA - priceB;
                    });
                } else if (sortValue === 'price-desc') {
                    productsArray.sort((a, b) => {
                        const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
                        const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
                        return priceB - priceA;
                    });
                } else if (sortValue === 'name') {
                    productsArray.sort((a, b) => {
                        const nameA = a.querySelector('.product-title').textContent;
                        const nameB = b.querySelector('.product-title').textContent;
                        return nameA.localeCompare(nameB);
                    });
                }
                
                // Limpiar el grid
                while (productGrid.firstChild) {
                    productGrid.removeChild(productGrid.firstChild);
                }
                
                // Agregar productos ordenados
                productsArray.forEach(product => {
                    productGrid.appendChild(product);
                });
            }
            
            categoryFilter.addEventListener('change', filterProducts);
            sizeFilter.addEventListener('change', filterProducts);
            sortBy.addEventListener('change', sortProducts);
            
            // Funciones del modal
            const viewDetailsButtons = document.querySelectorAll('.view-details');
            
            viewDetailsButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productId = this.getAttribute('data-product-id');
                    openModal(productId);
                });
            });
            
            function openModal(productId) {
                const product = products[productId];
                if (product) {
                    document.getElementById('modal-title').textContent = product.title;
                    document.getElementById('modal-price').textContent = product.price;
                    document.getElementById('modal-img').src = product.image;
                    document.getElementById('modal-description').textContent = product.description;
                    
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden'; // Prevenir scroll
                }
            }
            
            function closeModal() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto'; // Permitir scroll nuevamente
                
                // Resetear selecciones
                quantityElement.textContent = '1';
                sizeOptions.forEach(option => option.classList.remove('selected'));
            }
            
            closeModalBtn.addEventListener('click', closeModal);
            
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });
            
            // Funciones de cantidad
            let quantity = 1;
            
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
            
            // Funciones del carrito
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            const addToCartModalBtn = document.querySelector('.add-to-cart-modal');
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productName = this.getAttribute('data-product');
                    const productPrice = this.getAttribute('data-price');
                    
                    addToCart(productName, productPrice);
                });
            });
            
            addToCartModalBtn.addEventListener('click', function() {
                const productName = document.getElementById('modal-title').textContent;
                const productPrice = document.getElementById('modal-price').textContent.replace('$', '');
                
                // Verificar si se seleccionó una talla
                const selectedSize = document.querySelector('.size-option.selected');
                if (!selectedSize) {
                    alert('Por favor selecciona una talla');
                    return;
                }
                
                addToCart(productName, productPrice, quantity, selectedSize.getAttribute('data-size'));
                closeModal();
            });
            
            function addToCart(productName, productPrice, qty = 1, size = 'M') {
                cartCount += parseInt(qty);
                cartCounter.textContent = cartCount;
                
                showCartNotification();
                
                // Aquí normalmente se agregaría el producto a un array del carrito
                console.log(`Añadido al carrito: ${productName}, Talla: ${size}, Cantidad: ${qty}, Precio: $${productPrice}`);
            }
            
            function showCartNotification() {
                cartNotification.style.display = 'flex';
                
                setTimeout(() => {
                    cartNotification.style.display = 'none';
                }, 3000);
            }
            
            // Botón comprar ahora
            const buyNowBtn = document.querySelector('.buy-now');
            
            buyNowBtn.addEventListener('click', function() {
                const productName = document.getElementById('modal-title').textContent;
                const selectedSize = document.querySelector('.size-option.selected');
                
                if (!selectedSize) {
                    alert('Por favor selecciona una talla');
                    return;
                }
                
                alert(`¡Gracias por tu compra! Producto: ${productName}, Talla: ${selectedSize.getAttribute('data-size')}, Cantidad: ${quantity}`);
                closeModal();
            });
        });