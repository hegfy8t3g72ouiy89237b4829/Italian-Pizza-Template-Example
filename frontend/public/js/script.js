// Luna Pizza — page interactions

document.documentElement.classList.add('js');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Sticky header: hairline border once the page scrolls */
const header = document.querySelector('.site-header');
const onHeaderScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
onHeaderScroll();
window.addEventListener('scroll', onHeaderScroll, { passive: true });

/* Mobile navigation */
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  });
});

/* Menu category filtering */
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-item');
const menuList = document.getElementById('menu-list');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => {
      const active = btn === button;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    const filter = button.dataset.filter;
    menuItems.forEach((item) => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('is-hidden', !show);
    });

    // replay the small fade so the reflow feels intentional
    menuList.classList.remove('reflow');
    void menuList.offsetWidth;
    menuList.classList.add('reflow');
  });
});

/* "Add to order" counter */
let orderCount = 0;
const orderBadge = document.querySelector('.order-badge');

document.querySelectorAll('.btn-add').forEach((button) => {
  button.addEventListener('click', () => {
    orderCount += 1;
    orderBadge.textContent = orderCount;
    orderBadge.hidden = false;

    orderBadge.classList.remove('bump');
    void orderBadge.offsetWidth;
    orderBadge.classList.add('bump');

    const original = button.textContent;
    button.textContent = 'Added ✓';
    button.classList.add('is-added');
    button.disabled = true;

    setTimeout(() => {
      button.textContent = original;
      button.classList.remove('is-added');
      button.disabled = false;
    }, 1200);
  });
});

/* Contact form validation (front-end only) */
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

const validators = {
  name: (value) => value.trim().length >= 2,
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()),
  message: (value) => value.trim().length >= 10,
};

const setFieldError = (input, hasError) => {
  input.closest('.form-field').classList.toggle('has-error', hasError);
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let firstInvalid = null;
  ['name', 'email', 'message'].forEach((field) => {
    const input = form.elements[field];
    const valid = validators[field](input.value);
    setFieldError(input, !valid);
    if (!valid && !firstInvalid) firstInvalid = input;
  });

  if (firstInvalid) {
    formSuccess.classList.remove('is-visible');
    firstInvalid.focus();
    return;
  }

  formSuccess.classList.add('is-visible');
  form.reset();
});

form.querySelectorAll('input, textarea').forEach((input) => {
  input.addEventListener('input', () => setFieldError(input, false));
});

/* Scroll reveals */
const revealElements = document.querySelectorAll('.reveal');

if (prefersReducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((el) => el.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((el) => observer.observe(el));
}

/* Subtle parallax on the hero image */
const heroImage = document.querySelector('.hero-media img');

if (heroImage && !prefersReducedMotion) {
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;

    requestAnimationFrame(() => {
      const offset = Math.min(window.scrollY, 600) * 0.05;
      heroImage.style.transform = `translateY(${offset}px) scale(1.06)`;
      ticking = false;
    });
  }, { passive: true });
}

/* Footer year */
document.getElementById('year').textContent = new Date().getFullYear();
