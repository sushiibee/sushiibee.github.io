const body = document.body;
const cursor = document.getElementById("cursor");
const cursorRing = document.getElementById("cursorRing");
const menuToggle = document.getElementById("menuToggle");
const navPanel = document.getElementById("navPanel");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalType = document.getElementById("modalType");
const modalCopy = document.getElementById("modalCopy");

let ringX = window.innerWidth / 2;
let ringY = window.innerHeight / 2;
let mouseX = ringX;
let mouseY = ringY;

const hasFinePointer = window.matchMedia("(pointer:fine)").matches;

if (hasFinePointer && cursor && cursorRing) {
  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  const animateRing = () => {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;
    requestAnimationFrame(animateRing);
  };

  animateRing();

  const interactive = document.querySelectorAll("a, button, input, textarea, .project-card");
  interactive.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      cursorRing.style.width = "52px";
      cursorRing.style.height = "52px";
      cursorRing.style.borderColor = "rgba(198,255,59,0.9)";
    });

    item.addEventListener("mouseleave", () => {
      cursorRing.style.width = "34px";
      cursorRing.style.height = "34px";
      cursorRing.style.borderColor = "rgba(255,255,255,0.45)";
    });
  });
}

if (menuToggle && navPanel) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navPanel.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navPanel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navPanel.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const projectCards = document.querySelectorAll(".project-card");

const openModal = (card) => {
  modalTitle.textContent = card.dataset.title || "";
  modalType.textContent = card.dataset.type || "";
  modalCopy.textContent = card.dataset.copy || "";
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
};

const closeModalFn = () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
};

projectCards.forEach((card) => {
  card.addEventListener("click", () => openModal(card));

  const openButton = card.querySelector(".project-open");
  if (openButton) {
    openButton.addEventListener("click", (event) => {
      event.stopPropagation();
      openModal(card);
    });
  }
});

if (modalClose) {
  modalClose.addEventListener("click", closeModalFn);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target.dataset.close === "true") {
      closeModalFn();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeModalFn();
  }
});

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const button = contactForm.querySelector("button[type='submit']");
    const note = contactForm.querySelector(".form-note");

    if (button) {
      button.textContent = "Signal received";
      button.disabled = true;
    }

    if (note) {
      note.textContent = "Transmission logged. Response window: selective but real.";
    }
  });
}
