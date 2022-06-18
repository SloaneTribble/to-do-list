/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root.light{\n    --page-background: rgb(229, 229, 229);\n    --form-background: var(--page-background);\n    --font-color: black;\n    --border-color: black;\n    --shadow: inset 0px 0px 7px rgba(0, 0, 0, .6);\n}\n\n:root.dark{\n    --page-background: black;\n    --form-background: black;\n    --font-color: white;\n    --border-color: white;\n    --shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.6);\n}\n\nhtml,\nbody{\n    box-sizing: border-box;\n    position: relative;\n    max-width: 100vw;\n    min-height: 100%;\n    margin: 0;\n    padding: 0; \n    color: var(--font-color);  \n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex: 1;\n}\n*,\n*:before,\n*:after{\n    box-sizing: inherit;\n    max-width: 100vw;\n    margin: 0;\n}\n\nbutton {\n    display: inline-block;\n    border: 1px solid var(--border-color);\n    padding: 1rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: var(--background-color);\n    color: var(--font-color);\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, \n                transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\nbutton:hover,\nbutton:focus {\n    background: #0053ba;\n}\n\nbutton:focus {\n    outline: 1px solid #fff;\n    outline-offset: -4px;\n}\n\nbutton:active {\n    transform: scale(0.99);\n}\n\n.page-container{\n    min-height: 100vh;\n    min-width: 100vw;\n    background-color: var(--page-background);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.header{\n    border: 3px solid var(--border-color);\n    border-bottom: 2px solid var(--border-color);\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 3fr 4fr 2fr;\n    min-width: 100vw;\n}\n\n.header > * {\n    box-shadow: var(--shadow);\n}\n\n.title{\n    border: 1px solid var(--border-color);\n    font-size: 2rem;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-form{\n    border: solid 2px var(--font-color);\n    position: absolute;\n    background-color: white;\n    top: 32px;\n    left: 50%;\n    display: grid;\n}\n\n.project-container{\n    margin-top: -2px;\n    display: grid;\n    row-gap: .4rem;\n    width: 90%;\n}\n\n.project-details{\n    border-bottom-width: 3px;\n    display: grid;\n    justify-items: space-evenly;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: minmax(2fr, 3rem) 1fr;\n}\n\n.project-description{\n    border-top: solid 2px var(--border-color);\n    grid-row: 2;\n    grid-column: 1 / 8;\n    display: flex;\n    align-items: center;\n}\n\n.project-details > * {\n    padding: .1rem;\n}\n\n.project-details:first-child{\n    font-size: 1.2rem;\n    padding-top: .3rem;\n}\n\n\n\n.to-do-button-container{\n    justify-self: center;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n}\n\n.to-do-button-container > button{\n    flex: 1;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n}\n\n\n.to-do-display{\n    background: rgb(65, 160, 255);\n    padding: 0;\n}\n\n.to-do-display:hover,\n.to-do-display:focus{\n    background: orangered;\n}\n\n.project-cell{\n    border: 3px solid var(--border-color);\n    font-size: 1.1rem;\n    padding: .5rem;\n}\n\n.to-do-list{\n    font-size: 1rem;\n    border: 1px solid var(--border-color);\n}\n\n\n.to-do{\n    border: 2px solid var(--border-color);\n    display: grid;\n}\n\n.to-do > * {\n    padding: .5rem;\n}\n\n\n\n.to-do-header{\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: solid 1px var(--border-color);\n    align-items: center;\n}\n\n.to-do-header > button {\n    height: 90%;\n}\n\n\n\n\n.high-priority{\n    background: linear-gradient(45deg,  var(--page-background), rgba(255, 99, 71, 0.4), rgba(255, 99, 71, 0.8));\n}\n\n.medium-priority{\n    background: linear-gradient(45deg,  var(--page-background), rgba(106, 90, 205, .4), rgba(106, 90, 205, .8));\n}\n\n.low-priority{\n    background: linear-gradient(45deg,  var(--page-background), rgba(60, 179, 113, 0.4), rgba(60, 179, 113, 0.8));\n}\n\n.form-container{\n    position: absolute;\n    top: 0;\n    z-index: 10;\n    height: 100vh;\n    min-width: 100vw;\n    width: 100%;\n    background-color:rgba(0, 0, 0, 0.4);\n    display: flex;\n}\n\n.project-form{\n    font-size: 1.5rem;\n    min-height: 50%;\n    width: fit-content;\n    position: fixed;\n    top: 16%;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    resize: none;\n    color: var(--font-color);\n    background: var(--form-background);\n    z-index: 10;\n    padding: 16px;\n}\n\ninput{\n    font-size: 1.2rem;\n}\n\nselect{\n    font-size: 1.2rem;\n}\n\n.footer{\n    position: absolute;\n    bottom: 0;\n}\n\na:link{\n    color: brown;\n}\n\na:visited{\n    color: chocolate;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qCAAqC;IACrC,yCAAyC;IACzC,mBAAmB;IACnB,qBAAqB;IACrB,6CAA6C;AACjD;;AAEA;IACI,wBAAwB;IACxB,wBAAwB;IACxB,mBAAmB;IACnB,qBAAqB;IACrB,qDAAqD;AACzD;;AAEA;;IAEI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,wBAAwB;AAC5B;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,OAAO;AACX;AACA;;;IAGI,mBAAmB;IACnB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,qCAAqC;IACrC,kBAAkB;IAClB,SAAS;IACT,qBAAqB;IACrB,mCAAmC;IACnC,wBAAwB;IACxB,uBAAuB;IACvB,eAAe;IACf,eAAe;IACf,kBAAkB;IAClB;oCACgC;IAChC,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;;IAEI,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,wCAAwC;IACxC,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,4CAA4C;IAC5C,yCAAyC;IACzC,aAAa;IACb,kCAAkC;IAClC,gBAAgB;AACpB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,qCAAqC;IACrC,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mCAAmC;IACnC,kBAAkB;IAClB,uBAAuB;IACvB,SAAS;IACT,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,cAAc;IACd,UAAU;AACd;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,2BAA2B;IAC3B,qCAAqC;IACrC,yCAAyC;AAC7C;;AAEA;IACI,yCAAyC;IACzC,WAAW;IACX,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;AACtB;;;;AAIA;IACI,oBAAoB;IACpB,YAAY;IACZ,WAAW;IACX,aAAa;IACb,OAAO;IACP,mBAAmB;IACnB,uBAAuB;IACvB,UAAU;AACd;;AAEA;IACI,OAAO;IACP,YAAY;IACZ,WAAW;IACX,UAAU;AACd;;;AAGA;IACI,6BAA6B;IAC7B,UAAU;AACd;;AAEA;;IAEI,qBAAqB;AACzB;;AAEA;IACI,qCAAqC;IACrC,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,qCAAqC;AACzC;;;AAGA;IACI,qCAAqC;IACrC,aAAa;AACjB;;AAEA;IACI,cAAc;AAClB;;;;AAIA;IACI,aAAa;IACb,qCAAqC;IACrC,4CAA4C;IAC5C,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf;;;;;AAKA;IACI,2GAA2G;AAC/G;;AAEA;IACI,2GAA2G;AAC/G;;AAEA;IACI,6GAA6G;AACjH;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,WAAW;IACX,mCAAmC;IACnC,aAAa;AACjB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,QAAQ;IACR,OAAO;IACP,QAAQ;IACR,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,wBAAwB;IACxB,kCAAkC;IAClC,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":[":root.light{\n    --page-background: rgb(229, 229, 229);\n    --form-background: var(--page-background);\n    --font-color: black;\n    --border-color: black;\n    --shadow: inset 0px 0px 7px rgba(0, 0, 0, .6);\n}\n\n:root.dark{\n    --page-background: black;\n    --form-background: black;\n    --font-color: white;\n    --border-color: white;\n    --shadow: inset 0px 0px 10px rgba(255, 255, 255, 0.6);\n}\n\nhtml,\nbody{\n    box-sizing: border-box;\n    position: relative;\n    max-width: 100vw;\n    min-height: 100%;\n    margin: 0;\n    padding: 0; \n    color: var(--font-color);  \n}\n\nbody{\n    min-height: 100vh;\n    display: flex;\n    flex: 1;\n}\n*,\n*:before,\n*:after{\n    box-sizing: inherit;\n    max-width: 100vw;\n    margin: 0;\n}\n\nbutton {\n    display: inline-block;\n    border: 1px solid var(--border-color);\n    padding: 1rem 2rem;\n    margin: 0;\n    text-decoration: none;\n    background: var(--background-color);\n    color: var(--font-color);\n    font-family: sans-serif;\n    font-size: 1rem;\n    cursor: pointer;\n    text-align: center;\n    transition: background 250ms ease-in-out, \n                transform 150ms ease;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n}\n\nbutton:hover,\nbutton:focus {\n    background: #0053ba;\n}\n\nbutton:focus {\n    outline: 1px solid #fff;\n    outline-offset: -4px;\n}\n\nbutton:active {\n    transform: scale(0.99);\n}\n\n.page-container{\n    min-height: 100vh;\n    min-width: 100vw;\n    background-color: var(--page-background);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.header{\n    border: 3px solid var(--border-color);\n    border-bottom: 2px solid var(--border-color);\n    background-color: var(--background-color);\n    display: grid;\n    grid-template-columns: 3fr 4fr 2fr;\n    min-width: 100vw;\n}\n\n.header > * {\n    box-shadow: var(--shadow);\n}\n\n.title{\n    border: 1px solid var(--border-color);\n    font-size: 2rem;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.project-form{\n    border: solid 2px var(--font-color);\n    position: absolute;\n    background-color: white;\n    top: 32px;\n    left: 50%;\n    display: grid;\n}\n\n.project-container{\n    margin-top: -2px;\n    display: grid;\n    row-gap: .4rem;\n    width: 90%;\n}\n\n.project-details{\n    border-bottom-width: 3px;\n    display: grid;\n    justify-items: space-evenly;\n    grid-template-columns: repeat(7, 1fr);\n    grid-template-rows: minmax(2fr, 3rem) 1fr;\n}\n\n.project-description{\n    border-top: solid 2px var(--border-color);\n    grid-row: 2;\n    grid-column: 1 / 8;\n    display: flex;\n    align-items: center;\n}\n\n.project-details > * {\n    padding: .1rem;\n}\n\n.project-details:first-child{\n    font-size: 1.2rem;\n    padding-top: .3rem;\n}\n\n\n\n.to-do-button-container{\n    justify-self: center;\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex: 1;\n    align-items: center;\n    justify-content: center;\n    padding: 0;\n}\n\n.to-do-button-container > button{\n    flex: 1;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n}\n\n\n.to-do-display{\n    background: rgb(65, 160, 255);\n    padding: 0;\n}\n\n.to-do-display:hover,\n.to-do-display:focus{\n    background: orangered;\n}\n\n.project-cell{\n    border: 3px solid var(--border-color);\n    font-size: 1.1rem;\n    padding: .5rem;\n}\n\n.to-do-list{\n    font-size: 1rem;\n    border: 1px solid var(--border-color);\n}\n\n\n.to-do{\n    border: 2px solid var(--border-color);\n    display: grid;\n}\n\n.to-do > * {\n    padding: .5rem;\n}\n\n\n\n.to-do-header{\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    border-bottom: solid 1px var(--border-color);\n    align-items: center;\n}\n\n.to-do-header > button {\n    height: 90%;\n}\n\n\n\n\n.high-priority{\n    background: linear-gradient(45deg,  var(--page-background), rgba(255, 99, 71, 0.4), rgba(255, 99, 71, 0.8));\n}\n\n.medium-priority{\n    background: linear-gradient(45deg,  var(--page-background), rgba(106, 90, 205, .4), rgba(106, 90, 205, .8));\n}\n\n.low-priority{\n    background: linear-gradient(45deg,  var(--page-background), rgba(60, 179, 113, 0.4), rgba(60, 179, 113, 0.8));\n}\n\n.form-container{\n    position: absolute;\n    top: 0;\n    z-index: 10;\n    height: 100vh;\n    min-width: 100vw;\n    width: 100%;\n    background-color:rgba(0, 0, 0, 0.4);\n    display: flex;\n}\n\n.project-form{\n    font-size: 1.5rem;\n    min-height: 50%;\n    width: fit-content;\n    position: fixed;\n    top: 16%;\n    left: 0;\n    right: 0;\n    margin-left: auto;\n    margin-right: auto;\n    resize: none;\n    color: var(--font-color);\n    background: var(--form-background);\n    z-index: 10;\n    padding: 16px;\n}\n\ninput{\n    font-size: 1.2rem;\n}\n\nselect{\n    font-size: 1.2rem;\n}\n\n.footer{\n    position: absolute;\n    bottom: 0;\n}\n\na:link{\n    color: brown;\n}\n\na:visited{\n    color: chocolate;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/display-projects.js":
/*!*********************************!*\
  !*** ./src/display-projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayProjects": () => (/* binding */ displayProjects),
/* harmony export */   "removeIndividual": () => (/* binding */ removeIndividual)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");


// This module displays what projects are kept in local storage.
// displayProjects() is frequently called to ensure that the user 
// is only able to see data that is currently being stored




Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

const theme = "theme";

// If currentProjects is null, assign an empty array

function displayProjects(){


    let currentProjects = localStorage.getObj(key) || [];

    let currentTheme = localStorage.getObj(theme);

    const root = document.documentElement;

    root.className = currentTheme;

    const projectContainer = document.querySelector(".project-container");

    // Clear the current display to prevent repetition
    projectContainer.innerHTML = '';


    for(let i = 0; i < currentProjects.length; i++) {


        const project = document.createElement('div');
        project.classList.add('project-cell');
        project.id = i;

        const projectDetails = document.createElement('div');
        projectDetails.classList.add('project-details');
        projectDetails.id = i;

        const title = document.createElement('div');
        title.innerText = "Title: " + currentProjects[i].title;

        const description = document.createElement('div');
        description.classList.add('project-description');
        description.innerText = "Description: " + currentProjects[i].description;

        const dueDate = document.createElement('div');
        dueDate.innerText = "Due date: " + currentProjects[i].dueDate;

        // Priority should affect div color

        const priority = document.createElement('div');
        priority.innerText = "Priority: " + currentProjects[i].priority;
        let priorityColor;
        switch(currentProjects[i].priority){
            case 'high': priorityColor = 'high-priority';
            priority.style.fontWeight = "bold";
            break;

            case 'medium': priorityColor = 'medium-priority';
            break;

            case 'low': priorityColor = 'low-priority';
            break;
        }
        project.classList.add(priorityColor);

        const toDoButtonContainer = document.createElement('div');
        toDoButtonContainer.classList.add('to-do-button-container');

        const toDos = document.createElement('button');
        toDos.classList.add('to-do-display');
        toDos.innerText = "View To-dos";

        toDoButtonContainer.appendChild(toDos);

        const toDoList = displayToDos(i);

        toDos.addEventListener('click', function(){

        // Keep track of which tabs are open/closed on refresh
            currentProjects[i].isActive = true;
            localStorage.setObj(key, currentProjects);

            project.appendChild(toDoList);
            toDoButtonContainer.removeChild(toDos);
            toDoButtonContainer.appendChild(hideToDos);
        });
        

        const hideToDos = document.createElement('button');
        hideToDos.innerText = "Hide To-dos";
        hideToDos.classList.add('to-do-display');
        hideToDos.addEventListener('click', function(){
        
        // Keep track of which tabs are open/closed on refresh
            currentProjects[i].isActive = false;
            localStorage.setObj(key, currentProjects);

            project.removeChild(toDoList);
            toDoButtonContainer.removeChild(hideToDos);
            toDoButtonContainer.appendChild(toDos);
        });

        

        const addToDo = document.createElement('button');
        addToDo.classList.add('add-to-do-button');
        addToDo.innerText = 'Add To-do';
        addToDo.addEventListener('click', function(){
            const formContainer = document.querySelector('.form-container');
            if(document.body.contains(formContainer)){return;}
            document.body.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_0__.form)('todo', i));
        });

        const editProject = document.createElement('button');
        editProject.classList.add('edit-project-button');
        editProject.innerText = 'Edit Project';
        editProject.id = i;


        const removeProject = document.createElement('button');
        removeProject.classList.add('remove-project-button');
        removeProject.innerText = 'Remove Project';
        removeProject.addEventListener('click', function(){
            remove(i);
        });


        projectDetails.appendChild(title);
        projectDetails.appendChild(description);
        projectDetails.appendChild(dueDate);
        projectDetails.appendChild(priority);
        projectDetails.appendChild(toDoButtonContainer);
        projectDetails.appendChild(addToDo);
        projectDetails.appendChild(editProject);
        projectDetails.appendChild(removeProject);

        project.appendChild(projectDetails);
        

        projectContainer.appendChild(project);

        if(currentProjects[i].isActive){
            toDos.click();
        }
    }
}

