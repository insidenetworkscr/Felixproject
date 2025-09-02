<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Camisetas - Art by Felix</title>
      <script src="https://cdn.tailwindcss.com"></script>

  <!-- Configuración Tailwind (colores/tema) -->
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            background: "#000000",
            surface: "#0b0b0b",
            border: "#1f1f1f",
            primary: "#850200",
            accent: "#a82010"
          },
          boxShadow: {
            soft: "0 10px 25px rgba(0,0,0,.35)"
          }
        }
      }
    }
  </script>

  <!-- Fuentes -->
   <!-- FontAwesome CDN -->

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- Estilos propios -->

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/camisas.css">
    <link rel="stylesheet" href="css/Home.css">
</head>
<body>
    <!-- NAV inyectado por js/Home.js -->
    <div id="nav-container"></div>

    <!-- Hero Section para camisetas -->
    <section class="hero-shirts" id="camisas">
        <div class="container hero-shirts-content">
            <h1>Camisetas con Cojones</h1>
            <p>Diseños exclusivos para rockstar y amantes del arte. Prendas de alta calidad que reflejan tu pasión por el tatuaje.</p>
        </div>
    </section>

    <!-- Filtros y ordenamiento -->
    <div class="container">
        <div class="filters">
            <div class="filter-group">
                <span class="filter-label">Filtrar por:</span>
                <select class="filter-select" id="category-filter">
                    <option value="all">Todas las categorías</option>
                    <option value="skull">Diseños de calaveras</option>
                    <option value="dragon">Dragones</option>
                    <option value="tribal">Tribal</option>
                    <option value="floral">Floral oscuro</option>
                </select>
                <select class="filter-select" id="size-filter">
                    <option value="all">Todas las tallas</option>
                    <option value="s">S</option>
                    <option value="m">M</option>
                    <option value="l">L</option>
                    <option value="xl">XL</option>
                </select>
            </div>
            <div class="filter-group">
                <span class="filter-label">Ordenar por:</span>
                <select class="filter-select" id="sort-by">
                    <option value="default">Por defecto</option>
                    <option value="price-asc">Precio: menor a mayor</option>
                    <option value="price-desc">Precio: mayor a menor</option>
                    <option value="name">Nombre</option>
                </select>
            </div>
        </div>
    </div>

    <!-- Productos -->
    <section class="products">
        <div class="container">
            <div class="product-grid" id="product-grid-camisas">
                <!-- Producto 1 -->
                <div class="product-card" data-category="skull" data-size="s,m,l,xl">
                    <div class="product-img">
                        <img src="img/tshirt.png" alt="Camisa Skull Design">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Skull Design</h3>
                        <p class="product-price">$39.99</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Skull Design" data-price="39.99">Añadir</button>
                            <button class="view-details" data-product-id="1">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 2 -->
                <div class="product-card" data-category="dragon" data-size="m,l,xl">
                    <div class="product-img">
                        <img src="https://img.freepik.com/vector-premium/estampa-diseno-camisetas-ropa-calle_562337-208.jpg" alt="Camisa Dragon Ink">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Dragon Ink</h3>
                        <p class="product-price">$42.99</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Dragon Ink" data-price="42.99">Añadir</button>
                            <button class="view-details" data-product-id="2">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 3 -->
                <div class="product-card" data-category="tribal" data-size="s,m,l">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Camisa Tribal Art">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Tribal Art</h3>
                        <p class="product-price">$37.99</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Tribal Art" data-price="37.99">Añadir</button>
                            <button class="view-details" data-product-id="3">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 4 -->
                <div class="product-card" data-category="floral" data-size="s,xl">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Camisa Dark Rose">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Dark Rose</h3>
                        <p class="product-price">$45.99</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Dark Rose" data-price="45.99">Añadir</button>
                            <button class="view-details" data-product-id="4">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 5 -->
                <div class="product-card" data-category="skull" data-size="m,l,xl">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Camisa Raven Skull">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Raven Skull</h3>
                        <p class="product-price">$41.99</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Raven Skull" data-price="41.99">Añadir</button>
                            <button class="view-details" data-product-id="5">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 6 -->
                <div class="product-card" data-category="dragon" data-size="s,m,xl">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Camisa Fire Dragon">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Fire Dragon</h3>
                        <p class="product-price">$44.99</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Fire Dragon" data-price="44.99">Añadir</button>
                            <button class="view-details" data-product-id="6">Ver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Modal de producto -->
    <div class="modal" id="product-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Detalles del Producto</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img id="modal-img" src="" alt="">
                </div>
                <div class="modal-details">
                    <h3 class="modal-title" id="modal-title"></h3>
                    <p class="modal-price" id="modal-price"></p>
                    <p class="modal-description" id="modal-description"></p>
                    
                    <div class="size-selector">
                        <p class="size-title">Selecciona talla:</p>
                        <div class="size-options">
                            <div class="size-option" data-size="s">S</div>
                            <div class="size-option" data-size="m">M</div>
                            <div class="size-option" data-size="l">L</div>
                            <div class="size-option" data-size="xl">XL</div>
                        </div>
                    </div>
                    
                    <div class="quantity-selector">
                        <p class="quantity-title">Cantidad:</p>
                        <div class="quantity-controls">
                            <button class="quantity-btn" id="decrease-qty">-</button>
                            <div class="quantity-value" id="quantity">1</div>
                            <button class="quantity-btn" id="increase-qty">+</button>
                        </div>
                    </div>
                    
                    <div class="modal-actions">
                        <button class="buy-now">Comprar ahora</button>
                        <button class="add-to-cart-modal">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Notificación de carrito -->
    <div class="cart-notification" id="cart-notification">
        <i class="material-icons">check_circle</i>
        <span>Producto añadido al carrito</span>
    </div>

    <!-- FOOTER inyectado por js/Home.js -->
    <div id="footer-container"></div>

    <script src="js/camisas.js"></script>
    <script src="js/Home.js"></script>
</body>
</html>