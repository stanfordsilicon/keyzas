/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "(pages-dir-node)/./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(pages-dir-node)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst buttonStyle = {\n    backgroundColor: '#f3ecd4e7',\n    borderRadius: '12px',\n    padding: '20px 32px',\n    fontWeight: 'bold',\n    color: '#000000ff',\n    fontSize: '1rem',\n    textShadow: '0 1px 0 rgba(255,255,255,0.6)',\n    boxShadow: 'inset 6px -6px 0 #c2b49f, inset -6px 6px 0 #fffdf4, 0 8px 12px rgba(0,0,0,0.25)',\n    cursor: 'pointer',\n    transition: 'all 0.1s ease-in-out',\n    outline: 'none'\n};\nconst activeStyle = {\n    transform: 'translateY(3px)',\n    boxShadow: 'inset -4px -4px 0 #c2b49f, inset 4px 4px 0 #fffbea, 0 4px 8px rgba(0,0,0,0.25)',\n    outline: 'none'\n};\nfunction Navbar() {\n    const [activeButton, setActiveButton] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n    const handleMouseDown = (btn)=>setActiveButton(btn);\n    const handleMouseUp = ()=>setActiveButton(null);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"fixed w-full top-0 left-0 z-50 flex justify-end px-6 py-4 bg-white shadow-md\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex gap-4 items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: activeButton === 'home' ? {\n                            ...buttonStyle,\n                            ...activeStyle\n                        } : buttonStyle,\n                        onMouseDown: ()=>handleMouseDown('home'),\n                        onMouseUp: handleMouseUp,\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/components/Navbar.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/components/Navbar.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/visualizer\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        style: activeButton === 'visualizer' ? {\n                            ...buttonStyle,\n                            ...activeStyle\n                        } : buttonStyle,\n                        onMouseDown: ()=>handleMouseDown('visualizer'),\n                        onMouseUp: handleMouseUp,\n                        children: \"Visualizer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/components/Navbar.js\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/components/Navbar.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/components/Navbar.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/components/Navbar.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9jb21wb25lbnRzL05hdmJhci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUwQjtBQUNHO0FBRTdCLE1BQU1FLGNBQWM7SUFDbEJDLGlCQUFpQjtJQUNqQkMsY0FBYztJQUNkQyxTQUFTO0lBQ1RDLFlBQVk7SUFDWkMsT0FBTztJQUNQQyxVQUFVO0lBQ1ZDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsU0FBUztBQUNYO0FBRUEsTUFBTUMsY0FBYztJQUNsQkMsV0FBVztJQUNYTCxXQUFXO0lBQ1hHLFNBQVM7QUFDWDtBQUVlLFNBQVNHO0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdsQixxREFBYyxDQUFDO0lBRXZELE1BQU1vQixrQkFBa0IsQ0FBQ0MsTUFBUUgsZ0JBQWdCRztJQUNqRCxNQUFNQyxnQkFBZ0IsSUFBTUosZ0JBQWdCO0lBRTVDLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ3ZCLGtEQUFJQTtvQkFBQ3lCLE1BQUs7b0JBQUlDLFFBQVE7OEJBQ3JCLDRFQUFDQzt3QkFDQ0MsT0FBT1osaUJBQWlCLFNBQVM7NEJBQUUsR0FBR2YsV0FBVzs0QkFBRSxHQUFHWSxXQUFXO3dCQUFDLElBQUlaO3dCQUN0RTRCLGFBQWEsSUFBTVYsZ0JBQWdCO3dCQUNuQ1csV0FBV1Q7a0NBQ1o7Ozs7Ozs7Ozs7OzhCQUlILDhEQUFDckIsa0RBQUlBO29CQUFDeUIsTUFBSztvQkFBY0MsUUFBUTs4QkFDL0IsNEVBQUNDO3dCQUNDQyxPQUFPWixpQkFBaUIsZUFBZTs0QkFBRSxHQUFHZixXQUFXOzRCQUFFLEdBQUdZLFdBQVc7d0JBQUMsSUFBSVo7d0JBQzVFNEIsYUFBYSxJQUFNVixnQkFBZ0I7d0JBQ25DVyxXQUFXVDtrQ0FDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YIiwic291cmNlcyI6WyIvVXNlcnMvc2FtYW50aGFsZXZlbnRpcy9Eb2N1bWVudHMvR2l0SHViL2tleXphcy9zcmMvY29tcG9uZW50cy9OYXZiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgYnV0dG9uU3R5bGUgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogJyNmM2VjZDRlNycsXG4gIGJvcmRlclJhZGl1czogJzEycHgnLFxuICBwYWRkaW5nOiAnMjBweCAzMnB4JyxcbiAgZm9udFdlaWdodDogJ2JvbGQnLFxuICBjb2xvcjogJyMwMDAwMDBmZicsXG4gIGZvbnRTaXplOiAnMXJlbScsXG4gIHRleHRTaGFkb3c6ICcwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC42KScsXG4gIGJveFNoYWRvdzogJ2luc2V0IDZweCAtNnB4IDAgI2MyYjQ5ZiwgaW5zZXQgLTZweCA2cHggMCAjZmZmZGY0LCAwIDhweCAxMnB4IHJnYmEoMCwwLDAsMC4yNSknLFxuICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgdHJhbnNpdGlvbjogJ2FsbCAwLjFzIGVhc2UtaW4tb3V0JyxcbiAgb3V0bGluZTogJ25vbmUnXG59O1xuXG5jb25zdCBhY3RpdmVTdHlsZSA9IHtcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgzcHgpJyxcbiAgYm94U2hhZG93OiAnaW5zZXQgLTRweCAtNHB4IDAgI2MyYjQ5ZiwgaW5zZXQgNHB4IDRweCAwICNmZmZiZWEsIDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMjUpJyxcbiAgb3V0bGluZTogJ25vbmUnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFthY3RpdmVCdXR0b24sIHNldEFjdGl2ZUJ1dHRvbl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZURvd24gPSAoYnRuKSA9PiBzZXRBY3RpdmVCdXR0b24oYnRuKTtcbiAgY29uc3QgaGFuZGxlTW91c2VVcCA9ICgpID0+IHNldEFjdGl2ZUJ1dHRvbihudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgdy1mdWxsIHRvcC0wIGxlZnQtMCB6LTUwIGZsZXgganVzdGlmeS1lbmQgcHgtNiBweS00IGJnLXdoaXRlIHNoYWRvdy1tZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGdhcC00IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXthY3RpdmVCdXR0b24gPT09ICdob21lJyA/IHsgLi4uYnV0dG9uU3R5bGUsIC4uLmFjdGl2ZVN0eWxlIH0gOiBidXR0b25TdHlsZX1cbiAgICAgICAgICAgIG9uTW91c2VEb3duPXsoKSA9PiBoYW5kbGVNb3VzZURvd24oJ2hvbWUnKX1cbiAgICAgICAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBIb21lXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi92aXN1YWxpemVyXCIgcGFzc0hyZWY+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgc3R5bGU9e2FjdGl2ZUJ1dHRvbiA9PT0gJ3Zpc3VhbGl6ZXInID8geyAuLi5idXR0b25TdHlsZSwgLi4uYWN0aXZlU3R5bGUgfSA6IGJ1dHRvblN0eWxlfVxuICAgICAgICAgICAgb25Nb3VzZURvd249eygpID0+IGhhbmRsZU1vdXNlRG93bigndmlzdWFsaXplcicpfVxuICAgICAgICAgICAgb25Nb3VzZVVwPXtoYW5kbGVNb3VzZVVwfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpc3VhbGl6ZXJcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiYnV0dG9uU3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwiZm9udFdlaWdodCIsImNvbG9yIiwiZm9udFNpemUiLCJ0ZXh0U2hhZG93IiwiYm94U2hhZG93IiwiY3Vyc29yIiwidHJhbnNpdGlvbiIsIm91dGxpbmUiLCJhY3RpdmVTdHlsZSIsInRyYW5zZm9ybSIsIk5hdmJhciIsImFjdGl2ZUJ1dHRvbiIsInNldEFjdGl2ZUJ1dHRvbiIsInVzZVN0YXRlIiwiaGFuZGxlTW91c2VEb3duIiwiYnRuIiwiaGFuZGxlTW91c2VVcCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJwYXNzSHJlZiIsImJ1dHRvbiIsInN0eWxlIiwib25Nb3VzZURvd24iLCJvbk1vdXNlVXAiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/components/Navbar.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"(pages-dir-node)/./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ \"(pages-dir-node)/./src/components/Navbar.js\");\n// src/pages/_app.js\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/pages/_app.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            \"      \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"pt-14\",\n                children: [\n                    \"  \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/pages/_app.js\",\n                        lineNumber: 10,\n                        columnNumber: 9\n                    }, this),\n                    \"  \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/samanthaleventis/Documents/GitHub/keyzas/src/pages/_app.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLG9CQUFvQjs7QUFDVTtBQUNXO0FBRTFCLFNBQVNDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQscUJBQ0U7OzBCQUNFLDhEQUFDSCwwREFBTUE7Ozs7O1lBQUc7MEJBQ1YsOERBQUNJO2dCQUFLQyxXQUFVOztvQkFBUTtrQ0FDdEIsOERBQUNIO3dCQUFXLEdBQUdDLFNBQVM7Ozs7OztvQkFBSTs7Ozs7Ozs7O0FBSXBDIiwic291cmNlcyI6WyIvVXNlcnMvc2FtYW50aGFsZXZlbnRpcy9Eb2N1bWVudHMvR2l0SHViL2tleXphcy9zcmMvcGFnZXMvX2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvcGFnZXMvX2FwcC5qc1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz4gICAgICB7LyogU2hvd3Mgb24gZXZlcnkgcGFnZSAqL31cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInB0LTE0XCI+ICB7LyogQWRkIHBhZGRpbmctdG9wIHRvIGFjY291bnQgZm9yIGZpeGVkIG5hdmJhciAqL31cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPiAgey8qIFRoZSBjdXJyZW50IHBhZ2UgKi99XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWluIiwiY2xhc3NOYW1lIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/./src/pages/_app.js\n");

/***/ }),

/***/ "(pages-dir-node)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("(pages-dir-node)/./src/pages/_app.js")));
module.exports = __webpack_exports__;

})();