function displayToDos(index){

    let currentProjects = localStorage.getObj(key) || [];

    let project = currentProjects[index];
    let projectToDos = project.toDos;
    
    const toDoList = document.createElement('div');
    toDoList.classList.add('to-do-list');

    for (const toDo in projectToDos){

        const singleToDo = document.createElement('div');
        singleToDo.classList.add('to-do');
        singleToDo.id = toDo;

        let toDoIndex = toDo;

        const title = document.createElement('div');
        title.innerText = "Task: " + projectToDos[toDo].title;

        const description = document.createElement('div');
        description.innerText = "Description: " + projectToDos[toDo].description;

        const dueDate = document.createElement('div');
        dueDate.innerText = "Due date: " + projectToDos[toDo].dueDate;

        const priority = document.createElement('div');
        priority.innerText = "Priority: " + projectToDos[toDo].priority;

        let priorityColor;

        switch(projectToDos[toDo].priority){
            case 'high': priorityColor = 'high-priority';
            priority.style.fontWeight = "bold";
            break;

            case 'medium': priorityColor = 'medium-priority';
            break;

            case 'low': priorityColor = 'low-priority';
            break;
        }

        singleToDo.classList.add(priorityColor);

        const removeToDo = document.createElement('button');
        removeToDo.classList.add("remove-to-do-button");
        removeToDo.innerText = "Remove";
        removeToDo.addEventListener('click', function(){
            removeIndividual(toDo, projectToDos, currentProjects);
            window.location.reload();
        }, false);

        const editToDo = document.createElement('button');
        editToDo.classList.add('edit-to-do-button');
        editToDo.innerText = "Edit";
        editToDo.addEventListener('click', function(e){

            const formContainer = document.querySelector('.form-container');
             if(document.body.contains(formContainer)){return;}
             
            document.body.appendChild((0,_edit__WEBPACK_IMPORTED_MODULE_1__.edit)(
                "to-do",
                index,
                projectToDos[toDo].title,
                projectToDos[toDo].description,
                projectToDos[toDo].dueDate,
                projectToDos[toDo].priority,
                toDoIndex
                ));
        });

        const toDoHeader = document.createElement('div');
        toDoHeader.classList.add('to-do-header');

        

        toDoHeader.appendChild(title);
        toDoHeader.appendChild(dueDate);
        toDoHeader.appendChild(priority);
        toDoHeader.appendChild(editToDo);
        toDoHeader.appendChild(removeToDo);
        singleToDo.appendChild(toDoHeader);
        singleToDo.appendChild(description);
        
        toDoList.appendChild(singleToDo);
    }

    return toDoList;
}

