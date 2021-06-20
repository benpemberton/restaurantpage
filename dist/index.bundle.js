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



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = () => {
    const backgroundDiv = document.getElementById('background');

    const menuItems = [
        {
            name: 'Arancini',
            copy: 'Lovely, scrumptious balls of rice covered in ' + 
            'breadcrumbs and other good things.',
            pic: 'arancini.jpg'
        },
        {
            name: 'Risotto',
            copy: 'Slowly cooked rice with mushrooms. Full of lovely, ' + 
            'wholesome flavours.',
            pic: 'risotto.jpg'
        },
        {
            name: 'Caprese',
            copy: 'The freshest of the fresh! Tomatoes and mozarella, ' + 
            'and a bucketload of oil. Delightful.',
            pic: 'caprese.jpg'
        },
        {
            name: 'Lasagne',
            copy: 'Old faithful. Who can resist this multi-layered ' + 
            'stalwart of the Italian cuisine scene? Not I.',
            pic: 'lasagne.jpg'
        }
    ]

    let menuDivs = [];

    for (let i = 0; i < 4; i++) {
        menuDivs[i] = document.createElement('div');
        menuDivs[i].setAttribute('class', 'menu-item');

        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        img.src = menuItems[i].pic;
        h3.textContent = menuItems[i].name;
        p.textContent = menuItems[i].copy;

        menuDivs[i].appendChild(img);
        menuDivs[i].appendChild(h3);
        menuDivs[i].appendChild(p);

        backgroundDiv.appendChild(menuDivs[i]);
    }

    console.log(menuDivs);
    console.log(menuItems);

    // const p = document.createElement('p');
    // p.innerHTML = `Oh yes indeedy! Welcome to this fancy pants 
    // outside dining experience. All of your culinary desire and 
    // alimentary urges will be sated in double quick time when you come 
    // to luxuriate in the unmatched surroundings of this 'ere eatery.
    // <br/>
    // <br/>
    // What have you a hankering for young master/mistress/unnamed 
    // traveller from the road? Could it be that you have your heart set 
    // firmly upon an intimate rendezvous with a bowl of our famed hunks 
    // of sweaty cheese? Well, I wouldn't blame you if you did. Moreover, 
    // I'd shout your acclaim to the heavens and insist that if ever there 
    // were an individual that needed to be trussed up in finery and 
    // showered with civic honours and chirruping cheers then here, in 
    // fact, stands that person.`;
    // copyDiv.appendChild(p);
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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



window.onload = (0,_initial_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();

const tabs = document.querySelectorAll('li');
tabs.forEach(tab => {
    tab.addEventListener('click', switchTabs);
})

function switchTabs(e) {
    if (!(e.target.classList.contains('current'))) {
        clearContents();

        e.target.classList.add('current');

        tabs.forEach(tab => {
            if (tab.id !== (e.target.id) && 
            tab.classList.contains('current')) {

                tab.classList.remove('current');
            
            }
        });

        const module = e.target.id;

        switch(module) {
            case 'menu':
                (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
                break;
            case 'home':
                home();
                break;
            case 'contact':
                contact();
                break;
        }  

    }
}

function clearContents() {
    const backgroundDiv = document.getElementById('background');
    const divs = backgroundDiv.querySelectorAll('div');

    divs.forEach(div => div.remove());
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbml0aWFsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxtQ0FBbUMsS0FBSztBQUN4Qzs7QUFFQTs7QUFFQSw4QkFBOEIsUUFBUTs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4REE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixPQUFPO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDdEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ053QztBQUNQOztBQUVqQyxnQkFBZ0IscURBQVE7O0FBRXhCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiw4Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDIiwiZmlsZSI6ImluZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHBhZ2VMb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlckRpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0FsIEZyZXNjbyBSZXN0YXVyYW50JztcbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBtYWtlVGFiID0gKG5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7bmFtZX1gKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RhYicpO1xuXG4gICAgICAgIGNvbnN0IGNhcE5hbWUgPSBuYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcblxuICAgICAgICBsaW5rLnRleHRDb250ZW50ID0gYCR7Y2FwTmFtZX1gO1xuXG4gICAgICAgIHRhYnMuYXBwZW5kQ2hpbGQobGluayk7XG4gICAgfVxuXG4gICAgbWFrZVRhYignbWVudScpO1xuICAgIG1ha2VUYWIoJ2hvbWUnKTtcbiAgICBtYWtlVGFiKCdjb250YWN0Jyk7XG5cbiAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQodGFicyk7XG5cbiAgICBjb25zdCBiYWNrZ3JvdW5kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja2dyb3VuZERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2JhY2tncm91bmQnKTtcblxuICAgIGNvbnN0IGNvcHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb3B5RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29weScpO1xuICAgIGJhY2tncm91bmREaXYuYXBwZW5kQ2hpbGQoY29weURpdik7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuaW5uZXJIVE1MID0gYE9oIHllcyBpbmRlZWR5ISBXZWxjb21lIHRvIHRoaXMgZmFuY3kgcGFudHMgXG4gICAgb3V0c2lkZSBkaW5pbmcgZXhwZXJpZW5jZS4gQWxsIG9mIHlvdXIgY3VsaW5hcnkgZGVzaXJlIGFuZCBcbiAgICBhbGltZW50YXJ5IHVyZ2VzIHdpbGwgYmUgc2F0ZWQgaW4gZG91YmxlIHF1aWNrIHRpbWUgd2hlbiB5b3UgY29tZSBcbiAgICB0byBsdXh1cmlhdGUgaW4gdGhlIHVubWF0Y2hlZCBzdXJyb3VuZGluZ3Mgb2YgdGhpcyAnZXJlIGVhdGVyeS5cbiAgICA8YnIvPlxuICAgIDxici8+XG4gICAgV2hhdCBoYXZlIHlvdSBhIGhhbmtlcmluZyBmb3IgeW91bmcgbWFzdGVyL21pc3RyZXNzL3VubmFtZWQgXG4gICAgdHJhdmVsbGVyIGZyb20gdGhlIHJvYWQ/IENvdWxkIGl0IGJlIHRoYXQgeW91IGhhdmUgeW91ciBoZWFydCBzZXQgXG4gICAgZmlybWx5IHVwb24gYW4gaW50aW1hdGUgcmVuZGV6dm91cyB3aXRoIGEgYm93bCBvZiBvdXIgZmFtZWQgaHVua3MgXG4gICAgb2Ygc3dlYXR5IGNoZWVzZT8gV2VsbCwgSSB3b3VsZG4ndCBibGFtZSB5b3UgaWYgeW91IGRpZC4gTW9yZW92ZXIsIFxuICAgIEknZCBzaG91dCB5b3VyIGFjY2xhaW0gdG8gdGhlIGhlYXZlbnMgYW5kIGluc2lzdCB0aGF0IGlmIGV2ZXIgdGhlcmUgXG4gICAgd2VyZSBhbiBpbmRpdmlkdWFsIHRoYXQgbmVlZGVkIHRvIGJlIHRydXNzZWQgdXAgaW4gZmluZXJ5IGFuZCBcbiAgICBzaG93ZXJlZCB3aXRoIGNpdmljIGhvbm91cnMgYW5kIGNoaXJydXBpbmcgY2hlZXJzIHRoZW4gaGVyZSwgaW4gXG4gICAgZmFjdCwgc3RhbmRzIHRoYXQgcGVyc29uLmA7XG4gICAgY29weURpdi5hcHBlbmRDaGlsZChwKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhY2tncm91bmREaXYpO1xufTtcblxuZXhwb3J0IHsgcGFnZUxvYWQgfTsiLCJjb25zdCBtZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJhY2tncm91bmREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZCcpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQXJhbmNpbmknLFxuICAgICAgICAgICAgY29weTogJ0xvdmVseSwgc2NydW1wdGlvdXMgYmFsbHMgb2YgcmljZSBjb3ZlcmVkIGluICcgKyBcbiAgICAgICAgICAgICdicmVhZGNydW1icyBhbmQgb3RoZXIgZ29vZCB0aGluZ3MuJyxcbiAgICAgICAgICAgIHBpYzogJ2FyYW5jaW5pLmpwZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ1Jpc290dG8nLFxuICAgICAgICAgICAgY29weTogJ1Nsb3dseSBjb29rZWQgcmljZSB3aXRoIG11c2hyb29tcy4gRnVsbCBvZiBsb3ZlbHksICcgKyBcbiAgICAgICAgICAgICd3aG9sZXNvbWUgZmxhdm91cnMuJyxcbiAgICAgICAgICAgIHBpYzogJ3Jpc290dG8uanBnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnQ2FwcmVzZScsXG4gICAgICAgICAgICBjb3B5OiAnVGhlIGZyZXNoZXN0IG9mIHRoZSBmcmVzaCEgVG9tYXRvZXMgYW5kIG1vemFyZWxsYSwgJyArIFxuICAgICAgICAgICAgJ2FuZCBhIGJ1Y2tldGxvYWQgb2Ygb2lsLiBEZWxpZ2h0ZnVsLicsXG4gICAgICAgICAgICBwaWM6ICdjYXByZXNlLmpwZydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ0xhc2FnbmUnLFxuICAgICAgICAgICAgY29weTogJ09sZCBmYWl0aGZ1bC4gV2hvIGNhbiByZXNpc3QgdGhpcyBtdWx0aS1sYXllcmVkICcgKyBcbiAgICAgICAgICAgICdzdGFsd2FydCBvZiB0aGUgSXRhbGlhbiBjdWlzaW5lIHNjZW5lPyBOb3QgSS4nLFxuICAgICAgICAgICAgcGljOiAnbGFzYWduZS5qcGcnXG4gICAgICAgIH1cbiAgICBdXG5cbiAgICBsZXQgbWVudURpdnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgIG1lbnVEaXZzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1lbnVEaXZzW2ldLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWVudS1pdGVtJyk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBpbWcuc3JjID0gbWVudUl0ZW1zW2ldLnBpYztcbiAgICAgICAgaDMudGV4dENvbnRlbnQgPSBtZW51SXRlbXNbaV0ubmFtZTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IG1lbnVJdGVtc1tpXS5jb3B5O1xuXG4gICAgICAgIG1lbnVEaXZzW2ldLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIG1lbnVEaXZzW2ldLmFwcGVuZENoaWxkKGgzKTtcbiAgICAgICAgbWVudURpdnNbaV0uYXBwZW5kQ2hpbGQocCk7XG5cbiAgICAgICAgYmFja2dyb3VuZERpdi5hcHBlbmRDaGlsZChtZW51RGl2c1tpXSk7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cobWVudURpdnMpO1xuICAgIGNvbnNvbGUubG9nKG1lbnVJdGVtcyk7XG5cbiAgICAvLyBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIC8vIHAuaW5uZXJIVE1MID0gYE9oIHllcyBpbmRlZWR5ISBXZWxjb21lIHRvIHRoaXMgZmFuY3kgcGFudHMgXG4gICAgLy8gb3V0c2lkZSBkaW5pbmcgZXhwZXJpZW5jZS4gQWxsIG9mIHlvdXIgY3VsaW5hcnkgZGVzaXJlIGFuZCBcbiAgICAvLyBhbGltZW50YXJ5IHVyZ2VzIHdpbGwgYmUgc2F0ZWQgaW4gZG91YmxlIHF1aWNrIHRpbWUgd2hlbiB5b3UgY29tZSBcbiAgICAvLyB0byBsdXh1cmlhdGUgaW4gdGhlIHVubWF0Y2hlZCBzdXJyb3VuZGluZ3Mgb2YgdGhpcyAnZXJlIGVhdGVyeS5cbiAgICAvLyA8YnIvPlxuICAgIC8vIDxici8+XG4gICAgLy8gV2hhdCBoYXZlIHlvdSBhIGhhbmtlcmluZyBmb3IgeW91bmcgbWFzdGVyL21pc3RyZXNzL3VubmFtZWQgXG4gICAgLy8gdHJhdmVsbGVyIGZyb20gdGhlIHJvYWQ/IENvdWxkIGl0IGJlIHRoYXQgeW91IGhhdmUgeW91ciBoZWFydCBzZXQgXG4gICAgLy8gZmlybWx5IHVwb24gYW4gaW50aW1hdGUgcmVuZGV6dm91cyB3aXRoIGEgYm93bCBvZiBvdXIgZmFtZWQgaHVua3MgXG4gICAgLy8gb2Ygc3dlYXR5IGNoZWVzZT8gV2VsbCwgSSB3b3VsZG4ndCBibGFtZSB5b3UgaWYgeW91IGRpZC4gTW9yZW92ZXIsIFxuICAgIC8vIEknZCBzaG91dCB5b3VyIGFjY2xhaW0gdG8gdGhlIGhlYXZlbnMgYW5kIGluc2lzdCB0aGF0IGlmIGV2ZXIgdGhlcmUgXG4gICAgLy8gd2VyZSBhbiBpbmRpdmlkdWFsIHRoYXQgbmVlZGVkIHRvIGJlIHRydXNzZWQgdXAgaW4gZmluZXJ5IGFuZCBcbiAgICAvLyBzaG93ZXJlZCB3aXRoIGNpdmljIGhvbm91cnMgYW5kIGNoaXJydXBpbmcgY2hlZXJzIHRoZW4gaGVyZSwgaW4gXG4gICAgLy8gZmFjdCwgc3RhbmRzIHRoYXQgcGVyc29uLmA7XG4gICAgLy8gY29weURpdi5hcHBlbmRDaGlsZChwKTtcbn1cblxuZXhwb3J0IHsgbWVudSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vaW5pdGlhbC5qcyc7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51LmpzJztcblxud2luZG93Lm9ubG9hZCA9IHBhZ2VMb2FkKCk7XG5cbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3dpdGNoVGFicyk7XG59KVxuXG5mdW5jdGlvbiBzd2l0Y2hUYWJzKGUpIHtcbiAgICBpZiAoIShlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2N1cnJlbnQnKSkpIHtcbiAgICAgICAgY2xlYXJDb250ZW50cygpO1xuXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblxuICAgICAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgIGlmICh0YWIuaWQgIT09IChlLnRhcmdldC5pZCkgJiYgXG4gICAgICAgICAgICB0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjdXJyZW50JykpIHtcblxuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbW9kdWxlID0gZS50YXJnZXQuaWQ7XG5cbiAgICAgICAgc3dpdGNoKG1vZHVsZSkge1xuICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgICAgbWVudSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgICAgICAgaG9tZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgICAgICAgICAgY29udGFjdCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9ICBcblxuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJDb250ZW50cygpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQnKTtcbiAgICBjb25zdCBkaXZzID0gYmFja2dyb3VuZERpdi5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcblxuICAgIGRpdnMuZm9yRWFjaChkaXYgPT4gZGl2LnJlbW92ZSgpKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9