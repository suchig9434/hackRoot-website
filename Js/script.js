/* ------------------ PRELOADER ------------------ */
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

/* ------------------ NAV TOGGLE ------------------ */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* ------------------ PARTICLE BACKGROUND ------------------ */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#a855f7";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

/* ------------------ TEAM MODALS ------------------ */
const teamDetails = {
  prateek: {
    name: "Prateek",
    role: "AI/ML Engineer + Backend Lead",
    about:
      "Builds machine learning models, Flask backend APIs, and GenAI integrations.",
  },
  suchi: {
    name: "Suchi",
    role: "Frontend Lead",
    about:
      "Designs UI/UX, creates responsive layouts, and handles frontend integrations.",
  },
  krishna: {
    name: "Krishna",
    role: "Database Engineer",
    about:
      "Optimizes SQL schema, database connectivity, and backend support.",
  },
  lakshya: {
    name: "Lakshya",
    role: "MERN Developer",
    about:
      "Works on React components, integration, and performance optimization.",
  },
  shivi: {
    name: "Shivi",
    role: "Frontend Support + QA",
    about:
      "UI fixes, testing, documentation, and presentations.",
  },
};

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    const key = card.dataset.member;
    const info = teamDetails[key];

    modalContent.innerHTML = `
      <h2>${info.name}</h2>
      <h4>${info.role}</h4>
      <p>${info.about}</p>
      <button id="closeModal" class="btn-primary" style="margin-top:15px">Close</button>
    `;

    modal.classList.remove("hidden");

    document.getElementById("closeModal").onclick = () => {
      modal.classList.add("hidden");
    };
  });
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

/* ------------------ FORM SUBMIT ------------------ */
document.getElementById("joinForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent! We’ll contact you soon.");
  e.target.reset();
});