function removeIndividual(e, projectToDos, currentProjects){
    console.log(e);
    projectToDos.splice(e, 1);
    localStorage.setObj(key, currentProjects);
}

function remove(index){
    let currentProjects = localStorage.getObj(key) || [];

    currentProjects.splice(index, 1);
    localStorage.setObj(key, currentProjects);
    window.location.reload();
}




/***/ }),

/***/ "./src/edit-project.js":
/*!*****************************!*\
  !*** ./src/edit-project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editProject": () => (/* binding */ editProject)
/* harmony export */ });
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");


Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

// Sort projects based on date

let currentProjects = localStorage.getObj(key) || [];
currentProjects.sort(function compare(a, b) {
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);
        return dateA - dateB;
    });

for (let project in currentProjects){
    let currentToDos = currentProjects[project].toDos;
    currentToDos.sort(function compare(a, b){
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);
        return dateA - dateB;
    });
}
    



localStorage.setObj(key, currentProjects); 

function editProject(index){

    // If currentProjects is null, assign an empty array
    let currentProjects = localStorage.getObj(key) || [];
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    
    currentProjects[index].title = title;
    currentProjects[index].description = description;
    currentProjects[index].dueDate = dueDate;
    currentProjects[index].priority = priority;

    

    localStorage.setObj(key, currentProjects);  
    (0,_display_projects__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
    window.location.reload();

    return;
}



/***/ }),

