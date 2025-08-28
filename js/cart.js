// cart.js: renderiza carrito y maneja interacciones
function formatPrice(v) { return typeof v === 'number' ? '$' + v.toFixed(2) : v; }
function renderCart() {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const area = document.getElementById('cartArea');
  const summary = document.getElementById('summary');
  if (!cart.length) {
    area.innerHTML = '<p style="color:#cbd5e1;">Tu carrito está vacío.</p>';
    summary.textContent = '';
    document.getElementById('checkoutBtn').disabled = true;
    return;
  }
  document.getElementById('checkoutBtn').disabled = false;
  area.innerHTML = cart.map((item, idx) => `
    <div class="glass cart-item">
      <div class="thumb"><img src="${item.image||'https://via.placeholder.com/140'}" style="width:100%; height:100%; object-fit:cover;"></div>
      <div style="flex:1; color:#cbd5e1;">
        <div style="font-weight:600; color:#fff;">${item.name}</div>
        <div style="font-size:13px; color:#94a3b8;">${item.desc||''}</div>
      </div>
      <div style="text-align:right;">
        <div style="color:#fff; font-weight:600;">${formatPrice(item.price)}</div>
        <button data-idx="${idx}" class="removeBtn small-link" style="margin-top:6px;">Eliminar</button>
      </div>
    </div>
  `).join('');

  const total = cart.reduce((s,i)=>s + (Number(i.price)||0),0);
  summary.innerHTML = `<div class="cart-total">Total: ${formatPrice(total)}</div>`;

  document.querySelectorAll('.removeBtn').forEach(b => b.addEventListener('click', (e)=>{
    const idx = Number(e.currentTarget.dataset.idx);
    const arr = JSON.parse(localStorage.getItem('cart')||'[]');
    arr.splice(idx,1);
    localStorage.setItem('cart', JSON.stringify(arr));
    renderCart();
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  document.getElementById('clearCart').addEventListener('click', () => { localStorage.setItem('cart','[]'); renderCart(); });
  document.getElementById('checkoutBtn').addEventListener('click', () => { alert('Proceso de pago demo.'); localStorage.setItem('cart','[]'); renderCart(); });
});
