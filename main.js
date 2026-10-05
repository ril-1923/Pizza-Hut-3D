import "./style.css";
import { renderHome } from "./pages/home.js";
import { renderMenu } from "./pages/menu.js";
import { renderAbout } from "./pages/about.js";
import { renderGallery } from "./pages/gallery.js";
import { renderContact } from "./pages/contact.js";
import { initSharedEffects } from "./effects.js";

const routes = {
  home: renderHome,
  menu: renderMenu,
  about: renderAbout,
  gallery: renderGallery,
  contact: renderContact,
};

const app = document.querySelector("#app");

function navigate(page) {
  const renderer = routes[page] || routes.home;
  app.innerHTML = renderer();
  app.setAttribute("data-page", page);
  app.style.animation = "none";
  void app.offsetWidth;
  app.style.animation = "pageIn 0.6s ease forwards";
  window.scrollTo(0, 0);
  initSharedEffects(app, navigate, page);
}

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "");
  return routes[hash] ? hash : "home";
}

window.addEventListener("hashchange", () => {
  navigate(getPageFromHash());
});

navigate(getPageFromHash());
