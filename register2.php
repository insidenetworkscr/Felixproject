<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro - Art by Felix</title>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/register2.css">
    
</head>
<body>
   

    <!-- Register Section -->

    <a href="Main.php" id="back-home-register" class="back-home-btn" aria-label="Volver al inicio" style="position:fixed;top:18px;left:18px;z-index:9999;display:inline-flex;align-items:center;gap:8px;padding:8px 12px;background:#850200;color:#f2f2f2;text-decoration:none;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.6);font-weight:600;">&larr; Inicio</a>

    <section class="register-section">
        <div class="register-background"></div>
        
        <div class="floating-shapes">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        
        <div class="register-container">
            <div class="register-header">
                <h2>Crear Cuenta</h2>
                <p>Únete a nuestra comunidad de arte</p>
            </div>
            
            <form id="register-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="first-name">Nombre</label>
                        <div class="input-with-icon">
                            <i class="material-icons">person</i>
                            <input type="text" id="first-name" class="form-control" placeholder="Tu nombre" required>
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="last-name">Apellido</label>
                        <div class="input-with-icon">
                            <i class="material-icons">person</i>
                            <input type="text" id="last-name" class="form-control" placeholder="Tu apellido" required>
                        </div>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="email">Correo Electrónico</label>
                    <div class="input-with-icon">
                        <i class="material-icons">email</i>
                        <input type="email" id="email" class="form-control" placeholder="tu@email.com" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="password">Contraseña</label>
                    <div class="input-with-icon">
                        <i class="material-icons">lock</i>
                        <input type="password" id="password" class="form-control" placeholder="Crea una contraseña" required>
                        <button type="button" class="password-toggle" id="password-toggle">
                            <i class="material-icons">visibility</i>
                        </button>
                    </div>
                    <div class="password-strength">
                        <div class="strength-meter" id="strength-meter"></div>
                    </div>
                    <div class="password-feedback" id="password-feedback"></div>
                </div>
                
                <div class="form-group">
                    <label for="confirm-password">Confirmar Contraseña</label>
                    <div class="input-with-icon">
                        <i class="material-icons">lock</i>
                        <input type="password" id="confirm-password" class="form-control" placeholder="Repite tu contraseña" required>
                        <button type="button" class="password-toggle" id="confirm-password-toggle">
                            <i class="material-icons">visibility</i>
                        </button>
                    </div>
                    <div id="password-match" class="password-feedback"></div>
                </div>
                
                <div class="terms">
                    <input type="checkbox" id="terms" required>
                    <label for="terms">Acepto los <a href="#">términos y condiciones</a> y la <a href="#">política de privacidad</a></label>
                </div>
                
                <div class="terms">
                    <input type="checkbox" id="newsletter">
                    <label for="newsletter">Deseo recibir noticias y promociones especiales</label>
                </div>
                
                <button type="submit" class="register-button pulse-effect">Crear Cuenta</button>
            </form>
            
            <div class="divider">
                <span>o</span>
            </div>
            
            <div class="social-register">
                <button class="social-btn google">
                    <i class="material-icons">mail</i>
                </button>
                <button class="social-btn facebook">
                    <i class="material-icons">facebook</i>
                </button>
                <button class="social-btn twitter">
                    <i class="material-icons">chat</i>
                </button>
            </div>
            
            <div class="login-link">
                <p>¿Ya tienes una cuenta? <a href="Login2.php">Inicia sesión</a></p>
            </div>
        </div>
    </section>

   

    <script src="js/register.js"></script>
</body>
</html>