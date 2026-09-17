// A abertura cinematográfica é acionada apenas na primeira carga do documento.
// Ela aplica uma sequência de transforms 3D e de opacidade para simular uma
// tela de filme que se abre e revela o conteúdo principal da landing page.

document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const introOverlay = document.querySelector('.intro-overlay');

  if (!introOverlay || prefersReducedMotion) {
    if (introOverlay) {
      introOverlay.style.display = 'none';
    }
    return;
  }

  const startAnimation = () => {
    window.setTimeout(() => {
      introOverlay.classList.add('is-hidden');
    }, 1800);

    window.setTimeout(() => {
      introOverlay.remove();
    }, 2500);
  };

  startAnimation();
});
