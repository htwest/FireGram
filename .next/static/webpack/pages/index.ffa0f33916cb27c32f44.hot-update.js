/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _comps_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comps/Title */ \"./comps/Title.js\");\n/* harmony import */ var _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/initFirebase */ \"./firebase/initFirebase.js\");\n/* harmony import */ var _comps_UploadForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../comps/UploadForm */ \"./comps/UploadForm.js\");\n/* harmony import */ var _comps_ImageGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../comps/ImageGrid */ \"./comps/ImageGrid.js\");\n/* harmony import */ var _comps_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../comps/Modal */ \"./comps/Modal.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/hayden_west/Documents/Projects/FireGram/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  // Selected Image State for Enlarged Modal\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      selectedImg = _useState[0],\n      setSelectedImg = _useState[1];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"App\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Title__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_UploadForm__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_ImageGrid__WEBPACK_IMPORTED_MODULE_5__.default, {\n      setSelectedImg: setSelectedImg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), selectedImg ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_comps_Modal__WEBPACK_IMPORTED_MODULE_6__.default, {\n      selectedImg: selectedImg,\n      setSelectedImg: setSelectedImg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, this) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"QSSULrVKw6q22cdrfwS9buuf5Ho=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJzZWxlY3RlZEltZyIsInNldFNlbGVjdGVkSW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUM3QjtBQUQ2QixrQkFFU0MsK0NBQVEsQ0FBQyxJQUFELENBRmpCO0FBQUEsTUFFdEJDLFdBRnNCO0FBQUEsTUFFVEMsY0FGUzs7QUFJN0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBLDRCQUNFLDhEQUFDLGlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLDhEQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFLDhEQUFDLHFEQUFEO0FBQVcsb0JBQWMsRUFBRUE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLEVBSUdELFdBQVcsZ0JBQ1YsOERBQUMsaURBQUQ7QUFBTyxpQkFBVyxFQUFFQSxXQUFwQjtBQUFpQyxvQkFBYyxFQUFFQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFUsR0FFUixJQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBZHVCSCxJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi9jb21wcy9UaXRsZVwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCIuLi9maXJlYmFzZS9pbml0RmlyZWJhc2VcIjtcbmltcG9ydCBVcGxvYWRGb3JtIGZyb20gXCIuLi9jb21wcy9VcGxvYWRGb3JtXCI7XG5pbXBvcnQgSW1hZ2VHcmlkIGZyb20gXCIuLi9jb21wcy9JbWFnZUdyaWRcIjtcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vY29tcHMvTW9kYWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy8gU2VsZWN0ZWQgSW1hZ2UgU3RhdGUgZm9yIEVubGFyZ2VkIE1vZGFsXG4gIGNvbnN0IFtzZWxlY3RlZEltZywgc2V0U2VsZWN0ZWRJbWddID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIkFwcFwiPlxuICAgICAgPFRpdGxlIC8+XG4gICAgICA8VXBsb2FkRm9ybSAvPlxuICAgICAgPEltYWdlR3JpZCBzZXRTZWxlY3RlZEltZz17c2V0U2VsZWN0ZWRJbWd9IC8+XG4gICAgICB7c2VsZWN0ZWRJbWcgPyAoXG4gICAgICAgIDxNb2RhbCBzZWxlY3RlZEltZz17c2VsZWN0ZWRJbWd9IHNldFNlbGVjdGVkSW1nPXtzZXRTZWxlY3RlZEltZ30gLz5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});