import {
  lightParticles, darkWinterParticles, darkSummerParticles, lightTheme, darkWinterTheme, darkSummerTheme
} from './particleTheme';
import {
  themeActive, themeSwitch, themeIcon
} from './elemName';

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

// var checkbox = document.querySelector('input[name=theme]');

// checkbox.addEventListener('change', function() {
//     if(this.checked) {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'dark')
//     } else {
//         trans()
//         document.documentElement.setAttribute('data-theme', 'light')
//     }
// })

// let trans = () => {
//     document.documentElement.classList.add('transition');
//     window.setTimeout(() => {
//         document.documentElement.classList.remove('transition')
//     }, 1000)
// }
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


export {activeTheme, switchTheme};

/***
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 

    <div class="container">
        <h1>Light / Dark Mode</h1>
        <div class="toggle-container">
            <input type="checkbox" id="switch" name="theme" /><label for="switch">Toggle</label>
        </div>
    </div>

html {
    height: 100%;
    font-family: 'Montserrat';

    display: grid;
    align-items: center;
    justify-items: center;

    --bg: #FCFCFC;
    --bg-panel: #EBEBEB;
    --color-headings: #0077FF;
    --color-text: #333333;
}

html[data-theme='dark'] {
    --bg: #333333;
    --bg-panel: #434343;
    --color-headings: #3694FF;
    --color-text: #B5B5B5;
}

body {
    background-color: var(--bg);
}

.container {
    background-color: var(--bg-panel);
    margin: 5em;
    padding: 5em;
    border-radius: 15px;
    display: grid;
    grid-template-columns: 80% auto;
    grid-template-rows: auto auto;
    grid-template-areas:
        "title switch"
        "content content";

    h1 {
        margin: 0;
        color: var(--color-headings);
    }

    p {
        color: var(--color-text);
        grid-area: content;
        font-size: 1.1em;
        line-height: 1.8em;
        margin-top: 2em;
    }
}

input[type=checkbox]{
	height: 0;
	width: 0;
	visibility: hidden;
}

label {
	cursor: pointer;
	text-indent: -9999px;
	width: 52px;
	height: 27px;
	background: grey;
	float: right;
	border-radius: 100px;
	position: relative;
}

label:after {
	content: '';
	position: absolute;
	top: 3px;
	left: 3px;
	width: 20px;
	height: 20px;
	background: #fff;
	border-radius: 90px;
	transition: 0.3s;
}

input:checked + label {
	background: var(--color-headings);
}

input:checked + label:after {
	left: calc(100% - 5px);
	transform: translateX(-100%);
}

label:active:after {
	width: 45px;
}

html.transition,
html.transition *,
html.transition *:before,
html.transition *:after {
  transition: all 750ms !important;
  transition-delay: 0 !important;
}
*/