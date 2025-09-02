<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Carrito - Art by Felix</title>
  <script src="https://cdn.tailwindcss.com"></script>
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
          }
        }
      }
    }
  </script>

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/Home.css">
  <link rel="stylesheet" href="css/cart.css">
</head>
<body>
  <!-- Nav will be injected here -->
  <div id="nav-container"></div>

  <main class="cart-page">
    <section class="cart-hero">
      <div class="container">
        <h1>Tu Carrito</h1>
        <p class="subtitle">Revisa los productos que deseas comprar. Puedes modificar cantidades o eliminarlos.</p>
      </div>
    </section>

    <section class="cart-content container">
      <div class="cart-grid">
        <div class="cart-items" id="cart-items">
          <!-- items rendered here -->
        </div>

        <aside class="cart-summary" id="cart-summary">
          <h2>Resumen</h2>
          <div class="summary-body">
            <div class="summary-row"><span>Subtotal</span><span id="summary-subtotal">€0.00</span></div>
            <div class="summary-row"><span>Envío</span><span id="summary-shipping">€0.00</span></div>
            <div class="summary-row total"><span>Total</span><span id="summary-total">€0.00</span></div>
          </div>
          <button id="checkout-btn" class="btn primary">Finalizar compra</button>
          <button id="clear-btn" class="btn ghost">Vaciar carrito</button>
        </aside>
      </div>

      <div id="cart-empty" class="cart-empty" style="display:none;">
        <p>Tu carrito está vacío.</p>
        <a href="Main.html" class="btn primary">Volver al inicio</a>
      </div>
    </section>

    
  </main>

  <script src="js/Home.js"></script>
  <script src="js/cart.js"></script>

  <!-- Footer will be injected here -->
  <div id="footer-container"></div>
</body>
</html>
