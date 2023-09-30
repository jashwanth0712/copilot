/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = void 0;
const vscode = __webpack_require__(1);
function getCurrentLocalTime() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedTime = `${hours % 12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
    return formattedTime;
}
function addOpacityTextOverlay() {
    // Define the text
    const opacityText = 'hello';
    // Get the active text editor and the current cursor position
    const editor = vscode.window.activeTextEditor;
    const position = editor?.selection.active;
    // Create a decoration type for the overlay
    const decorationType = vscode.window.createTextEditorDecorationType({
        opacity: '0.5',
        before: {
            contentText: opacityText,
        },
    });
    if (editor && position) {
        // Insert the opacity text at the cursor position
        editor.edit((editBuilder) => {
            editBuilder.insert(position, opacityText);
        });
    }
}
function insertCurrentLocalTime() {
    const editor = vscode.window.activeTextEditor;
    if (editor) {
        const currentTime = getCurrentLocalTime();
        editor.edit((editBuilder) => {
            editBuilder.insert(editor.selection.active, currentTime);
        });
    }
}
function activate(context) {
    context.subscriptions.push(vscode.commands.registerCommand('extension.addOpacityOverlay', () => {
        addOpacityTextOverlay();
    }));
    context.subscriptions.push(vscode.commands.registerCommand('extension.insertLocalTime', () => {
        addOpacityTextOverlay();
    }));
}
exports.activate = activate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map