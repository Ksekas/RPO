/* ==========================================================================
   FALCON DYNAMICS — SCRIPT
   ========================================================================== */

const CREW = [
  { role: "TEAM MANAGER",           name: "Name Surname", bio: "Plans, deadlines, coordination, and project oversight." },
  { role: "DESIGN ENGINEER",        name: "Name Surname", bio: "Body shape, CAD model, aerodynamic concept development." },
  { role: "MANUFACTURING ENGINEER", name: "Name Surname", bio: "Production planning, materials, quality control." },
  { role: "MARKETING MANAGER",      name: "Name Surname", bio: "Brand identity, social media, sponsor communication." },
  { role: "GRAPHIC DESIGNER",       name: "Name Surname", bio: "Visual identity, presentations, posters, web graphics." },
  { role: "RESOURCE MANAGER",       name: "Name Surname", bio: "Budgeting, resources, sponsor materials, portfolio." }
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
