// target elems
export const themeActive = document.getElementById('theme-active');
export const themeSwitch = document.getElementById('theme-switch');
export const themeIcon = document.getElementById('theme-icon');
export const particleDisplay = document.getElementById('particles-js');

// class names / tag names
export const rootElem = document.documentElement;
export const bodyElem = document.getElementsByTagName('body');
export const navHeader = document.getElementsByClassName('nav-header');
export const navLogo = document.getElementsByClassName('nav-logo');
export const navItemList = [...document.getElementsByClassName('nav__item-list')];
export const navItem = [...document.getElementsByClassName('nav__item')];
export const navLink = [...document.getElementsByClassName('nav__link')];
export const burger = document.getElementsByClassName('burger');
export const navBtn = [...document.getElementsByClassName('nav-btn')];
export const lightThemeEnabled = document.body.classList.add("light");

//  *** need to add theme changes for  content and content card.section titel theme-active and themeswitch butons aad nav-btn. Add/Remove class for all listed elements.
export const elemList = [ rootElem, bodyElem[0], particleDisplay, navHeader[0], navLogo[0], burger[0], navItemList, navItem, navLink, navBtn ].flat();
console.log("elemList: ", elemList);

// functions
// themeActive.addEventListener('click', activeTheme);
// themeSwitch.addEventListener('click', switchTheme);