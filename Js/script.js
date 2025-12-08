// simple interactions: mobile nav toggle + join form submit + modal placeholder
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = nav.style.display === 'block';
      nav.style.display = open ? '' : 'block';
      toggle.setAttribute('aria-expanded', String(!open));
    });
  }

  // Basic form handler (no backend)
  const form = document.getElementById('joinForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert('Thanks — we received your request (demo). Hook this to a backend later.');
      form.reset();
    });
  }

  // Demo "more" buttons -> simple alert (replace with modal)
  document.querySelectorAll('.btn-link').forEach(b => {
    b.addEventListener('click', () => {
      const p = b.dataset.person;
      alert('Open detailed profile for ' + p + ' (implement modal with full info).');
    });
  });
});
