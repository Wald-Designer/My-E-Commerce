document.getElementById('boton-compartir').addEventListener('click', function() {
    const imageUrl = document.getElementById('imagen-producto').src;
    const mensaje = encodeURIComponent('Hola, me interesa este producto! cód: CEN101');

    const whatsappUrl = whatsapp://send?phone=+5493735504400&text=${mensaje}%20${imageUrl};

    window.open(whatsappUrl, '_blank');
   });
