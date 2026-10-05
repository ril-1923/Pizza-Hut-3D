import { navbar, footer } from "../components.js";

export function renderAbout() {
  const timeline = [
    { year: "1958", title: "The First Pizza Hut", text: "Brothers Dan and Frank Carney open a small pizza parlor in Wichita, Kansas with $600 borrowed from their mother." },
    { year: "1959", title: "Franchising Begins", text: "The first franchise opens in Topeka, Kansas, kicking off a nationwide expansion." },
    { year: "1972", title: "Going Public", text: "Pizza Hut hits the New York Stock Exchange with 1,000+ locations across the United States." },
    { year: "1990", title: "Global Expansion", text: "Pizza Hut becomes the largest pizza chain in the world, serving over 50 countries." },
    { year: "2010", title: "Digital Innovation", text: "Launches online ordering and mobile app, revolutionizing the pizza delivery experience." },
    { year: "2026", title: "The 3D Revolution", text: "Pizza Hut 3D debuts — the world's first fully immersive 3D pizza dining experience online." },
  ];

  const timelineHTML = timeline
    .map(
      (t, i) => `
      <div class="timeline-item ${i % 2 === 0 ? "reveal-left" : "reveal-right"}">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="year">${t.year}</div>
          <h4>${t.title}</h4>
          <p>${t.text}</p>
        </div>
      </div>`
    )
    .join("");

  return `
    ${navbar("about")}

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
          ${timelineHTML}
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section-pad pt-0">
      <div class="container">
        <h2 class="section-title">What We <span>Stand For</span></h2>
        <p class="section-subtitle">The values that guide every pizza we make</p>
        <div class="row g-4">
          ${[
            { icon: "bi-award-fill", title: "Quality First", text: "We never compromise on ingredients. Every pizza is made with the freshest, highest-quality components." },
            { icon: "bi-people-fill", title: "Community", text: "We support local communities through food donations, sponsorships, and partnerships." },
            { icon: "bi-recycle", title: "Sustainability", text: "Eco-friendly packaging, responsible sourcing, and a commitment to reducing our carbon footprint." },
            { icon: "bi-lightbulb-fill", title: "Innovation", text: "From stuffed crust to 3D dining, we constantly push the boundaries of what pizza can be." },
          ]
            .map(
              (v, i) => `
              <div class="col-lg-3 col-md-6 reveal" style="transition-delay:${i * 0.12}s">
                <div class="contact-info-card h-100">
                  <div class="feature-circle"><i class="bi ${v.icon}"></i></div>
                  <h5>${v.title}</h5>
                  <p>${v.text}</p>
                </div>
              </div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    ${footer()}
  `;
}
