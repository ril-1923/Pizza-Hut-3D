import { navbar, footer } from "../components.js";

export function renderContact() {
  return `
    ${navbar("contact")}

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
          ${[
            { icon: "bi-geo-alt-fill", title: "Visit Us", lines: ["9421 Pizza Avenue", "Flavortown, NY 10001"] },
            { icon: "bi-telephone-fill", title: "Call Us", lines: ["+1 (800) PIZZA-3D", "+1 (800) 749-9233"] },
            { icon: "bi-envelope-fill", title: "Email Us", lines: ["hello@pizzahut3d.com", "orders@pizzahut3d.com"] },
            { icon: "bi-clock-fill", title: "Open Hours", lines: ["Mon–Thu: 11AM–11PM", "Fri–Sun: 11AM–1AM"] },
          ]
            .map(
              (c, i) => `
              <div class="col-lg-3 col-md-6 reveal" style="transition-delay:${i * 0.12}s">
                <div class="contact-info-card h-100">
                  <i class="bi ${c.icon}"></i>
                  <h5>${c.title}</h5>
                  ${c.lines.map((l) => `<p class="mb-1">${l}</p>`).join("")}
                </div>
              </div>`
            )
            .join("")}
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
            ${[
              { q: "What are your delivery hours?", a: "We deliver from 11AM to 11PM Monday through Thursday, and 11AM to 1AM on Fridays and Saturdays. Sundays we deliver from 12PM to 10PM." },
              { q: "Do you offer gluten-free options?", a: "Yes! We offer a gluten-free crust option on all our pizzas. Just ask when ordering." },
              { q: "Can I customize my pizza?", a: "Absolutely. You can choose your crust, sauce, cheese, and any combination of our 30+ toppings." },
              { q: "Do you cater events?", a: "Yes, we offer catering for parties, corporate events, and gatherings. Contact us with your event details for a custom quote." },
              { q: "Is there a rewards program?", a: "Yes! Sign up for our rewards program and earn points on every order. Redeem points for free pizzas, sides, and desserts." },
            ]
              .map(
                (faq, i) => `
              <div class="accordion-item reveal bg-card mb-2 rounded-3 overflow-hidden" style="transition-delay:${i * 0.1}s;background:var(--card-bg);border:1px solid rgba(255,255,255,0.1)">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}" style="background:var(--card-bg);color:var(--page-text);font-weight:600">
                    ${faq.q}
                  </button>
                </h2>
                <div id="faq${i}" class="accordion-collapse collapse" data-bs-parent=".accordion">
                  <div class="accordion-body" style="background:var(--card-bg);color:var(--page-text);opacity:0.85">${faq.a}</div>
                </div>
              </div>`
              )
              .join("")}
          </div>
        </div>
      </div>
    </section>

    ${footer()}
  `;
}
