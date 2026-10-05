import { navbar, footer } from "../components.js";

const menuData = {
  pizzas: [
    { name: "Pepperoni Classic", price: "$14.99", img: "https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Loaded with premium pepperoni and mozzarella on our signature hand-stretched crust." },
    { name: "Margherita Fresca", price: "$12.99", img: "https://images.pexels.com/photos/12932955/pexels-photo-12932955.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Fresh basil, vine-ripened tomatoes, and creamy mozzarella on a wood-fired crust." },
    { name: "Meat Lover's Supreme", price: "$18.99", img: "https://images.pexels.com/photos/9394678/pexels-photo-9394678.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Pepperoni, sausage, bacon, and ham piled high with extra cheese." },
    { name: "Veggie Garden", price: "$15.99", img: "https://images.pexels.com/photos/5175556/pexels-photo-5175556.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Olives, tomatoes, onions, bell peppers, mushrooms, and fresh basil." },
    { name: "Cheese Lover's Dream", price: "$16.99", img: "https://images.pexels.com/photos/18832949/pexels-photo-18832949.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Four cheeses — mozzarella, cheddar, parmesan, and gorgonzola melted to perfection." },
    { name: "Ultimate Slice", price: "$13.99", img: "https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "A single massive slice loaded with your favorite toppings. Perfect for one." },
  ],
  sides: [
    { name: "Creamy Pasta", price: "$9.99", img: "https://images.pexels.com/photos/9546272/pexels-photo-9546272.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Penne pasta in a rich cream sauce with ham and fresh herbs." },
    { name: "Rigatoni Marinara", price: "$10.99", img: "https://images.pexels.com/photos/8108029/pexels-photo-8108029.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Rigatoni tossed in our house marinara with parmesan and olive oil." },
    { name: "Fusilli Medley", price: "$11.99", img: "https://images.pexels.com/photos/12354402/pexels-photo-12354402.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Spiral fusilli with tomatoes, olives, and feta cheese." },
    { name: "Meatball Spaghetti", price: "$12.99", img: "https://images.pexels.com/photos/34480434/pexels-photo-34480434.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Spaghetti topped with hearty meatballs in a creamy tomato sauce." },
  ],
  desserts: [
    { name: "Chocolate Indulgence", price: "$7.99", img: "https://images.pexels.com/photos/5172006/pexels-photo-5172006.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Rich chocolate cake with a molten center, served with tiramisu." },
    { name: "Cake Sampler", price: "$8.99", img: "https://images.pexels.com/photos/39240989/pexels-photo-39240989.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "A trio of matcha, chocolate, and vanilla cake slices on a platter." },
    { name: "Patisserie Display", price: "$9.99", img: "https://images.pexels.com/photos/39240988/pexels-photo-39240988.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "An assortment of premium cakes and pastries from our patisserie." },
    { name: "Sweet Treats Table", price: "$6.99", img: "https://images.pexels.com/photos/7104470/pexels-photo-7104470.jpeg?auto=compress&cs=tinysrgb&h=400&w=600", desc: "Chocolates and sweets beautifully arranged for sharing." },
  ],
};

export function renderMenu() {
  const categoryTabs = [
    { id: "pizzas", icon: "bi-pie-chart-fill", label: "Signature Pizzas" },
    { id: "sides", icon: "bi-bowl-rice-fill", label: "Sides & Pastas" },
    { id: "desserts", icon: "bi-cake2-fill", label: "Desserts" },
  ];

  const tabsHTML = categoryTabs
    .map(
      (t, i) => `
      <button class="btn ${i === 0 ? "btn-accent" : "btn-outline-light"} btn-lg me-2 mb-2 menu-tab" data-cat="${t.id}">
        <i class="bi ${t.icon}"></i> ${t.label}
      </button>`
    )
    .join("");

  const sectionsHTML = categoryTabs
    .map((t) => {
      const items = menuData[t.id]
        .map(
          (item) => `
        <div class="col-lg-4 col-md-6 reveal">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${item.img}" alt="${item.name}" />
                <div class="card-body">
                  <h5 class="card-title">${item.name}</h5>
                  <div class="price">${item.price}</div>
                </div>
              </div>
              <div class="flip-card-back">
                <h4>${item.name}</h4>
                <p>${item.desc}</p>
                <div class="price mb-2">${item.price}</div>
                <button class="btn-order">
                  <i class="bi bi-cart-plus-fill"></i> Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>`
        )
        .join("");
      return `<div class="row g-4 menu-section" data-cat="${t.id}" style="display:${t.id === "pizzas" ? "flex" : "none"}">${items}</div>`;
    })
    .join("");

  return `
    ${navbar("menu")}

    <!-- Menu Hero -->
    <section class="py-5 text-center" style="padding-top:6rem">
      <div class="container reveal-scale">
        <span class="badge-pizza mb-3"><i class="bi bi-menu-button-wide-fill"></i> Our Menu</span>
        <h1 class="section-title">Explore Our <span>3D Menu</span></h1>
        <p class="section-subtitle">Hover over any item to flip it and see the details</p>
      </div>
    </section>

    <!-- Category Tabs -->
    <section class="pb-2">
      <div class="container text-center">
        <div class="d-flex justify-content-center flex-wrap">
          ${tabsHTML}
        </div>
      </div>
    </section>

    <!-- Menu Items -->
    <section class="section-pad pt-3">
      <div class="container">
        ${sectionsHTML}
      </div>
    </section>

    <!-- Parallax -->
    <section
      class="parallax-bg"
      style="background-image:url('https://images.pexels.com/photos/14965702/pexels-photo-14965702.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600')"
    >
      <div class="parallax-overlay">
        <div>
          <h2>Every Pizza Tells a Story</h2>
          <p class="mt-3">Hand-crafted with love, fired to perfection</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-pad text-center">
      <div class="container reveal">
        <h2 class="section-title">Hungry <span>Yet</span>?</h2>
        <p class="section-subtitle">Place your order and get it delivered hot and fresh</p>
        <a class="btn btn-accent btn-lg" data-page="contact">
          <i class="bi bi-telephone-fill"></i> Order Now
        </a>
      </div>
    </section>

    ${footer()}
  `;
}
