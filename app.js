function startCheckout() {
    // Aquí integrarías Stripe, MercadoPago, etc.
    alert("Redirigiendo a reserva y pago...");
}

let currentFeatureIndex = 0;

function moveCarousel(direction) {
    const featureList = document.querySelector('.feature-list');
    const features = document.querySelectorAll('.feature');
    const totalFeatures = features.length;

    currentFeatureIndex += direction;

    // Limitar el índice para evitar salir del rango
    if (currentFeatureIndex < 0) {
        currentFeatureIndex = 0;
    } else if (currentFeatureIndex >= totalFeatures) {
        currentFeatureIndex = totalFeatures - 1;
    }

    // Calcular el desplazamiento
    const featureWidth = features[0].offsetWidth;
    const gap = 16; // 1rem = 16px
    const scrollPosition = currentFeatureIndex * (featureWidth + gap);

    // Mover el carrusel
    featureList.scrollLeft = scrollPosition;
}
