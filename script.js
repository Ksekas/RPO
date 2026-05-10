/* ==========================================================================
   FALCON DYNAMICS — SCRIPT
   1. Team data — easy to edit in one place
   2. Renders team grid from data
   3. Reveal-on-scroll using IntersectionObserver
   4. Mobile menu toggle
   ========================================================================== */


/* -- 1. Team data — edit names and descriptions here --------------------- */
const TEAM = [
  {
    role: "Team Manager",
    name: "Name Surname",
    bio:  "Plans, deadlines, communication, and keeping the whole project organised."
  },
  {
    role: "Design Engineer",
    name: "Name Surname",
    bio:  "Car shape, CAD model, aerodynamic ideas, and design development."
  },
  {
    role: "Manufacturing Engineer",
    name: "Name Surname",
    bio:  "Production planning, materials, quality control, and practical construction."
  },
  {
    role: "Marketing Manager",
    name: "Name Surname",
    bio:  "Brand identity, social media, promotion, and communication with sponsors."
  },
  {
    role: "Graphic Designer",
    name: "Name Surname",
    bio:  "Visuals, logo use, presentation style, posters, and website graphics."
  },
  {
    role: "Resource Manager",
    name: "Name Surname",
    bio:  "Budgeting, resources, sponsor materials, and project portfolio support."
  }
];


/* -- 2. Render team grid -------------------------------------------------- */
function renderTeam() {
  const grid = document.getElementById("team-grid");
  if (!grid) return;

  grid.innerHTML = TEAM.map((member, i) => `
    <article class="card member">
      <div class="member__avatar">0${i + 1}</div>
      <span class="member__role">${member.role}</span>
      <h3 class="card__title">${member.name}</h3>
      <p>${member.bio}</p>
    </article>
  `).join("");
}


/* -- 3. Reveal on scroll -------------------------------------------------- */
function setupScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    // Fallback: just show everything
    elements.forEach(el => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });

  elements.forEach(el => observer.observe(el));
}


/* -- 4. Mobile menu toggle ----------------------------------------------- */
function setupMobileMenu() {
  const toggle = document.querySelector(".nav__toggle");
  const links  = document.querySelector(".nav__links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close menu when a link is clicked (better UX on mobile)
  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}


/* -- 5. Boot ------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderTeam();
  setupScrollReveal();
  setupMobileMenu();
});
