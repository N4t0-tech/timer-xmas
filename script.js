// Función principal para calcular el tiempo restante hacia Navidad
function cuentaRegresivaNavidad() {
    const ahora = new Date(); // Fecha y hora actual
    const navidad = new Date(ahora.getFullYear(), 11, 25, 0, 0, 0); // 25 de diciembre a las 00:00

    // Si ya pasó la Navidad de este año, calcular para el próximo año
    if (ahora > navidad) {
        navidad.setFullYear(navidad.getFullYear() + 1);
    }

    // Diferencia entre la fecha actual y la Navidad
    const diferencia = navidad - ahora;

    // Convertir la diferencia a días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    // Mostrar el tiempo restante en el elemento con la ID 'timer'
    document.getElementById('timer').innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Actualizar la cuenta regresiva cada segundo
setInterval(cuentaRegresivaNavidad, 1000);

// Llamada inicial para evitar retraso al cargar
cuentaRegresivaNavidad();
