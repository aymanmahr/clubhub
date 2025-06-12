document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro-overlay');
  const counter = document.getElementById('counter');
  const loadingProgress = document.querySelector('.loading-progress');
  const enterBtn = document.getElementById('enter-site');
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Animate the counter (00% → 100%)
  let count = 0;
  loadingProgress.classList.add('active');
  const interval = setInterval(() => {
    count += 2;
    if (count > 100) {
      clearInterval(interval);
      counter.textContent = "100%";
    } else {
      counter.textContent = count.toString().padStart(2, "0") + "%";
    }
  }, 30);

  // Handle Enter/Start button
  enterBtn.addEventListener('click', () => {
    intro.classList.add('hidden');
    document.body.classList.remove('intro-active');
    setTimeout(() => intro.remove(), 1000);
  });

  // Hamburger menu toggle
  hamburger?.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('open');
  });

  // Close nav on link click (for mobile)
  navLinks?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });

  // Prevent form submission (demo)
  document.getElementById('login-form')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Login submitted (demo)');
  });

  document.getElementById('register-form')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Register submitted (demo)');
  });

  // Testimonial Carousel
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.carousel-dots');
  let currentSlide = 0;

  slides.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dot');

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
    updateDots();
  }, 5000);

  // Scroll Animations
  function handleScrollAnimations() {
    const sections = document.querySelectorAll('.info-section, .clubhub-intro');
    const triggerPoint = window.innerHeight * 0.8;

    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < triggerPoint) {
        section.classList.add('visible');
      }
    });
  }

  // Member Reveal Animation
  function handleMemberReveal() {
    const memberItems = document.querySelectorAll('.member-item');
    const triggerPoint = window.innerHeight * 0.9;

    memberItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerPoint) {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 200);
      }
    });
  }

  // Feature Reveal Animation
  function handleFeatureReveal() {
    const featureItems = document.querySelectorAll('.feature-item');
    const triggerPoint = window.innerHeight * 0.9;

    featureItems.forEach((item, index) => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < triggerPoint) {
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 200);
      }
    });
  }

  window.addEventListener('scroll', () => {
    handleScrollAnimations();
    handleMemberReveal();
    handleFeatureReveal();
  });

  handleScrollAnimations();
  handleMemberReveal();
  handleFeatureReveal();

  // Sticky Header
  const topBar = document.querySelector('.top-bar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      topBar.classList.add('scrolled');
    } else {
      topBar.classList.remove('scrolled');
    }
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // CTA Button Redirect
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', () => {
    window.location.href = 'clubs.html'; // Redirect to the clubs page
  });
});