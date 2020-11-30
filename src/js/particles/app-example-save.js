// load particles into DOM
particlesJS.load('particles-js', 'particles-w.json', function() {
  // console.log("default theme active");
  console.log('particles.js loaded - default theme');
  // callback - load theme per localStorage value
  launchParticlesAndTheme();
  // perhaps launch theme seperately:
  // launchTheme();
});
// ----------------------------------------
// target elems
let themeActive = document.getElementById('theme-active');
let themeSwitch = document.getElementById('theme-switch');
let themeIcon = document.getElementById('theme-icon');
let particleDisplay = document.getElementById('particles-js');
// class names / tag names
let bodyElem = document.getElementsByTagName('body');
let navHeader = document.getElementsByClassName('nav-header');
let navLogo = document.getElementsByClassName('nav-logo');
let navItemList = [...document.getElementsByClassName('nav__item-list')];
let navItem = [...document.getElementsByClassName('nav__item')];
let navLink = [...document.getElementsByClassName('nav__link')];
let burger = document.getElementsByClassName('burger');
let navBtn = [...document.getElementsByClassName('nav-btn')];
let lightThemeEnabled = document.body.classList.add("light");
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
//  *** need to add theme changes for  content and content card.section titel theme-active and themeswitch butons aad nav-btn
const elemList = [ bodyElem[0], particleDisplay, navHeader[0], navLogo[0], burger[0], navItemList, navItem, navLink, navBtn ].flat();
console.log("elemList: ", elemList);

// ----------------------------------------
// execute select theme function on page load
// (edit DOM) via set localStorage value:
const lightTheme = function() {
  console.log('switched to: light theme');
  // lightParticles();
  localStorage.setItem('selected-theme', 'light');
  themeActive.value = "true";
  // remove dark theming
  elemList.forEach(element => {
    if(element.classList.contains('dark-winter')) {
      element.classList.remove('dark-winter')
    }
    if(element.classList.contains('dark-summer')) {
      element.classList.remove('dark-summer')
    }
  });  
}
const darkWinterTheme = function() {
  console.log('switched to: dark winter theme');
  localStorage.setItem('selected-theme', 'dark-winter');
  themeActive.value = "false";
  elemList.forEach(element => {
    if (element.classList.contains('dark-summer')) {
      element.classList.remove('dark-summer')
    }
    element.classList.add('dark-winter')
  });
  // global
  // bodyElem[0].classList.add('dark-winter');
  // mainNav
  
  // button
  
}
const darkSummerTheme = function() {
  console.log('switched to: dark summer theme');
  localStorage.setItem('selected-theme', 'dark-summer');
  themeActive.value = "false";
  elemList.forEach(element => {
    if(element.classList.contains('dark-winter')) {
      element.classList.remove('dark-winter')
    }
    element.classList.add('dark-summer')
  });
  // global
  // bodyElem[0].classList.add('dark-summer');
  // mainNav
  
  // button
}
/*
// light theme function
if (localStorage.getItem('selected-theme') === 'light') {
   console.log('localStorage is set to: ' + localStorage.getItem('selected-theme'));
}
// dark-winter function, also call winter particles (seperate function called here)
if (localStorage.getItem('selected-theme') === 'dark-winter') {
  console.log('localstorage is set to: ' + localStorage.getItem('selected-theme'));
}

// dark-summer function, also call summer paritcles (seperate function called here)
if (localStorage.getItem('selected-theme') === 'dark-summer') {
  console.log('localstorage is set to: ' + localStorage.getItem('selected-theme'));
}
*/
// lightParticles();
// darkSummerParticles();

// set light/dark theme on page load per localstorage value
// if (localStorage) {

// }


// ----------------------------------------
// select active light/dark theme based on bool value of acitve-theme btn (perhaps maybe the class of the body elem)








// select theme on page load - pending on localstorage value or light theme by default
// if (bodyElem[0].classList.contains('dark-winter')) {
//   console.log('body tag dark theme detected');
//   [...navBtn].forEach(item => {
//     item.classList.add('dark-winter')
//   });
//   themeActive.classList.add('dark-winter-fill');
//   themeSwitch.classList.add('dark-winter-sw');
// }
// if (bodyElem[0].classList.contains('dark-summer')) {
//   console.log('body tag dark theme detected');
//   [...navBtn].forEach(item => {
//     item.classList.add('dark-summer')
//   });
//   themeActive.classList.add('dark-summer-fill');
// }

/* sample of setting to localstorage
document.getElementById('change-theme-btn').addEventListener('click', function () {
    let darkThemeEnabled = document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-theme-enabled', darkThemeEnabled);
});

if (JSON.parse(localStorage.getItem('dark-theme-enabled'))) {
    document.body.classList.add('dark-theme');
}
*/

// if (bodyElem[0].classList.contains('light')) {
//   lightParticles();
// }



// switch dark light theme as active
function activeTheme() {
  if(themeActive.value === "true") {
    themeActive.value = "false";
    
    console.log('active theme: dark theme');
    
    // select dark theme based on switch them value
    // set localstorage accordingly
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
    // localStorage.setItem('dark-winter-theme')
    // localStorage.setItem('dark-summer-theme')
  } else {
    themeActive.value = "true";
    console.log('active theme: light theme');
    // localStorage.setItem('selected-item', 'light');
    lightParticles();
    lightTheme();
  }
}
  /*
    // remove dark theming

    if (bodyElem[0].classList.contains('dark-winter')) {
      bodyElem[0].classList.remove('dark-winter');
      localStorage.removeItem('dark-winter-theme')
    }
    if (bodyElem[0].classList.contains('dark-summer')) {
      bodyElem[0].classList.remove('dark-summer');
      localStorage.removeItem('dark-summer-theme');
    }
    if (bodyElem[0].classList.contains() {
      console.log('calling light theme');
      // lightParticles();
      // localStorage.setItem('light-theme', lightThemeEnabled)
     
    }
  }
}
*/

