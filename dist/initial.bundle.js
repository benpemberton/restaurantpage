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

        const capName = name.charAt(0).toUpperCase() + name.slice(1);

        link.textContent = `${capName}`;

        tabs.appendChild(link);
    }

    makeTab('menu');
    makeTab('home');
    makeTab('contact');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luaXRpYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQyxLQUFLO0FBQ3hDOztBQUVBOztBQUVBLDhCQUE4QixRQUFROztBQUV0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbml0aWFsLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgcGFnZUxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnaGVhZGVyJyk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSAnQWwgRnJlc2NvIFJlc3RhdXJhbnQnO1xuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIGNvbnN0IG1ha2VUYWIgPSAobmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcblxuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtuYW1lfWApO1xuICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGFiJyk7XG5cbiAgICAgICAgY29uc3QgY2FwTmFtZSA9IG5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuXG4gICAgICAgIGxpbmsudGV4dENvbnRlbnQgPSBgJHtjYXBOYW1lfWA7XG5cbiAgICAgICAgdGFicy5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9XG5cbiAgICBtYWtlVGFiKCdtZW51Jyk7XG4gICAgbWFrZVRhYignaG9tZScpO1xuICAgIG1ha2VUYWIoJ2NvbnRhY3QnKTtcblxuICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZCh0YWJzKTtcblxuICAgIGNvbnN0IGJhY2tncm91bmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYWNrZ3JvdW5kRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnYmFja2dyb3VuZCcpO1xuXG4gICAgY29uc3QgY29weURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdjb3B5Jyk7XG4gICAgYmFja2dyb3VuZERpdi5hcHBlbmRDaGlsZChjb3B5RGl2KTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5pbm5lckhUTUwgPSBgT2ggeWVzIGluZGVlZHkhIFdlbGNvbWUgdG8gdGhpcyBmYW5jeSBwYW50cyBcbiAgICBvdXRzaWRlIGRpbmluZyBleHBlcmllbmNlLiBBbGwgb2YgeW91ciBjdWxpbmFyeSBkZXNpcmUgYW5kIFxuICAgIGFsaW1lbnRhcnkgdXJnZXMgd2lsbCBiZSBzYXRlZCBpbiBkb3VibGUgcXVpY2sgdGltZSB3aGVuIHlvdSBjb21lIFxuICAgIHRvIGx1eHVyaWF0ZSBpbiB0aGUgdW5tYXRjaGVkIHN1cnJvdW5kaW5ncyBvZiB0aGlzICdlcmUgZWF0ZXJ5LlxuICAgIDxici8+XG4gICAgPGJyLz5cbiAgICBXaGF0IGhhdmUgeW91IGEgaGFua2VyaW5nIGZvciB5b3VuZyBtYXN0ZXIvbWlzdHJlc3MvdW5uYW1lZCBcbiAgICB0cmF2ZWxsZXIgZnJvbSB0aGUgcm9hZD8gQ291bGQgaXQgYmUgdGhhdCB5b3UgaGF2ZSB5b3VyIGhlYXJ0IHNldCBcbiAgICBmaXJtbHkgdXBvbiBhbiBpbnRpbWF0ZSByZW5kZXp2b3VzIHdpdGggYSBib3dsIG9mIG91ciBmYW1lZCBodW5rcyBcbiAgICBvZiBzd2VhdHkgY2hlZXNlPyBXZWxsLCBJIHdvdWxkbid0IGJsYW1lIHlvdSBpZiB5b3UgZGlkLiBNb3Jlb3ZlciwgXG4gICAgSSdkIHNob3V0IHlvdXIgYWNjbGFpbSB0byB0aGUgaGVhdmVucyBhbmQgaW5zaXN0IHRoYXQgaWYgZXZlciB0aGVyZSBcbiAgICB3ZXJlIGFuIGluZGl2aWR1YWwgdGhhdCBuZWVkZWQgdG8gYmUgdHJ1c3NlZCB1cCBpbiBmaW5lcnkgYW5kIFxuICAgIHNob3dlcmVkIHdpdGggY2l2aWMgaG9ub3VycyBhbmQgY2hpcnJ1cGluZyBjaGVlcnMgdGhlbiBoZXJlLCBpbiBcbiAgICBmYWN0LCBzdGFuZHMgdGhhdCBwZXJzb24uYDtcbiAgICBjb3B5RGl2LmFwcGVuZENoaWxkKHApO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXJEaXYpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZERpdik7XG59O1xuXG5leHBvcnQgeyBwYWdlTG9hZCB9OyJdLCJzb3VyY2VSb290IjoiIn0=