/***/ "./src/edit-todo.js":
/*!**************************!*\
  !*** ./src/edit-todo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "editToDo": () => (/* binding */ editToDo)
/* harmony export */ });
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");


Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

// Sort projects based on date

let currentProjects = localStorage.getObj(key) || [];
currentProjects.sort(function compare(a, b) {
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);
        return dateA - dateB;
    });

for (let project in currentProjects){
    let currentToDos = currentProjects[project].toDos;
    currentToDos.sort(function compare(a, b){
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);
        return dateA - dateB;
    });
}
    



localStorage.setObj(key, currentProjects); 

function editToDo(index, toDo){

    // If currentProjects is null, assign an empty array
    let currentProjects = localStorage.getObj(key) || [];
    let projectToDos = currentProjects[index].toDos;


    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    console.log(toDo);

    projectToDos[toDo].title = title;
    projectToDos[toDo].description = description;
    projectToDos[toDo].dueDate = dueDate;
    projectToDos[toDo].priority = priority;

    

    localStorage.setObj(key, currentProjects);  
    (0,_display_projects__WEBPACK_IMPORTED_MODULE_0__.displayProjects)();
    window.location.reload();

    return;
}



/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "edit": () => (/* binding */ edit)
/* harmony export */ });
/* harmony import */ var _edit_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-todo */ "./src/edit-todo.js");
/* harmony import */ var _edit_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-project */ "./src/edit-project.js");
// This file contains very similar code to form.js except that it takes
// different arguments and performs some different activities




