document.addEventListener('DOMContentLoaded', () => {
    // Consejos para el ahorro de agua
    const tips = [
        "Cierra el grifo mientras te cepillas los dientes. Puedes ahorrar hasta 20 litros por día.",
        "Arregla las fugas de inmediato. Una gota por segundo puede sumar hasta 10,000 litros al año.",
        "Toma duchas más cortas. Un minuto menos en la ducha ahorra 10 litros.",
        "Usa una escoba en lugar de una manguera para limpiar la entrada.",
        "Instala aireadores en los grifos para reducir el flujo de agua."
    ];

    // Simulación de un consumo inicial (aproximadamente 10 litros por minuto de ducha)
    let totalLiters = 0;
    const litersPerMinute = 10;

    const litersCountElement = document.getElementById('liters-count');
    const waterForm = document.getElementById('water-form');
    const dailyTipElement = document.getElementById('daily-tip');

    // Muestra un consejo aleatorio al cargar la página
    function showRandomTip() {
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        dailyTipElement.textContent = randomTip;
    }

    showRandomTip();

    // Lógica para calcular y actualizar el consumo
    waterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const minutes = document.getElementById('minutes-shower').value;
        const newLiters = minutes * litersPerMinute;
        totalLiters += newLiters;
        litersCountElement.textContent = totalLiters;
        alert(`Has gastado ${newLiters} litros en tu ducha. ¡Sigue ahorrando!`);
    });
});
