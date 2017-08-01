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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__erigers_js__ = __webpack_require__(1);

(function() {
  const options = {message: 'hello aldo'};
  // new Notification(options).notify()
  __WEBPACK_IMPORTED_MODULE_0__erigers_js__["a" /* default */].notify();
})();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Erigers {
  constructor(options) {
    this.height = options.height || '70px';
    this.width = options.width || '200px';
    this.background = options.background || 'red';
    this.color = options.color || 'white';
    this.position = options.position || 'absolute';
    this.top = options.top || '10px';
    this.right = options.right || '10px';
    this.left = options.left || '10px';
    this['padding-top'] = options['padding-top'] || '20px';
    this.message = options.message || 'Notification Box';
    this.className = options.className || 'erigers-notification'
  }

  getStyles () {
    return {
      width: this.width,
      height: this.height,
      background: this.background,
      color: this.color,
      position: this.position,
      top: this.top,
      right: this.right,
      'padding-top': this['padding-top'],
      'text-align': 'center',
      'box-sizing': 'border-box'
    };
  }

  getMessage () {
    return this.message;
  }

  returnNotification () {
    const div = document.createElement('div');
    div.className = this.className;
    div.innerText = this.getMessage();
    Object.assign(div.style, this.getStyles());
    document.getElementById('app').appendChild(div);
    return;
  }

  notify (options) {
    for (let key in options) {
      if (options.hasOwnProperty(key)) {
        this[key] = options[key];
      }
    }
    return this.returnNotification();
  }
}

/* harmony default export */ __webpack_exports__["a"] = (new Erigers({}));

/***/ })
/******/ ]);