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
            const frameOptions = document.querySelectorAll('.frame-option');
            
            // Datos de productos (simulados)
            const products = {
                1: {
                    title: "Calavera Tradicional",
                    price: "$89.99",
                    dimensions: "50x70cm â€¢ Ã“leo sobre lienzo",
                    image: "https://cdn0.unprofesor.com/es/posts/4/5/2/cabeza_de_medusa_1597_5254_4_600.jpg",
                    description: "Calavera en estilo tradicional del tatuaje, pintada con Ã³leo sobre lienzo de alta calidad. Esta pieza representa la esencia del arte del tatuaje clÃ¡sico con colores vibrantes y trazos definidos. Incluye certificado de autenticidad."
                },
                2: {
                    title: "DragÃ³n JaponÃ©s",
                    price: "$129.99",
                    dimensions: "70x100cm â€¢ AcrÃ­lico sobre lienzo",
                    image: "https://i.etsystatic.com/44971320/r/il/222adc/5417746611/il_fullxfull.5417746611_ojym.jpg",
                    description: "DragÃ³n en estilo Irezumi (tatuaje japonÃ©s tradicional), pintado con acrÃ­licos de alta resistencia sobre lienzo. Esta obra captura la esencia de la mitologÃ­a japonesa con detalles intricados y colores intensos. Una pieza impresionante para cualquier espacio."
                },
                3: {
                    title: "MÃ¡ndala Tribal",
                    price: "$69.99",
                    dimensions: "30x40cm â€¢ AcrÃ­lico sobre madera",
                    image: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "MÃ¡ndala con patrones tribales inspirados en los tatuajes polinesios y maorÃ­s. Pintado sobre madera tratada con acrÃ­licos de alta calidad. Esta pieza simboliza protecciÃ³n, equilibrio y conexiÃ³n espiritual."
                },
                4: {
                    title: "Retrato Realista",
                    price: "$149.99",
                    dimensions: "50x70cm â€¢ Ã“leo sobre lienzo",
                    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Retrato realista con elementos de tatuaje, pintado al Ã³leo sobre lienzo de lino. Esta obra combina la tÃ©cnica del realismo con la estÃ©tica del tatuaje, creando una pieza Ãºnica y llena de personalidad. Firmado por el artista."
                },
                5: {
                    title: "Rosa Negra",
                    price: "$119.99",
                    dimensions: "70x100cm â€¢ Ã“leo sobre lienzo",
                    image: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Rosa negra con espinas, un clÃ¡sico del tatuaje tradicional reinterpretado en Ã³leo sobre lienzo. Esta pieza contrasta la belleza floral con la oscuridad, creando una obra poderosa y elegante. Perfecta para espacios con personalidad."
                },
                6: {
                    title: "Geisha Moderna",
                    price: "$99.99",
                    dimensions: "50x70cm â€¢ AcrÃ­lico y spray",
                    image: "https://images.unsplash.com/photo-1543857778-c4a1a569e90b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Geisha con elementos modernos y tatuajes, creada con tÃ©cnicas mixtas de acrÃ­lico y spray sobre lienzo. Esta obra fusiona la tradiciÃ³n japonesa con la estÃ©tica contemporÃ¡nea del tatuaje, resultando en una pieza vibrante y actual."
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
                    const cardSize = card.getAttribute('data-size');
                    
                    const categoryMatch = categoryValue === 'all' || cardCategory === categoryValue;
                    const sizeMatch = sizeValue === 'all' || cardSize === sizeValue;
                    
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
                    document.getElementById('modal-dimensions').textContent = product.dimensions;
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
                frameOptions.forEach(option => option.classList.remove('selected'));
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
            
            // SelecciÃ³n de marco
            frameOptions.forEach(option => {
                option.addEventListener('click', function() {
                    frameOptions.forEach(opt => opt.classList.remove('selected'));
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
                
                // Verificar si se seleccionÃ³ un marco
                const selectedFrame = document.querySelector('.frame-option.selected');
                if (!selectedFrame) {
                    alert('Por favor selecciona un tipo de marco');
                    return;
                }
                
                addToCart(productName, productPrice, quantity, selectedFrame.getAttribute('data-frame'));
                closeModal();
            });
            
            function addToCart(productName, productPrice, qty = 1, frame = 'black') {
                cartCount += parseInt(qty);
                cartCounter.textContent = cartCount;
                
                showCartNotification();
                
                // AquÃ­ normalmente se agregarÃ­a el producto a un array del carrito
                console.log(`AÃ±adido al carrito: ${productName}, Marco: ${frame}, Cantidad: ${qty}, Precio: $${productPrice}`);
            }
            
            function showCartNotification() {
                cartNotification.style.display = 'flex';
                
                setTimeout(() => {
                    cartNotification.style.display = 'none';
                }, 3000);
            }
            
            // BotÃ³n comprar ahora
            const buyNowBtn = document.querySelector('.buy-now');
            
            buyNowBtn.addEventListener('click', function() {
                const productName = document.getElementById('modal-title').textContent;
                const selectedFrame = document.querySelector('.frame-option.selected');
                
                if (!selectedFrame) {
                    alert('Por favor selecciona un tipo de marco');
                    return;
                }
                
                alert(`Â¡Gracias por tu compra! Producto: ${productName}, Marco: ${selectedFrame.getAttribute('data-frame')}, Cantidad: ${quantity}`);
                closeModal();
            });
        });
