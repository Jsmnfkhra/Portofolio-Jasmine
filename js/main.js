// [JavaScript ES6] querySelector(), addEventListener(), classList.toggle()
document.addEventListener('DOMContentLoaded', function () {

  // ===== [Library] Typed.js =====
  // Inisialisasi animasi ketik di Hero Section
  if (document.getElementById('typed-text')) {
    new Typed('#typed-text', {
      strings: [
        'Design Graphics',
        'UI UX Design',
        'Frontend Developer',
      ],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
      loop: true
    });
  }

  // ===== [Custom] Dark Mode =====
  // querySelector + addEventListener + classList.toggle
  const darkModeToggle = document.querySelector('#darkModeToggle');
  const html = document.querySelector('html');
  const icon = darkModeToggle.querySelector('i');

  function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    icon.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
  }

  darkModeToggle.addEventListener('click', function () {
    const current = html.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
  });

  // ===== [Custom] Navbar Scroll =====
  // classList.toggle() — tambah/shadow saat scroll
  const navbar = document.querySelector('#mainNav');

  window.addEventListener('scroll', function () {
    navbar.classList.toggle('nav-scrolled', window.scrollY > 50);
  });

  // ===== [Custom] Contact Form =====
  // querySelector + addEventListener + alert
  const contactForm = document.querySelector('#contactForm');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const message = document.querySelector('#message').value.trim();

    if (name && email && message) {
      alert('Terima kasih! Pesan Anda telah berhasil dikirim.');
      contactForm.reset();
    } else {
      alert('Silakan lengkapi semua field.');
    }
  });

});
