// Activation ScrollOut
ScrollOut({
  targets: 'h1,h2,  h3, p, div'
})

window.addEventListener('scroll', function() {
  var scrollNavBar = window.pageYOffset;

  // change style of navbar
  var navbar = document.querySelector('#navbar-custom');
  var navbar_brand = document.querySelector('#navbar-brand');
  var navbar_brand_logo = document.querySelector('#navbar-image-logo');
  var navbar_menu = document.querySelector('.navbar-menu');
  var navbar_hamburger = document.querySelector('.navbar-hamburger');
  if (scrollNavBar != 0) {
    navbar.classList.add('is-scrolled');
    navbar_brand.classList.add('is-scrolled');
    navbar_brand_logo.classList.add('is-scrolled');
    navbar_menu.classList.add('is-scrolled');
    navbar_hamburger.classList.add('is-scrolled');
  } else {
    navbar.classList.remove('is-scrolled');
    navbar_brand.classList.remove('is-scrolled');
    navbar_brand_logo.classList.remove('is-scrolled');
    navbar_menu.classList.remove('is-scrolled');
    navbar_hamburger.classList.remove('is-scrolled');
  }

});

function calcHeightNavbar() {
  recalculateHeightSlide();
  // change position on top from nav bar height
  var heightNavbar = document.getElementById('navbar-custom').offsetHeight;
  document.querySelector('.navbar-menu-mobile').style.top = heightNavbar + "px";
  var heightNavbarPlusOffeset = heightNavbar + 10;
  // Increase padding depend how much is height the navbar
  var elems = document.body.getElementsByTagName("section");
  for (var i = 0; i < elems.length; i++) {
    elems[i].setAttribute('style', 'padding-top:' + heightNavbarPlusOffeset + 'px;');
  }
}

// -----------------------------------------
// navbar
const hamburger = document.querySelector('.navbar-hamburger');
const menu_mobile = document.querySelector('.navbar-menu-mobile');
const about_mobile = document.getElementById('btn-about');
const service_mobile = document.getElementById('btn-service');
const contact_mobile = document.getElementById('btn-contact');
// Open and Close Mobile menu
hamburger.addEventListener("click", toggleMobileMenu);
about_mobile.addEventListener("click", toggleMobileMenu);
service_mobile.addEventListener("click", toggleMobileMenu);
contact_mobile.addEventListener("click", toggleMobileMenu);

// Function open and close menu Mobile
function toggleMobileMenu() {
  hamburger.classList.toggle('is-active');
  menu_mobile.classList.toggle('is-active');
}
// -----------------------------------------

// Calculation height Slide
const height_image = document.querySelector('.home-slide');

function recalculateHeightSlide() {
  var widthSlide = document.querySelector('.home-slide').offsetWidth;

  hCalc = Math.round(widthSlide / (16 / 9));
  height_image.setAttribute('style', 'height:' + hCalc + 'px;');
}
// -----------------------------------------

// Pop-Up Service
function toggleHomeAutomationPopUp(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popupHomeAutomation');
  popup.classList.toggle('active');
}

function toggleProjectManagerPopUp(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popupProjectManager');
  popup.classList.toggle('active');
}

function toggleSoftwareDevelopersPopUp(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popupSoftwareDevelopers');
  popup.classList.toggle('active');
}

function togglePLCSoftwareDevelopersPopUp(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popupPLCSoftwareDevelopers');
  popup.classList.toggle('active');
}

function toggleEletricalAssemblyPopUp(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popupEletricalAssembly');
  popup.classList.toggle('active');
}

function toggleMechanicalAssemblyPopUp(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
  var popup = document.getElementById('popupMechanicalAssembly');
  popup.classList.toggle('active');
}
