document.addEventListener('DOMContentLoaded', () => {
  // Ensure nav is loaded first (Home.js injects nav)
  // Cart items stored in localStorage under 'cartItems' as array of {id,title,price,qty,image}
  const CART_KEY = 'cartItems';

  function readCart(){
    try{ return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }catch(e){return []}
  }

  function saveCart(items){ localStorage.setItem(CART_KEY, JSON.stringify(items)); }

  const itemsContainer = document.getElementById('cart-items');
  const summarySubtotal = document.getElementById('summary-subtotal');
  const summaryShipping = document.getElementById('summary-shipping');
  const summaryTotal = document.getElementById('summary-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  const clearBtn = document.getElementById('clear-btn');
  const cartEmpty = document.getElementById('cart-empty');

  function render(){
    const items = readCart();
    itemsContainer.innerHTML = '';
    if (!items || items.length === 0) {
      document.querySelector('.cart-grid').style.display = 'none';
      cartEmpty.style.display = 'block';
      return;
    }
    document.querySelector('.cart-grid').style.display = 'grid';
    cartEmpty.style.display = 'none';

    let subtotal = 0;

    items.forEach((it, idx)=>{
      const el = document.createElement('div');
      el.className = 'cart-item';
      const img = document.createElement('img'); img.src = it.image || 'https://via.placeholder.com/160x120?text=Producto';
      const info = document.createElement('div'); info.className = 'item-info';
      const title = document.createElement('div'); title.className = 'item-title'; title.textContent = it.title || 'Producto';
      const meta = document.createElement('div'); meta.className = 'item-meta'; meta.textContent = it.description || '';
      info.appendChild(title); info.appendChild(meta);

      const controls = document.createElement('div'); controls.className = 'item-controls';
      const qty = document.createElement('div'); qty.className = 'qty-control';
      const minus = document.createElement('button'); minus.textContent = '-';
      const num = document.createElement('span'); num.textContent = it.qty;
      const plus = document.createElement('button'); plus.textContent = '+';
      qty.appendChild(minus); qty.appendChild(num); qty.appendChild(plus);

      const price = document.createElement('div'); price.className = 'price'; price.textContent = '€' + (it.price * it.qty).toFixed(2);
      const remove = document.createElement('button'); remove.className = 'remove-btn'; remove.textContent = 'Eliminar';

      controls.appendChild(qty); controls.appendChild(price); controls.appendChild(remove);

      el.appendChild(img); el.appendChild(info); el.appendChild(controls);
      itemsContainer.appendChild(el);

      subtotal += (it.price * it.qty);

      minus.addEventListener('click', ()=>{ if (it.qty>1) { it.qty--; saveCart(items); render(); } });
      plus.addEventListener('click', ()=>{ it.qty++; saveCart(items); render(); });
      remove.addEventListener('click', ()=>{ items.splice(idx,1); saveCart(items); render(); });
    });

    const shipping = subtotal > 0 ? 3.99 : 0;
    summarySubtotal.textContent = '€' + subtotal.toFixed(2);
    summaryShipping.textContent = '€' + shipping.toFixed(2);
    summaryTotal.textContent = '€' + (subtotal + shipping).toFixed(2);
  }

  clearBtn.addEventListener('click', ()=>{ if (confirm('¿Vaciar el carrito?')){ saveCart([]); render(); } });

  checkoutBtn.addEventListener('click', ()=>{
    const items = readCart();
    if (!items || items.length===0){ alert('Tu carrito está vacío'); return; }
    // Simulate checkout
    const total = document.getElementById('summary-total').textContent;
    alert('Pago simulado realizado. Total: ' + total + '\nGracias por tu compra.');
    saveCart([]); render();
  });

  // initial render
  // If empty, seed with demo products once
  (function seedDemo(){
    const items = readCart();
    if(!items || items.length === 0){
      const demo = [
        { id: 101, title: 'Camiseta Art by Felix', description: 'Talla M - Algodón premium', price: 19.99, qty: 1, image: 'https://images.unsplash.com/photo-1618354691249-1821b9f1e1bf?q=80&w=1200&auto=format&fit=crop' },
        { id: 102, title: 'Cuadro Abstracto', description: '30x40 cm - Edición limitada', price: 49.5, qty: 1, image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format&fit=crop' }
      ];
      saveCart(demo);
    }
  })();

  render();
});
