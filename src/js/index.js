import { 
  themeActive, themeSwitch, rootElem, themeIcon, particleDisplay
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
  console.log('switched to: light theme');
  // lightParticles();
  localStorage.setItem('selected-theme', 'light');
  themeActive.value = "true";
  // remove dark theming
  rootElem.classList.remove('dark-winter');
  rootElem.classList.remove('dark-summer');
}
const darkWinterTheme = function() {
  console.log('switched to: dark winter theme');
  localStorage.setItem('selected-theme', 'dark-winter');
  themeActive.value = "false";
  rootElem.classList.remove('dark-summer');
  rootElem.classList.add('dark-winter');
}
const darkSummerTheme = function() {
  console.log('switched to: dark summer theme');
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

export {launchParticles, lightTheme, darkWinterTheme, darkSummerTheme};