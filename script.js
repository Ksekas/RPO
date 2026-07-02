/* ==========================================================================
   FALCON DYNAMICS — SCRIPT
   ========================================================================== */
const CREW = [
  { role: "TEAM MANAGER",                   name: "Ksenia Kasparek",       bio: "Plans, deadlines, coordination, and project oversight." },
  { role: "DESIGN ENGINEER",                name: "Maria Chrzanowska",     bio: "Body shape, CAD model, aerodynamic concept development." },
  { role: "DESIGN ENGINEER",                name: "Eliza Siedlecka",       bio: "Body shape, CAD model, aerodynamic concept development." },
  { role: "DRIVER & RESEARCH ENGINEER",     name: "Maciej Dziurnikowski",  bio: "Competition driver, research, and manufacturing support." },
  { role: "BRAND AND PARTNERSHIPS MANAGER", name: "Maksymilian Zięć",      bio: "Visual identity, posters, and marketing." },
  { role: "FINANCE MANAGER",                name: "Nikita Yagnyatinskiy",  bio: "Budget tracking, procurement, and expenditure management." }
];
function renderCrew() {
  const list = document.getElementById("crew-list");
  if (!list) return;
  list.innerHTML = CREW.map((m, i) => `
    <li class="roster__item">
      <span class="roster__num">${String(i + 1).padStart(2, "0")}</span>
      <div class="roster__who">
        <span class="roster__role">${m.role}</span>
        <h3 class="roster__name">${m.name}</h3>
      </div>
      <p class="roster__bio">${m.bio}</p>
    </li>
  `).join("");
}
function setupMobileMenu() {
  const toggle = document.querySelector(".nav__toggle");
  const links  = document.querySelector(".nav__links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

function setupNavScroll() {
  const nav = document.querySelector(".nav");
  if (!nav) return;
  const onScroll = () => nav.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}
document.addEventListener("DOMContentLoaded", () => {
  renderCrew();
  setupMobileMenu();
  setupNavScroll();
});
