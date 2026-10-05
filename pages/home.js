import { navbar, footer } from "../components.js";

const heroSlides = [
  {
    bg: "https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",
    title: "Taste the Extra Dimension",
    sub: "Pizza so real you can almost touch it — now in 3D",
  },
  {
    bg: "https://images.pexels.com/photos/12932955/pexels-photo-12932955.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",
    title: "Crafted with Passion",
    sub: "Fresh ingredients, wood-fired ovens, decades of tradition",
  },
  {
    bg: "https://images.pexels.com/photos/17626467/pexels-photo-17626467.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",
    title: "Step Inside Our World",
    sub: "A cozy 3D restaurant experience like no other",
  },
  {
    bg: "https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",
    title: "Every Slice a Masterpiece",
    sub: "Hand-stretched dough, premium toppings, endless flavor",
  },
];

export function renderHome() {
  const slidesHTML = heroSlides
    .map(
      (s, i) => `
      <div class="slide ${i === 0 ? "active" : ""}" style="background-image:url('${s.bg}')">
        <div class="slideshow-content">
          <h1>${s.title}</h1>
          <p>${s.sub}</p>
          <div class="mt-4">
            <a class="btn btn-accent btn-lg me-2" data-page="menu">
              <i class="bi bi-cart-fill"></i> Order Now
            </a>
            <a class="btn btn-outline-light btn-lg" data-page="gallery">
              <i class="bi bi-images"></i> View Gallery
            </a>
          </div>
        </div>
      </div>`
    )
    .join("");

  const dotsHTML = heroSlides
    .map(
      (_, i) =>
        `<div class="dot ${i === 0 ? "active" : ""}" data-slide="${i}"></div>`
    )
    .join("");

  return `
    ${navbar("home")}

    <!-- Hero Slideshow -->
    <section class="slideshow">
      ${slidesHTML}
      <div class="slide-arrow prev"><i class="bi bi-chevron-left"></i></div>
      <div class="slide-arrow next"><i class="bi bi-chevron-right"></i></div>
      <div class="slide-dots">${dotsHTML}</div>
    </section>

    <!-- 3D Rotating Pizza + Intro -->
    <section class="section-pad">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 reveal-left">
            <h2 class="section-title text-start">Welcome to <span>Pizza Hut 3D</span></h2>
            <p class="lead mt-3">
              Since 1958, we've been perfecting the art of pizza-making. Now, we're
              bringing that legacy into a bold new dimension — a fully immersive 3D
              dining experience. Browse our menu, explore our gallery, and feel every
              slice come to life.
            </p>
            <p>
              From our hand-stretched dough to our signature sauce and premium toppings,
              every pizza is crafted with care and fired to perfection. Whether you're
              dining in or ordering out, you're in for something extraordinary.
            </p>
            <div class="d-flex gap-3 mt-4 flex-wrap">
              <span class="badge-pizza"><i class="bi bi-fire"></i> Wood-Fired</span>
              <span class="badge-pizza"><i class="bi bi-leaf-fill"></i> Fresh Daily</span>
              <span class="badge-pizza"><i class="bi bi-award-fill"></i> Award Winning</span>
            </div>
          </div>
          <div class="col-lg-6 reveal-right text-center">
            <div class="pizza-3d-wrapper floating">
              <div class="pizza-3d">
                <img src="https://images.pexels.com/photos/18832949/pexels-photo-18832949.jpeg?auto=compress&cs=tinysrgb&h=600&w=600" alt="3D rotating pizza" />
              </div>
            </div>
            <div class="mt-3">
              <span class="badge-pizza"><i class="bi bi-stars"></i> 3D Rotating Pizza</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section-pad">
      <div class="container">
        <h2 class="section-title">Why <span>Pizza Hut 3D</span>?</h2>
        <p class="section-subtitle">Four reasons we stand out from the crowd</p>
        <div class="row g-4">
          ${[
            { icon: "bi-fire", title: "Wood-Fired Ovens", text: "Our pizzas are baked in authentic wood-fired ovens at 900°F for that perfect crispy crust." },
            { icon: "bi-truck", title: "Lightning Delivery", text: "Hot and fresh at your door in 30 minutes or less — guaranteed, every single time." },
            { icon: "bi-egg-fried", title: "Gourmet Ingredients", text: "Imported mozzarella, vine-ripened tomatoes, and premium meats in every bite." },
            { icon: "bi-gift-fill", title: "Rewards Program", text: "Earn points on every order and redeem them for free pizzas, sides, and desserts." },
          ]
            .map(
              (f, i) => `
              <div class="col-lg-3 col-md-6 reveal" style="transition-delay:${i * 0.15}s">
                <div class="contact-info-card h-100">
                  <div class="feature-circle"><i class="bi ${f.icon}"></i></div>
                  <h5>${f.title}</h5>
                  <p>${f.text}</p>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- Parallax -->
    <section
      class="parallax-bg"
      style="background-image:url('https://images.pexels.com/photos/6605254/pexels-photo-6605254.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600')"
    >
      <div class="parallax-overlay">
        <div>
          <h2>A Tradition of Excellence</h2>
          <p class="mt-3">Join millions of pizza lovers who choose Pizza Hut 3D every day</p>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section-pad">
      <div class="container">
        <div class="row g-4">
          ${[
            { target: 19000, suffix: "+", label: "Restaurants Worldwide" },
            { target: 68, suffix: "", label: "Years of Tradition" },
            { target: 5000000, suffix: "+", label: "Pizzas Served Daily" },
            { target: 110, suffix: "+", label: "Countries Served" },
          ]
            .map(
              (s) => `
              <div class="col-lg-3 col-md-6 reveal-scale">
                <div class="stat-card">
                  <div class="stat-number" data-target="${s.target}" data-suffix="${s.suffix}">0</div>
                  <div class="stat-label">${s.label}</div>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-pad text-center">
      <div class="container">
        <div class="reveal">
          <h2 class="section-title">Ready to <span>Taste the Magic</span>?</h2>
          <p class="section-subtitle">Explore our full menu of pizzas, sides, pastas, and desserts</p>
          <a class="btn btn-accent btn-lg" data-page="menu">
            <i class="bi bi-menu-button-wide-fill"></i> Browse the Menu
          </a>
        </div>
      </div>
    </section>

    ${footer()}
  `;
}
