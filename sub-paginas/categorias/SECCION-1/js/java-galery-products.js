document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidad 1: Desplegar Descripción del Producto ---
    const toggleButton = document.getElementById('toggle-description');
    const descriptionContent = document.getElementById('description-content');

    toggleButton.addEventListener('click', () => {
        const isHidden = descriptionContent.hasAttribute('hidden');

        if (isHidden) {
            // Mostrar contenido
            descriptionContent.removeAttribute('hidden');
            toggleButton.setAttribute('aria-expanded', 'true');
            toggleButton.innerHTML = 'Información del producto... ⬆️';
        } else {
            // Ocultar contenido
            descriptionContent.setAttribute('hidden', '');
            toggleButton.setAttribute('aria-expanded', 'false');
            toggleButton.innerHTML = 'Información del producto... ⬇️';
        }
    });

    // --- Funcionalidad 2: Carrusel Simple de Imágenes ---
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-image');
    const totalImages = images.length;
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function updateCarousel() {
        images.forEach((img, index) => {
            img.classList.remove('active');
            if (index === currentIndex) {
                img.classList.add('active');
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalImages - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Mostrar la primera imagen al cargar
    updateCarousel();


    // --- Funcionalidad 3: Enlace a WhatsApp con Consulta ---
    const whatsappButton = document.getElementById('send-whatsapp-btn');
    const consultaTextarea = document.getElementById('consulta-texto');
    const numeroDeEmpresa = "3735460477"; // Tu número de empresa

    whatsappButton.addEventListener('click', () => {
        let consulta = consultaTextarea.value.trim();
        
        // Texto inicial para la consulta, en caso de que el cliente no escriba nada
        if (consulta === "") {
            consulta = "Hola, estoy interesado/a en su producto y quisiera hacer una consulta.";
        } else {
             // Agrega un prefijo para que sepas que viene del formulario
            consulta = "Consulta Web: " + consulta;
        }

        // Codifica el texto para que sea seguro en una URL
        const encodedMessage = encodeURIComponent(consulta);
        
        // Crea el enlace de WhatsApp (usando la API web.whatsapp.com para PC y la app para móvil)
        const whatsappURL = "https://wa.me/3735460477?text=Hola, me interesa este producto. Articulo 1.";
        
        // Abre el enlace en una nueva pestaña
        window.open(whatsappURL, '_blank');
    });
});