/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useStorage.js":
/*!*****************************!*\
  !*** ./hooks/useStorage.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/initFirebase */ \"./firebase/initFirebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar useStorage = function useStorage(file) {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      progress = _useState[0],\n      setProgress = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      url = _useState3[0],\n      setUrl = _useState3[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    // refrences\n    var storageRef = _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_3__.projectStorage.ref(file.name);\n    var collectionRef = _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_3__.projectFirestore.collection(\"images\");\n    storageRef.put(file).on(\"state_changed\", function (snap) {\n      var percentage = snap.bytesTransferred / snap.totalBytes * 100;\n      setProgress(percentage);\n    }, function (err) {\n      setError(err);\n    }, /*#__PURE__*/(0,_Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n      var url, createdAt;\n      return _Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.next = 2;\n              return storageRef.getDownloadURL();\n\n            case 2:\n              url = _context.sent;\n              createdAt = (0,_firebase_initFirebase__WEBPACK_IMPORTED_MODULE_3__.timestamp)();\n              collectionRef.add({\n                url: url,\n                createdAt: timeStamp\n              });\n              setUrl(url);\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    })));\n  }, [file]);\n  return {\n    progress: progress,\n    url: url,\n    error: error\n  };\n};\n\n_s(useStorage, \"xn2AiAzche7NzWswJ7VS1PhvjkU=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useStorage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlU3RvcmFnZS5qcz8xNzhjIl0sIm5hbWVzIjpbInVzZVN0b3JhZ2UiLCJmaWxlIiwidXNlU3RhdGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwiZXJyb3IiLCJzZXRFcnJvciIsInVybCIsInNldFVybCIsInVzZUVmZmVjdCIsInN0b3JhZ2VSZWYiLCJwcm9qZWN0U3RvcmFnZSIsIm5hbWUiLCJjb2xsZWN0aW9uUmVmIiwicHJvamVjdEZpcmVzdG9yZSIsInB1dCIsIm9uIiwic25hcCIsInBlcmNlbnRhZ2UiLCJieXRlc1RyYW5zZmVycmVkIiwidG90YWxCeXRlcyIsImVyciIsImdldERvd25sb2FkVVJMIiwiY3JlYXRlZEF0IiwidGltZXN0YW1wIiwiYWRkIiwidGltZVN0YW1wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFBQTs7QUFBQSxrQkFDS0MsK0NBQVEsQ0FBQyxDQUFELENBRGI7QUFBQSxNQUNwQkMsUUFEb0I7QUFBQSxNQUNWQyxXQURVOztBQUFBLG1CQUVERiwrQ0FBUSxDQUFDLElBQUQsQ0FGUDtBQUFBLE1BRXBCRyxLQUZvQjtBQUFBLE1BRWJDLFFBRmE7O0FBQUEsbUJBR0xKLCtDQUFRLENBQUMsSUFBRCxDQUhIO0FBQUEsTUFHcEJLLEdBSG9CO0FBQUEsTUFHZkMsTUFIZTs7QUFLM0JDLGtEQUFTLENBQUMsWUFBTTtBQUNkO0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyxzRUFBQSxDQUFtQlYsSUFBSSxDQUFDVyxJQUF4QixDQUFuQjtBQUNBLFFBQU1DLGFBQWEsR0FBR0MsK0VBQUEsQ0FBNEIsUUFBNUIsQ0FBdEI7QUFFQUosY0FBVSxDQUFDSyxHQUFYLENBQWVkLElBQWYsRUFBcUJlLEVBQXJCLENBQ0UsZUFERixFQUVFLFVBQUNDLElBQUQsRUFBVTtBQUNSLFVBQUlDLFVBQVUsR0FBSUQsSUFBSSxDQUFDRSxnQkFBTCxHQUF3QkYsSUFBSSxDQUFDRyxVQUE5QixHQUE0QyxHQUE3RDtBQUNBaEIsaUJBQVcsQ0FBQ2MsVUFBRCxDQUFYO0FBQ0QsS0FMSCxFQU1FLFVBQUNHLEdBQUQsRUFBUztBQUNQZixjQUFRLENBQUNlLEdBQUQsQ0FBUjtBQUNELEtBUkgsK1NBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDb0JYLFVBQVUsQ0FBQ1ksY0FBWCxFQURwQjs7QUFBQTtBQUNRZixpQkFEUjtBQUVRZ0IsdUJBRlIsR0FFb0JDLGlFQUFTLEVBRjdCO0FBR0VYLDJCQUFhLENBQUNZLEdBQWQsQ0FBa0I7QUFBRWxCLG1CQUFHLEVBQUVBLEdBQVA7QUFBWWdCLHlCQUFTLEVBQUVHO0FBQXZCLGVBQWxCO0FBQ0FsQixvQkFBTSxDQUFDRCxHQUFELENBQU47O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FURjtBQWdCRCxHQXJCUSxFQXFCTixDQUFDTixJQUFELENBckJNLENBQVQ7QUF1QkEsU0FBTztBQUFFRSxZQUFRLEVBQVJBLFFBQUY7QUFBWUksT0FBRyxFQUFIQSxHQUFaO0FBQWlCRixTQUFLLEVBQUxBO0FBQWpCLEdBQVA7QUFDRCxDQTdCRDs7R0FBTUwsVTs7QUErQk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoiLi9ob29rcy91c2VTdG9yYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgcHJvamVjdFN0b3JhZ2UsXG4gIHByb2plY3RGaXJlc3RvcmUsXG4gIHRpbWVzdGFtcCxcbn0gZnJvbSBcIi4uL2ZpcmViYXNlL2luaXRGaXJlYmFzZVwiO1xuXG5jb25zdCB1c2VTdG9yYWdlID0gKGZpbGUpID0+IHtcbiAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gcmVmcmVuY2VzXG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IHByb2plY3RTdG9yYWdlLnJlZihmaWxlLm5hbWUpO1xuICAgIGNvbnN0IGNvbGxlY3Rpb25SZWYgPSBwcm9qZWN0RmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJpbWFnZXNcIik7XG5cbiAgICBzdG9yYWdlUmVmLnB1dChmaWxlKS5vbihcbiAgICAgIFwic3RhdGVfY2hhbmdlZFwiLFxuICAgICAgKHNuYXApID0+IHtcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSAoc25hcC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgc2V0UHJvZ3Jlc3MocGVyY2VudGFnZSk7XG4gICAgICB9LFxuICAgICAgKGVycikgPT4ge1xuICAgICAgICBzZXRFcnJvcihlcnIpO1xuICAgICAgfSxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgdXJsID0gYXdhaXQgc3RvcmFnZVJlZi5nZXREb3dubG9hZFVSTCgpO1xuICAgICAgICBjb25zdCBjcmVhdGVkQXQgPSB0aW1lc3RhbXAoKTtcbiAgICAgICAgY29sbGVjdGlvblJlZi5hZGQoeyB1cmw6IHVybCwgY3JlYXRlZEF0OiB0aW1lU3RhbXAgfSk7XG4gICAgICAgIHNldFVybCh1cmwpO1xuICAgICAgfVxuICAgICk7XG4gIH0sIFtmaWxlXSk7XG5cbiAgcmV0dXJuIHsgcHJvZ3Jlc3MsIHVybCwgZXJyb3IgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVN0b3JhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hooks/useStorage.js\n");

/***/ })

});