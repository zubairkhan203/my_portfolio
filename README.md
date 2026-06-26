# Zubair Khan | Web Developer Portfolio

A responsive personal portfolio website showcasing web development projects, skills, and services. Built with HTML5, CSS3, Bootstrap 5, and JavaScript, with a focus on clean design and smooth interactions.

🔗 **Live Demo:** _add your deployed link here_

---

## 📋 Overview

This portfolio presents my work as a web developer specializing in responsive websites and PHP/MySQLi database applications — including CRUD systems, authentication (login/signup), and interactive JavaScript apps.

---

## ✨ Features

- **Responsive design** — fully adapts to mobile, tablet, and desktop screens
- **Dark/Light theme toggle** — switch themes via the navbar button
- **Animated hero section** — profile visual with floating info cards
- **Filterable project gallery** — filter by All / Websites / JavaScript / PHP MySQL
- **Video previews on hover** — each project card plays a muted preview video
- **Video lightbox modal** — click a project to watch the full demo with controls
- **Contact form** — powered by [Formspree](https://formspree.io/), with inline status feedback
- **Quick-contact actions** — copy email, call, or message via WhatsApp
- **Floating WhatsApp button** and **scroll-to-top** button
- **Toast notifications** for user feedback (e.g. "email copied")

---

## 🛠️ Built With

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & semantics |
| CSS3 | Custom styling (`style.css`) |
| Bootstrap 5.3.3 | Grid system, navbar, responsive utilities |
| JavaScript | Theme toggle, project filtering, video modal, form handling (`script.js`) |
| Google Fonts (Manrope) | Typography |
| Formspree | Contact form backend (no server required) |

---

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── style.css                # Custom styles
├── script.js                 # Theme toggle, filters, modal, form logic
├── my-img-1.png              # Profile photo / favicon
│
├── skill-imgs/
│   ├── html.png.avif
│   ├── css.png.png
│   ├── bootrap.png.png
│   ├── javascript.png.png
│   ├── php.png.png
│   ├── mysqli.png.png
│   ├── photoshop.jfif
│   └── jquerry.png.png
│
└── skill-videos/
    ├── food1.webm             # Food Delivery Website
    ├── websolution.webm       # Web Agency Website
    ├── todo list.webm         # Smart To-Do App
    ├── calc.webm              # Interactive Calculator App
    ├── digital clock.webm     # Digital Watch & Clock
    ├── stop.webm              # Stop Watch & Clock
    ├── iphone.webm            # iPhone Filter Application
    ├── weather.webm           # Weather Forecast App
    ├── crud.webm              # CRUD Management System
    └── login.webm             # Login & Signup Authentication
```

> ⚠️ All image and video paths above are relative. Make sure the `skill-imgs/` and `skill-videos/` folders sit in the same directory as `index.html`, with filenames matching exactly (including spaces, e.g. `todo list.webm`).

---

## 📑 Sections

1. **Home** — Intro headline, availability badge, CTA buttons (See My Work, Let's Talk, WhatsApp), tech stack strip, profile visual
2. **About** — Short bio and quick stats (practice builds, main skills, database readiness)
3. **Services** — 4 service cards: Web Development, Web Designing, UI/UX Design, Responsive Websites
4. **Skills** — Icon grid of tools: HTML5, CSS3, Bootstrap, JavaScript, PHP, MySQLi, Photoshop, jQuery
5. **Projects** — Filterable grid of 10 projects with hover-preview videos and a click-to-expand lightbox
6. **Roadmap** — 4-step learning journey timeline (HTML/CSS → Bootstrap → JavaScript → PHP/MySQLi)
7. **Contact** — Contact form (Formspree) plus direct email, phone, LinkedIn, Facebook, and WhatsApp links
8. **Footer** — Copyright and tech stack summary

---

## 🚀 Getting Started

1. Clone or download this repository.
2. Make sure the folder structure matches the layout above (`skill-imgs/`, `skill-videos/`, `style.css`, `script.js`, `my-img-1.png`).
3. Open `index.html` directly in a browser, or serve it with a simple local server for the best experience with videos and fonts:
   ```bash
   npx serve .
   ```
4. To enable the contact form, replace the Formspree endpoint in `index.html` with your own form ID:
   ```html
   <form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## ⚙️ Customization

- **Theme colors / fonts:** edit `style.css`
- **Theme toggle / filter / modal logic:** edit `script.js`
- **Contact details:** update the email, phone, and social links inside the `#contact` section
- **Projects:** duplicate a `.project-item` block inside `#projects`, update the video source, label, category (`data-category`), and description

---

## 📬 Contact

- **Email:** captzubikhan@gmail.com
- **Phone:** 0310-2550301
- **WhatsApp:** [Chat on WhatsApp](https://wa.me/923102550301)

---

## 📄 License

This project is free to use for personal portfolio purposes. Replace project videos, images, and copy with your own content before publishing.