// activeTheme();
/* old particle setup
  window.pJSDom[0].pJS.particles.number.value = 0; // remove /turn off particles
  
  console.log("Calling Winter Theme.");
  if(themeActive.value === "true") {
    themeActive.value = "false";
    if (bodyElem[0].classList.contains('dark-winter')) {
      themeActive.classList.add('dark-winter-fill');
    }
    if (bodyElem[0].classList.contains('dark-summer')) {
      themeActive.classList.add('dark-summer-fill');
    }

    turn on off theme:
    toggleTheme.textContent = "Theme Off";
    switchTheme();
    reset theme - turn on
    window.pJSDom[0].pJS.fn.vendors.start(); // running makes anim faster
    window.pJSDom[0].pJS.fn.particlesRefresh(); // regen particles, no speed up
    particleDisplay.classList.add("active"); // --- id - show particles
    particleDisplay[0].classList.add("active"); // --- if claSS
    toggleTheme.classList.remove("active");
    themeSwitch.disabled = false;
  } else {
    switch to light theme - particles
    function refresh(){
      window.pJSDom[0].pJS.fn.particlesEmpty(); // remove particles
      window.pJSDom[0].pJS.fn.canvasClear(); // clear canvas
      window.pJSDom[0].pJS.fn.particlesRefresh(); // ---
    }
    refresh(); // turn off particles
    themeActive.value = "true";
    if (bodyElem[0].classList.contains('dark-winter')) {
      themeActive.classList.remove('dark-winter-fill');
    }
    if (bodyElem[0].classList.contains('dark-summer')) {
      themeActive.classList.remove('dark-summer-fill');
    }
    toggleTheme.textContent = "Theme On";
    particleDisplay.classList.remove("active"); // --- ref id
    themeSwitch.disabled = true;
    console.log('Theme is off.');
    window.pJSDom[0].pJS.fn.vendors.destroypJS(); // --- destroys elem - do not use
    toggleTheme.classList.add("active");
    particleDisplay[0].classList.remove("active");
    toggleTheme.classList.toggle("active");
  }
}
*/


// false = winter | true = summer 
function switchTheme() {
  if(themeSwitch.value === "false") {
    themeSwitch.value = "true";
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');

    // bodyElem[0].classList.remove('dark-winter');
    // bodyElem[0].classList.add('dark-summer');

    // themeActive.classList.remove('dark-winter-fill');
    // themeActive.classList.add('dark-summer-fill');
    // themeSwitch.classList.remove('dark-winter-sw');
    // themeSwitch.classList.add('dark-summer-sw');

    // navBtn[0].classList.remove('dark-winter');
    // navBtn[1].classList.remove('dark-winter');
    // [...navBtn].forEach(item => {
      // item.classList.remove('dark-winter');
      // item.classList.add('dark-summer');
    // });
    // navBtn[0].classList.add('dark-summer');
    // navBtn[1].classList.add('dark-summer');

    // call summer particles 
    darkSummerParticles();
    darkSummerTheme();
  } else {
    themeSwitch.value = "false";
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    
    // themeActive.classList.remove('dark-summer-fill');
    // themeActive.classList.add('dark-winter-fill');
    // themeSwitch.classList.remove('dark-summer-sw');
    // themeSwitch.classList.add('dark-winter-sw');
    
    // navBtn[0].classList.remove('dark-summer');
    // navBtn[1].classList.remove('dark-summer');
    // [...navBtn].forEach(item => {
      // item.classList.remove('dark-summer');
      // item.classList.add('dark-winter');
    // });
    // navBtn[0].classList.add('dark-winter');
    // navBtn[1].classList.add('dark-winter');

    // call winter particles
    darkWinterParticles();
    darkWinterTheme();
  }
}

























// get input elem that name attr is 'dark-light'
// change theme globally - experimental (may remove)
// let toggle = document.querySelector('input[name=theme]');

// toggle.addEventListener('change', function() {
  // if (this.checked) {
    // trans()
    // document.documentElement.setAttribute("data-theme", "dark");
  // } else {
    // trans()
    // document.documentElement.setAttribute("data-theme", "light");
  // }
// })

// let trans = () => {
  // documentElement essentially sleects the html tag
  // document.documentElement.classList.add("transition");
  // window.setTimeout(() => {
    // document.documentElement.classList.remove("transition")
  // }, 1500)
// }

// --------------------------------------------------
// Handling Sass theme changes

// target root elem, save class theme to localstorage, will resotre user settings upon refresh
































// Change Theme
// user theme = theme
// document.documentElement refs to the <html> tag in html docs. Essentially the root element of the document.
// className adds a class to the root <html> tag.
/*ex) do something like hide a <div> only when JavaScript is enabled.
document.documentElement.className - 'js';
css: .js div#id { display: none; }
*/



// let rootElem = document.documentElement.className = 
    // document.documentElement.className = '';
    // document.documentElement.classList.add(`theme-${user.theme}`);





// React syntax -- convert to html
// const themes = [
//   'light',
//   'dark'
// ];

// <Select defaultValue={user.theme} onChange={changeTheme}>
//     {themes.map((theme, index) =>
//         <Option value={theme} key={index}>{theme}</Option>
//     )}
// </Select>

// react synax from the controller - convert to html
// changeTheme = (theme) => {
//     user.theme = theme;
    
//     document.documentElement.className = '';
//     document.documentElement.classList.add(`theme-${user.theme}`);
    
//     alert('Theme updated...');
// }