document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitamos el envío tradicional del formulario

        // Obtenemos los valores del formulario
        const name = document.querySelector('input[name="cf-name"]').value.trim();
        const email = document.querySelector('input[name="cf-email"]').value.trim();
        const webType = document.querySelector('select[name="cf-web-type"]').value.trim();
        const message = document.querySelector('textarea[name="cf-message"]').value.trim();

        // Validar que los campos no estén vacíos
        if (!name || !email || !webType || !message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Preparar mensaje de WhatsApp
        const whatsappMessage = encodeURIComponent(
            `*Presupuesto Rápido*\n\nNombre: ${name}\nEmail: ${email}\nTipo de Web: ${webType}\nMensaje: ${message}`
        );

        // URL de WhatsApp con el número de destino
        const whatsappNumber = '542615612714';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        // Abrir WhatsApp en una nueva pestaña
        window.open(whatsappURL, '_blank');
    });
});
