document.addEventListener('DOMContentLoaded', function() {
            // Toggle password visibility
            const passwordToggle = document.getElementById('password-toggle');
            const passwordInput = document.getElementById('password');
            
            passwordToggle.addEventListener('click', function() {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    passwordToggle.innerHTML = '<i class="material-icons">visibility_off</i>';
                } else {
                    passwordInput.type = 'password';
                    passwordToggle.innerHTML = '<i class="material-icons">visibility</i>';
                }
            });
            
            // Form submission
            const loginForm = document.getElementById('login-form');

            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                // Simulación de inicio de sesión
                const loginButton = document.querySelector('.login-button');
                loginButton.innerHTML = 'Iniciando sesión...';
                loginButton.disabled = true;
                
                // Animación de carga
                loginButton.classList.remove('pulse-effect');
                loginButton.style.background = 'linear-gradient(90deg, #850200, #600100, #850200)';
                loginButton.style.backgroundSize = '200% 100%';
                
                let progress = 0;
                const loadingAnimation = setInterval(() => {
                    progress += 5;
                    loginButton.style.backgroundPosition = `${progress}% 0`;
                    
                    if (progress >= 100) {
                        clearInterval(loadingAnimation);
                        
                        // Simular retraso en la autenticación
                        setTimeout(() => {
                            // Éxito en el login (simulado)
                            loginButton.innerHTML = '<i class="material-icons">check</i> ¡Éxito!';
                            loginButton.style.background = '#2e7d32';
                            loginButton.style.backgroundPosition = '0 0';
                            
                            // Guardar sesión (simulado) y redirigir al inicio
                            setTimeout(() => {
                                const username = (email && email.indexOf('@') > -1) ? email.split('@')[0] : email || 'Usuario';
                                localStorage.setItem('currentUser', JSON.stringify({ name: username, email }));
                                // Ruta absoluta para evitar redirecciones incorrectas
                                window.location.href = `${location.origin}/Proyectos/Felixproject/Main.php`;
                            }, 1000);
                        }, 1500);
                    }
                }, 50);
            });

            
            // Efecto de aparición para los elementos del formulario
            const formElements = document.querySelectorAll('.form-group, .remember-forgot, .login-button, .divider, .social-login, .register-link');
            
            formElements.forEach((element, index) => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                
                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 800 + (index * 100));
            });
            
            // Efecto de hover en los botones sociales
            const socialButtons = document.querySelectorAll('.social-btn');
            
            socialButtons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.1)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });
