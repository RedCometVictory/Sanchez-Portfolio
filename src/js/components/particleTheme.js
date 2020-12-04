import { selectedTheme } from '../index';

// window.pJSDom[0].pJS.particles.number.value = 0; // remove /turn off particles
// document.addEventListener('DOMContentLoaded', () => {
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

function launchParticles() {
  if (selectedTheme === 'light') {
    lightParticles();
  }
  if (selectedTheme === 'dark-winter') {
    darkWinterParticles();
  }
  if (selectedTheme === 'dark-summer') {
    darkSummerParticles();
  }
};
// })
export {launchParticles, lightParticles, darkWinterParticles, darkSummerParticles};