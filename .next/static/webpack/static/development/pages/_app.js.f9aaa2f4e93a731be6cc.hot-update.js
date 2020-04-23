webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles.css":
false,

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./styles/global.css ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports

exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200&display=swap);"]);
// Module
exports.push([module.i, "html,\nbody {\n    padding: 0;\n    margin: 0;\n    background: url(\"/images/bg.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    /* font-family: \"Courier New\", Courier, monospace; */\n    /* font-family: \"Courier New\", Courier, monospace; */\n    font-family: \"Work Sans\", sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.container {\n    min-height: 100vh;\n    padding: 0 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nmain {\n    padding: 5rem 0;\n    flex: 1 1;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n}\n\nfooter {\n    width: 100%;\n    height: 100px;\n    border-top: 1px solid #eaeaea;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter img {\n    margin-left: 0.5rem;\n}\n\nfooter a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n", "",{"version":3,"sources":["/Users/johan/Projects/discophile/styles/global.css"],"names":[],"mappings":"AAEA;;IAEI,UAAU;IACV,SAAS;IACT,iCAAiC;IACjC,sBAAsB;IACtB,4BAA4B;IAC5B,oDAAoD;IACpD,oDAAoD;IACpD,oCAAoC;AACxC;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,SAAO;IACP,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,qBAAqB;AACzB","file":"global.css","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200&display=swap\");\n\nhtml,\nbody {\n    padding: 0;\n    margin: 0;\n    background: url(\"/images/bg.jpg\");\n    background-size: cover;\n    background-repeat: no-repeat;\n    /* font-family: \"Courier New\", Courier, monospace; */\n    /* font-family: \"Courier New\", Courier, monospace; */\n    font-family: \"Work Sans\", sans-serif;\n}\n\n* {\n    box-sizing: border-box;\n}\n\n.container {\n    min-height: 100vh;\n    padding: 0 0.5rem;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\nmain {\n    padding: 5rem 0;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    /* justify-content: center; */\n    align-items: center;\n}\n\nfooter {\n    width: 100%;\n    height: 100px;\n    border-top: 1px solid #eaeaea;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter img {\n    margin-left: 0.5rem;\n}\n\nfooter a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\na {\n    color: inherit;\n    text-decoration: none;\n}\n"]}]);


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.css */ "./styles/global.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/johan/Projects/discophile/pages/_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
 // This default export is required in a new `pages/_app.js` file.

function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }));
}

/***/ }),

/***/ "./styles.css":
false,

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./styles/global.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ })

})
//# sourceMappingURL=_app.js.f9aaa2f4e93a731be6cc.hot-update.js.map