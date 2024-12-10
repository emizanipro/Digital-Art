document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.querySelector('input[name="cf-name"]').value.trim();
        const email = document.querySelector('input[name="cf-email"]').value.trim();
        const message = document.querySelector('textarea[name="cf-message"]').value.trim();

        if (!name || !email || !message) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const whatsappMessage = encodeURIComponent(
            `*Presupuesto Rápido*\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
        );

        const whatsappNumber = '542615612714';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');
    });
});
