/* ========== PRELOADER ========== */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => (preloader.style.display = "none"), 600);
  }, 600);
});

/* ========== NAVBAR TOGGLE ========== */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

/* ========== SMOOTH SCROLL ========== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: "smooth",
      });
    }
  });
});

/* ========== TEAM MEMBERS MODAL DATA ========== */
const teamData = {
  prateek: {
    name: "Prateek",
    role: "AI/ML Engineer + Backend Lead",
    desc:
      "Expert in Machine Learning, Flask, FastAPI, and system architecture. Leads backend and AI features.",
  },
  suchi: {
    name: "Suchi",
    role: "Frontend Lead",
    desc:
      "Specialist in UI/UX, React.js, and animations. Ensures the team’s projects look beautiful and responsive.",
  },
  krishna: {
    name: "Krishna",
    role: "Database Engineer",
    desc:
      "Handles SQL, NoSQL, schema design, and data pipelines. Makes sure everything runs efficiently.",
  },
  lakshya: {
    name: "Lakshya",
    role: "MERN Developer",
    desc:
      "Full-stack MERN engineer: MongoDB, Express, React, and Node.js. Focuses on production-grade design.",
  },
  shivi: {
    name: "Shivi",
    role: "Frontend Support + QA",
    desc:
      "Responsible for front-end support, UI testing, and ensuring the project is error-free and user-friendly.",
  },
};

/* ========== MODAL HANDLING ========== */
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const memberKey = card.getAttribute("data-member");
    const data = teamData[memberKey];

    modalContent.innerHTML = `
      <div class="modal-box">
        <h2>${data.name}</h2>
        <h4>${data.role}</h4>
        <p>${data.desc}</p>
        <button id="closeModal" class="btn-primary" style="margin-top:20px;">Close</button>
      </div>
    `;

    modal.classList.remove("hidden");

    document.getElementById("closeModal").addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  });
});

/* Close modal when clicking outside */
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

/* ========== PARTICLE BACKGROUND ========== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

/* Particle object */
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 0.7 - 0.35;
    this.speedY = Math.random() * 0.7 - 0.35;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
    if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "#b57bff";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#b57bff";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/* Create particles */
function initParticles() {
  particles = [];
  for (let i = 0; i < 120; i++) {
    particles.push(new Particle());
  }
}

initParticles();

/* Animate particles */
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

animateParticles();
