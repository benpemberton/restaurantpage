/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luaXRpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxLQUFLO0FBQ3hDOztBQUVBLDhCQUE4QixLQUFLOztBQUVuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbml0aWFsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWwgRnJlc2NvIFJlc3RhdXJhbnQnO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IG1ha2VUYWIgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtuYW1lfWApO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFiJyk7XG5cbiAgICAgICAgbGluay50ZXh0Q29udGVudCA9IGAke25hbWV9YDtcblxuICAgICAgICB0YWJzLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH1cblxuICAgIGNvbnN0IG1lbnUgPSBtYWtlVGFiKCdNZW51Jyk7XG4gICAgY29uc3QgaG9tZSA9IG1ha2VUYWIoJ0hvbWUnKTtcbiAgICBjb25zdCBjb250YWN0ID0gbWFrZVRhYignQ29udGFjdCcpO1xuXG4gICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKHRhYnMpO1xuXG4gICAgY29uc3QgYmFja2dyb3VuZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhY2tncm91bmREaXYuc2V0QXR0cmlidXRlKCdpZCcsICdiYWNrZ3JvdW5kJyk7XG5cbiAgICBjb25zdCBjb3B5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29weURpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvcHknKTtcbiAgICBiYWNrZ3JvdW5kRGl2LmFwcGVuZENoaWxkKGNvcHlEaXYpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmlubmVySFRNTCA9IGBPaCB5ZXMgaW5kZWVkeSEgV2VsY29tZSB0byB0aGlzIGZhbmN5IHBhbnRzIFxuICAgIG91dHNpZGUgZGluaW5nIGV4cGVyaWVuY2UuIEFsbCBvZiB5b3VyIGN1bGluYXJ5IGRlc2lyZSBhbmQgXG4gICAgYWxpbWVudGFyeSB1cmdlcyB3aWxsIGJlIHNhdGVkIGluIGRvdWJsZSBxdWljayB0aW1lIHdoZW4geW91IGNvbWUgXG4gICAgdG8gbHV4dXJpYXRlIGluIHRoZSB1bm1hdGNoZWQgc3Vycm91bmRpbmdzIG9mIHRoaXMgJ2VyZSBlYXRlcnkuXG4gICAgPGJyLz5cbiAgICA8YnIvPlxuICAgIFdoYXQgaGF2ZSB5b3UgYSBoYW5rZXJpbmcgZm9yIHlvdW5nIG1hc3Rlci9taXN0cmVzcy91bm5hbWVkIFxuICAgIHRyYXZlbGxlciBmcm9tIHRoZSByb2FkPyBDb3VsZCBpdCBiZSB0aGF0IHlvdSBoYXZlIHlvdXIgaGVhcnQgc2V0IFxuICAgIGZpcm1seSB1cG9uIGFuIGludGltYXRlIHJlbmRlenZvdXMgd2l0aCBhIGJvd2wgb2Ygb3VyIGZhbWVkIGh1bmtzIFxuICAgIG9mIHN3ZWF0eSBjaGVlc2U/IFdlbGwsIEkgd291bGRuJ3QgYmxhbWUgeW91IGlmIHlvdSBkaWQuIE1vcmVvdmVyLCBcbiAgICBJJ2Qgc2hvdXQgeW91ciBhY2NsYWltIHRvIHRoZSBoZWF2ZW5zIGFuZCBpbnNpc3QgdGhhdCBpZiBldmVyIHRoZXJlIFxuICAgIHdlcmUgYW4gaW5kaXZpZHVhbCB0aGF0IG5lZWRlZCB0byBiZSB0cnVzc2VkIHVwIGluIGZpbmVyeSBhbmQgXG4gICAgc2hvd2VyZWQgd2l0aCBjaXZpYyBob25vdXJzIGFuZCBjaGlycnVwaW5nIGNoZWVycyB0aGVuIGhlcmUsIGluIFxuICAgIGZhY3QsIHN0YW5kcyB0aGF0IHBlcnNvbi5gO1xuICAgIGNvcHlEaXYuYXBwZW5kQ2hpbGQocCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlckRpdik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kRGl2KTtcbn07XG5cbmV4cG9ydCB7IHBhZ2VMb2FkIH07Il0sInNvdXJjZVJvb3QiOiIifQ==