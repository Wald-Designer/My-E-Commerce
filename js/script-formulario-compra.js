        // Número de teléfono de destino (reemplaza con tu número)
        // Ejemplo: '+15551234567' para un número de EE.UU.
        const phoneNumber = '+5493735504400'; // Reemplaza esto con tu número

        // Elementos del DOM
        const whatsappMessageElement = document.getElementById('whatsappMessage');
        const sendButton = document.getElementById('sendButton');

        // Mensaje predefinido
        const predefinedMessage = 'Hola, estoy contactando a través de tu página web. Me gustaría saber más sobre tus servicios. ¡Gracias!';

        // Configurar el mensaje inicial
        whatsappMessageElement.value = predefinedMessage;

        // Evento para el botón de enviar
        sendButton.addEventListener('click', () => {
            const userMessage = whatsappMessageElement.value.trim();
            
            if (userMessage.length > 0) {
                // Codificar el mensaje para la URL
                const encodedMessage = encodeURIComponent(userMessage);

                // Construir la URL de WhatsApp
                const whatsappUrl = https://wa.me/5493735504400?text=${userMessege};
                
                // Abrir la URL en una nueva pestaña
                window.open(whatsappUrl, '_blank');
            } else {
                alert('Por favor, escribe un mensaje antes de enviar.');
            }
        });
