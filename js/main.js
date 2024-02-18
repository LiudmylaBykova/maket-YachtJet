const burgerMenuBtn = document.querySelector(".burger-menu");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modal = document.querySelector(".modal-menu");

burgerMenuBtn.addEventListener("click", onBurgerMenuBtn);
function onBurgerMenuBtn() {
  modalOpen();
}

modalCloseBtn.addEventListener("click", onModalCloseBtn);
function onModalCloseBtn() {
  modalClose();
}

function modalOpen() {
  modal.classList.add("is-open");
}
function modalClose() {
  modal.classList.remove("is-open");
}
