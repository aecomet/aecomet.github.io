/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0,
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([4,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Profile_json_1 = __importDefault(__webpack_require__(1));
exports.ProfileJSON = Profile_json_1.default;
const Skill_json_1 = __importDefault(__webpack_require__(2));
exports.SkillJSON = Skill_json_1.default;
const Contact_json_1 = __importDefault(__webpack_require__(3));
exports.ContactJSON = Contact_json_1.default;


/***/ }),

/***/ 1:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"My Profile\",\"body\":{\"logo\":\"public/static/images/logo.png\",\"name\":\"hiyoko 3\",\"note\":\"A piyo piyo server side engineer\"}}");

/***/ }),

/***/ 2:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Skill Set\",\"body\":{\"urls\":[{\"name\":\"Github\",\"url\":\"https://github.com/hiyoko3\"},{\"name\":\"AtCoder\",\"url\":\"https://atcoder.jp/users/ae_hiyoko3\"},{\"name\":\"Qiita\",\"url\":\"https://qiita.com/hiyoko3\"}],\"skills\":[\"C++\",\"JavaScript / Node.js / TypeScript / Vue.js / React.js\",\"Java\",\"Kotlin\",\"MySQL\",\"Perl\",\"PHP / Laravel\",\"Python\",\"Ruby / Ruby on Rails\",\"Swift\"]}}");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Contact Me\",\"body\":{\"text\":\"sb.gm.0823@***\",\"subtext\":\"***にはgmail.comを入力してください\"}}");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* === Main Application bundle file === */
// Libraries
__webpack_require__(6);
__webpack_require__(26);
// Custom Style and Script
__webpack_require__(28);
__webpack_require__(5);
/* === Service Worker === */
// Checking support a `service worker`
if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    // const registration = runtime.register()
}
else {
    console.warn('This browser doesn\'t use a service worker');
}


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __webpack_require__(0);
/* === Footer === */
class FooterComponent {
    constructor() {
        const footerYear = document.querySelector('footer span#year');
        footerYear.innerHTML = `${new Date().getFullYear()}`;
    }
}
class MainComponent {
    onItemClick() {
        const modal = document.querySelector('#modal');
        const header = modal.querySelector('#modal-header .h1');
        const body = modal.querySelector('#modal-body .h3');
        const overlay = document.querySelector('#overlay');
        // set data
        const htmlTemplate = this.buildTemplate();
        header.innerHTML = htmlTemplate.header;
        body.innerHTML = htmlTemplate.body;
        // visible modal view
        modal.classList.add('d-block', 'visible-transition');
        overlay.classList.add('d-block', 'visible-transition');
        // unvisible event
        const closeBtn = modal.querySelector('button.modal-close');
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('d-block', 'visible-transition');
            overlay.classList.remove('d-block', 'visible-transition');
        });
        overlay.addEventListener('click', () => {
            modal.classList.remove('d-block', 'visible-transition');
            overlay.classList.remove('d-block', 'visible-transition');
        });
    }
    buildTemplate() {
        return {
            header: '',
            body: ''
        };
    }
    ;
}
class SkillComponent extends MainComponent {
    constructor() {
        super();
        this.skill = document.querySelector('#skill');
        this.skill.addEventListener('click', () => { this.onItemClick(); });
    }
    buildTemplate() {
        const urls = data_1.SkillJSON.body.urls;
        const skills = data_1.SkillJSON.body.skills;
        const node = document.createElement('div');
        const urlList = document.createElement('ul');
        urls.forEach((item, idx) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.setAttribute('href', item.url);
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener noreferrer');
            a.classList.add('link');
            a.innerHTML = item.name;
            li.appendChild(a);
            urlList.appendChild(li);
        });
        const skillList = document.createElement('ul');
        skills.forEach((item, idx) => {
            const li = document.createElement('li');
            li.innerHTML = item;
            skillList.appendChild(li);
        });
        node.appendChild(urlList);
        node.appendChild(skillList);
        return {
            header: data_1.SkillJSON.header,
            body: node.outerHTML
        };
    }
    ;
}
class ProfileComponent extends MainComponent {
    constructor() {
        super();
        this.profile = document.querySelector('#profile');
        this.profile.addEventListener('click', () => { this.onItemClick(); });
    }
    buildTemplate() {
        const node = document.createElement('div');
        node.classList.add('text-center');
        const logo = document.createElement('img');
        logo.setAttribute('src', data_1.ProfileJSON.body.logo);
        logo.setAttribute('alt', 'logo-img');
        logo.setAttribute('height', '150');
        logo.classList.add('d-inline-block');
        const name = document.createElement('div');
        name.classList.add('h1');
        name.innerHTML = data_1.ProfileJSON.body.name;
        const note = document.createElement('div');
        note.classList.add('my-3');
        note.innerHTML = data_1.ProfileJSON.body.note;
        node.appendChild(logo);
        node.appendChild(name);
        node.appendChild(note);
        return {
            header: data_1.ProfileJSON.header,
            body: node.outerHTML
        };
    }
}
class ContactComponent extends MainComponent {
    constructor() {
        super();
        this.contact = document.querySelector('#contact');
        this.contact.addEventListener('click', () => { this.onItemClick(); });
    }
    buildTemplate() {
        const node = document.createElement('div');
        node.classList.add('text-center');
        const text = document.createElement('div');
        text.classList.add('my-1');
        text.innerHTML = data_1.ContactJSON.body.text;
        const subText = document.createElement('div');
        subText.classList.add('my-2');
        subText.innerHTML = data_1.ContactJSON.body.subtext;
        node.appendChild(text);
        node.appendChild(subText);
        return {
            header: data_1.ContactJSON.header,
            body: node.outerHTML
        };
    }
}
/* === App Event === */
document.addEventListener('DOMContentLoaded', e => {
    const footer = new FooterComponent();
    const skill = new SkillComponent();
    const profile = new ProfileComponent();
    const contact = new ContactComponent();
});


/***/ })

/******/ });