// Storage.prototype.setObj = function(key, obj) {
//     return this.setItem(key, JSON.stringify(obj))
// }
// Storage.prototype.getObj = function(key) {
//     return JSON.parse(this.getItem(key))
// }

// const key = "projects";

// let currentProjects = localStorage.getObj(key) || [];

function edit(type, index, currentTitle, currentDescription, currentDueDate, currentPriority, toDo = 0){

    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    const form = document.createElement("form");
    form.classList.add('project-form');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerText = type === 'to-do' ? 'To-do:' : 'Project:';

    const title = document.createElement('input');
    title.type = 'text';
    title.name = 'title';
    title.placeholder = 'Title';
    title.id = 'title';
    title.defaultValue = currentTitle;

    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = 'description';
    descriptionLabel.innerText = "Description: ";

    const description = document.createElement('textarea');
    description.classList.add('form-description');
    description.name = 'description';

    let placeHolder = (type === 'project')? "100" : "500";
    description.placeholder = `Description (<${placeHolder} characters)`;
    description.maxLength = placeHolder - 1;

    description.id = 'description';
    description.defaultValue = currentDescription;

    const dueDateLabel = document.createElement('label');
    dueDateLabel.for= 'due-date';
    dueDateLabel.innerText = "Due date: ";

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'due-date';
    dueDate.id = 'due-date';
    dueDate.defaultValue = currentDueDate;

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority: ';
    priorityLabel.htmlFor = 'priority';

    let priorities = ['low', 'medium', 'high'];

    const select = document.createElement('select');
    select.name = 'priority';
    select.id = 'priority';

    for (const priority of priorities){
        let option = document.createElement('option');
        option.value = priority;
        option.text = priority.charAt(0).toUpperCase() + priority.slice(1);
        select.appendChild(option);
    }

    select.value = currentPriority;

    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.type = 'submit';
    submit.innerText = "Submit";
    submit.addEventListener('click', function(){
        
        if(type === 'to-do') {(0,_edit_todo__WEBPACK_IMPORTED_MODULE_0__.editToDo)(index, toDo);
        } else if(type === 'project'){
            (0,_edit_project__WEBPACK_IMPORTED_MODULE_1__.editProject)(index);
            return
        };
        form.reset();
    });

    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.innerText = 'Cancel';
    cancel.addEventListener('click', function(){
        window.location.reload();
    })
    
    
    form.appendChild(titleLabel);
    form.appendChild(title);

    form.appendChild(descriptionLabel);
    form.appendChild(description);

    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);

    form.appendChild(priorityLabel);
    form.appendChild(select);

    form.appendChild(submit);

    form.appendChild(cancel);

    formContainer.appendChild(form);

    function handleForm(event) {event.preventDefault();}
    form.addEventListener('submit', handleForm);
    

    return formContainer;
}




