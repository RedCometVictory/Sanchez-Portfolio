import { 
  themeActive, themeSwitch, rootElem, themeIcon, particleDisplay, navHeader, detailRow, hero
} from './components/elemName.js';
import { activeTheme, switchTheme } from './components/activeTheme';
import { launchParticles } from './components/particleTheme';

export let selectedTheme = localStorage.getItem('selected-theme');

// may need to compile bundle for webpack (wrap around code)
// document.addEventListener('DOMContentLoaded', () => {})
// function inits library - load particles into DOM
if (particleDisplay) {
  particlesJS.load('particles-js', 'particles-w.json', function() {
    // console.log('particles.bundle.js loaded');
    // callback - load theme per localStorage value
    launchParticles();
  });
}

themeActive.addEventListener('click', activeTheme);
themeSwitch.addEventListener('click', switchTheme);

const lightTheme = function() {
  // console.log('switched to: light theme');
  // lightParticles();
  localStorage.setItem('selected-theme', 'light');
  themeActive.value = "true";
  // remove dark theming
  rootElem.classList.remove('dark-winter');
  rootElem.classList.remove('dark-summer');
}
const darkWinterTheme = function() {
  // console.log('switched to: dark winter theme');
  localStorage.setItem('selected-theme', 'dark-winter');
  themeActive.value = "false";
  rootElem.classList.remove('dark-summer');
  rootElem.classList.add('dark-winter');
}
const darkSummerTheme = function() {
  // console.log('switched to: dark summer theme');
  localStorage.setItem('selected-theme', 'dark-summer');
  themeActive.value = "false";
  rootElem.classList.remove('dark-winter');
  rootElem.classList.add('dark-summer');
}

// select default theme upon page load
// check localstorage value to select theme (attach/remove class to elems)
if (!selectedTheme) {
  // console.log('selected-theme is undefined or null, thus setting light as default theme');
  localStorage.setItem('selected-theme', 'light');
}

if (selectedTheme === 'light') {
  // console.log('startup: launching light theme');
  lightTheme(); // set / remove classes
};
  
if (selectedTheme === 'dark-winter') {
    // console.log('startup: launching dark winter theme');
    darkWinterTheme();
};

if (selectedTheme === 'dark-summer') {
  if (themeIcon.classList.contains('fa-moon')) {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    themeSwitch.value = "true"
  }
  // console.log('startup: launching dark summer theme');
  darkSummerTheme();
};

// observe hero section to change navbar
let heroOptions = {
  root: null,
  rootMargin: "-100px 0px"
  // threshold: 0
}

const heroObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    // console.log(entry.target);
    if(!entry.isIntersecting) {
      navHeader.classList.add('active');
    } else {
      navHeader.classList.remove('active');
    }
  });
}, heroOptions);

heroObserver.observe(hero);

let rowOptions = {
  root: null,
  rootMargin: "0px 0px 0px 0px",
  threshold: 0.10
}

const rowScrollAppear = new IntersectionObserver(function(entries, rowScrollAppear) {
  entries.forEach(entry => {
    // if elem fully in page abort
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('fade-in');
      // stop looking at elem once triggered
      rowScrollAppear.unobserve(entry.target);
    }
  });
}, rowOptions);

// console.log(detailRow)
// set observer on each row individually
detailRow.forEach(row => {
  // console.log(row);
  rowScrollAppear.observe(row);
})

export {launchParticles, lightTheme, darkWinterTheme, darkSummerTheme};