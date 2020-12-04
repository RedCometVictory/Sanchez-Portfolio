import {
  lightParticles, darkWinterParticles, darkSummerParticles
} from './particleTheme';
import {
  lightTheme, darkWinterTheme, darkSummerTheme
} from '../index';
import {
  themeActive, themeSwitch, themeIcon
} from './elemName';

function activeTheme() {
  if(themeActive.value === "true") {
    themeActive.value = "false";
    
    console.log('active theme: dark theme');    
    // theme based on switch value, set localstorage accordingly
    if (themeSwitch.value === "false") {
      localStorage.setItem('selected-theme', 'dark-winter');
      darkWinterTheme();
      darkWinterParticles();
    }
    if (themeSwitch.value === "true") {
      localStorage.setItem('selected-theme', 'dark-summer');
      darkSummerTheme();
      darkSummerParticles();
    }
  } else {
    themeActive.value = "true";
    console.log('active theme: light theme');
    localStorage.setItem('selected-item', 'light');
    lightParticles();
    lightTheme();
  }
}

// false = winter | true = summer 
function switchTheme() {
  if(themeSwitch.value === "false") {
    themeSwitch.value = "true";
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    // call summer particles 
    darkSummerParticles();
    darkSummerTheme();
  } else {
    themeSwitch.value = "false";
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    // call winter particles
    darkWinterParticles();
    darkWinterTheme();
  }
}
export {activeTheme, switchTheme};