(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();function m(t="home"){return`
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
            ${[{page:"home",icon:"bi-house-door-fill",label:"Home"},{page:"menu",icon:"bi-list-columns-reverse",label:"Menu"},{page:"about",icon:"bi-info-circle-fill",label:"About"},{page:"gallery",icon:"bi-images",label:"Gallery"},{page:"contact",icon:"bi-telephone-fill",label:"Contact"}].map(s=>`
      <li class="nav-item">
        <a class="nav-link ${s.page===t?"active":""}" data-page="${s.page}">
          <i class="bi ${s.icon}"></i>${s.label}
        </a>
      </li>`).join("")}
          </ul>
        </div>
      </div>
    </nav>
  `}function u(){return`
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
  `}const w=[{bg:"https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",title:"Taste the Extra Dimension",sub:"Pizza so real you can almost touch it — now in 3D"},{bg:"https://images.pexels.com/photos/12932955/pexels-photo-12932955.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",title:"Crafted with Passion",sub:"Fresh ingredients, wood-fired ovens, decades of tradition"},{bg:"https://images.pexels.com/photos/17626467/pexels-photo-17626467.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",title:"Step Inside Our World",sub:"A cozy 3D restaurant experience like no other"},{bg:"https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600",title:"Every Slice a Masterpiece",sub:"Hand-stretched dough, premium toppings, endless flavor"}];function $(){const t=w.map((e,s)=>`
      <div class="slide ${s===0?"active":""}" style="background-image:url('${e.bg}')">
        <div class="slideshow-content">
          <h1>${e.title}</h1>
          <p>${e.sub}</p>
          <div class="mt-4">
            <a class="btn btn-accent btn-lg me-2" data-page="menu">
              <i class="bi bi-cart-fill"></i> Order Now
            </a>
            <a class="btn btn-outline-light btn-lg" data-page="gallery">
              <i class="bi bi-images"></i> View Gallery
            </a>
          </div>
        </div>
      </div>`).join(""),i=w.map((e,s)=>`<div class="dot ${s===0?"active":""}" data-slide="${s}"></div>`).join("");return`
    ${m("home")}

    <!-- Hero Slideshow -->
    <section class="slideshow">
      ${t}
      <div class="slide-arrow prev"><i class="bi bi-chevron-left"></i></div>
      <div class="slide-arrow next"><i class="bi bi-chevron-right"></i></div>
      <div class="slide-dots">${i}</div>
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
          ${[{icon:"bi-fire",title:"Wood-Fired Ovens",text:"Our pizzas are baked in authentic wood-fired ovens at 900°F for that perfect crispy crust."},{icon:"bi-truck",title:"Lightning Delivery",text:"Hot and fresh at your door in 30 minutes or less — guaranteed, every single time."},{icon:"bi-egg-fried",title:"Gourmet Ingredients",text:"Imported mozzarella, vine-ripened tomatoes, and premium meats in every bite."},{icon:"bi-gift-fill",title:"Rewards Program",text:"Earn points on every order and redeem them for free pizzas, sides, and desserts."}].map((e,s)=>`
              <div class="col-lg-3 col-md-6 reveal" style="transition-delay:${s*.15}s">
                <div class="contact-info-card h-100">
                  <div class="feature-circle"><i class="bi ${e.icon}"></i></div>
                  <h5>${e.title}</h5>
                  <p>${e.text}</p>
                </div>
              </div>`).join("")}
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
          ${[{target:19e3,suffix:"+",label:"Restaurants Worldwide"},{target:68,suffix:"",label:"Years of Tradition"},{target:5e6,suffix:"+",label:"Pizzas Served Daily"},{target:110,suffix:"+",label:"Countries Served"}].map(e=>`
              <div class="col-lg-3 col-md-6 reveal-scale">
                <div class="stat-card">
                  <div class="stat-number" data-target="${e.target}" data-suffix="${e.suffix}">0</div>
                  <div class="stat-label">${e.label}</div>
                </div>
              </div>`).join("")}
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

    ${u()}
  `}const S={pizzas:[{name:"Pepperoni Classic",price:"$14.99",img:"https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Loaded with premium pepperoni and mozzarella on our signature hand-stretched crust."},{name:"Margherita Fresca",price:"$12.99",img:"https://images.pexels.com/photos/12932955/pexels-photo-12932955.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Fresh basil, vine-ripened tomatoes, and creamy mozzarella on a wood-fired crust."},{name:"Meat Lover's Supreme",price:"$18.99",img:"https://images.pexels.com/photos/9394678/pexels-photo-9394678.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Pepperoni, sausage, bacon, and ham piled high with extra cheese."},{name:"Veggie Garden",price:"$15.99",img:"https://images.pexels.com/photos/5175556/pexels-photo-5175556.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Olives, tomatoes, onions, bell peppers, mushrooms, and fresh basil."},{name:"Cheese Lover's Dream",price:"$16.99",img:"https://images.pexels.com/photos/18832949/pexels-photo-18832949.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Four cheeses — mozzarella, cheddar, parmesan, and gorgonzola melted to perfection."},{name:"Ultimate Slice",price:"$13.99",img:"https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"A single massive slice loaded with your favorite toppings. Perfect for one."}],sides:[{name:"Creamy Pasta",price:"$9.99",img:"https://images.pexels.com/photos/9546272/pexels-photo-9546272.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Penne pasta in a rich cream sauce with ham and fresh herbs."},{name:"Rigatoni Marinara",price:"$10.99",img:"https://images.pexels.com/photos/8108029/pexels-photo-8108029.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Rigatoni tossed in our house marinara with parmesan and olive oil."},{name:"Fusilli Medley",price:"$11.99",img:"https://images.pexels.com/photos/12354402/pexels-photo-12354402.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Spiral fusilli with tomatoes, olives, and feta cheese."},{name:"Meatball Spaghetti",price:"$12.99",img:"https://images.pexels.com/photos/34480434/pexels-photo-34480434.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Spaghetti topped with hearty meatballs in a creamy tomato sauce."}],desserts:[{name:"Chocolate Indulgence",price:"$7.99",img:"https://images.pexels.com/photos/5172006/pexels-photo-5172006.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Rich chocolate cake with a molten center, served with tiramisu."},{name:"Cake Sampler",price:"$8.99",img:"https://images.pexels.com/photos/39240989/pexels-photo-39240989.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"A trio of matcha, chocolate, and vanilla cake slices on a platter."},{name:"Patisserie Display",price:"$9.99",img:"https://images.pexels.com/photos/39240988/pexels-photo-39240988.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"An assortment of premium cakes and pastries from our patisserie."},{name:"Sweet Treats Table",price:"$6.99",img:"https://images.pexels.com/photos/7104470/pexels-photo-7104470.jpeg?auto=compress&cs=tinysrgb&h=400&w=600",desc:"Chocolates and sweets beautifully arranged for sharing."}]};function L(){const t=[{id:"pizzas",icon:"bi-pie-chart-fill",label:"Signature Pizzas"},{id:"sides",icon:"bi-bowl-rice-fill",label:"Sides & Pastas"},{id:"desserts",icon:"bi-cake2-fill",label:"Desserts"}],i=t.map((s,o)=>`
      <button class="btn ${o===0?"btn-accent":"btn-outline-light"} btn-lg me-2 mb-2 menu-tab" data-cat="${s.id}">
        <i class="bi ${s.icon}"></i> ${s.label}
      </button>`).join(""),e=t.map(s=>{const o=S[s.id].map(a=>`
        <div class="col-lg-4 col-md-6 reveal">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img src="${a.img}" alt="${a.name}" />
                <div class="card-body">
                  <h5 class="card-title">${a.name}</h5>
                  <div class="price">${a.price}</div>
                </div>
              </div>
              <div class="flip-card-back">
                <h4>${a.name}</h4>
                <p>${a.desc}</p>
                <div class="price mb-2">${a.price}</div>
                <button class="btn-order">
                  <i class="bi bi-cart-plus-fill"></i> Add to Order
                </button>
              </div>
            </div>
          </div>
        </div>`).join("");return`<div class="row g-4 menu-section" data-cat="${s.id}" style="display:${s.id==="pizzas"?"flex":"none"}">${o}</div>`}).join("");return`
    ${m("menu")}

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
          ${i}
        </div>
      </div>
    </section>

    <!-- Menu Items -->
    <section class="section-pad pt-3">
      <div class="container">
        ${e}
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

    ${u()}
  `}function P(){const i=[{year:"1958",title:"The First Pizza Hut",text:"Brothers Dan and Frank Carney open a small pizza parlor in Wichita, Kansas with $600 borrowed from their mother."},{year:"1959",title:"Franchising Begins",text:"The first franchise opens in Topeka, Kansas, kicking off a nationwide expansion."},{year:"1972",title:"Going Public",text:"Pizza Hut hits the New York Stock Exchange with 1,000+ locations across the United States."},{year:"1990",title:"Global Expansion",text:"Pizza Hut becomes the largest pizza chain in the world, serving over 50 countries."},{year:"2010",title:"Digital Innovation",text:"Launches online ordering and mobile app, revolutionizing the pizza delivery experience."},{year:"2026",title:"The 3D Revolution",text:"Pizza Hut 3D debuts — the world's first fully immersive 3D pizza dining experience online."}].map((e,s)=>`
      <div class="timeline-item ${s%2===0?"reveal-left":"reveal-right"}">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="year">${e.year}</div>
          <h4>${e.title}</h4>
          <p>${e.text}</p>
        </div>
      </div>`).join("");return`
    ${m("about")}

    <!-- About Hero -->
    <section class="py-5 text-center" style="padding-top:6rem">
      <div class="container reveal-scale">
        <span class="badge-pizza mb-3"><i class="bi bi-info-circle-fill"></i> Our Story</span>
        <h1 class="section-title">About <span>Pizza Hut 3D</span></h1>
        <p class="section-subtitle">Six decades of passion, innovation, and the world's best pizza</p>
      </div>
    </section>

    <!-- Intro with 3D image -->
    <section class="section-pad pt-2">
      <div class="container">
        <div class="row align-items-center g-5">
          <div class="col-lg-6 reveal-left">
            <div class="tilt-card">
              <img src="https://images.pexels.com/photos/32502363/pexels-photo-32502363.jpeg?auto=compress&cs=tinysrgb&h=500&w=800" alt="Cozy pizzeria" />
              <div class="card-body">
                <h5 class="card-title">A Home for Pizza Lovers</h5>
                <p>From humble beginnings in a small Kansas storefront to becoming a global icon, Pizza Hut has always been about bringing people together over great food.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 reveal-right">
            <h2 class="section-title text-start">Our <span>Mission</span></h2>
            <p class="lead mt-3">
              To create the most memorable pizza experience on Earth — and now, in a bold
              new dimension. We blend decades of tradition with cutting-edge 3D technology
              to make every visit unforgettable.
            </p>
            <p>
              We believe pizza is more than food — it's a celebration. It's family movie
              nights, birthday parties, late-night study sessions, and everything in between.
              That's why we pour our hearts into every single pie.
            </p>
            <div class="row g-3 mt-3">
              <div class="col-6">
                <div class="contact-info-card">
                  <i class="bi bi-heart-fill"></i>
                  <h5>Made with Love</h5>
                </div>
              </div>
              <div class="col-6">
                <div class="contact-info-card">
                  <i class="bi bi-globe-americas"></i>
                  <h5>Globally Loved</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Parallax -->
    <section
      class="parallax-bg"
      style="background-image:url('https://images.pexels.com/photos/19845219/pexels-photo-19845219.jpeg?auto=compress&cs=tinysrgb&h=800&w=1600')"
    >
      <div class="parallax-overlay">
        <div>
          <h2>From Kansas to the World</h2>
          <p class="mt-3">A journey of flavor spanning six decades</p>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="section-pad">
      <div class="container">
        <h2 class="section-title">Our <span>Journey</span></h2>
        <p class="section-subtitle">Key milestones in the Pizza Hut story</p>
        <div class="timeline">
          ${i}
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-pad pt-0">
      <div class="container">
        <h2 class="section-title">What We <span>Stand For</span></h2>
        <p class="section-subtitle">The values that guide every pizza we make</p>
        <div class="row g-4">
          ${[{icon:"bi-award-fill",title:"Quality First",text:"We never compromise on ingredients. Every pizza is made with the freshest, highest-quality components."},{icon:"bi-people-fill",title:"Community",text:"We support local communities through food donations, sponsorships, and partnerships."},{icon:"bi-recycle",title:"Sustainability",text:"Eco-friendly packaging, responsible sourcing, and a commitment to reducing our carbon footprint."},{icon:"bi-lightbulb-fill",title:"Innovation",text:"From stuffed crust to 3D dining, we constantly push the boundaries of what pizza can be."}].map((e,s)=>`
              <div class="col-lg-3 col-md-6 reveal" style="transition-delay:${s*.12}s">
                <div class="contact-info-card h-100">
                  <div class="feature-circle"><i class="bi ${e.icon}"></i></div>
                  <h5>${e.title}</h5>
                  <p>${e.text}</p>
                </div>
              </div>`).join("")}
        </div>
      </div>
    </section>

    ${u()}
  `}const f=[{img:"https://images.pexels.com/photos/774487/pexels-photo-774487.jpeg?auto=compress&cs=tinysrgb&h=500&w=800",caption:"Pepperoni Classic"},{img:"https://images.pexels.com/photos/17626467/pexels-photo-17626467.jpeg?auto=compress&cs=tinysrgb&h=500&w=800",caption:"Our Cozy Pizzeria"},{img:"https://images.pexels.com/photos/12932955/pexels-photo-12932955.jpeg?auto=compress&cs=tinysrgb&h=500&w=800",caption:"Fresh from the Oven"},{img:"https://images.pexels.com/photos/6605254/pexels-photo-6605254.jpeg?auto=compress&cs=tinysrgb&h=500&w=800",caption:"Chef at Work"},{img:"https://images.pexels.com/photos/9394678/pexels-photo-9394678.jpeg?auto=compress&cs=tinysrgb&h=500&w=800",caption:"Meat Lover's Special"},{img:"https://images.pexels.com/photos/32502363/pexels-photo-32502363.jpeg?auto=compress&cs=tinysrgb&h=500&w=800",caption:"Dining Atmosphere"},{img:"https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg?auto=compress&cs=tinysrgb&h=500&w=800",caption:"The Perfect Slice"},{img:"https://images.pexels.com/photos/36729756/pexels-photo-36729756.jpeg?auto=compress&cs=tinysrgb&h=500&w=800",caption:"Friends & Pizza"}];function k(){const t=f.map((e,s)=>`
      <div class="gallery-slide-3d ${s===0?"pos-center":""}">
        <img src="${e.img}" alt="${e.caption}" />
        <div class="caption">${e.caption}</div>
      </div>`).join(""),i=f.concat(f.slice(0,4)).map((e,s)=>`
      <div class="col-lg-3 col-md-6 reveal" style="transition-delay:${s%4*.1}s">
        <div class="gallery-grid-item">
          <img src="${e.img}" alt="${e.caption}" />
          <div class="overlay"><i class="bi bi-zoom-in"></i></div>
        </div>
      </div>`).join("");return`
    ${m("gallery")}

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
          ${t}
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
          ${i}
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

    ${u()}
  `}function M(){return`
    ${m("contact")}

    <!-- Contact Hero -->
    <section class="py-5 text-center" style="padding-top:6rem">
      <div class="container reveal-scale">
        <span class="badge-pizza mb-3"><i class="bi bi-telephone-fill"></i> Get in Touch</span>
        <h1 class="section-title">Contact <span>Us</span></h1>
        <p class="section-subtitle">We'd love to hear from you — questions, feedback, or orders</p>
      </div>
    </section>

    <!-- Contact Info Cards -->
    <section class="pb-4">
      <div class="container">
        <div class="row g-4">
          ${[{icon:"bi-geo-alt-fill",title:"Visit Us",lines:["9421 Pizza Avenue","Flavortown, NY 10001"]},{icon:"bi-telephone-fill",title:"Call Us",lines:["+1 (800) PIZZA-3D","+1 (800) 749-9233"]},{icon:"bi-envelope-fill",title:"Email Us",lines:["hello@pizzahut3d.com","orders@pizzahut3d.com"]},{icon:"bi-clock-fill",title:"Open Hours",lines:["Mon–Thu: 11AM–11PM","Fri–Sun: 11AM–1AM"]}].map((t,i)=>`
              <div class="col-lg-3 col-md-6 reveal" style="transition-delay:${i*.12}s">
                <div class="contact-info-card h-100">
                  <i class="bi ${t.icon}"></i>
                  <h5>${t.title}</h5>
                  ${t.lines.map(e=>`<p class="mb-1">${e}</p>`).join("")}
                </div>
              </div>`).join("")}
        </div>
      </div>
    </section>

    <!-- Contact Form + Map -->
    <section class="section-pad pt-3">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-7 reveal-left">
            <div class="contact-3d-form">
              <h3 class="mb-4" style="font-family:var(--header-font);color:var(--accent)">
                <i class="bi bi-send-fill"></i> Send Us a Message
              </h3>
              <div id="formSuccess" class="alert" style="display:none;background:rgba(76,175,80,0.2);border:1px solid #4caf50;color:#a5d6a7;border-radius:12px">
                <i class="bi bi-check-circle-fill"></i> Thank you! Your message has been sent. We'll get back to you soon.
              </div>
              <form id="contactForm">
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="firstName" placeholder="First Name" required />
                      <label for="firstName"><i class="bi bi-person-fill"></i> First Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating mb-3">
                      <input type="text" class="form-control" id="lastName" placeholder="Last Name" required />
                      <label for="lastName"><i class="bi bi-person-fill"></i> Last Name</label>
                    </div>
                  </div>
                </div>
                <div class="form-floating mb-3">
                  <input type="email" class="form-control" id="email" placeholder="Email" required />
                  <label for="email"><i class="bi bi-envelope-fill"></i> Email Address</label>
                </div>
                <div class="form-floating mb-3">
                  <input type="tel" class="form-control" id="phone" placeholder="Phone" />
                  <label for="phone"><i class="bi bi-telephone-fill"></i> Phone Number</label>
                </div>
                <div class="form-floating mb-3">
                  <select class="form-select" id="subject">
                    <option selected>General Inquiry</option>
                    <option>Place an Order</option>
                    <option>Catering Request</option>
                    <option>Feedback</option>
                    <option>Career Opportunity</option>
                  </select>
                  <label for="subject"><i class="bi bi-tag-fill"></i> Subject</label>
                </div>
                <div class="form-floating mb-4">
                  <textarea class="form-control" id="message" placeholder="Message" style="height:140px" required></textarea>
                  <label for="message"><i class="bi bi-chat-dots-fill"></i> Your Message</label>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-accent btn-lg">
                    <i class="bi bi-send-fill"></i> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="col-lg-5 reveal-right">
            <div class="contact-3d-form h-100">
              <h3 class="mb-4" style="font-family:var(--header-font);color:var(--accent)">
                <i class="bi bi-map-fill"></i> Find Us
              </h3>
              <div class="ratio ratio-4x3 rounded-3 overflow-hidden mb-4" style="box-shadow:0 10px 30px rgba(0,0,0,0.4)">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-74.02%2C40.70%2C-73.98%2C40.72&layer=mapnik"
                  style="border:0"
                  loading="lazy"
                  title="Pizza Hut 3D Location"
                ></iframe>
              </div>
              <div class="d-flex align-items-center mb-3">
                <i class="bi bi-pin-map-fill text-accent me-3" style="font-size:1.5rem"></i>
                <div>
                  <strong style="color:var(--accent)">Pizza Hut 3D Flagship</strong>
                  <p class="mb-0">9421 Pizza Avenue, Flavortown, NY</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <i class="bi bi-truck text-accent me-3" style="font-size:1.5rem"></i>
                <div>
                  <strong style="color:var(--accent)">Delivery Zone</strong>
                  <p class="mb-0">We deliver within a 10-mile radius</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section-pad pt-0">
      <div class="container">
        <h2 class="section-title">Frequently Asked <span>Questions</span></h2>
        <p class="section-subtitle">Everything you need to know</p>
        <div class="row g-3 justify-content-center">
          <div class="col-lg-8">
            ${[{q:"What are your delivery hours?",a:"We deliver from 11AM to 11PM Monday through Thursday, and 11AM to 1AM on Fridays and Saturdays. Sundays we deliver from 12PM to 10PM."},{q:"Do you offer gluten-free options?",a:"Yes! We offer a gluten-free crust option on all our pizzas. Just ask when ordering."},{q:"Can I customize my pizza?",a:"Absolutely. You can choose your crust, sauce, cheese, and any combination of our 30+ toppings."},{q:"Do you cater events?",a:"Yes, we offer catering for parties, corporate events, and gatherings. Contact us with your event details for a custom quote."},{q:"Is there a rewards program?",a:"Yes! Sign up for our rewards program and earn points on every order. Redeem points for free pizzas, sides, and desserts."}].map((t,i)=>`
              <div class="accordion-item reveal bg-card mb-2 rounded-3 overflow-hidden" style="transition-delay:${i*.1}s;background:var(--card-bg);border:1px solid rgba(255,255,255,0.1)">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}" style="background:var(--card-bg);color:var(--page-text);font-weight:600">
                    ${t.q}
                  </button>
                </h2>
                <div id="faq${i}" class="accordion-collapse collapse" data-bs-parent=".accordion">
                  <div class="accordion-body" style="background:var(--card-bg);color:var(--page-text);opacity:0.85">${t.a}</div>
                </div>
              </div>`).join("")}
          </div>
        </div>
      </div>
    </section>

    ${u()}
  `}function E(t,i,e){t.querySelectorAll(".nav-link[data-page]").forEach(n=>{n.dataset.page===e&&n.classList.add("active"),n.addEventListener("click",r=>{r.preventDefault(),i(n.dataset.page)})}),t.querySelectorAll(".footer-3d a[data-page]").forEach(n=>{n.addEventListener("click",r=>{r.preventDefault(),i(n.dataset.page)})});const a=t.querySelector(".navbar-3d");if(a){const n=()=>{window.scrollY>60?a.classList.add("scrolled"):a.classList.remove("scrolled")};window.removeEventListener("scroll",window._navScrollHandler),window._navScrollHandler=n,window.addEventListener("scroll",n),n()}const l=t.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");if(l.length>0){const n=new IntersectionObserver(r=>{r.forEach(c=>{c.isIntersecting&&c.target.classList.add("visible")})},{threshold:.15});l.forEach(r=>n.observe(r))}j(t),A(t),D(t),C(t),T(t),F(t),window.bootstrap&&[...t.querySelectorAll('[data-bs-toggle="tooltip"]')].map(r=>new window.bootstrap.Tooltip(r))}function j(t){const i=t.querySelector(".slideshow");if(!i)return;const e=i.querySelectorAll(".slide"),s=i.querySelectorAll(".slide-dots .dot"),o=i.querySelector(".slide-arrow.prev"),a=i.querySelector(".slide-arrow.next");let l=0,n=null;function r(p){e.forEach((g,b)=>{g.classList.toggle("active",b===p)}),s.forEach((g,b)=>{g.classList.toggle("active",b===p)}),l=p}function c(){r((l+1)%e.length)}function d(){r((l-1+e.length)%e.length)}function h(){clearInterval(n),n=setInterval(c,5e3)}a&&a.addEventListener("click",()=>{c(),h()}),o&&o.addEventListener("click",()=>{d(),h()}),s.forEach((p,g)=>{p.addEventListener("click",()=>{r(g),h()})}),r(0),h()}function A(t){const i=t.querySelector(".gallery-3d-slideshow");if(!i)return;const e=[...i.querySelectorAll(".gallery-slide-3d")],s=i.querySelector(".gallery-nav.prev"),o=i.querySelector(".gallery-nav.next");if(e.length===0)return;let a=0;function l(){const c=e.length;e.forEach((d,h)=>{let p=h-a;p>c/2&&(p-=c),p<-c/2&&(p+=c),d.classList.remove("pos-center","pos-left","pos-right","pos-far-left","pos-far-right"),p===0?d.classList.add("pos-center"):p===-1?d.classList.add("pos-left"):p===1?d.classList.add("pos-right"):p<=-2?d.classList.add("pos-far-left"):d.classList.add("pos-far-right")})}function n(){a=(a+1)%e.length,l()}function r(){a=(a-1+e.length)%e.length,l()}o&&o.addEventListener("click",n),s&&s.addEventListener("click",r),e.forEach((c,d)=>{c.addEventListener("click",()=>{a=d,l()})}),l()}function D(t){t.querySelectorAll(".tilt-card").forEach(e=>{e.addEventListener("mousemove",s=>{const o=e.getBoundingClientRect(),a=s.clientX-o.left,l=s.clientY-o.top,n=o.width/2,r=o.height/2,c=(l-r)/r*-8,d=(a-n)/n*8;e.style.transform=`perspective(800px) rotateX(${c}deg) rotateY(${d}deg) scale(1.02)`}),e.addEventListener("mouseleave",()=>{e.style.transform=""})})}function C(t){const i=t.querySelectorAll(".stat-number[data-target]");if(i.length===0)return;const e=new IntersectionObserver(s=>{s.forEach(o=>{if(o.isIntersecting){const a=o.target,l=parseInt(a.dataset.target,10),n=a.dataset.suffix||"";let r=0;const c=Math.ceil(l/60),d=setInterval(()=>{r+=c,r>=l&&(r=l,clearInterval(d)),a.textContent=r.toLocaleString()+n},25);e.unobserve(a)}})},{threshold:.5});i.forEach(s=>e.observe(s))}function F(t){const i=t.querySelector("#contactForm");i&&i.addEventListener("submit",e=>{e.preventDefault();const s=t.querySelector("#formSuccess");s&&(s.style.display="block",s.classList.add("visible")),i.reset(),setTimeout(()=>{s&&(s.style.display="none")},4e3)})}function T(t){const i=t.querySelectorAll(".menu-tab"),e=t.querySelectorAll(".menu-section");i.length!==0&&i.forEach(s=>{s.addEventListener("click",()=>{const o=s.dataset.cat;i.forEach(l=>{l.classList.remove("btn-accent"),l.classList.add("btn-outline-light")}),s.classList.remove("btn-outline-light"),s.classList.add("btn-accent"),e.forEach(l=>{l.style.display=l.dataset.cat===o?"flex":"none"}),t.querySelectorAll(`.menu-section[data-cat="${o}"] .reveal`).forEach((l,n)=>{l.classList.remove("visible"),setTimeout(()=>l.classList.add("visible"),50+n*100)})})})}const y={home:$,menu:L,about:P,gallery:k,contact:M},v=document.querySelector("#app");function x(t){const i=y[t]||y.home;v.innerHTML=i(),v.setAttribute("data-page",t),v.style.animation="none",v.offsetWidth,v.style.animation="pageIn 0.6s ease forwards",window.scrollTo(0,0),E(v,x,t)}function z(){const t=window.location.hash.replace("#","");return y[t]?t:"home"}window.addEventListener("hashchange",()=>{x(z())});x(z());
