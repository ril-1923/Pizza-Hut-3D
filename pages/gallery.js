import { navbar, footer } from "../components.js";

const galleryItems = [
  { img: "https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&h=500&w=800", caption: "Pepperoni Classic" },
  { img: "https://images.pexels.com/photos/17626467/pexels-photo-17626467.jpeg?auto=compress&cs=tinysrgb&h=500&w=800", caption: "Our Cozy Pizzeria" },
  { img: "https://images.pexels.com/photos/12932955/pexels-photo-12932955.jpeg?auto=compress&cs=tinysrgb&h=500&w=800", caption: "Fresh from the Oven" },
  { img: "https://images.pexels.com/photos/6605254/pexels-photo-6605254.jpeg?auto=compress&cs=tinysrgb&h=500&w=800", caption: "Chef at Work" },
  { img: "https://images.pexels.com/photos/9394678/pexels-photo-9394678.jpeg?auto=compress&cs=tinysrgb&h=500&w=800", caption: "Meat Lover's Special" },
  { img: "https://images.pexels.com/photos/32502363/pexels-photo-32502363.jpeg?auto=compress&cs=tinysrgb&h=500&w=800", caption: "Dining Atmosphere" },
  { img: "https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&h=500&w=800", caption: "The Perfect Slice" },
  { img: "https://images.pexels.com/photos/36729756/pexels-photo-36729756.jpeg?auto=compress&cs=tinysrgb&h=500&w=800", caption: "Friends & Pizza" },
];

export function renderGallery() {
  const carouselSlides = galleryItems
    .map(
      (item, i) => `
      <div class="gallery-slide-3d ${i === 0 ? "pos-center" : ""}">
        <img src="${item.img}" alt="${item.caption}" />
        <div class="caption">${item.caption}</div>
      </div>`
    )
    .join("");

  const gridItems = galleryItems
    .concat(galleryItems.slice(0, 4))
    .map(
      (item, i) => `
      <div class="col-lg-3 col-md-6 reveal" style="transition-delay:${(i % 4) * 0.1}s">
        <div class="gallery-grid-item">
          <img src="${item.img}" alt="${item.caption}" />
          <div class="overlay"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>`
    )
    .join("");

  return `
    ${navbar("gallery")}

    <!-- Gallery Hero -->
    <section class="py-5 text-center" style="padding-top:6rem">
      <div class="container reveal-scale">
        <span class="badge-pizza mb-3"><i class="bi bi-images"></i> Gallery</span>
        <h1 class="section-title">A <span>Visual Feast</span></h1>
        <p class="section-subtitle">Browse our 3D gallery — click any slide to bring it to center</p>
      </div>
    </section>

    <!-- 3D Carousel Slideshow -->
    <section class="pb-5">
      <div class="container">
        <div class="gallery-3d-slideshow">
          ${carouselSlides}
          <div class="slide-arrow prev gallery-nav" style="top:auto;bottom:-60px;left:50%;transform:translateX(-120px)"><i class="bi bi-chevron-left"></i></div>
          <div class="slide-arrow next gallery-nav" style="top:auto;bottom:-60px;right:50%;transform:translateX(120px)"><i class="bi bi-chevron-right"></i></div>
        </div>
      </div>
    </section>

    <!-- Parallax -->
    <section
      class="parallax-bg"
      style="background-image:url('https://images.pexels.com/photos/14965702/pexels-photo-14965702.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600')"
    >
      <div class="parallax-overlay">
        <div>
          <h2>Every Pizza is a Work of Art</h2>
          <p class="mt-3">Hover over any image to see it in 3D</p>
        </div>
      </div>
    </section>

    <!-- Gallery Grid with 3D hover -->
    <section class="section-pad">
      <div class="container">
        <h2 class="section-title">More <span>Moments</span></h2>
        <p class="section-subtitle">A collection of our finest pizzas and restaurant scenes</p>
        <div class="row g-4">
          ${gridItems}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-pad text-center pt-0">
      <div class="container reveal">
        <h2 class="section-title">Like What You <span>See</span>?</h2>
        <p class="section-subtitle">Come taste it for yourself</p>
        <a class="btn btn-accent btn-lg" data-page="menu">
          <i class="bi bi-cart-fill"></i> View Menu
        </a>
      </div>
    </section>

    ${footer()}
  `;
}
