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