module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n// import { withRouter } from \"next/router\"\n\n\nconst Post = ({\n  id,\n  comments\n}) => {\n  return (//alternative withRouter vs query string from getServerSideProps\n    __jsx(\"div\", null, __jsx(\"h1\", null, \"Comments for Post #\", id), comments.map(comment => {\n      return __jsx(Comment, _extends({\n        key: comment.id\n      }, comment));\n    }))\n  );\n};\n\nconst Comment = ({\n  email,\n  body\n}) => {\n  return __jsx(\"div\", null, __jsx(\"h5\", null, email), __jsx(\"p\", null, body));\n};\n\nasync function getServerSideProps({\n  query\n}) {\n  console.log(query);\n  const res = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);\n  const {\n    data\n  } = res;\n  console.log(data[0]);\n  return {\n    props: _objectSpread(_objectSpread({}, query), {}, {\n      comments: data\n    }) // will be passed to the page component as props\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0LmpzPzEyMTIiXSwibmFtZXMiOlsiUG9zdCIsImlkIiwiY29tbWVudHMiLCJtYXAiLCJjb21tZW50IiwiQ29tbWVudCIsImVtYWlsIiwiYm9keSIsImdldFNlcnZlclNpZGVQcm9wcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsInJlcyIsIkF4aW9zIiwiZ2V0IiwiZGF0YSIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsSUFBRjtBQUFNQztBQUFOLENBQUQsS0FBc0I7QUFDL0IsU0FDSTtBQUNBLHVCQUNJLHlDQUF3QkQsRUFBeEIsQ0FESixFQUVLQyxRQUFRLENBQUNDLEdBQVQsQ0FBY0MsT0FBRCxJQUFhO0FBQ3ZCLGFBQU8sTUFBQyxPQUFEO0FBQVMsV0FBRyxFQUFFQSxPQUFPLENBQUNIO0FBQXRCLFNBQThCRyxPQUE5QixFQUFQO0FBQ0gsS0FGQSxDQUZMO0FBRko7QUFTSCxDQVZEOztBQVlBLE1BQU1DLE9BQU8sR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0M7QUFBVCxDQUFELEtBQXFCO0FBQ2pDLFNBQ0ksbUJBQ0ksa0JBQUtELEtBQUwsQ0FESixFQUVJLGlCQUFJQyxJQUFKLENBRkosQ0FESjtBQU1ILENBUEQ7O0FBU08sZUFBZUMsa0JBQWYsQ0FBa0M7QUFBRUM7QUFBRixDQUFsQyxFQUE2QztBQUNoREMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxRQUFNRyxHQUFHLEdBQUcsTUFBTUMsNENBQUssQ0FBQ0MsR0FBTixDQUFXLHdEQUF1REwsS0FBSyxDQUFDUixFQUFHLEVBQTNFLENBQWxCO0FBQ0EsUUFBTTtBQUFFYztBQUFGLE1BQVdILEdBQWpCO0FBQ0FGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFJLENBQUMsQ0FBRCxDQUFoQjtBQUVBLFNBQU87QUFDSEMsU0FBSyxrQ0FBT1AsS0FBUDtBQUFjUCxjQUFRLEVBQUVhO0FBQXhCLE1BREYsQ0FDa0M7O0FBRGxDLEdBQVA7QUFHSDtBQUVjZixtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5jb25zdCBQb3N0ID0gKHsgaWQsIGNvbW1lbnRzIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICAvL2FsdGVybmF0aXZlIHdpdGhSb3V0ZXIgdnMgcXVlcnkgc3RyaW5nIGZyb20gZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+Q29tbWVudHMgZm9yIFBvc3QgI3tpZH08L2gxPlxuICAgICAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8Q29tbWVudCBrZXk9e2NvbW1lbnQuaWR9IHsuLi5jb21tZW50fSAvPlxuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuY29uc3QgQ29tbWVudCA9ICh7IGVtYWlsLCBib2R5IH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGg1PntlbWFpbH08L2g1PlxuICAgICAgICAgICAgPHA+e2JvZHl9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgY29uc29sZS5sb2cocXVlcnkpXG4gICAgY29uc3QgcmVzID0gYXdhaXQgQXhpb3MuZ2V0KGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vY29tbWVudHM/cG9zdElkPSR7cXVlcnkuaWR9YClcbiAgICBjb25zdCB7IGRhdGEgfSA9IHJlc1xuICAgIGNvbnNvbGUubG9nKGRhdGFbMF0pXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyAuLi5xdWVyeSwgY29tbWVudHM6IGRhdGEgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post.js\n");

/***/ }),

/***/ 5:
/*!*****************************!*\
  !*** multi ./pages/post.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nhatvu148/Work/JavaScript/Nextjs/first-next/pages/post.js */"./pages/post.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });