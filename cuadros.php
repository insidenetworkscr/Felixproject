<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuadros - Art by Felix</title>
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
    <link rel="stylesheet" href="css/cuadros.css">
    <link rel="stylesheet" href="css/Home.css">
</head>
</head>
<body>
   <!-- NAV inyectado por js/Home.js -->
    <div id="nav-container"></div>

    <!-- Hero Section para cuadros -->
    <section class="hero-paintings">
        <div class="container hero-paintings-content">
            <h1>Cuadros con Alma</h1>
            <p>Obras de arte acrilicas inspiradas en el mundo del tatuaje. Piezas exclusivas para decorar tus espacios con actitud.</p>
        </div>
    </section>

    <!-- Filtros y ordenamiento -->
    <div class="container">
        <div class="filters">
            <div class="filter-group">
                <span class="filter-label">Filtrar por:</span>
                <select class="filter-select" id="category-filter">
                    <option value="all">Todos los estilos</option>
                    <option value="traditional">Tradicional</option>
                    <option value="japanese">Japones</option>
                    <option value="tribal">Tribal</option>
                    <option value="realism">Realismo</option>
                </select>
                <select class="filter-select" id="size-filter">
                    <option value="all">Todos los tamaños</option>
                    <option value="small">Pequeños (30x40cm)</option>
                    <option value="medium">Mediano (50x70cm)</option>
                    <option value="large">Grande (70x100cm)</option>
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
            <div class="product-grid" id="product-grid">
                <!-- Producto 1 -->
                <div class="product-card" data-category="traditional" data-size="medium">
                    <div class="product-img">
                        <img src="https://cdn0.unprofesor.com/es/posts/4/5/2/cabeza_de_medusa_1597_5254_4_600.jpg" alt="Cuadro Calavera Tradicional">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Calavera Tradicional</h3>
                        <p class="product-price">$89.99</p>
                        <p class="product-dimensions">50x70cm cuadros sobre lienzo</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Calavera Tradicional" data-price="89.99">Añadir</button>
                            <button class="view-details" data-product-id="1">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 2 -->
                <div class="product-card" data-category="japanese" data-size="large">
                    <div class="product-img">
                        <img src="https://i.etsystatic.com/44971320/r/il/222adc/5417746611/il_fullxfull.5417746611_ojym.jpg" alt="Cuadro DragÃ³n JaponÃ©s">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Dragon Japoness</h3>
                        <p class="product-price">$129.99</p>
                        <p class="product-dimensions">70x100cm añadir sobre lienzo</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="DragÃ³n JaponÃ©s" data-price="129.99">Añadir</button>
                            <button class="view-details" data-product-id="2">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 3 -->
                <div class="product-card" data-category="tribal" data-size="small">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Cuadro MÃ¡ndala Tribal">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Mandala Tribal</h3>
                        <p class="product-price">$69.99</p>
                        <p class="product-dimensions">30x40cm Acrilico sobre madera</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="MÃ¡ndala Tribal" data-price="69.99">Añadir</button>
                            <button class="view-details" data-product-id="3">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 4 -->
                <div class="product-card" data-category="realism" data-size="medium">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Cuadro Retrato Realista">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Retrato Realista</h3>
                        <p class="product-price">$149.99</p>
                        <p class="product-dimensions">50x70cm Acrilico sobre lienzo</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Retrato Realista" data-price="149.99">Añadir</button>
                            <button class="view-details" data-product-id="4">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 5 -->
                <div class="product-card" data-category="traditional" data-size="large">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Cuadro Rosa Negra">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Rosa Negra</h3>
                        <p class="product-price">$119.99</p>
                        <p class="product-dimensions">70x100cm Acrilico sobre lienzo</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Rosa Negra" data-price="119.99">Añadir</button>
                            <button class="view-details" data-product-id="5">Ver</button>
                        </div>
                    </div>
                </div>
                
                <!-- Producto 6 -->
                <div class="product-card" data-category="japanese" data-size="medium">
                    <div class="product-img">
                        <img src="https://images.unsplash.com/photo-1543857778-c4a1a569e90b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Cuadro Geisha Moderna">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">Geisha Moderna</h3>
                        <p class="product-price">$99.99</p>
                        <p class="product-dimensions">50x70cm Acrilico y spray</p>
                        <div class="product-actions">
                            <button class="add-to-cart" data-product="Geisha Moderna" data-price="99.99">Añadir</button>
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
                <h2>Detalles del Cuadro</h2>
                <span class="close-modal">&times;</span>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img id="modal-img" src="" alt="">
                </div>
                <div class="modal-details">
                    <h3 class="modal-title" id="modal-title"></h3>
                    <p class="modal-price" id="modal-price"></p>
                    <p class="modal-dimensions" id="modal-dimensions"></p>
                    <p class="modal-description" id="modal-description"></p>
                    
                    <div class="frame-selector">
                        <p class="frame-title">Selecciona marco:</p>
                        <div class="frame-options">
                            <div class="frame-option" data-frame="black">Negro</div>
                            <div class="frame-option" data-frame="brown">Mangan</div>
                            <div class="frame-option" data-frame="natural">Natural</div>
                            <div class="frame-option" data-frame="none">Sin marco</div>
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

    <!-- NotificaciÃ³n de carrito -->
    <div class="cart-notification" id="cart-notification">
        <i class="material-icons">check_circle</i>
        <span>Producto añadido al carrito</span>
    </div>

    <!-- FOOTER inyectado por js/Home.js -->
    <div id="footer-container"></div>

    <script src="js/cuadros.js"></script>
    <script src="js/Home.js"></script>
    
</body>
</html>