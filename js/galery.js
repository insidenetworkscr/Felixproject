
        document.addEventListener('DOMContentLoaded', function() {
            // Datos de los tatuajes
            const tattoos = {
                1: {
                    title: "Dragón y Flor de Cerezo",
                    category: "Japonés",
                    image: "https://www.madeinkbilbao.com/wp-content/uploads/2024/12/tatuaje-japones07.jpg",
                    description: "Tatuaje inspirado en la mitología japonesa que combina la fuerza del dragón con la belleza efímera de la flor de cerezo. Este diseño representa el equilibrio entre el poder y la delicadeza, un concepto fundamental en la cultura japonesa.",
                    style: "Irezumi Tradicional",
                    time: "15-20 horas",
                    sessions: "3-4 sesiones",
                    pain: "Moderado-Alto"
                },
                2: {
                    title: "Retrato en Blanco y Negro",
                    category: "Realista",
                    image: "https://danielsangil.com/wp-content/uploads/2023/03/001.gif_0016_IMG_7210.jpg",
                    description: "Retrato hiperrealista con sombras y detalles precisos que capturan la esencia y expresión del personaje. Utilizando técnicas avanzadas de sombreado y contraste para crear profundidad y realismo.",
                    style: "Realismo",
                    time: "25-30 horas",
                    sessions: "5-6 sesiones",
                    pain: "Alto"
                },
                3: {
                    title: "Máquina Orgánica",
                    category: "Biomecánico",
                    image: "https://tattoox.es/wp-content/uploads/2023/04/tatuajes-biomecanicos-18.jpg",
                    description: "Fusión entre elementos mecánicos y orgánicos creando la ilusión de tecnología integrada en la carne. Inspirado en el trabajo de H.R. Giger, este estilo combina anatomía con mecánica.",
                    style: "Biomecánico",
                    time: "18-22 horas",
                    sessions: "4-5 sesiones",
                    pain: "Moderado"
                },
                4: {
                    title: "Patrones Sagrados",
                    category: "Geométrico",
                    image: "https://i.redd.it/7dzhxib1zn8e1.jpegps://images.unsplash.com/photo-1517059224940-d4af9eec41b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Diseño basado en geometría sagrada con mandalas y patrones simétricos que representan armonía y equilibrio. Cada elemento tiene un significado espiritual y matemático preciso.",
                    style: "Geometría Sagrada",
                    time: "12-15 horas",
                    sessions: "2-3 sesiones",
                    pain: "Leve-Moderado"
                },
                5: {
                    title: "Siluetas Tribal",
                    category: "Blackwork",
                    image: "https://i.pinimg.com/736x/6b/60/f7/6b60f7c3611bb3d939ed5ee67a27f973.jpg",
                    description: "Patrones tribales modernos con áreas sólidas de tinta negra que crean contrastes intensos y diseños audaces. Inspirado en tradiciones polinesias con un toque contemporáneo.",
                    style: "Blackwork Tribal",
                    time: "8-12 horas",
                    sessions: "2 sesiones",
                    pain: "Moderado"
                },
                6: {
                    title: "Golondrina y Rosa",
                    category: "Tradicional",
                    image: "https://www.esdip.com/wp-content/uploads/2022/12/tatuaje-tradicional_mujer-y-calavera_tamy-love.jpg",
                    description: "Clásico diseño de tatuaje tradicional americano con líneas gruesas y colores vibrantes que perduran en el tiempo. Simboliza libertad (golondrina) y amor (rosa).",
                    style: "Americano Tradicional",
                    time: "4-6 horas",
                    sessions: "1-2 sesiones",
                    pain: "Leve-Moderado"
                },
                7: {
                    title: "Mándala de Puntos",
                    category: "Dotwork",
                    image: "https://static.tatship.com/idea-page-posts/496db08a-9ce4-43ed-b808-9ad99455a006.jpg",
                    description: "Intrincado diseño creado exclusivamente con puntos que forman patrones geométricos y sombreados sutiles. Técnica que requiere precisión extrema y paciencia.",
                    style: "Dotwork",
                    time: "10-14 horas",
                    sessions: "2-3 sesiones",
                    pain: "Leve"
                },
                8: {
                    title: "Koi y Olas",
                    category: "Japonés",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6AS9452Lf3uxYbc8_bGdkThUls3lqPtX8YA&s",
                    description: "Carpas koi nadando contra la corriente en aguas turbulentas, simbolizando perseverancia y determinación. Según la leyenda, un koi que logra escalar la cascada se transforma en dragón.",
                    style: "Irezumi",
                    time: "20-25 horas",
                    sessions: "4-5 sesiones",
                    pain: "Moderado-Alto"
                }
            };
            
            // Filtrado de galería
            const filterButtons = document.querySelectorAll('.filter-btn');
            const galleryItems = document.querySelectorAll('.gallery-item');
            const galleryGrid = document.getElementById('gallery-grid');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Quitar clase active de todos los botones
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    // Añadir clase active al botón clickeado
                    this.classList.add('active');
                    
                    const filter = this.getAttribute('data-filter');
                    
                    // Filtrar items
                    galleryItems.forEach(item => {
                        if (filter === 'all' || item.getAttribute('data-category') === filter) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.classList.add('visible');
                            }, 50);
                        } else {
                            item.classList.remove('visible');
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });
            
            // Animación de aparición de items al cargar
            function animateItems() {
                galleryItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 100);
                });
            }
            
            // Iniciar animación
            setTimeout(animateItems, 500);
            
            // Modal functionality
            const modal = document.getElementById('tattoo-modal');
            const closeModalBtn = document.querySelector('.close-modal');
            const viewDetailsButtons = document.querySelectorAll('.view-details');
            
            viewDetailsButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tattooId = this.getAttribute('data-id');
                    openModal(tattooId);
                });
            });
            
            function openModal(tattooId) {
                const tattoo = tattoos[tattooId];
                if (tattoo) {
                    document.getElementById('modal-tattoo-title').textContent = tattoo.title;
                    document.getElementById('modal-tattoo-category').textContent = tattoo.category;
                    document.getElementById('modal-tattoo-image').src = tattoo.image;
                    document.getElementById('modal-tattoo-description').textContent = tattoo.description;
                    document.getElementById('modal-tattoo-style').textContent = tattoo.style;
                    document.getElementById('modal-tattoo-time').textContent = tattoo.time;
                    document.getElementById('modal-tattoo-sessions').textContent = tattoo.sessions;
                    document.getElementById('modal-tattoo-pain').textContent = tattoo.pain;
                    
                    modal.classList.add('show');
                    document.body.style.overflow = 'hidden';
                }
            }
            
            function closeModal() {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
            
            closeModalBtn.addEventListener('click', closeModal);
            
            window.addEventListener('click', function(event) {
                if (event.target === modal) {
                    closeModal();
                }
            });
            
            // Cerrar modal con tecla ESC
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeModal();
                }
            });
            
            // Efectos hover en botones de acción
            const actionButtons = document.querySelectorAll('.action-btn');
            
            actionButtons.forEach(button => {
                button.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-2px)';
                    this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
                });
                
                button.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                    this.style.boxShadow = 'none';
                });
            });
        });
