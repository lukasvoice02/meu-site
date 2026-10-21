const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('booking-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const fields = [
    ['Nome', data.get('nome')],
    ['Tipo de evento', data.get('evento')],
    ['Data/período', data.get('data')],
    ['Cidade/local', data.get('local')],
    ['Detalhes', data.get('detalhes')]
  ].filter(([, value]) => value && String(value).trim());

  const message = 'Olá, vim pelo site do Lukas Voice e gostaria de solicitar um orçamento:\n\n' +
    fields.map(([label, value]) => `${label}: ${value}`).join('\n');
  window.open(`https://wa.me/5571992621803?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});
