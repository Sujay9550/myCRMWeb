`use strict`;

// DOM Selections

const newModal = document.querySelector(".new-modal");
const modalOverlay = document.querySelector(".modal-overlay");
const btnShowModal = document.querySelector(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const navLinks = document.querySelectorAll(".nav-link");

// Adding Event Listener to all the buttons to prevent the default actions.

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// Open Modal Function

const openModal = (e) => {
  e.preventDefault();
  newModal.classList.remove("hidden");
  modalOverlay.classList.remove("hidden");
};

// Close Modal Function

const closeModal = () => {
  newModal.classList.add("hidden");
  modalOverlay.classList.add("hidden");
};

// Adding Event Listener to button to open the Modal with Login Form

btnShowModal.addEventListener("click", openModal);

// Adding Event Listener to button to close the Modal with Login Form

btnCloseModal.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

// Adding Event Listener for the keydown event

document.addEventListener("keydown", (e) => {
  console.log(e);
  console.log(e.key);

  if (e.key === "Escape" && !newModal.classList.contains("hidden")) {
    closeModal();
  }
});

// Smooth Scrolling with Navigation Links

navLinks.forEach((el) => {
  console.log(el);

  el.addEventListener("click", (e) => {
    e.preventDefault();
    const link = e.target.getAttribute("href");
    console.log(link);

    document.querySelector(link).scrollIntoView({ behaviour: "smooth" });
  });
});

// Revealing elements on Scroll - using IntersectionObserver API

const allSections = document.querySelectorAll(".section");

// Observer Callback Function
const revealSection = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Revealing sections
  entry.target.classList.remove("section--hidden");

  // Unobserving Events
  observer.unobserve(entry.target);
};

// Reveal Options
const revealOptions = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, revealOptions);

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy Loading Images - using intersectionObserver API

// Selecting the Images that have Lazy Loading Classes
const imgTargets = document.querySelectorAll("img[data-src]");
console.log(imgTargets);

// Observer Callback function

const loadImg = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  // Image Loading
  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });
  // Unobserving events
  observer.unobserve(entry.target);
};

const loadImgOptions = {
  root: null,
  threshold: 0,
  rootMargin: "200px",
};

const imgObserver = new IntersectionObserver(loadImg, loadImgOptions);

// Observing the each images from the selected element
imgTargets.forEach((img) => imgObserver.observe(img));

// Get the current year for the copyright
$("#year").text(new Date().getFullYear());
