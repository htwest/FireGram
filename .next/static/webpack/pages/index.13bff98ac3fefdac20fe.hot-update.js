/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./hooks/useFirestore.js":
/*!*******************************!*\
  !*** ./hooks/useFirestore.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/initFirebase */ \"./firebase/initFirebase.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_hayden_west_Documents_Projects_FireGram_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar useFirestore = function useFirestore(collection) {\n  _s();\n\n  // Images retrieved for DB collection\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      docs = _useState[0],\n      setDocs = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var unsub = _firebase_initFirebase__WEBPACK_IMPORTED_MODULE_2__.projectFirestore.collection(collection) // Orders collection in descending order by the createdAt property\n    .orderBy(\"createdAt\", \"desc\") // Fires callback on inital and whenenever a change occures within collection\n    .onSnapshot(function (snap) {\n      var documents = [];\n      snap.forEach(function (doc) {\n        // doc.data() gets data from doc\n        // doc.id is the id of the doc\n        documents.push(_objectSpread(_objectSpread({}, doc.data()), {}, {\n          id: doc.id\n        }));\n      });\n      setDocs(documents);\n    }); // used to unsubscribe to the collection if ImageGrid component unmoounts\n\n    return function () {\n      return unsub();\n    };\n  }, [collection]);\n  return {\n    docs: docs\n  };\n};\n\n_s(useFirestore, \"+T0lE56vJ9KU8atjOm2u+g1P1HQ=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useFirestore);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlRmlyZXN0b3JlLmpzP2E3ODgiXSwibmFtZXMiOlsidXNlRmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsInVzZVN0YXRlIiwiZG9jcyIsInNldERvY3MiLCJ1c2VFZmZlY3QiLCJ1bnN1YiIsInByb2plY3RGaXJlc3RvcmUiLCJvcmRlckJ5Iiwib25TbmFwc2hvdCIsInNuYXAiLCJkb2N1bWVudHMiLCJmb3JFYWNoIiwiZG9jIiwicHVzaCIsImRhdGEiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFVBQUQsRUFBZ0I7QUFBQTs7QUFDbkM7QUFEbUMsa0JBRVhDLCtDQUFRLENBQUMsRUFBRCxDQUZHO0FBQUEsTUFFNUJDLElBRjRCO0FBQUEsTUFFdEJDLE9BRnNCOztBQUluQ0Msa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQywrRUFBQSxDQUNBTixVQURBLEVBRVo7QUFGWSxLQUdYTyxPQUhXLENBR0gsV0FIRyxFQUdVLE1BSFYsRUFJWjtBQUpZLEtBS1hDLFVBTFcsQ0FLQSxVQUFDQyxJQUFELEVBQVU7QUFDcEIsVUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0FELFVBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQUNDLEdBQUQsRUFBUztBQUNwQjtBQUNBO0FBQ0FGLGlCQUFTLENBQUNHLElBQVYsaUNBQW9CRCxHQUFHLENBQUNFLElBQUosRUFBcEI7QUFBZ0NDLFlBQUUsRUFBRUgsR0FBRyxDQUFDRztBQUF4QztBQUNELE9BSkQ7QUFLQVosYUFBTyxDQUFDTyxTQUFELENBQVA7QUFDRCxLQWJXLENBQWQsQ0FEYyxDQWdCZDs7QUFDQSxXQUFPO0FBQUEsYUFBTUwsS0FBSyxFQUFYO0FBQUEsS0FBUDtBQUNELEdBbEJRLEVBa0JOLENBQUNMLFVBQUQsQ0FsQk0sQ0FBVDtBQW9CQSxTQUFPO0FBQUVFLFFBQUksRUFBSkE7QUFBRixHQUFQO0FBQ0QsQ0F6QkQ7O0dBQU1ILFk7O0FBMkJOLCtEQUFlQSxZQUFmIiwiZmlsZSI6Ii4vaG9va3MvdXNlRmlyZXN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcHJvamVjdEZpcmVzdG9yZSB9IGZyb20gXCIuLi9maXJlYmFzZS9pbml0RmlyZWJhc2VcIjtcblxuY29uc3QgdXNlRmlyZXN0b3JlID0gKGNvbGxlY3Rpb24pID0+IHtcbiAgLy8gSW1hZ2VzIHJldHJpZXZlZCBmb3IgREIgY29sbGVjdGlvblxuICBjb25zdCBbZG9jcywgc2V0RG9jc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1bnN1YiA9IHByb2plY3RGaXJlc3RvcmVcbiAgICAgIC5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pXG4gICAgICAvLyBPcmRlcnMgY29sbGVjdGlvbiBpbiBkZXNjZW5kaW5nIG9yZGVyIGJ5IHRoZSBjcmVhdGVkQXQgcHJvcGVydHlcbiAgICAgIC5vcmRlckJ5KFwiY3JlYXRlZEF0XCIsIFwiZGVzY1wiKVxuICAgICAgLy8gRmlyZXMgY2FsbGJhY2sgb24gaW5pdGFsIGFuZCB3aGVuZW5ldmVyIGEgY2hhbmdlIG9jY3VyZXMgd2l0aGluIGNvbGxlY3Rpb25cbiAgICAgIC5vblNuYXBzaG90KChzbmFwKSA9PiB7XG4gICAgICAgIGxldCBkb2N1bWVudHMgPSBbXTtcbiAgICAgICAgc25hcC5mb3JFYWNoKChkb2MpID0+IHtcbiAgICAgICAgICAvLyBkb2MuZGF0YSgpIGdldHMgZGF0YSBmcm9tIGRvY1xuICAgICAgICAgIC8vIGRvYy5pZCBpcyB0aGUgaWQgb2YgdGhlIGRvY1xuICAgICAgICAgIGRvY3VtZW50cy5wdXNoKHsgLi4uZG9jLmRhdGEoKSwgaWQ6IGRvYy5pZCB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldERvY3MoZG9jdW1lbnRzKTtcbiAgICAgIH0pO1xuXG4gICAgLy8gdXNlZCB0byB1bnN1YnNjcmliZSB0byB0aGUgY29sbGVjdGlvbiBpZiBJbWFnZUdyaWQgY29tcG9uZW50IHVubW9vdW50c1xuICAgIHJldHVybiAoKSA9PiB1bnN1YigpO1xuICB9LCBbY29sbGVjdGlvbl0pO1xuXG4gIHJldHVybiB7IGRvY3MgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUZpcmVzdG9yZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./hooks/useFirestore.js\n");

/***/ })

});