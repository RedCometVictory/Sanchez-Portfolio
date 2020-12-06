/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/activeTheme.js":
/*!******************************************!*\
  !*** ./src/js/components/activeTheme.js ***!
  \******************************************/
/*! exports provided: activeTheme, switchTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"activeTheme\", function() { return activeTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"switchTheme\", function() { return switchTheme; });\n/* harmony import */ var _particleTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particleTheme */ \"./src/js/components/particleTheme.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n/* harmony import */ var _elemName__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elemName */ \"./src/js/components/elemName.js\");\n\n\n // theme based on switch value, set localstorage accordingly\n\nfunction activeTheme() {\n  if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeActive\"].value === \"true\") {\n    _elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeActive\"].value = \"false\"; // console.log('active theme: dark theme');    \n\n    if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeSwitch\"].value === \"false\") {\n      localStorage.setItem('selected-theme', 'dark-winter');\n\n      if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"particleDisplay\"]) {\n        Object(_particleTheme__WEBPACK_IMPORTED_MODULE_0__[\"darkWinterParticles\"])();\n      }\n\n      ;\n      Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"darkWinterTheme\"])();\n    }\n\n    if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeSwitch\"].value === \"true\") {\n      localStorage.setItem('selected-theme', 'dark-summer');\n\n      if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"particleDisplay\"]) {\n        Object(_particleTheme__WEBPACK_IMPORTED_MODULE_0__[\"darkSummerParticles\"])();\n      }\n\n      ;\n      Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"darkSummerTheme\"])();\n    }\n  } else {\n    _elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeActive\"].value = \"true\"; // console.log('active theme: light theme');\n\n    localStorage.setItem('selected-item', 'light');\n\n    if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"particleDisplay\"]) {\n      Object(_particleTheme__WEBPACK_IMPORTED_MODULE_0__[\"lightParticles\"])();\n    }\n\n    ;\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"lightTheme\"])();\n  }\n} // false = winter | true = summer \n\n\nfunction switchTheme() {\n  if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeSwitch\"].value === \"false\") {\n    _elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeSwitch\"].value = \"true\";\n    _elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeIcon\"].classList.remove('fa-moon');\n    _elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeIcon\"].classList.add('fa-sun'); // call summer particles\n\n    if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"particleDisplay\"]) {\n      Object(_particleTheme__WEBPACK_IMPORTED_MODULE_0__[\"darkSummerParticles\"])();\n    }\n\n    ;\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"darkSummerTheme\"])();\n  } else {\n    _elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeSwitch\"].value = \"false\";\n    _elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeIcon\"].classList.remove('fa-sun');\n    _elemName__WEBPACK_IMPORTED_MODULE_2__[\"themeIcon\"].classList.add('fa-moon'); // call winter particles\n\n    if (_elemName__WEBPACK_IMPORTED_MODULE_2__[\"particleDisplay\"]) {\n      Object(_particleTheme__WEBPACK_IMPORTED_MODULE_0__[\"darkWinterParticles\"])();\n    }\n\n    ;\n    Object(_index__WEBPACK_IMPORTED_MODULE_1__[\"darkWinterTheme\"])();\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/js/components/activeTheme.js?");

/***/ }),

/***/ "./src/js/components/elemName.js":
/*!***************************************!*\
  !*** ./src/js/components/elemName.js ***!
  \***************************************/
/*! exports provided: themeActive, themeSwitch, themeIcon, particleDisplay, rootElem, bodyElem, navHeader, navLogo, navItemList, navItem, navLink, burger, navBtn, lightThemeEnabled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeActive\", function() { return themeActive; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeSwitch\", function() { return themeSwitch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"themeIcon\", function() { return themeIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"particleDisplay\", function() { return particleDisplay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rootElem\", function() { return rootElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bodyElem\", function() { return bodyElem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navHeader\", function() { return navHeader; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navLogo\", function() { return navLogo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navItemList\", function() { return navItemList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navItem\", function() { return navItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navLink\", function() { return navLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"burger\", function() { return burger; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"navBtn\", function() { return navBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightThemeEnabled\", function() { return lightThemeEnabled; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// target elems\nvar themeActive = document.getElementById('theme-active');\nvar themeSwitch = document.getElementById('theme-switch');\nvar themeIcon = document.getElementById('theme-icon');\nvar particleDisplay = document.getElementById('particles-js'); // class names / tag names\n\nvar rootElem = document.documentElement;\nvar bodyElem = document.getElementsByTagName('body');\nvar navHeader = document.getElementsByClassName('nav-header');\nvar navLogo = document.getElementsByClassName('nav-logo');\nvar navItemList = _toConsumableArray(document.getElementsByClassName('nav__item-list'));\nvar navItem = _toConsumableArray(document.getElementsByClassName('nav__item'));\nvar navLink = _toConsumableArray(document.getElementsByClassName('nav__link'));\nvar burger = document.getElementsByClassName('burger');\nvar navBtn = _toConsumableArray(document.getElementsByClassName('nav-btn'));\nvar lightThemeEnabled = document.body.classList.add(\"light\");\n\n//# sourceURL=webpack:///./src/js/components/elemName.js?");

/***/ }),

