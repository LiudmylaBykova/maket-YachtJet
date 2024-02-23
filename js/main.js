const burgerMenuBtn = document.querySelector(".burger-menu");
const mobileCloseBtn = document.querySelector(".mobile-close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileNavList = document.querySelector(".mobile-nav-list");
const modalForm = document.querySelector(".backdrop");
const modalFormBtn = document.querySelector(".hero-btn");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalPriceFormBtn = document.querySelector(".price-btn");
const rentForm = document.querySelector(".rent-form");

burgerMenuBtn.addEventListener("click", onBurgerMenuBtn);
function onBurgerMenuBtn() {
  mobileMenuOpen();
}

mobileCloseBtn.addEventListener("click", onMobileMenuCloseBtn);
function onMobileMenuCloseBtn() {
  mobileMenuClose();
}

mobileNavList.addEventListener("click", onMobileMenuLincClick);
function onMobileMenuLincClick(ev) {
  if (ev.target.nodeName !== "A") {
    return;
  }
  mobileMenuClose();
}
// -------
modalFormBtn.addEventListener("click", onModalFormBtn);
function onModalFormBtn() {
  modalFormOpen();
  bodyScrollLock();
}

modalCloseBtn.addEventListener("click", onModalCloseBtn);
function onModalCloseBtn() {
  modalFormClose();
  bodyScrollLock();
}

modalPriceFormBtn.addEventListener("click", onModalPriceFormBtn);
function onModalPriceFormBtn() {
  modalFormOpen();
  bodyScrollLock();
}
// ---

rentForm.addEventListener("submit", onRentFormBtn);
function onRentFormBtn(e) {
  e.preventDefault();
  rentForm.reset();
  modalFormClose();
  bodyScrollLock();
}

// ----
function bodyScrollLock() {
  document.body.classList.toggle("scroll-lock");
}

//-----
function mobileMenuOpen() {
  mobileMenu.classList.add("is-open");
}
function mobileMenuClose() {
  mobileMenu.classList.remove("is-open");
}
// -----
function modalFormOpen() {
  modalForm.classList.add("is-open");
}
function modalFormClose() {
  modalForm.classList.remove("is-open");
}
// ================================================================
const upBtn = document.querySelector(".up-btn");
upBtn.addEventListener("click", onScroll);

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (window.scrollY > 200) {
    showUpBtn();
  } else {
    hideUpBtn();
  }
}

function onScroll() {
  document.documentElement.scrollTop = 0;
}
function showUpBtn() {
  upBtn.classList.remove("is-hidden");
}

function hideUpBtn() {
  upBtn.classList.add("is-hidden");
}
