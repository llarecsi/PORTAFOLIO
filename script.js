document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const sections = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Ocultar todas las secciones
      sections.forEach(sec => sec.classList.remove('active'));
      // Mostrar la sección correspondiente
      const target = btn.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });
});
