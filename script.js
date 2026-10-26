/*
  PERSONALIZE THIS FILE BEFORE PUBLISHING.
  Replace the placeholder values with your real links and email.
  Keep a field as an empty string until you have a verified URL.
*/
const SITE_CONFIG = {
  email: "omsalkar15@gmail.com",
  github: "https://github.com/Omsalkar",
  linkedin: "https://www.linkedin.com/in/om-salkar",
  resumePath: "resume.pdf", // Add your own PDF as resume.pdf if you want a resume link.
  projects: {
    complaint: {
      title: "Complaint Service Management",
      summary: "An academic service desk project for managing complaint submissions and the lifecycle of service requests. The system includes a frontend, service-based components, admin workflows, and a deployment-oriented setup.",
      points: [
        "Complaint submission and status tracking across a defined lifecycle.",
        "Admin-facing complaint overview and assignment workflow.",
        "Service-oriented architecture with API routes and separate application components.",
        "Exploration of Docker, Kubernetes configuration, and ELK-based logging."
      ],
      repository: "" // Add the verified GitHub repository URL when ready.
    },
    recovery: {
      title: "Ransomware Recovery Orchestrator",
      summary: "An MSc IT project prototype focused on coordinating recovery tasks and validating restored services after a ransomware incident. It is a recovery-planning and validation prototype, not a claim of production-grade ransomware protection.",
      points: [
        "Models recovery dependencies and a planned order for restoring services.",
        "Includes immutable-backup concepts and isolated restore-job workflows.",
        "Tracks integrity validation and recovery-time / recovery-point objectives (RTO/RPO).",
        "Uses a FastAPI REST API, a browser-based dashboard, and SQLite for local data storage."
      ],
      repository: "https://github.com/Omsalkar/ransomware-recovery-orchestrator"
    }
  }
};

const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open navigation menu");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

function setExternalLink(element, url, placeholderText) {
  if (!element) return;
  if (url && url.trim()) {
    element.href = url;
    element.target = "_blank";
    element.rel = "noopener noreferrer";
    element.classList.remove("is-placeholder");
  } else {
    element.href = "#contact";
    element.classList.add("is-placeholder");
    element.addEventListener("click", (event) => {
      event.preventDefault();
      alert(placeholderText);
    });
  }
}

const emailLink = document.querySelector('[data-link="email"]');
const githubLink = document.querySelector('[data-link="github"]');
const linkedinLink = document.querySelector('[data-link="linkedin"]');

if (SITE_CONFIG.email) {
  emailLink.href = `mailto:${SITE_CONFIG.email}`;
  emailLink.querySelector("b").textContent = SITE_CONFIG.email;
} else {
  setExternalLink(emailLink, "", "Add your email address in script.js before publishing.");
}
setExternalLink(githubLink, SITE_CONFIG.github, "Add your GitHub profile URL in script.js before publishing.");
setExternalLink(linkedinLink, SITE_CONFIG.linkedin, "Add your LinkedIn profile URL in script.js before publishing.");

const emailButton = document.querySelector("#emailButton");
if (SITE_CONFIG.email) {
  emailButton.href = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent("Frontend opportunity — Om Salkar")}`;
} else {
  emailButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Add your email address in script.js before publishing.");
  });
}

const dialog = document.querySelector("#projectDialog");
const dialogTitle = document.querySelector("#dialogTitle");
const dialogSummary = document.querySelector("#dialogSummary");
const dialogPoints = document.querySelector("#dialogPoints");
const dialogRepo = document.querySelector("#dialogRepo");

document.querySelectorAll(".project-details").forEach((button) => {
  button.addEventListener("click", () => {
    const project = SITE_CONFIG.projects[button.dataset.project];
    if (!project) return;
    dialogTitle.textContent = project.title;
    dialogSummary.textContent = project.summary;
    dialogPoints.replaceChildren(...project.points.map((point) => {
      const li = document.createElement("li");
      li.textContent = point;
      return li;
    }));
    if (project.repository) {
      dialogRepo.href = project.repository;
      dialogRepo.hidden = false;
      dialogRepo.target = "_blank";
      dialogRepo.rel = "noopener noreferrer";
    } else {
      dialogRepo.hidden = true;
      dialogRepo.removeAttribute("href");
    }
    if (typeof dialog.showModal === "function") dialog.showModal();
    else alert(`${project.title}\n\n${project.summary}`);
  });
});

document.querySelector("#dialogClose").addEventListener("click", () => dialog.close());
document.querySelector("#dialogDone").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
