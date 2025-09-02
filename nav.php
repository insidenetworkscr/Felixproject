<!-- NAV -->
<nav class="fixed top-0 w-full z-50 bg-background/95 border-b border-border">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="h-16 flex items-center justify-between">
      <!-- Logo + Marca -->
      <a href="index.html" class="flex items-center gap-3">
        <svg width="130" height="40" viewBox="0 0 260 80" xmlns="http://www.w3.org/2000/svg" class="shrink-0">
          <ellipse cx="130" cy="40" rx="124" ry="32" fill="none" stroke="white" stroke-width="4"/>
          <text x="130" y="52" text-anchor="middle" font-size="30" fill="white" font-family="Cinzel, serif">Art by Felix</text>
        </svg>
        <span class="sr-only">Art by Felix</span>
      </a>

      <!-- Links desktop -->
      <div class="hidden md:flex items-center gap-8 text-sm text-gray-300">
        <a href="Main.html" class="hover:text-primary transition">Inicio</a>
  <a href="galery.html" class="hover:text-primary transition">Galería Tatuajes</a>
  <a href="Camisasp.html" class="hover:text-primary transition">Camisetas</a>
  <a href="cuadros.html" class="hover:text-primary transition">Cuadros</a>
        <a href="Main.html#reviews" class="hover:text-primary transition">Reseñas</a>
        <a href="Main.html#contact" class="hover:text-primary transition">Contacto</a>
      </div>

      <div class="hidden md:flex items-center" id="userArea">
        <!-- will be populated by script.js: login button or user + cart -->
        <a href="Login2.html" class="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-accent transition inline-block">
          Iniciar Sesión
        </a>
      </div>

      <!-- Toggle mobile -->
      <button id="menuBtn" class="md:hidden text-gray-300 text-2xl leading-none">☰</button>
    </div>
  </div>

  <!-- Menú móvil -->
    <div id="mobileMenu" class="md:hidden hidden border-t border-border bg-background">
    <div class="px-4 py-3 flex flex-col gap-3 text-gray-300">
      <a href="Main.html" class="hover:text-primary">Inicio</a>
  <a href="galery.html" class="hover:text-primary">Galería Tatuajes</a>
      <a href="Camisasp.html" class="hover:text-primary">Camisetas</a>
      <a href="cuadros.html" class="hover:text-primary">Cuadros</a>
      <a href="Main.html#reviews" class="hover:text-primary">Reseñas</a>
      <a href="Main.html#contact" class="hover:text-primary">Contacto</a>
      <a href="Login2.html" class="mt-2 px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-accent transition inline-block text-center">
        Iniciar Sesión
      </a>
    </div>
  </div>
</nav>
