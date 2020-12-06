import {
  lightParticles, darkWinterParticles, darkSummerParticles
} from './particleTheme';
import {
  lightTheme, darkWinterTheme, darkSummerTheme
} from '../index';
import {
  themeActive, themeSwitch, themeIcon, particleDisplay
} from './elemName';

// theme based on switch value, set localstorage accordingly
function activeTheme() {
  if(themeActive.value === "true") {
    themeActive.value = "false";
    // console.log('active theme: dark theme');    
    if (themeSwitch.value === "false") {
      localStorage.setItem('selected-theme', 'dark-winter');
      if (particleDisplay) {
        darkWinterParticles();
      };
      darkWinterTheme();
    }
    if (themeSwitch.value === "true") {
      localStorage.setItem('selected-theme', 'dark-summer');
      if (particleDisplay) {
        darkSummerParticles();
      };
      darkSummerTheme();
    }
  } else {
    themeActive.value = "true";
    // console.log('active theme: light theme');
    localStorage.setItem('selected-item', 'light');
    if (particleDisplay) {
      lightParticles();
    };
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
    if (particleDisplay) {
      darkSummerParticles();
    };
    darkSummerTheme();
  } else {
    themeSwitch.value = "false";
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    // call winter particles
    if (particleDisplay) {
      darkWinterParticles();
    };
    darkWinterTheme();
  }
}
export {activeTheme, switchTheme};