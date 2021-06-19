/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
const pageLoad = () => {
    const headerDiv = document.createElement('div');
    headerDiv.setAttribute('id', 'header');

    const title = document.createElement('h1');
    title.textContent = 'Al Fresco Restaurant';
    headerDiv.appendChild(title);

    const tabs = document.createElement('ul');

    const makeTab = (name) => {
        const link = document.createElement('li');

        link.setAttribute('id', `${name}`);
        link.setAttribute('class', 'tab');

        link.textContent = `${name}`;

        tabs.appendChild(link);
    }

    const menu = makeTab('Menu');
    const home = makeTab('Home');
    const contact = makeTab('Contact');

    headerDiv.appendChild(tabs);

    const backgroundDiv = document.createElement('div');
    backgroundDiv.setAttribute('id', 'background');

    const copyDiv = document.createElement('div');
    copyDiv.setAttribute('id', 'copy');
    backgroundDiv.appendChild(copyDiv);

    const p = document.createElement('p');
    p.innerHTML = `Oh yes indeedy! Welcome to this fancy pants 
    outside dining experience. All of your culinary desire and 
    alimentary urges will be sated in double quick time when you come 
    to luxuriate in the unmatched surroundings of this 'ere eatery.
    <br/>
    <br/>
    What have you a hankering for young master/mistress/unnamed 
    traveller from the road? Could it be that you have your heart set 
    firmly upon an intimate rendezvous with a bowl of our famed hunks 
    of sweaty cheese? Well, I wouldn't blame you if you did. Moreover, 
    I'd shout your acclaim to the heavens and insist that if ever there 
    were an individual that needed to be trussed up in finery and 
    showered with civic honours and chirruping cheers then here, in 
    fact, stands that person.`;
    copyDiv.appendChild(p);

    const content = document.querySelector('#content');
    content.appendChild(headerDiv);
    content.appendChild(backgroundDiv);
};



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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial.js */ "./src/initial.js");


window.onload = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsbUNBQW1DLEtBQUs7QUFDeEM7O0FBRUEsOEJBQThCLEtBQUs7O0FBRW5DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztVQ3REQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ053Qzs7QUFFeEMsZ0JBQWdCLHFEQUFRLEciLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWwgRnJlc2NvIFJlc3RhdXJhbnQnO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IG1ha2VUYWIgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtuYW1lfWApO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFiJyk7XG5cbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke25hbWV9YDtcblxuICAgICAgICB0YWJzLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnUgPSBtYWtlVGFiKCdNZW51Jyk7XG4gICAgY29uc3QgaG9tZSA9IG1ha2VUYWIoJ0hvbWUnKTtcbiAgICBjb25zdCBjb250YWN0ID0gbWFrZVRhYignQ29udGFjdCcpO1xuXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhY2tncm91bmREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrZ3JvdW5kJyk7XG5cbiAgICBjb25zdCBjb3B5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvcHknKTtcbiAgICBiYWNrZ3JvdW5kRGl2LmFwcGVuZENoaWxkKGNvcHlEaXYpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9IGBPaCB5ZXMgaW5kZWVkeSEgV2VsY29tZSB0byB0aGlzIGZhbmN5IHBhbnRzIFxuICAgIG91dHNpZGUgZGluaW5nIGV4cGVyaWVuY2UuIEFsbCBvZiB5b3VyIGN1bGluYXJ5IGRlc2lyZSBhbmQgXG4gICAgYWxpbWVudGFyeSB1cmdlcyB3aWxsIGJlIHNhdGVkIGluIGRvdWJsZSBxdWljayB0aW1lIHdoZW4geW91IGNvbWUgXG4gICAgdG8gbHV4dXJpYXRlIGluIHRoZSB1bm1hdGNoZWQgc3Vycm91bmRpbmdzIG9mIHRoaXMgJ2VyZSBlYXRlcnkuXG4gICAgPGJyLz5cbiAgICA8YnIvPlxuICAgIFdoYXQgaGF2ZSB5b3UgYSBoYW5rZXJpbmcgZm9yIHlvdW5nIG1hc3Rlci9taXN0cmVzcy91bm5hbWVkIFxuICAgIHRyYXZlbGxlciBmcm9tIHRoZSByb2FkPyBDb3VsZCBpdCBiZSB0aGF0IHlvdSBoYXZlIHlvdXIgaGVhcnQgc2V0IFxuICAgIGZpcm1seSB1cG9uIGFuIGludGltYXRlIHJlbmRlenZvdXMgd2l0aCBhIGJvd2wgb2Ygb3VyIGZhbWVkIGh1bmtzIFxuICAgIG9mIHN3ZWF0eSBjaGVlc2U/IFdlbGwsIEkgd291bGRuJ3QgYmxhbWUgeW91IGlmIHlvdSBkaWQuIE1vcmVvdmVyLCBcbiAgICBJJ2Qgc2hvdXQgeW91ciBhY2NsYWltIHRvIHRoZSBoZWF2ZW5zIGFuZCBpbnNpc3QgdGhhdCBpZiBldmVyIHRoZXJlIFxuICAgIHdlcmUgYW4gaW5kaXZpZHVhbCB0aGF0IG5lZWRlZCB0byBiZSB0cnVzc2VkIHVwIGluIGZpbmVyeSBhbmQgXG4gICAgc2hvd2VyZWQgd2l0aCBjaXZpYyBob25vdXJzIGFuZCBjaGlycnVwaW5nIGNoZWVycyB0aGVuIGhlcmUsIGluIFxuICAgIGZhY3QsIHN0YW5kcyB0aGF0IHBlcnNvbi5gO1xuICAgIGNvcHlEaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kRGl2KTtcbn07XG5cbmV4cG9ydCB7IHBhZ2VMb2FkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vaW5pdGlhbC5qcyc7XG5cbndpbmRvdy5vbmxvYWQgPSBwYWdlTG9hZCgpOyJdLCJzb3VyY2VSb290IjoiIn0=