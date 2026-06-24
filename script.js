const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("main section[id]");
const contactForm = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");
const themeToggle = document.querySelector("#themeToggle");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectItems = document.querySelectorAll(".project-item");
const toast = document.querySelector("#toast");
const scrollTopButton = document.querySelector("#scrollTop");

document.querySelector("#year").textContent = new Date().getFullYear();

const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
};

const updateNavbar = () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
};

const setActiveLink = () => {
  let currentSection = "home";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentSection}`);
  });
};

window.addEventListener("scroll", () => {
  updateNavbar();
  setActiveLink();
  if (scrollTopButton) {
    scrollTopButton.classList.toggle("show", window.scrollY > 600);
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navbarMenu = document.querySelector(".navbar-collapse");
    if (window.bootstrap && navbarMenu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(navbarMenu).hide();
    }
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.textContent = document.body.classList.contains("light") ? "Light" : "Dark";
});

if (scrollTopButton) {
  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const value = button.getAttribute("data-copy") || "";
    try {
      await navigator.clipboard.writeText(value);
      showToast("Email copied to clipboard.");
    } catch {
      showToast("Copy failed. Please copy manually.");
    }
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    projectItems.forEach((project) => {
      const shouldShow = filter === "all" || project.dataset.category === filter;
      project.classList.toggle("hidden", !shouldShow);
    });
  });
});

/* ── FORMSPREE CONTACT FORM ── */
if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitBtn = document.querySelector("#submitBtn");
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;
    formStatus.textContent = "";
    const formData = new FormData(contactForm);
    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        formStatus.textContent = "Message sent successfully!";
        formStatus.style.color = "#22c55e";
        showToast("Message sent! I will reply soon.");
        contactForm.reset();
      } else {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.style.color = "#ef4444";
        showToast("Failed to send. Please try again.");
      }
    } catch {
      formStatus.textContent = "Network error. Please check your connection.";
      formStatus.style.color = "#ef4444";
      showToast("Network error. Please try again.");
    } finally {
      submitBtn.textContent = "Send Message";
      submitBtn.disabled = false;
    }
  });
}

/* ── VIDEO LIGHTBOX MODAL ── */
const videoModal = document.getElementById("videoModal");
const videoModalPlayer = document.getElementById("videoModalPlayer");
const videoModalClose = document.getElementById("videoModalClose");
const videoModalBackdrop = document.getElementById("videoModalBackdrop");
const videoModalCategory = document.getElementById("videoModalCategory");
const videoModalTitle = document.getElementById("videoModalTitle");

function openVideoModal(src, category, title) {
  videoModalPlayer.src = src;
  videoModalCategory.textContent = category;
  videoModalTitle.textContent = title;
  videoModal.classList.add("active");
  document.body.style.overflow = "hidden";
  videoModalPlayer.play();
}

function closeVideoModal() {
  videoModal.classList.remove("active");
  document.body.style.overflow = "";
  videoModalPlayer.pause();
  videoModalPlayer.src = "";
}

if (videoModalClose) videoModalClose.addEventListener("click", closeVideoModal);
if (videoModalBackdrop) videoModalBackdrop.addEventListener("click", closeVideoModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeVideoModal();
});

/* ── VIDEO PLAY (small card) / OPEN MODAL on play click ── */
document.querySelectorAll(".project-video-wrap").forEach((wrap) => {
  const video = wrap.querySelector(".project-video");
  const btn = wrap.querySelector(".video-play-btn");
  const labelSpan = wrap.querySelector(".project-label span");
  const labelStrong = wrap.querySelector(".project-label strong");

  if (!video || !btn) return;

  // Play button opens the modal with full size video
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const src = video.src || video.currentSrc;
    const category = labelSpan ? labelSpan.textContent : "";
    const title = labelStrong ? labelStrong.textContent : "";
    openVideoModal(src, category, title);
  });

  // Clicking video thumbnail also opens modal
  video.addEventListener("click", () => {
    const src = video.src || video.currentSrc;
    const category = labelSpan ? labelSpan.textContent : "";
    const title = labelStrong ? labelStrong.textContent : "";
    openVideoModal(src, category, title);
  });
});

updateNavbar();
setActiveLink();
