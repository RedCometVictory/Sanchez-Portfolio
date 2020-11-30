import { 
  themeActive, themeSwitch
} from './components/elemName.js';
import { activeTheme, switchTheme } from './components/activeTheme';
import { launchParticlesAndTheme } from './components/particleTheme';

// document.addEventListener('DOMContentLoaded', () => { // ---+++
// function initializes library
// load particles into DOM
particlesJS.load('particles-js', 'particles-w.json', function() {
  // console.log("default theme active");
  console.log('particles.bundle.js loaded - default theme');
  // callback - load theme per localStorage value
  launchParticlesAndTheme();
})

themeActive.addEventListener('click', activeTheme);
themeSwitch.addEventListener('click', switchTheme);















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


// particleJS(); import as into other files.
// }
// });

// module.exports default = {
  // myApp
// }

// export default App;
// }) // ---+++