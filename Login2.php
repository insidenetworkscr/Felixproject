<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cuadros - Art by Felix</title>

    <!-- Configuración Tailwind (colores/tema) -->

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="css/login2.css">


</head>

<body>


    <a href="Main.php" id="back-home-login" class="back-home-btn" aria-label="Volver al inicio" style="position:fixed;top:18px;left:18px;z-index:9999;display:inline-flex;align-items:center;gap:8px;padding:8px 12px;background:#850200;color:#f2f2f2;text-decoration:none;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.6);font-weight:600;">&larr; Inicio</a>


    <!-- Login Section -->
    <section class="login-section">
        <div class="login-background"></div>

        <div class="floating-shapes">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
        </div>

        <div class="login-container">
            <div class="login-header">
                <h2>Iniciar Sesión</h2>
                <p>Accede a tu cuenta para continuar</p>
            </div>

            <form id="login-form">
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
                        <input type="password" id="password" class="form-control" placeholder="Tu contraseña" required>
                        <button type="button" class="password-toggle" id="password-toggle">
                            <i class="material-icons">visibility</i>
                        </button>
                    </div>
                </div>

                <div class="remember-forgot">
                    <div class="remember-me">
                        <input type="checkbox" id="remember">
                        <label for="remember">Recordarme</label>
                    </div>
                    <a href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
                </div>

                <button type="submit" class="login-button pulse-effect">Iniciar Sesión</button>
            </form>

            <div class="divider">
                <span>o</span>
            </div>

            <div class="social-login">
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

            <div class="register-link">
                <p>¿No tienes una cuenta? <a href="register2.php" id="register-now">Regístrate ahora</a></p>
            </div>
        </div>
    </section>


    <script src="js/login2.js"></script>
</body>

</html>