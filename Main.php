<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Art by Felix</title>

  <!-- Tailwind CDN -->
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Configuración Tailwind (colores/tema) -->
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
          },
          boxShadow: {
            soft: "0 10px 25px rgba(0,0,0,.35)"
          }
        }
      }
    }
  </script>

  <!-- Fuentes -->
   <!-- FontAwesome CDN -->

  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />

  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">

  <!-- Estilos propios -->
  <link rel="stylesheet" href="css/Home.css">
</head>

<body class="min-h-screen">

  <!-- NAV cargado por PHP -->
  <?php include __DIR__ . '/partials/nav.php'; ?>

 <!-- HERO -->
<header class="pt-24 min-h-[80vh] flex items-center hero-overlay">
  <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <div class="grid lg:grid-cols-2 gap-10 items-center">
      <!-- Texto -->
      <div>
        <h1 class="brand-font text-5xl sm:text-6xl font-extrabold leading-tight text-primary">
          Félix <br class="hidden sm:block"/> Carmona
        </h1>

        <h2 class="mt-8 text-xl font-semibold text-white">Biografía</h2>
        <p class="mt-3 text-gray-300 leading-relaxed">
          Artista del tatuaje con más de 25 años de experiencia creando obras únicas que combinan
          técnicas tradicionales y modernas. Especializado en realismo, blackwork y diseños personalizados
          que cuentan tu historia.
        </p>
        <p class="mt-3 text-gray-400 leading-relaxed">
          "Cada trazo es una expresión de arte permanente. Mi pasión es transformar ideas en obras maestras
          que acompañarán tu piel para toda la vida"
        </p>

        <div class="mt-6 flex flex-wrap gap-4">
          <a href="#gallery" class="px-6 py-3 rounded-md bg-primary text-white font-semibold hover:bg-accent transition">
            Ver Galería
          </a>
          <a href="#contact" class="px-6 py-3 rounded-md border border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">
            Agendar Cita
          </a>
        </div>
      </div>

      <!-- Imagen -->
      <div class="flex justify-center lg:justify-end">
        <div class="relative rounded-2xl overflow-hidden border-2 border-primary/40 shadow-soft">
          <img
            src="img/Felix.jpg"
            alt="Artista en estudio"
            class="w-[560px] h-[420px] object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</header>

  <!-- CATEGORÍAS -->
  <section id="categories" class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="brand-font text-4xl sm:text-5xl font-extrabold text-primary">Categorías</h2>
        <p class="mt-3 text-gray-300 max-w-2xl mx-auto">
          Explora mi trabajo en diferentes medios artísticos. Cada categoría representa una faceta
          diferente de mi expresión creativa.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Camisetas -->
        <article id="shirts" class="glass rounded-xl overflow-hidden border border-border hover:border-primary/40 transition">
          <div class="relative h-64">
            <img src="https://cdn.medinatattoosupplies.com.br/2021/11/28221923/just-more.jpg"
                 alt="Camiseta diseño" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
            <h3 class="absolute bottom-4 left-4 text-white text-2xl font-semibold">Camisetas</h3>
          </div>
          <div class="p-4 flex items-center justify-between">
            <p class="text-gray-400 text-sm">Diseños únicos de alta calidad</p>
            <a href="#contact" class="px-4 py-2 rounded-md border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition">
              Ver productos
            </a>
          </div>
        </article>

        <!-- Tatuajes -->
        <article id="gallery" class="glass rounded-xl overflow-hidden border border-border hover:border-primary/40 transition">
          <div class="relative h-64">
            <img src="https://inkppl.com/upload/laurentpnce_47474111_2289228104632436_4491705969216316101_n.jpg"
                 alt="Estudio de tatuajes" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
            <h3 class="absolute bottom-4 left-4 text-white text-2xl font-semibold">Tatuajes</h3>
          </div>
          <div class="p-4 flex items-center justify-between">
            <p class="text-gray-400 text-sm">Galería de trabajos realizados</p>
            <a href="#contact" class="px-4 py-2 rounded-md border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition">
              Ver galería
            </a>
          </div>
        </article>

        <!-- Cuadros -->
        <article id="paintings" class="glass rounded-xl overflow-hidden border border-border hover:border-primary/40 transition">
          <div class="relative h-64">
            <img src="https://www.bellasartes.gob.ar/media/uploads/exhibiciones/8_12_Caravaggio_03_SanGirolamochescrive-Caravaggio.jpg"
                 alt="Cuadro arte" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
            <h3 class="absolute bottom-4 left-4 text-white text-2xl font-semibold">Cuadros</h3>
          </div>
          <div class="p-4 flex items-center justify-between">
            <p class="text-gray-400 text-sm">Pinturas originales</p>
            <a href="#contact" class="px-4 py-2 rounded-md border border-primary text-primary text-sm font-semibold hover:bg-primary hover:text-white transition">
              Ver productos
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- RESEÑAS -->
  <section id="reviews" class="py-20 bg-surface/30 border-y border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h2 class="brand-font text-4xl sm:text-5xl font-extrabold text-primary">Reseñas</h2>
        <p class="mt-3 text-gray-300">Lo que dicen mis clientes sobre mi trabajo</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <!-- Card 1 -->
        <div class="glass rounded-xl p-5 border border-border hover:border-primary/30 transition">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="font-semibold text-white">María González</h3>
              <div class="flex gap-1 mt-1">
                <svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
                <svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
                <svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
                <svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
                <svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
              </div>
            </div>
            <span class="text-xs text-gray-400">Hace 2 semanas</span>
          </div>
          <p class="text-gray-300">"Increíble trabajo de Félix. Mi tatuaje quedó exactamente como lo imaginé. Muy profesional y atento a los detalles."</p>
        </div>

        <!-- Card 2 -->
        <div class="glass rounded-xl p-5 border border-border hover:border-primary/30 transition">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="font-semibold text-white">Carlos Rodríguez</h3>
              <div class="flex gap-1 mt-1">
                <svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
              </div>
            </div>
            <span class="text-xs text-gray-400">Hace 1 mes</span>
          </div>
          <p class="text-gray-300">"La camiseta que compré tiene un diseño espectacular. La calidad es excelente y el arte es único."</p>
        </div>

        <!-- Card 3 -->
        <div class="glass rounded-xl p-5 border border-border hover:border-primary/30 transition">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="font-semibold text-white">Ana López</h3>
              <div class="flex gap-1 mt-1">
                <svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
              </div>
            </div>
            <span class="text-xs text-gray-400">Hace 3 semanas</span>
          </div>
          <p class="text-gray-300">"El cuadro que encargué superó mis expectativas. Los colores y la técnica son impresionantes."</p>
        </div>

        <!-- Card 4 -->
        <div class="glass rounded-xl p-5 border border-border hover:border-primary/30 transition">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="font-semibold text-white">Diego Martín</h3>
              <div class="flex gap-1 mt-1">
                <svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg><svg viewBox="0 0 20 20" class="w-4 h-4 fill-primary"><path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.8 4.7 17.6l1-5.8L1.5 7.7l5.9-.9L10 1.5z"/></svg>
              </div>
            </div>
            <span class="text-xs text-gray-400">Hace 1 semana</span>
          </div>
          <p class="text-gray-300">"Félix es un verdadero artista. Mi tatuaje se ve increíble y el proceso fue muy cómodo."</p>
        </div>
      </div>

      <div class="mt-10 flex justify-center">
        <div class="glass inline-flex items-center gap-2 px-4 py-2 rounded-full">
          <span class="inline-block w-5 h-5 rounded-full bg-primary"></span>
          <span class="font-semibold">5.0</span>
          <span class="text-gray-400">• 47 reseñas</span>
        </div>
      </div>
    </div>
  </section>


  <!-- FOOTER cargado por PHP -->
  <?php include __DIR__ . '/partials/footer.php'; ?>


  <!-- JS -->
  <script src="js/Home.js"></script>
</body>
</html>
