// Preloader Settings
window.onload = function() {
  setTimeout(function() {
    document.getElementById('preloader').style.display = 'none';
  }, 100);
};


// typed span
let typed = new Typed(".typing", {
  strings: ["Hat", "Jeans", "Dress", "Shoes"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// HideNavbar
const navLink = document.querySelectorAll('.navLink');
const checkbox = document.querySelector('input[type=checkbox]');

navLink.forEach(link => {
    link.addEventListener('click', function() {
        checkbox.checked = false;
    });
});

// CurrentYear
const currentYear = new Date().getFullYear();
document.getElementById('year').innerHTML = currentYear;

// INCREMENT FAVORITE

let badge = document.getElementById("badge");
    let one = document.getElementById("one");
    one.removeEventListener("click", first);
    one.addEventListener("click", first);
    function first() {
        badge.innerHTML = parseInt(badge.innerHTML) + 1;
}


// SCROLL TO TOP 
scrollUp = document.getElementById("myBtn");


  window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUp.style.display = "block";
  } else {
    scrollUp.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


// FAVORITE PRODUCT

let primer = document.getElementById("one")

primer.addEventListener('click', favoriteOne);

function favoriteOne(){
  primer.style.color = "#ff0000";
}
primer.addEventListener('dblclick', function(e){
    primer.style.color = "#4169e1";
});


let secundo = document.getElementById("two")

secundo.addEventListener('click', favoriteTwo);

function favoriteTwo(){
  secundo.style.color = "#ff0000";
}
secundo.addEventListener('dblclick', function(e){
    secundo.style.color = "#4169e1";
});


let tercera = document.getElementById("three");
tercera.addEventListener('click', favoriteThree);

function favoriteThree(){
  tercera.style.color = "#ff0000";
}
tercera.addEventListener('dblclick', function(e){
    tercera.style.color = "#4169e1";
});

let quatro = document.getElementById("four");
quatro.addEventListener('click', favoriteFour);

function favoriteFour(){
  quatro.style.color = "#ff0000";
}
quatro.addEventListener('dblclick', function(e){
    quatro.style.color = "#4169e1";
});


let cinco = document.getElementById("five");
cinco.addEventListener('click', favoriteFive);

function favoriteFive(){
  cinco.style.color = "#ff0000";
}
cinco.addEventListener('dblclick', function(e){
    cinco.style.color = "#4169e1";
});


let seis = document.getElementById("six");

seis.addEventListener('click', favoriteItem);

function favoriteItem(){
  seis.style.color = "#ff0000";
}
seis.addEventListener('dblclick', function(e){
    seis.style.color = "#4169e1";
});


// ACTIVE SCROLL

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  let scrollY = window.pageYOffset;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    }
  });
}


// Animation scrool

var smoothScroll = {

  move : function (old, des, actual) {
    easeIn = function (t) { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t; };
    actual += 1;
    ease = easeIn(actual / 300);
    delta = des - old;
    delta *= ease;
    delta += old;
    window.scrollTo(0, delta);
    if (actual < 300) {
      window.requestAnimationFrame(function () {
        smoothScroll.move(old, des, actual);
      });
    }
  },

  linkInit : function (e) {
    e.preventDefault();
    link = e.target.getAttribute("href").substr(1);
    block = document.getElementById(link).offsetTop;
    client = document.documentElement.scrollTop;

    smoothScroll.move(client, block, 0);
  },

  init : function () {
    links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
      link = links[i].getAttribute("href");
      if (link.search("#") == 0 & link.substr(1) != "") {
        links[i].onclick = smoothScroll.linkInit;
      }
    }
  }
};

window.onload = smoothScroll.init;

// Accordion Question
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// Search form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
}

// Homepage animation
let background = document.getElementById("home");
let navbar = document.getElementById("navbar");
let title = document.getElementById("title-banner");
let paragraph = document.getElementById("paragraph");
let btnBanner = document.getElementById("btn-banner");

TweenMax.to(background, 2, {x: "0%", ease: Expo.easeInOut});
TweenMax.from(navbar, 1, {y: -50, opacity: 0, ease: Linear.easeNone, delay: 1.7});
TweenMax.from(title, 1, {y: -50, opacity: 0, ease: Sine.easeOut, delay: 2.5});
TweenMax.from(paragraph, 1, {opacity: 0, ease: Expo.easeInOut, delay: 3});
TweenMax.from(btnBanner, 1, {y: 5, opacity: 0, ease: Bounce.easeOut, delay: 3}, 0.0);


//  WOW  ANIMATION
new WOW().init();

// FILTER NAVBAR
const checkB = document.querySelector('input[type=checkbox]');
const filterNav = document.querySelector('.filter_modal');
const navLin = document.querySelectorAll('.navLink');

if(checkB === true) {
  filterNav.style.display = "block";
}else{
  filterNav.style.display = "none";
}

checkB.addEventListener('change', function() {
  if (checkB.checked) {
    filterNav.style.display = "block";
  } else {
    filterNav.style.display = "none";
  }
});

navLin.forEach(link => {
    link.addEventListener('click', function() {
      filterNav.style.display = "none";
    });
});