document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.querySelector('.site-nav');
  const officialSiteUrl = 'https://esmalt-up.vercel.app';

  const convertToOfficialSiteLink = (link) => {
    const href = link.getAttribute('href');

    if (!href || href === '#' || href.startsWith('#')) {
      link.setAttribute('href', officialSiteUrl);
    }

    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');

    const label = link.getAttribute('aria-label') || link.textContent.trim() || 'Abrir site oficial';
    if (!link.getAttribute('aria-label')) {
      link.setAttribute('aria-label', `${label} (abre em nova aba)`);
    }
  };

  document.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute('href');
    const isSamePageLink = !href || href === '#' || href.startsWith('#');

    if (isSamePageLink || link.classList.contains('nav-cta')) {
      convertToOfficialSiteLink(link);
    }
  });

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
