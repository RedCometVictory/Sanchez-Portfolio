import { sanitizeBody } from 'express-validator';
import { 
  rootElem, themeActive, themeSwitch, themeIcon, bodyElem
} from './elemName';

// btnValue.disabled = true;
const launchParticlesAndTheme = function() {
  // check localstorage value to select theme (attach/remove class to elems)
  // light theme is default, thus check for and remove any dark themes found on elems, disable winter / summer btn
  if (!localStorage.getItem('selected-theme')) {
    console.log('selected-theme is undefined or null, thus setting light as default theme');
    localStorage.setItem('selected-theme', 'light');
  };
  if (localStorage.getItem('selected-theme') === 'light') {
    console.log('startup: launching light particles');
    lightParticles();
    console.log('startup: launching light theme');
    lightTheme(); // set / remove classes
  }
  if (localStorage.getItem('selected-theme') === 'dark-winter') {
    console.log('startup: launching dark winter particles');
    darkWinterParticles();
    console.log('startup: launching dark winter theme');
    darkWinterTheme();
  }
  if (localStorage.getItem('selected-theme') === 'dark-summer') {
    console.log('startup: launching dark summer particles');
    // themeSwitch.value = "true";
    // switchTheme();
    // creates lag, maybe just add class and value instead (no class for themIcon at page load, instead it is added pedning the theme chosen?)
    // could split switchTheme into seperate functions and call those respective functions of each theme
    if (themeIcon.classList.contains('fa-moon')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      themeSwitch.value = "true"
    }
    console.log('startup: launching dark summer theme');
    darkSummerParticles();
    darkSummerTheme();
  }
}

// window.pJSDom[0].pJS.particles.number.value = 0; // remove /turn off particles
const lightParticles = function() {
  console.log('light particles called')
  window.pJSDom[0].pJS.particles.number.value = 375;
  window.pJSDom[0].pJS.particles.number.density.enable = false;
  window.pJSDom[0].pJS.particles.number.density.value_area = 80;
  // window.pJSDom[0].pJS.particles.size.value = 110;
  window.pJSDom[0].pJS.tmp.obj.size_value = 6;
  window.pJSDom[0].pJS.tmp.obj.move_speed = 0.7;
  window.pJSDom[0].pJS.particles.color.value = "#89b6d3";
  // window.pJSDom[0].pJS.particles.color.value = "#99ff11";
  window.pJSDom[0].pJS.particles.opacity.random = true;
  window.pJSDom[0].pJS.particles.opacity.anim.enable = false;
  window.pJSDom[0].pJS.particles.move.direction = "bottom"; 
  window.pJSDom[0].pJS.fn.particlesRefresh();
};
const darkWinterParticles = function() {
  console.log('dark winter particles called');
  window.pJSDom[0].pJS.particles.number.value = 240;
  window.pJSDom[0].pJS.particles.number.density.enable = true;
  window.pJSDom[0].pJS.particles.number.density.value_area = 100;
  window.pJSDom[0].pJS.particles.color.value = "#2de9f5";
  window.pJSDom[0].pJS.tmp.obj.size_value = 1.5;
  window.pJSDom[0].pJS.tmp.obj.move_speed = 5;
  window.pJSDom[0].pJS.particles.opacity.random = true;
  window.pJSDom[0].pJS.particles.opacity.anim.enable = true;
  window.pJSDom[0].pJS.particles.move.direction = "left";   
  window.pJSDom[0].pJS.fn.particlesRefresh();
};
const darkSummerParticles = function() {
  console.log('dark summer particles called');
  window.pJSDom[0].pJS.particles.number.value = 180;
  window.pJSDom[0].pJS.particles.number.density.enable = true;
  window.pJSDom[0].pJS.particles.number.density.value_area = 100;
  window.pJSDom[0].pJS.tmp.obj.size_value = 1.9;
  window.pJSDom[0].pJS.tmp.obj.move_speed = 3;
  window.pJSDom[0].pJS.particles.color.value = "#ffa400";
  window.pJSDom[0].pJS.particles.move.direction = "top";
  window.pJSDom[0].pJS.particles.opacity.random = true;
  window.pJSDom[0].pJS.particles.opacity.anim.enable = true;
  window.pJSDom[0].pJS.fn.particlesRefresh();
};


// ----------------------------------------
// execute select theme function on page load
// (edit DOM) via set localStorage value:
const lightTheme = function() {
  console.log('switched to: light theme');
  // lightParticles();
  localStorage.setItem('selected-theme', 'light');
  themeActive.value = "true";
  // remove dark theming
  rootElem.classList.remove('dark-winter');
  rootElem.classList.remove('dark-summer');
  // bodyElem[0]
  // bodyElem[0]

  // elemList.forEach(element => {
    // if(element.classList.contains('dark-winter')) {
      // element.classList.remove('dark-winter')
    // }
    // if(element.classList.contains('dark-summer')) {
      // element.classList.remove('dark-summer')
    // }
  // });
}
const darkWinterTheme = function() {
  console.log('switched to: dark winter theme');
  localStorage.setItem('selected-theme', 'dark-winter');
  themeActive.value = "false";
  // elemList.forEach(element => {
    // if (element.classList.contains('dark-summer')) {
      // element.classList.remove('dark-summer')
    // }
    // element.classList.add('dark-winter')
  // });
  rootElem.classList.remove('dark-summer');
  rootElem.classList.add('dark-winter');
  // bodyElem[0].classList.add('dark-winter');
  
}
const darkSummerTheme = function() {
  console.log('switched to: dark summer theme');
  localStorage.setItem('selected-theme', 'dark-summer');
  themeActive.value = "false";
  // elemList.forEach(element => {
    // if(element.classList.contains('dark-winter')) {
      // element.classList.remove('dark-winter')
    // }
    // element.classList.add('dark-summer')
  // });
  rootElem.classList.remove('dark-winter');
  rootElem.classList.add('dark-summer');
  // bodyElem[0].classList.add('dark-summer');
}

export {launchParticlesAndTheme, lightParticles, darkWinterParticles, darkSummerParticles, lightTheme, darkWinterTheme, darkSummerTheme};