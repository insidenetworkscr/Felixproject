// Carga el nav y luego inicializa los handlers
document.addEventListener('DOMContentLoaded', () => {
  loadNav();
  loadFooter();
});

// Carga dinámica del nav
function loadNav() {
  const container = document.getElementById('nav-container');
  if (!container) return;

  fetch('nav.html')
    .then(res => {
      if (!res.ok) throw new Error('No se pudo cargar nav.html');
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
    attachNavHandlers();
    // Ajustes adicionales para área de usuario (carrito, logout)
    try { enhanceNavUserArea(); } catch(e) { console.error(e); }
    })
    .catch(err => {
      console.error(err);
      // Fallback sencillo si falla la carga (por abrir con file://, por ejemplo)
      container.innerHTML = `
        <div class="w-full bg-red-900/30 text-red-200 text-sm px-4 py-2 text-center">
          No se pudo cargar la navegación. Abre el sitio con un servidor (Live Server, etc.).
        </div>
      `;
    });
}

// Carga dinámica del footer
function loadFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  fetch('footer.html')
    .then(res => {
      if (!res.ok) throw new Error('No se pudo cargar footer.html');
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = `
        <div class="w-full bg-red-900/30 text-red-200 text-sm px-4 py-2 text-center">
          No se pudo cargar el footer. Abre el sitio con un servidor (Live Server, etc.).
        </div>
      `;
    });
}

// Listeners del menú (delegación para soportar contenido inyectado)
function attachNavHandlers() {
  const mobileMenu = document.getElementById('mobileMenu');

  // Toggle al tocar el botón hamburguesa
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('#menuBtn');
    if (btn && mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  });

  // Cierra el menú al hacer clic en cualquier link del menú móvil
  if (mobileMenu) {
    mobileMenu.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link) mobileMenu.classList.add('hidden');
    });
  }

  // Cerrar el menú si se hace click fuera (en móviles)
  document.addEventListener('click', (e) => {
    if (!mobileMenu) return;
    const clickedInsideMenu = e.target.closest('#mobileMenu') || e.target.closest('#menuBtn');
    if (!clickedInsideMenu) mobileMenu.classList.add('hidden');
  });
}

// Después de inyectar el nav, ajusta el área de usuario (mostrar carrito si hay sesión)
function enhanceNavUserArea() {
  const userArea = document.getElementById('userArea');
  if (!userArea) return;
  const current = JSON.parse(localStorage.getItem('currentUser') || 'null');
  if (!current) {
    userArea.innerHTML = `<a href="login.html" class="px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-accent transition inline-block">Iniciar Sesión</a>`;
    return;
  }

  // Mostrar icono de carrito y nombre de usuario con opción de logout
  userArea.innerHTML = `
    <button id="cartBtn" title="Carrito" class="mr-3 p-2 rounded-md bg-transparent border border-border text-white">
      🛒
    </button>
    <div class="relative">
      <button id="userBtn" class="px-3 py-2 rounded-md bg-primary text-white font-medium">${escapeHtml(current.name.split(' ')[0])}</button>
      <div id="userMenu" class="hidden absolute right-0 mt-2 w-36 bg-background border border-border rounded-md p-2">
        <a href="#" id="logoutBtn" class="block text-sm text-gray-300 py-1">Cerrar sesión</a>
      </div>
    </div>
  `;

  const cartBtn = document.getElementById('cartBtn');
  const userBtn = document.getElementById('userBtn');
  const userMenu = document.getElementById('userMenu');
  const logoutBtn = document.getElementById('logoutBtn');

  if (cartBtn) cartBtn.addEventListener('click', () => { window.location.href = 'cart.html'; });
  if (userBtn && userMenu) userBtn.addEventListener('click', () => userMenu.classList.toggle('hidden'));
  if (logoutBtn) logoutBtn.addEventListener('click', (e) => { e.preventDefault(); localStorage.removeItem('currentUser'); window.location.reload(); });
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"'`]/g, (s) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;","`":"&#96;"}[s]));
}
