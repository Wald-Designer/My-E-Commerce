        document.addEventListener('DOMContentLoaded', () => {
            const trigger = document.getElementById('details-trigger');
            const content = document.getElementById('product-details-content');
            const arrowIcon = document.getElementById('arrow-icon');

            trigger.addEventListener('click', () => {
                // Alternar la clase 'active' para mostrar/ocultar el contenido
                content.classList.toggle('active');

                // Alternar la rotación del icono de flecha
                arrowIcon.classList.toggle('rotate-180');
            });
        });
