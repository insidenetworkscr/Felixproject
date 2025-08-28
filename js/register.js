
        document.addEventListener('DOMContentLoaded', function() {
            // Toggle password visibility
            const passwordToggle = document.getElementById('password-toggle');
            const passwordInput = document.getElementById('password');
            const confirmPasswordToggle = document.getElementById('confirm-password-toggle');
            const confirmPasswordInput = document.getElementById('confirm-password');
            
            passwordToggle.addEventListener('click', function() {
                if (passwordInput.type === 'password') {
                    passwordInput.type = 'text';
                    passwordToggle.innerHTML = '<i class="material-icons">visibility_off</i>';
                } else {
                    passwordInput.type = 'password';
                    passwordToggle.innerHTML = '<i class="material-icons">visibility</i>';
                }
            });
            
            confirmPasswordToggle.addEventListener('click', function() {
                if (confirmPasswordInput.type === 'password') {
                    confirmPasswordInput.type = 'text';
                    confirmPasswordToggle.innerHTML = '<i class="material-icons">visibility_off</i>';
                } else {
                    confirmPasswordInput.type = 'password';
                    confirmPasswordToggle.innerHTML = '<i class="material-icons">visibility</i>';
                }
            });
            
            // Password strength meter
            const strengthMeter = document.getElementById('strength-meter');
            const passwordFeedback = document.getElementById('password-feedback');
            const passwordMatch = document.getElementById('password-match');
            
            passwordInput.addEventListener('input', function() {
                const password = this.value;
                let strength = 0;
                let feedback = '';
                
                if (password.length > 0) {
                    // Check password strength
                    if (password.length < 6) {
                        strength = 20;
                        feedback = 'Contraseña muy débil';
                        strengthMeter.style.backgroundColor = '#ff4d4d';
                    } else if (password.length < 8) {
                        strength = 40;
                        feedback = 'Contraseña débil';
                        strengthMeter.style.backgroundColor = '#ff884d';
                    } else if (password.length < 10) {
                        strength = 60;
                        feedback = 'Contraseña aceptable';
                        strengthMeter.style.backgroundColor = '#ffc44d';
                    } else if (password.length < 12) {
                        strength = 80;
                        feedback = 'Contraseña buena';
                        strengthMeter.style.backgroundColor = '#66cc66';
                    } else {
                        strength = 100;
                        feedback = 'Contraseña excelente';
                        strengthMeter.style.backgroundColor = '#33cc33';
                    }
                    
                    // Check for special characters, numbers, uppercase
                    if (/[A-Z]/.test(password)) strength += 5;
                    if (/[0-9]/.test(password)) strength += 5;
                    if (/[^A-Za-z0-9]/.test(password)) strength += 5;
                    
                    // Cap at 100
                    strength = Math.min(strength, 100);
                } else {
                    strength = 0;
                    feedback = '';
                }
                
                strengthMeter.style.width = strength + '%';
                passwordFeedback.textContent = feedback;
                passwordFeedback.style.color = strengthMeter.style.backgroundColor;
                
                // Check password match
                checkPasswordMatch();
            });
            
            confirmPasswordInput.addEventListener('input', checkPasswordMatch);
            
            function checkPasswordMatch() {
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;
                
                if (confirmPassword.length === 0) {
                    passwordMatch.textContent = '';
                } else if (password === confirmPassword) {
                    passwordMatch.textContent = 'Las contraseñas coinciden';
                    passwordMatch.style.color = '#33cc33';
                } else {
                    passwordMatch.textContent = 'Las contraseñas no coinciden';
                    passwordMatch.style.color = '#ff4d4d';
                }
            }
            
            // Form submission
            const registerForm = document.getElementById('register-form');
            
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const firstName = document.getElementById('first-name').value;
                const lastName = document.getElementById('last-name').value;
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const confirmPassword = document.getElementById('confirm-password').value;
                const terms = document.getElementById('terms').checked;
                
                // Basic validation
                if (!terms) {
                    alert('Debes aceptar los términos y condiciones');
                    document.getElementById('terms').focus();
                    return;
                }
                
                if (password !== confirmPassword) {
                    alert('Las contraseñas no coinciden');
                    confirmPasswordInput.classList.add('shake');
                    setTimeout(() => {
                        confirmPasswordInput.classList.remove('shake');
                    }, 500);
                    return;
                }
                
                // Simulación de registro
                const registerButton = document.querySelector('.register-button');
                registerButton.innerHTML = 'Creando cuenta...';
                registerButton.disabled = true;
                
                // Animación de carga
                registerButton.classList.remove('pulse-effect');
                registerButton.style.background = 'linear-gradient(90deg, #850200, #600100, #850200)';
                registerButton.style.backgroundSize = '200% 100%';
                
                let progress = 0;
                const loadingAnimation = setInterval(() => {
                    progress += 5;
                    registerButton.style.backgroundPosition = `${progress}% 0`;
                    
                    if (progress >= 100) {
                        clearInterval(loadingAnimation);
                        
                        // Simular retraso en el registro
                        setTimeout(() => {
                            // Éxito en el registro (simulado)
                            registerButton.innerHTML = '<i class="material-icons">check</i> ¡Cuenta creada!';
                            registerButton.style.background = '#2e7d32';
                            registerButton.style.backgroundPosition = '0 0';
                            
                            // Redirección simulada: crear sesión básica y redirigir al inicio
                            setTimeout(() => {
                                const username = (firstName || lastName) ? (firstName + (lastName ? (' ' + lastName) : '')) : email.split('@')[0];
                                localStorage.setItem('currentUser', JSON.stringify({ name: username, email }));
                                alert('¡Cuenta creada con éxito! Serás redirigido a la página de inicio.');
                                window.location.href = 'Main.html';
                            }, 1000);
                        }, 1500);
                    }
                }, 50);
            });
            
            // Efecto de aparición para los elementos del formulario
            const formElements = document.querySelectorAll('.form-group, .terms, .register-button, .divider, .social-register, .login-link');
            
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