/***/ "./src/js/components/particleTheme.js":
/*!********************************************!*\
  !*** ./src/js/components/particleTheme.js ***!
  \********************************************/
/*! exports provided: launchParticles, lightParticles, darkWinterParticles, darkSummerParticles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"launchParticles\", function() { return launchParticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightParticles\", function() { return lightParticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkWinterParticles\", function() { return darkWinterParticles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkSummerParticles\", function() { return darkSummerParticles; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ \"./src/js/index.js\");\n // window.pJSDom[0].pJS.particles.number.value = 0; // remove /turn off particles\n// document.addEventListener('DOMContentLoaded', () => {\n\nvar lightParticles = function lightParticles() {\n  console.log('light particles called');\n  window.pJSDom[0].pJS.particles.number.value = 375;\n  window.pJSDom[0].pJS.particles.number.density.enable = false;\n  window.pJSDom[0].pJS.particles.number.density.value_area = 80;\n  window.pJSDom[0].pJS.tmp.obj.size_value = 6;\n  window.pJSDom[0].pJS.tmp.obj.move_speed = 0.7;\n  window.pJSDom[0].pJS.particles.color.value = \"#89b6d3\"; // window.pJSDom[0].pJS.particles.color.value = \"#99ff11\";\n\n  window.pJSDom[0].pJS.particles.opacity.random = true;\n  window.pJSDom[0].pJS.particles.opacity.anim.enable = false;\n  window.pJSDom[0].pJS.particles.move.direction = \"bottom\";\n  window.pJSDom[0].pJS.fn.particlesRefresh();\n};\n\nvar darkWinterParticles = function darkWinterParticles() {\n  console.log('dark winter particles called');\n  window.pJSDom[0].pJS.particles.number.value = 240;\n  window.pJSDom[0].pJS.particles.number.density.enable = true;\n  window.pJSDom[0].pJS.particles.number.density.value_area = 100;\n  window.pJSDom[0].pJS.particles.color.value = \"#2de9f5\";\n  window.pJSDom[0].pJS.tmp.obj.size_value = 1.5;\n  window.pJSDom[0].pJS.tmp.obj.move_speed = 5;\n  window.pJSDom[0].pJS.particles.opacity.random = true;\n  window.pJSDom[0].pJS.particles.opacity.anim.enable = true;\n  window.pJSDom[0].pJS.particles.move.direction = \"left\";\n  window.pJSDom[0].pJS.fn.particlesRefresh();\n};\n\nvar darkSummerParticles = function darkSummerParticles() {\n  console.log('dark summer particles called');\n  window.pJSDom[0].pJS.particles.number.value = 180;\n  window.pJSDom[0].pJS.particles.number.density.enable = true;\n  window.pJSDom[0].pJS.particles.number.density.value_area = 100;\n  window.pJSDom[0].pJS.tmp.obj.size_value = 1.9;\n  window.pJSDom[0].pJS.tmp.obj.move_speed = 3;\n  window.pJSDom[0].pJS.particles.color.value = \"#ffa400\";\n  window.pJSDom[0].pJS.particles.move.direction = \"top\";\n  window.pJSDom[0].pJS.particles.opacity.random = true;\n  window.pJSDom[0].pJS.particles.opacity.anim.enable = true;\n  window.pJSDom[0].pJS.fn.particlesRefresh();\n};\n\nfunction launchParticles() {\n  if (_index__WEBPACK_IMPORTED_MODULE_0__[\"selectedTheme\"] === 'light') {\n    lightParticles();\n  }\n\n  if (_index__WEBPACK_IMPORTED_MODULE_0__[\"selectedTheme\"] === 'dark-winter') {\n    darkWinterParticles();\n  }\n\n  if (_index__WEBPACK_IMPORTED_MODULE_0__[\"selectedTheme\"] === 'dark-summer') {\n    darkSummerParticles();\n  }\n}\n\n; // })\n\n\n\n//# sourceURL=webpack:///./src/js/components/particleTheme.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: selectedTheme, launchParticles, lightTheme, darkWinterTheme, darkSummerTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectedTheme\", function() { return selectedTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightTheme\", function() { return lightTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkWinterTheme\", function() { return darkWinterTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkSummerTheme\", function() { return darkSummerTheme; });\n/* harmony import */ var _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/elemName.js */ \"./src/js/components/elemName.js\");\n/* harmony import */ var _components_activeTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/activeTheme */ \"./src/js/components/activeTheme.js\");\n/* harmony import */ var _components_particleTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/particleTheme */ \"./src/js/components/particleTheme.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"launchParticles\", function() { return _components_particleTheme__WEBPACK_IMPORTED_MODULE_2__[\"launchParticles\"]; });\n\n\n\n\nvar selectedTheme = localStorage.getItem('selected-theme'); // may need to compile bundle for webpack (wrap around code)\n// document.addEventListener('DOMContentLoaded', () => {})\n// function inits library - load particles into DOM\n\nif (_components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"particleDisplay\"]) {\n  particlesJS.load('particles-js', 'particles-w.json', function () {\n    // console.log('particles.bundle.js loaded');\n    // callback - load theme per localStorage value\n    Object(_components_particleTheme__WEBPACK_IMPORTED_MODULE_2__[\"launchParticles\"])();\n  });\n}\n\n_components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeActive\"].addEventListener('click', _components_activeTheme__WEBPACK_IMPORTED_MODULE_1__[\"activeTheme\"]);\n_components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeSwitch\"].addEventListener('click', _components_activeTheme__WEBPACK_IMPORTED_MODULE_1__[\"switchTheme\"]);\n\nvar lightTheme = function lightTheme() {\n  console.log('switched to: light theme'); // lightParticles();\n\n  localStorage.setItem('selected-theme', 'light');\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeActive\"].value = \"true\"; // remove dark theming\n\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"rootElem\"].classList.remove('dark-winter');\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"rootElem\"].classList.remove('dark-summer');\n};\n\nvar darkWinterTheme = function darkWinterTheme() {\n  console.log('switched to: dark winter theme');\n  localStorage.setItem('selected-theme', 'dark-winter');\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeActive\"].value = \"false\";\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"rootElem\"].classList.remove('dark-summer');\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"rootElem\"].classList.add('dark-winter');\n};\n\nvar darkSummerTheme = function darkSummerTheme() {\n  console.log('switched to: dark summer theme');\n  localStorage.setItem('selected-theme', 'dark-summer');\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeActive\"].value = \"false\";\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"rootElem\"].classList.remove('dark-winter');\n  _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"rootElem\"].classList.add('dark-summer');\n}; // select default theme upon page load\n// check localstorage value to select theme (attach/remove class to elems)\n\n\nif (!selectedTheme) {\n  // console.log('selected-theme is undefined or null, thus setting light as default theme');\n  localStorage.setItem('selected-theme', 'light');\n}\n\nif (selectedTheme === 'light') {\n  // console.log('startup: launching light theme');\n  lightTheme(); // set / remove classes\n}\n\n;\n\nif (selectedTheme === 'dark-winter') {\n  // console.log('startup: launching dark winter theme');\n  darkWinterTheme();\n}\n\n;\n\nif (selectedTheme === 'dark-summer') {\n  if (_components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeIcon\"].classList.contains('fa-moon')) {\n    _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeIcon\"].classList.remove('fa-moon');\n    _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeIcon\"].classList.add('fa-sun');\n    _components_elemName_js__WEBPACK_IMPORTED_MODULE_0__[\"themeSwitch\"].value = \"true\";\n  } // console.log('startup: launching dark summer theme');\n\n\n  darkSummerTheme();\n}\n\n;\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });