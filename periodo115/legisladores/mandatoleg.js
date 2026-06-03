// inicialización del menú hamburguesa en cuadromandatos.html
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  
  if (hamburgerBtn && hamburgerMenu) {
    // Mostrar/ocultar menú
    hamburgerBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      hamburgerMenu.style.display = 
        (hamburgerMenu.style.display === 'block') ? 'none' : 'block';
    });
    
    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
      if (!hamburgerMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerMenu.style.display = 'none';
      }
    });
    
    // Cerrar al hacer scroll
    window.addEventListener('scroll', function() {
      hamburgerMenu.style.display = 'none';
    });
  }
});
 
// código para redirigir al seleccionar una opción del menú desplegable
document.getElementById('menuNavegacion').addEventListener('change', function() {
    if (this.value) {
      window.location.href = this.value;
    }
  });