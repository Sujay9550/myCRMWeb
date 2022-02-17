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
