document.addEventListener("DOMContentLoaded", function() {
  // 1. Cargamos tu sonido divertido
  // Asegúrate de que el archivo se llame exactamente así en la carpeta
  const audio = new Audio('swoosh-023-454830.mp3'); 
  audio.volume = 0.6; // Volumen al 60% para que no asuste

  // 2. Seleccionamos los elementos del menú (títulos y enlaces)
  const elementosMenu = document.querySelectorAll('.sidebar-item-text, .sidebar-link, .sidebar-section-title');

  elementosMenu.forEach(elemento => {
    elemento.addEventListener('click', function() {
      
      // 3. Reproducir el swoosh
      audio.currentTime = 0; // Reinicia el sonido si haces clic rápido
      audio.play().catch(e => console.log("Haz clic en la página primero para activar el sonido."));

      // 4. Lógica de autocierre (Acordeón)
      // Buscamos todas las secciones que están abiertas actualmente
      const seccionesAbiertas = document.querySelectorAll('.collapse.show');
      
      seccionesAbiertas.forEach(seccion => {
        // Si la sección que está abierta NO es la que acabamos de tocar, la cerramos
        if (!elemento.closest('.sidebar-item').contains(seccion)) {
            seccion.classList.remove('show');
            
            // También actualizamos el atributo de accesibilidad para que cambie la flechita
            const botonRelacionado = document.querySelector(`[data-bs-target="#${seccion.id}"]`);
            if (botonRelacionado) {
                botonRelacionado.setAttribute('aria-expanded', 'false');
            }
        }
      });
    });
  });
});