/* ==========================================================================
   FALCON DYNAMICS — SCRIPT
   ========================================================================== */

const CREW = [
  { role: "TEAM MANAGER",                   name: "Ksenia Kasparek",       bio: "Plans, deadlines, coordination, and project oversight." },
  { role: "DESIGN ENGINEER",                name: "Maria Chrzanowska",     bio: "Body shape, CAD model, aerodynamic concept development." },
  { role: "DESIGN ENGINEER",                name: "Eliza Siedlecka",       bio: "Body shape, CAD model, aerodynamic concept development." },
  { role: "TEST ENGINEER",                  name: "Maciej Dziurnikowski",  bio: "Test runs, data collection, and performance evaluation." },
  { role: "BRAND AND PARTNERSHIPS MANAGER", name: "Maksymilian Zięć",      bio: "Visual identity, posters, and resources." },
  { role: "MANUFACTURING ENGINEER",         name: "Nikita Yagnyatinskiy",  bio: "Production planning, materials, quality control." }
];

function renderCrew() {
  const list = document.getElementById("crew-list");
  if (!list) return;

  list.innerHTML = CREW.map((m, i) => `
    <li class="crew__row">
      <span class="crew__num">${String(i + 1).padStart(2, "0")}</span>
      <span class="crew__role">${m.role}</span>
      <div class="crew__details">
        <div class="crew__name">${m.name}</div>
        <div class="crew__bio">${m.bio}</div>
      </div>
      <span class="crew__arrow">→</span>
    </li>
  `).join("");
}

function setupMobileMenu() {
  const toggle = document.querySelector(".topbar__toggle");
  const nav    = document.querySelector(".sidenav");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));

    if (isOpen) {
      Object.assign(nav.style, {
        display: "flex",
        position: "fixed",
        top: "55px",
        left: "0",
        right: "0",
        transform: "none",
        background: "var(--navy-deep)",
        borderTop: "1px solid var(--navy-line)",
        borderLeft: "none",
        padding: "20px 28px",
        fontSize: "0.95rem",
        zIndex: "60"
      });
    } else {
      nav.removeAttribute("style");
    }
  });

  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    if (nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      nav.removeAttribute("style");
    }
  }));
}

document.addEventListener("DOMContentLoaded", () => {
  renderCrew();
  setupMobileMenu();
});