/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "form": () => (/* binding */ form)
/* harmony export */ });
/* harmony import */ var _project_submit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-submit */ "./src/project-submit.js");
/* harmony import */ var _todo_submit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-submit */ "./src/todo-submit.js");




function form(input, index){


    const formContainer = document.createElement('div');
    formContainer.classList.add('form-container');

    let type = input;

    const form = document.createElement("form");
    form.classList.add('project-form');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerText = (type === 'project')? "Project Title: " : "To-do: ";

    const title = document.createElement('input');
    title.type = 'text';
    title.name = 'title';
    title.placeholder = 'Title';
    title.id = 'title';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = 'description';
    descriptionLabel.innerText = "Description: ";

    const description = document.createElement('textarea');
    description.name = 'description';

    let placeHolder = (type === 'project')? "100" : "500";
    description.placeholder = `Description (<${placeHolder} characters)`;
    description.maxLength = placeHolder - 1;
    description.id = 'description';
    description.style.rows = '2';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.for= 'due-date';
    dueDateLabel.innerText = "Due date: ";

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'due-date';
    dueDate.id = 'due-date';

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority: ';
    priorityLabel.htmlFor = 'priority';

    let priorities = ['low', 'medium', 'high'];

    const select = document.createElement('select');
    select.name = 'priority';
    select.id = 'priority';

    for (const priority of priorities){
        let option = document.createElement('option');
        option.value = priority;
        option.text = priority.charAt(0).toUpperCase() + priority.slice(1);
        select.appendChild(option);
    }

    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.type = 'submit';
    submit.innerText = "Submit";

    submit.addEventListener('click', function(){
        if (title.value === ""){
            alert("Please include a title.");
            return;
        }
        if(type === 'project'){
            (0,_project_submit__WEBPACK_IMPORTED_MODULE_0__.projectSubmit)();
        } else if (type === 'todo'){
            (0,_todo_submit__WEBPACK_IMPORTED_MODULE_1__.toDoSubmit)(index);
        }
        form.reset();
    });

    const cancel = document.createElement('button');
    cancel.classList.add('cancel');
    cancel.innerText = 'Cancel';
    cancel.addEventListener('click', function(){
        window.location.reload();
    });

    
    
    form.appendChild(titleLabel);
    form.appendChild(title);

    form.appendChild(descriptionLabel);
    form.appendChild(description);

    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);

    form.appendChild(priorityLabel);
    form.appendChild(select);

    form.appendChild(submit);

    form.appendChild(cancel);

    function handleForm(event) {event.preventDefault();}
    form.addEventListener('submit', handleForm);

    formContainer.appendChild(form);
    

    return formContainer;
}






