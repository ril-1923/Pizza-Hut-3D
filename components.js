// Shared navbar component used by all pages

export function navbar(currentPage = "home") {
  const links = [
    { page: "home", icon: "bi-house-door-fill", label: "Home" },
    { page: "menu", icon: "bi-list-columns-reverse", label: "Menu" },
    { page: "about", icon: "bi-info-circle-fill", label: "About" },
    { page: "gallery", icon: "bi-images", label: "Gallery" },
    { page: "contact", icon: "bi-telephone-fill", label: "Contact" },
  ];

  const navItems = links
    .map(
      (l) => `
      <li class="nav-item">
        <a class="nav-link ${l.page === currentPage ? "active" : ""}" data-page="${l.page}">
          <i class="bi ${l.icon}"></i>${l.label}
        </a>
      </li>`
    )
    .join("");

  return `
    <nav class="navbar navbar-expand-lg navbar-3d sticky-top">
      <div class="container-fluid">
        <a class="navbar-brand" data-page="home">
          <i class="bi bi-emoji-smile-fill"></i>Pizza Hut 3D
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMain"
          aria-controls="navMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMain">
          <ul class="navbar-nav ms-auto">
            ${navItems}
          </ul>
        </div>
      </div>
    </nav>
  `;
}

export function footer() {
  return `
    <footer class="footer-3d">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <h5><i class="bi bi-emoji-smile-fill"></i> Pizza Hut 3D</h5>
            <p>Serving the world's most loved pizzas since 1958. Experience pizza like never before — in stunning 3D!</p>
            <div class="footer-social">
              <a><i class="bi bi-facebook"></i></a>
              <a><i class="bi bi-instagram"></i></a>
              <a><i class="bi bi-twitter-x"></i></a>
              <a><i class="bi bi-youtube"></i></a>
              <a><i class="bi bi-tiktok"></i></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-6">
            <h5>Explore</h5>
            <a data-page="home">Home</a>
            <a data-page="menu">Menu</a>
            <a data-page="about">About Us</a>
            <a data-page="gallery">Gallery</a>
            <a data-page="contact">Contact</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Contact</h5>
            <p><i class="bi bi-geo-alt-fill"></i> 9421 Pizza Avenue, Flavortown, NY 10001</p>
            <p><i class="bi bi-telephone-fill"></i> +1 (800) PIZZA-3D</p>
            <p><i class="bi bi-envelope-fill"></i> hello@pizzahut3d.com</p>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5>Hours</h5>
            <p><i class="bi bi-clock-fill"></i> Mon–Thu: 11AM – 11PM</p>
            <p><i class="bi bi-clock-fill"></i> Fri–Sat: 11AM – 1AM</p>
            <p><i class="bi bi-clock-fill"></i> Sunday: 12PM – 10PM</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2026 Pizza Hut 3D — A 3D Dining Experience. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}
