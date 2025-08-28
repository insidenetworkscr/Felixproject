// Shared JS for login and register pages
document.addEventListener('DOMContentLoaded', () => {
  // Toggle password visibility for any toggle button
  document.querySelectorAll('.pwd-toggle, #togglePwd').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const related = e.currentTarget.closest('div')?.querySelector('input[type="password"]') || document.getElementById('password');
      if (!related) return;
      const type = related.type === 'password' ? 'text' : 'password';
      related.type = type;
      e.currentTarget.textContent = type === 'password' ? '👁️' : '🙈';
    });
  });

  // LOGIN
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    const errorEl = document.createElement('div');
    errorEl.className = 'small-muted';
    errorEl.style.color = '#ff6b6b';
    errorEl.style.display = 'none';
    loginForm.appendChild(errorEl);

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      errorEl.style.display = 'none';
      const email = document.getElementById('email').value.trim().toLowerCase();
      const password = document.getElementById('password').value;
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) {
        errorEl.textContent = 'Credenciales inválidas.';
        errorEl.style.display = 'block';
        return;
      }
      localStorage.setItem('currentUser', JSON.stringify({ name: user.name, email: user.email }));
      window.location.href = 'Main.html';
    });
  }

  // REGISTER
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    const err = document.getElementById('registerError') || (()=>{const d=document.createElement('div');d.className='small-muted';d.style.color='#ff6b6b';d.style.display='none';registerForm.prepend(d);return d; })();
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      err.style.display = 'none';
      const pwd = document.getElementById('password');
      const confirm = document.getElementById('confirmPwd');
      if (pwd.value !== confirm.value) {
        err.textContent = 'Las contraseñas no coinciden.';
        err.style.display = 'block';
        return;
      }
      if (pwd.value.length < 8) {
        err.textContent = 'La contraseña debe tener al menos 8 caracteres.';
        err.style.display = 'block';
        return;
      }
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim().toLowerCase();
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      if (users.find(u => u.email === email)) {
        err.textContent = 'Ya existe una cuenta con ese correo.';
        err.style.display = 'block';
        return;
      }
      users.push({ name, email, password: pwd.value });
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify({ name, email }));
      alert('Cuenta creada. Redirigiendo...');
      window.location.href = 'Main.html';
    });
  }
});