/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homeMaker": () => (/* binding */ homeMaker)
/* harmony export */ });
function homeMaker(){
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');

    pageContainer.appendChild(headerMaker());
    pageContainer.appendChild(projectContainerMaker());

    pageContainer.appendChild(footerMaker());

    return pageContainer;
}

function headerMaker(){
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = 'To-do List';

    header.appendChild(title);

    const newProjectButton = document.createElement('button');
    newProjectButton.classList.add('new-project-button');
    newProjectButton.innerText = "New Project";

    header.appendChild(newProjectButton);

    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.className = 'theme-toggle';
    toggleThemeButton.innerText = 'Toggle Theme';

    header.appendChild(toggleThemeButton);

    return header;
}

function projectContainerMaker(){
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    return projectContainer;
}

function footerMaker(){
    const footer = document.createElement('div');
    footer.classList.add('footer');
    let a = document.createElement('a');

    let link = document.createTextNode('Sloane Tribble');

    a.appendChild(link);

    a.title = 'Sloane Tribble';

    a.href = 'https://github.com/SloaneTribble';

    footer.appendChild(a);

    return footer;
}



/***/ }),

/***/ "./src/project-form.js":
/*!*****************************!*\
  !*** ./src/project-form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProject": () => (/* binding */ newProject)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/form.js");


function newProject(){
    document.body.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_0__.form)('project', "N/A"));
}



/***/ }),

/***/ "./src/project-submit.js":
/*!*******************************!*\
  !*** ./src/project-submit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectSubmit": () => (/* binding */ projectSubmit)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");
// This module contains a function for pushing a new project to the 
// currentProjects array and locally storing that array

// Each time currentProjects is updated, displayProjects() is called
// to ensure that the user sees all of the projects in storage




Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

// Sort projects based on date

let currentProjects = localStorage.getObj(key) || [];
currentProjects.sort(function compare(a, b) {
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);
        return dateA - dateB;
    });

for (let project in currentProjects){
    let currentToDos = currentProjects[project].toDos;
    currentToDos.sort(function compare(a, b){
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);
        return dateA - dateB;
    });
}
    



localStorage.setObj(key, currentProjects); 

