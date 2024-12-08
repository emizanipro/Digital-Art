document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form'); // Seleccionamos el formulario
    const submitButton = document.getElementById('submit-button'); // Botón de envío

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitamos que se envíe el formulario de manera tradicional

        // Obtenemos los valores de los campos del formulario
        const name = document.querySelector('input[name="cf-name"]').value;
        const email = document.querySelector('input[name="cf-email"]').value;
        const message = document.querySelector('textarea[name="cf-message"]').value;

        // Validar que los campos no estén vacíos
        if (!name || !email || !message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Preparamos el mensaje para enviar por WhatsApp
        const whatsappMessage = encodeURIComponent(
            `*Presupuesto Rápido*\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
        );

        // Número de teléfono de WhatsApp
        const whatsappNumber = '542615612714';

        // URL de WhatsApp con el mensaje codificado
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        // Usamos window.open para abrir el enlace de WhatsApp en una nueva ventana
        window.open(whatsappURL, '_blank'); // Esto debería abrir WhatsApp Web o la app en el móvil
    });
});
