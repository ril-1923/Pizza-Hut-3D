// Shared effects: navbar scroll, scroll reveal, slideshow, 3D tilt, gallery carousel

export function initSharedEffects(app, navigate, currentPage) {
  // ---- Navbar active link ----
  const navLinks = app.querySelectorAll(".nav-link[data-page]");
  navLinks.forEach((link) => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    }
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });

  // ---- Footer links ----
  const footerLinks = app.querySelectorAll(".footer-3d a[data-page]");
  footerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navigate(link.dataset.page);
    });
  });

  // ---- Navbar scroll effect ----
  const navbar = app.querySelector(".navbar-3d");
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };
    window.removeEventListener("scroll", window._navScrollHandler);
    window._navScrollHandler = onScroll;
    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  // ---- Scroll reveal observer ----
  const revealEls = app.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right, .reveal-scale"
  );
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));
  }

  // ---- Hero slideshow ----
  initSlideshow(app);

  // ---- Gallery 3D slideshow ----
  initGallerySlideshow(app);

  // ---- 3D tilt cards ----
  initTiltCards(app);

  // ---- Stats counter ----
  initStatsCounter(app);

  // ---- Menu category tabs ----
  initMenuTabs(app);

  // ---- Contact form ----
  initContactForm(app);

  // ---- Bootstrap tooltip init (if any) ----
  if (window.bootstrap) {
    const tooltipTriggerList = app.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].map(
      (el) => new window.bootstrap.Tooltip(el)
    );
  }
}

function initSlideshow(app) {
  const slideshow = app.querySelector(".slideshow");
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll(".slide");
  const dots = slideshow.querySelectorAll(".slide-dots .dot");
  const prevBtn = slideshow.querySelector(".slide-arrow.prev");
  const nextBtn = slideshow.querySelector(".slide-arrow.next");
  let current = 0;
  let timer = null;

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.classList.toggle("active", i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle("active", i === index);
    });
    current = index;
  }

  function next() {
    showSlide((current + 1) % slides.length);
  }

  function prev() {
    showSlide((current - 1 + slides.length) % slides.length);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  if (nextBtn) nextBtn.addEventListener("click", () => { next(); startTimer(); });
  if (prevBtn) prevBtn.addEventListener("click", () => { prev(); startTimer(); });
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { showSlide(i); startTimer(); });
  });

  showSlide(0);
  startTimer();
}

function initGallerySlideshow(app) {
  const container = app.querySelector(".gallery-3d-slideshow");
  if (!container) return;

  const slides = [...container.querySelectorAll(".gallery-slide-3d")];
  const prevBtn = container.querySelector(".gallery-nav.prev");
  const nextBtn = container.querySelector(".gallery-nav.next");
  if (slides.length === 0) return;

  let center = 0;

  function updatePositions() {
    const n = slides.length;
    slides.forEach((slide, i) => {
      let diff = i - center;
      if (diff > n / 2) diff -= n;
      if (diff < -n / 2) diff += n;
      slide.classList.remove(
        "pos-center",
        "pos-left",
        "pos-right",
        "pos-far-left",
        "pos-far-right"
      );
      if (diff === 0) slide.classList.add("pos-center");
      else if (diff === -1) slide.classList.add("pos-left");
      else if (diff === 1) slide.classList.add("pos-right");
      else if (diff <= -2) slide.classList.add("pos-far-left");
      else slide.classList.add("pos-far-right");
    });
  }

  function next() {
    center = (center + 1) % slides.length;
    updatePositions();
  }

  function prev() {
    center = (center - 1 + slides.length) % slides.length;
    updatePositions();
  }

  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  slides.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      center = i;
      updatePositions();
    });
  });

  updatePositions();
}

function initTiltCards(app) {
  const cards = app.querySelectorAll(".tilt-card");
  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initStatsCounter(app) {
  const stats = app.querySelectorAll(".stat-number[data-target]");
  if (stats.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target, 10);
          const suffix = el.dataset.suffix || "";
          let current = 0;
          const step = Math.ceil(target / 60);
          const interval = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(interval);
            }
            el.textContent = current.toLocaleString() + suffix;
          }, 25);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  stats.forEach((s) => observer.observe(s));
}

function initContactForm(app) {
  const form = app.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const successMsg = app.querySelector("#formSuccess");
    if (successMsg) {
      successMsg.style.display = "block";
      successMsg.classList.add("visible");
    }
    form.reset();
    setTimeout(() => {
      if (successMsg) successMsg.style.display = "none";
    }, 4000);
  });
}

function initMenuTabs(app) {
  const tabs = app.querySelectorAll(".menu-tab");
  const sections = app.querySelectorAll(".menu-section");
  if (tabs.length === 0) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const cat = tab.dataset.cat;
      tabs.forEach((t) => {
        t.classList.remove("btn-accent");
        t.classList.add("btn-outline-light");
      });
      tab.classList.remove("btn-outline-light");
      tab.classList.add("btn-accent");

      sections.forEach((sec) => {
        sec.style.display = sec.dataset.cat === cat ? "flex" : "none";
      });

      const revealEls = app.querySelectorAll(
        `.menu-section[data-cat="${cat}"] .reveal`
      );
      revealEls.forEach((el, i) => {
        el.classList.remove("visible");
        setTimeout(() => el.classList.add("visible"), 50 + i * 100);
      });
    });
  });
}