function projectSubmit(){

    // If currentProjects is null, assign an empty array
    let currentProjects = localStorage.getObj(key) || [];
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority, false);
    currentProjects.push(newProject);

    localStorage.setObj(key, currentProjects);  
    (0,_display_projects__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();
    window.location.reload();

    return newProject;
}



/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project{
    constructor(title, description, dueDate, priority, isActive){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.toDos = [];
        this.isActive = false;
    }

    addToDo(toDo){
        this.toDos.push(toDo);
    }

    getToDos(){
        let toDos = [];
        for(let i = 0; i < this.toDos.length; i++){
            toDos.push(this.toDos[i]);
        }
        return toDos;
    }

    setTitle(title){
        this.title = title;
    }

    setDescription(description){
        this.description = description;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDate(){
        return this.dueDate
    }

    getPriority(){
        return this.priority
    }


}

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setTheme": () => (/* binding */ setTheme)
/* harmony export */ });
Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const theme = "theme";



function setTheme(){
    const root = document.documentElement;
    const newTheme = root.className === 'dark' ? 'light' : 'dark';

    root.className = newTheme;

    localStorage.setObj(theme, newTheme);

    window.location.reload();
}



/***/ }),

/***/ "./src/todo-submit.js":
/*!****************************!*\
  !*** ./src/todo-submit.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDoSubmit": () => (/* binding */ toDoSubmit)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");
// This module contains a function for pushing a new todo to the 
// a given project in the currentProjects array and then locally storing that array

// Each time currentProjects is updated, displayProjects() is called
// to ensure that the user sees all of the projects in storage





Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";




function toDoSubmit(index){

    // If currentProjects is null, assign an empty array
    // Check for the latest info whenever this function is called
    let currentProjects = localStorage.getObj(key) || [];

    let project = currentProjects[index];

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    const toDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"](title, description, dueDate, priority);

    
    project.toDos.push(toDo);


    localStorage.setObj(key, currentProjects);  

    currentProjects = localStorage.getObj(key) || [];


    (0,_display_projects__WEBPACK_IMPORTED_MODULE_1__.displayProjects)();

    window.location.reload();

    return toDo;
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToDo)
/* harmony export */ });
class ToDo{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    setTitle(title){
        this.title = title;
    }

    setDescription(description){
        this.description = description;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    setPriority(priority){
        this.priority = priority;
    }

    getTitle(){
        return this.title;
    }

    getDescription(){
        return this.description;
    }

    getDueDate(){
        return this.dueDate
    }

    getPriority(){
        return this.priority
    }

}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./theme */ "./src/theme.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _display_projects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./display-projects */ "./src/display-projects.js");
/* harmony import */ var _project_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-form */ "./src/project-form.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit */ "./src/edit.js");


// Initial page load functions












// Before loading page, check to see if user has set a theme

let currentTheme = localStorage.getObj('theme');

console.log(currentTheme);

if (currentTheme === null){
    localStorage.setObj('theme', 'light');
}


document.body.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.homeMaker)());



(0,_display_projects__WEBPACK_IMPORTED_MODULE_3__.displayProjects)();

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

let currentProjects = localStorage.getObj(key) || [];




// Button for creating a new project


const newProjectButton = document.querySelector('.new-project-button');
newProjectButton.addEventListener('click', function(){

    // Prevents user from opening multiple forms 
    const formContainer = document.querySelector('.form-container');
    if(document.body.contains(formContainer)){return;}

    (0,_project_form__WEBPACK_IMPORTED_MODULE_4__.newProject)();
    newProjectButton.disabled = true;});



const editProjectButtons = document.querySelectorAll('.edit-project-button');


editProjectButtons.forEach((button) => {
    button.addEventListener('click', ()=> {

        localStorage.setObj(key, currentProjects);

        const formContainer = document.querySelector('.form-container');

        if(document.body.contains(formContainer)){return;}


        let type = "project";
        let index = button.id;
        let title = currentProjects[index].title;
        let description = currentProjects[index].description;
        let dueDate = currentProjects[index].dueDate;
        let priority = currentProjects[index].priority;

        document.body.appendChild((0,_edit__WEBPACK_IMPORTED_MODULE_5__.edit)(type, index, title, description, dueDate, priority));  
    
    });
});



document.querySelector('.theme-toggle').addEventListener('click', _theme__WEBPACK_IMPORTED_MODULE_1__.setTheme);


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map