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
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Profile\",\"body\":{\"logo\":\"public/static/images/logo.png\",\"name\":\"hiyoko 3\",\"note\":[\"サーバーサイドエンジニアをやっています。\",\"まだまだひよっこです。\"],\"social_links\":[{\"name\":\"Github\",\"url\":\"https://github.com/hiyoko3\"},{\"name\":\"AtCoder\",\"url\":\"https://atcoder.jp/users/ae_hiyoko3\"},{\"name\":\"Twitter\",\"url\":\"https://twitter.com/ae_hiyoko3\"},{\"name\":\"Qiita\",\"url\":\"https://qiita.com/hiyoko3\"}]}}");

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Skill & Products\",\"body\":{\"skills\":[\"C++\",\"JavaScript / Node.js / TypeScript / Vue.js / React.js\",\"Java\",\"Kotlin\",\"MySQL\",\"Perl\",\"PHP / Laravel\",\"Python\",\"Ruby / Ruby on Rails\",\"Swift\"],\"products\":[{\"name\":\"NaruHiyo Project\",\"logo\":\"public/static/images/naruhiyo.png\",\"desc\":\"友人と色々なモノを作ったり勉強したり、エンジニアとして高め合うために設立したチーム。リンクはチームのポートフォリオへ飛びます\",\"github\":\"https://github.com/naruhiyo/naruhiyo.github.io\",\"lang\":[\"React.js\"]},{\"name\":\"Memoma\",\"logo\":\"public/static/images/memoma.gif\",\"desc\":\"Markdown変換に対応したクロスプラットフォーム型メモアプリ。マルチカラムに対応\",\"github\":\"https://github.com/naruhiyo/Memoma\",\"lang\":[\"Electron\"]},{\"name\":\"Partytion\",\"logo\":\"public/static/images/partytion.gif\",\"desc\":\"「飲み会の盛り上げる」をコンセプトに作成したクイズ型のiOSアプリ\",\"github\":\"https://github.com/naruhiyo/partytion\",\"lang\":[\"Swift 5\"]},{\"name\":\"研究室HP\",\"logo\":\"public/static/images/ishilab.png\",\"desc\":\"学生時代に作成した研究室のHP。SPAで構築\",\"github\":\"https://github.com/ishilab-apps/ishilab\",\"lang\":[\"Vue.js\"]},{\"name\":\"AtCoder 過去問集\",\"logo\":\"public/static/images/no_image.png\",\"desc\":\"AtCoderの過去問\",\"github\":\"https://github.com/hiyoko3/practice-contest\",\"lang\":[\"C++\"]}]}}");

/***/ }),
/* 3 */
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Contact Me\",\"body\":{\"text\":\"sb.gm.0823@***\",\"subtext\":\"***にはgmail.comを入力してください\"}}");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* === Main Application bundle file === */
// Libraries
__webpack_require__(11);
__webpack_require__(31);
// Custom Style and Script
__webpack_require__(33);
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FooterComponent_1 = __webpack_require__(6);
const ProfileComponent_1 = __webpack_require__(7);
const SkillComponent_1 = __webpack_require__(8);
const ContactComponent_1 = __webpack_require__(9);
const MobileComponent_1 = __webpack_require__(10);
/* === App Event === */
document.addEventListener('DOMContentLoaded', e => {
    // view component
    const footer = new FooterComponent_1.FooterComponent();
    const profile = new ProfileComponent_1.ProfileComponent();
    const skill = new SkillComponent_1.SkillComponent();
    const contact = new ContactComponent_1.ContactComponent();
    // responsive component
    const mobile = new MobileComponent_1.MobileComponent();
    // render view
    footer.render();
    profile.render();
    skill.render();
    contact.render();
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* === Footer === */
class FooterComponent {
    render() {
        const footerYear = document.querySelector('footer span#year');
        footerYear.innerHTML = `${new Date().getFullYear()}`;
    }
}
exports.FooterComponent = FooterComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __webpack_require__(0);
class ProfileComponent {
    constructor() {
        const matchView = (matchMedia('(max-width:480px)').matches) ? '.mobile' : '.desktop';
        this.profile = document.querySelector(`#profile ${matchView}`);
    }
    render() {
        const json = data_1.ProfileJSON;
        // DOM
        const header = this.profile.querySelector('#profile-header');
        const name = this.profile.querySelector('#profile-name');
        const note = this.profile.querySelector('#profile-note');
        const logo = this.profile.querySelector('#profile-logo');
        const socialLinks = this.profile.querySelector('#profile-social-links');
        // Insert JSON
        header.innerHTML = json.header;
        name.innerHTML = json.body.name;
        logo.src = json.body.logo;
        json.body.note.forEach((n) => {
            const p = document.createElement('p');
            p.classList.add('mr-2');
            p.innerHTML = n;
            note.append(p);
        });
        json.body.social_links.forEach((e) => {
            const li = document.createElement('li');
            li.classList.add('mx-2');
            const a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('rel', 'noopener');
            a.innerText = e.name;
            a.href = e.url;
            li.appendChild(a);
            socialLinks.append(li);
        });
        return;
    }
}
exports.ProfileComponent = ProfileComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __webpack_require__(0);
class SkillComponent {
    constructor() {
        const matchView = (matchMedia('(max-width:480px)').matches) ? '.mobile' : '.desktop';
        this.skill = document.querySelector(`#skill ${matchView}`);
    }
    render() {
        const json = data_1.SkillJSON;
        // DOM
        const header = this.skill.querySelector('#skill-header');
        const skillList = this.skill.querySelector('#skill-list');
        const productList = this.skill.querySelector('#product-list');
        // Insert JSON
        header.innerHTML = json.header;
        json.body.skills.forEach((skill) => {
            const li = document.createElement('li');
            li.innerHTML = skill;
            skillList.append(li);
        });
        json.body.products.forEach((product) => {
            const li = document.createElement('li');
            li.innerHTML = product.name;
            li.addEventListener('click', e => { this.setContent(product); });
            productList.append(li);
        });
    }
    setContent(product) {
        // DOM
        const logo = this.skill.querySelector('#product-logo');
        const lang = this.skill.querySelector('#product-lang');
        const name = this.skill.querySelector('#product-name');
        const desc = this.skill.querySelector('#product-desc');
        const github = this.skill.querySelector('#product-github');
        logo.src = product.logo;
        name.innerHTML = product.name;
        desc.innerHTML = product.desc;
        if (product.github != "") {
            github.href = product.github;
            github.classList.add('d-inline-block');
            github.classList.remove('d-none');
        }
        else {
            github.classList.add('d-none');
            github.classList.remove('d-inline-block');
        }
        lang.innerHTML = '';
        product.lang.forEach((l) => {
            const span = document.createElement('span');
            span.innerHTML = l;
            lang.append(span);
        });
    }
}
exports.SkillComponent = SkillComponent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = __webpack_require__(0);
class ContactComponent {
    constructor() {
        const matchView = (matchMedia('(max-width:480px)').matches) ? '.mobile' : '.desktop';
        this.contact = document.querySelector(`#contact ${matchView}`);
    }
    render() {
        const json = data_1.ContactJSON;
        // DOM
        const header = this.contact.querySelector('#contact-header');
        const text = this.contact.querySelector('#contact-text');
        const subtext = this.contact.querySelector('#contact-subtext');
        // Insert JSON
        header.innerHTML = json.header;
        text.innerHTML = json.body.text;
        subtext.innerHTML = json.body.subtext;
    }
}
exports.ContactComponent = ContactComponent;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ModalModule {
    constructor() {
        this.body = document.body;
        this.help = this.body.querySelector('#help');
        this.modal = this.body.querySelector('#modal');
        this.overlay = this.body.querySelector('#overlay');
    }
    handler() {
        this.help.addEventListener('click', e => {
            this.body.classList.add('no-scroll');
            this.modal.classList.add('d-block', 'visible-transition');
            this.overlay.classList.add('d-block', 'visible-transition');
        });
        this.overlay.addEventListener('click', () => {
            this.body.classList.remove('no-scroll');
            this.modal.classList.remove('d-block', 'visible-transition');
            this.overlay.classList.remove('d-block', 'visible-transition');
        });
    }
}
class MobileComponent {
    constructor() {
        this.views = [];
        this.viewIdx = 0;
        // If we handle mobile view, the main starts flick module
        if (!matchMedia('(max-width:480px)').matches)
            return;
        this.views = [
            document.querySelector('#profile'),
            document.querySelector('#skill'),
            document.querySelector('#contact')
        ];
        this.breadcrumbs = document.querySelector('.breadcrumbs');
        this.modalModule = new ModalModule();
        this.onSwipe();
        this.modalModule.handler();
    }
    onSwipe() {
        const main = document.querySelector('#main');
        const DISTANCE = 120;
        let startX = 0;
        let endX = 0;
        main.addEventListener('touchstart', e => {
            startX = e.touches[0].pageX;
        });
        main.addEventListener('touchmove', e => {
            endX = e.changedTouches[0].pageX;
        });
        main.addEventListener('touchend', e => {
            if (endX == 0)
                return;
            if (startX > (endX + DISTANCE)) {
                // left swipe
                this.viewChanger(main, 'left');
            }
            else if ((startX + DISTANCE) < endX) {
                // right swipe
                this.viewChanger(main, 'right');
            }
            startX = endX = 0;
        });
    }
    viewChanger(main, state) {
        // invisible current view
        const prevView = this.views[this.viewIdx];
        prevView.classList.add('d-none');
        prevView.classList.remove('d-block');
        this.setBreadcrumb(prevView);
        switch (state) {
            case 'left':
                this.viewIdx = (this.viewIdx >= (this.views.length - 1)) ? 0 : (this.viewIdx + 1);
                break;
            case 'right':
                this.viewIdx = (this.viewIdx <= 0) ? (this.views.length - 1) : (this.viewIdx - 1);
                break;
        }
        // visible new view
        const nextView = this.views[this.viewIdx];
        nextView.classList.add('d-block');
        nextView.classList.remove('d-none');
        this.setBreadcrumb(nextView);
    }
    setBreadcrumb(view) {
        var _a;
        const pageId = view.getAttribute('id');
        const breadcrumb = (_a = this.breadcrumbs) === null || _a === void 0 ? void 0 : _a.querySelector(`span[data-target="${pageId}"]`);
        breadcrumb.classList.toggle('active');
    }
}
exports.MobileComponent = MobileComponent;


/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0cy9Gb290ZXJDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NraWxsL1NraWxsQ29tcG9uZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Nb2JpbGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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Y0FBYztBQUM1RCxlQUFlLG1CQUFPLENBQUMsQ0FBb0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsMERBQTBELFVBQVU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQmE7QUFDYiw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4SEFBOEgsT0FBTztBQUNySTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRkEseUMiLCJmaWxlIjoicHVibGljL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0MDogMCxcbiBcdFx0MTogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goWzQsMl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFByb2ZpbGVfanNvbl8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL1Byb2ZpbGUuanNvblwiKSk7XG5leHBvcnRzLlByb2ZpbGVKU09OID0gUHJvZmlsZV9qc29uXzEuZGVmYXVsdDtcbmNvbnN0IFNraWxsX2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Ta2lsbC5qc29uXCIpKTtcbmV4cG9ydHMuU2tpbGxKU09OID0gU2tpbGxfanNvbl8xLmRlZmF1bHQ7XG5jb25zdCBDb250YWN0X2pzb25fMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi9Db250YWN0Lmpzb25cIikpO1xuZXhwb3J0cy5Db250YWN0SlNPTiA9IENvbnRhY3RfanNvbl8xLmRlZmF1bHQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qID09PSBNYWluIEFwcGxpY2F0aW9uIGJ1bmRsZSBmaWxlID09PSAqL1xuLy8gTGlicmFyaWVzXG5yZXF1aXJlKFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3NcIik7XG5yZXF1aXJlKFwibW9kZXJuLWNzcy1yZXNldC9kaXN0L3Jlc2V0Lm1pbi5jc3NcIik7XG4vLyBDdXN0b20gU3R5bGUgYW5kIFNjcmlwdFxucmVxdWlyZShcIi4vc3R5bGUuc2Nzc1wiKTtcbnJlcXVpcmUoXCIuL2NvbXBvbmVudHMvbWFpbi50c1wiKTtcbi8qID09PSBTZXJ2aWNlIFdvcmtlciA9PT0gKi9cbi8vIENoZWNraW5nIHN1cHBvcnQgYSBgc2VydmljZSB3b3JrZXJgXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJlxuICAgICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcpKSB7XG4gICAgLy8gY29uc3QgcmVnaXN0cmF0aW9uID0gcnVudGltZS5yZWdpc3RlcigpXG59XG5lbHNlIHtcbiAgICBjb25zb2xlLndhcm4oJ1RoaXMgYnJvd3NlciBkb2VzblxcJ3QgdXNlIGEgc2VydmljZSB3b3JrZXInKTtcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgRm9vdGVyQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vbGF5b3V0cy9Gb290ZXJDb21wb25lbnRcIik7XG5jb25zdCBQcm9maWxlQ29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9wcm9maWxlL1Byb2ZpbGVDb21wb25lbnRcIik7XG5jb25zdCBTa2lsbENvbXBvbmVudF8xID0gcmVxdWlyZShcIi4vc2tpbGwvU2tpbGxDb21wb25lbnRcIik7XG5jb25zdCBDb250YWN0Q29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9jb250YWN0L0NvbnRhY3RDb21wb25lbnRcIik7XG5jb25zdCBNb2JpbGVDb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL01vYmlsZUNvbXBvbmVudFwiKTtcbi8qID09PSBBcHAgRXZlbnQgPT09ICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZSA9PiB7XG4gICAgLy8gdmlldyBjb21wb25lbnRcbiAgICBjb25zdCBmb290ZXIgPSBuZXcgRm9vdGVyQ29tcG9uZW50XzEuRm9vdGVyQ29tcG9uZW50KCk7XG4gICAgY29uc3QgcHJvZmlsZSA9IG5ldyBQcm9maWxlQ29tcG9uZW50XzEuUHJvZmlsZUNvbXBvbmVudCgpO1xuICAgIGNvbnN0IHNraWxsID0gbmV3IFNraWxsQ29tcG9uZW50XzEuU2tpbGxDb21wb25lbnQoKTtcbiAgICBjb25zdCBjb250YWN0ID0gbmV3IENvbnRhY3RDb21wb25lbnRfMS5Db250YWN0Q29tcG9uZW50KCk7XG4gICAgLy8gcmVzcG9uc2l2ZSBjb21wb25lbnRcbiAgICBjb25zdCBtb2JpbGUgPSBuZXcgTW9iaWxlQ29tcG9uZW50XzEuTW9iaWxlQ29tcG9uZW50KCk7XG4gICAgLy8gcmVuZGVyIHZpZXdcbiAgICBmb290ZXIucmVuZGVyKCk7XG4gICAgcHJvZmlsZS5yZW5kZXIoKTtcbiAgICBza2lsbC5yZW5kZXIoKTtcbiAgICBjb250YWN0LnJlbmRlcigpO1xufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qID09PSBGb290ZXIgPT09ICovXG5jbGFzcyBGb290ZXJDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZm9vdGVyWWVhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlciBzcGFuI3llYXInKTtcbiAgICAgICAgZm9vdGVyWWVhci5pbm5lckhUTUwgPSBgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YDtcbiAgICB9XG59XG5leHBvcnRzLkZvb3RlckNvbXBvbmVudCA9IEZvb3RlckNvbXBvbmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZGF0YV8xID0gcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9kYXRhXCIpO1xuY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoVmlldyA9IChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOjQ4MHB4KScpLm1hdGNoZXMpID8gJy5tb2JpbGUnIDogJy5kZXNrdG9wJztcbiAgICAgICAgdGhpcy5wcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI3Byb2ZpbGUgJHttYXRjaFZpZXd9YCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QganNvbiA9IGRhdGFfMS5Qcm9maWxlSlNPTjtcbiAgICAgICAgLy8gRE9NXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMucHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1oZWFkZXInKTtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMucHJvZmlsZS5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZS1uYW1lJyk7XG4gICAgICAgIGNvbnN0IG5vdGUgPSB0aGlzLnByb2ZpbGUucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtbm90ZScpO1xuICAgICAgICBjb25zdCBsb2dvID0gdGhpcy5wcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJyNwcm9maWxlLWxvZ28nKTtcbiAgICAgICAgY29uc3Qgc29jaWFsTGlua3MgPSB0aGlzLnByb2ZpbGUucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtc29jaWFsLWxpbmtzJyk7XG4gICAgICAgIC8vIEluc2VydCBKU09OXG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBqc29uLmhlYWRlcjtcbiAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBqc29uLmJvZHkubmFtZTtcbiAgICAgICAgbG9nby5zcmMgPSBqc29uLmJvZHkubG9nbztcbiAgICAgICAganNvbi5ib2R5Lm5vdGUuZm9yRWFjaCgobikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHAuY2xhc3NMaXN0LmFkZCgnbXItMicpO1xuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBuO1xuICAgICAgICAgICAgbm90ZS5hcHBlbmQocCk7XG4gICAgICAgIH0pO1xuICAgICAgICBqc29uLmJvZHkuc29jaWFsX2xpbmtzLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoJ214LTInKTtcbiAgICAgICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ3JlbCcsICdub29wZW5lcicpO1xuICAgICAgICAgICAgYS5pbm5lclRleHQgPSBlLm5hbWU7XG4gICAgICAgICAgICBhLmhyZWYgPSBlLnVybDtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgICAgICAgICAgc29jaWFsTGlua3MuYXBwZW5kKGxpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5leHBvcnRzLlByb2ZpbGVDb21wb25lbnQgPSBQcm9maWxlQ29tcG9uZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkYXRhXzEgPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2RhdGFcIik7XG5jbGFzcyBTa2lsbENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoVmlldyA9IChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOjQ4MHB4KScpLm1hdGNoZXMpID8gJy5tb2JpbGUnIDogJy5kZXNrdG9wJztcbiAgICAgICAgdGhpcy5za2lsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNza2lsbCAke21hdGNoVmlld31gKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBqc29uID0gZGF0YV8xLlNraWxsSlNPTjtcbiAgICAgICAgLy8gRE9NXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuc2tpbGwucXVlcnlTZWxlY3RvcignI3NraWxsLWhlYWRlcicpO1xuICAgICAgICBjb25zdCBza2lsbExpc3QgPSB0aGlzLnNraWxsLnF1ZXJ5U2VsZWN0b3IoJyNza2lsbC1saXN0Jyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RMaXN0ID0gdGhpcy5za2lsbC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1saXN0Jyk7XG4gICAgICAgIC8vIEluc2VydCBKU09OXG4gICAgICAgIGhlYWRlci5pbm5lckhUTUwgPSBqc29uLmhlYWRlcjtcbiAgICAgICAganNvbi5ib2R5LnNraWxscy5mb3JFYWNoKChza2lsbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gc2tpbGw7XG4gICAgICAgICAgICBza2lsbExpc3QuYXBwZW5kKGxpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGpzb24uYm9keS5wcm9kdWN0cy5mb3JFYWNoKChwcm9kdWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBwcm9kdWN0Lm5hbWU7XG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4geyB0aGlzLnNldENvbnRlbnQocHJvZHVjdCk7IH0pO1xuICAgICAgICAgICAgcHJvZHVjdExpc3QuYXBwZW5kKGxpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldENvbnRlbnQocHJvZHVjdCkge1xuICAgICAgICAvLyBET01cbiAgICAgICAgY29uc3QgbG9nbyA9IHRoaXMuc2tpbGwucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtbG9nbycpO1xuICAgICAgICBjb25zdCBsYW5nID0gdGhpcy5za2lsbC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1sYW5nJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLnNraWxsLnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LW5hbWUnKTtcbiAgICAgICAgY29uc3QgZGVzYyA9IHRoaXMuc2tpbGwucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtZGVzYycpO1xuICAgICAgICBjb25zdCBnaXRodWIgPSB0aGlzLnNraWxsLnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWdpdGh1YicpO1xuICAgICAgICBsb2dvLnNyYyA9IHByb2R1Y3QubG9nbztcbiAgICAgICAgbmFtZS5pbm5lckhUTUwgPSBwcm9kdWN0Lm5hbWU7XG4gICAgICAgIGRlc2MuaW5uZXJIVE1MID0gcHJvZHVjdC5kZXNjO1xuICAgICAgICBpZiAocHJvZHVjdC5naXRodWIgIT0gXCJcIikge1xuICAgICAgICAgICAgZ2l0aHViLmhyZWYgPSBwcm9kdWN0LmdpdGh1YjtcbiAgICAgICAgICAgIGdpdGh1Yi5jbGFzc0xpc3QuYWRkKCdkLWlubGluZS1ibG9jaycpO1xuICAgICAgICAgICAgZ2l0aHViLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZ2l0aHViLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgZ2l0aHViLmNsYXNzTGlzdC5yZW1vdmUoJ2QtaW5saW5lLWJsb2NrJyk7XG4gICAgICAgIH1cbiAgICAgICAgbGFuZy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgcHJvZHVjdC5sYW5nLmZvckVhY2goKGwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLmlubmVySFRNTCA9IGw7XG4gICAgICAgICAgICBsYW5nLmFwcGVuZChzcGFuKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Ta2lsbENvbXBvbmVudCA9IFNraWxsQ29tcG9uZW50O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBkYXRhXzEgPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2RhdGEvXCIpO1xuY2xhc3MgQ29udGFjdENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoVmlldyA9IChtYXRjaE1lZGlhKCcobWF4LXdpZHRoOjQ4MHB4KScpLm1hdGNoZXMpID8gJy5tb2JpbGUnIDogJy5kZXNrdG9wJztcbiAgICAgICAgdGhpcy5jb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvbnRhY3QgJHttYXRjaFZpZXd9YCk7XG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QganNvbiA9IGRhdGFfMS5Db250YWN0SlNPTjtcbiAgICAgICAgLy8gRE9NXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IHRoaXMuY29udGFjdC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1oZWFkZXInKTtcbiAgICAgICAgY29uc3QgdGV4dCA9IHRoaXMuY29udGFjdC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC10ZXh0Jyk7XG4gICAgICAgIGNvbnN0IHN1YnRleHQgPSB0aGlzLmNvbnRhY3QucXVlcnlTZWxlY3RvcignI2NvbnRhY3Qtc3VidGV4dCcpO1xuICAgICAgICAvLyBJbnNlcnQgSlNPTlxuICAgICAgICBoZWFkZXIuaW5uZXJIVE1MID0ganNvbi5oZWFkZXI7XG4gICAgICAgIHRleHQuaW5uZXJIVE1MID0ganNvbi5ib2R5LnRleHQ7XG4gICAgICAgIHN1YnRleHQuaW5uZXJIVE1MID0ganNvbi5ib2R5LnN1YnRleHQ7XG4gICAgfVxufVxuZXhwb3J0cy5Db250YWN0Q29tcG9uZW50ID0gQ29udGFjdENvbXBvbmVudDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY2xhc3MgTW9kYWxNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLmhlbHAgPSB0aGlzLmJvZHkucXVlcnlTZWxlY3RvcignI2hlbHAnKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IHRoaXMuYm9keS5xdWVyeVNlbGVjdG9yKCcjbW9kYWwnKTtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XG4gICAgfVxuICAgIGhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMuaGVscC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5ib2R5LmNsYXNzTGlzdC5hZGQoJ25vLXNjcm9sbCcpO1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJywgJ3Zpc2libGUtdHJhbnNpdGlvbicpO1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2QtYmxvY2snLCAndmlzaWJsZS10cmFuc2l0aW9uJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbm8tc2Nyb2xsJyk7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snLCAndmlzaWJsZS10cmFuc2l0aW9uJyk7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ibG9jaycsICd2aXNpYmxlLXRyYW5zaXRpb24nKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuY2xhc3MgTW9iaWxlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy52aWV3cyA9IFtdO1xuICAgICAgICB0aGlzLnZpZXdJZHggPSAwO1xuICAgICAgICAvLyBJZiB3ZSBoYW5kbGUgbW9iaWxlIHZpZXcsIHRoZSBtYWluIHN0YXJ0cyBmbGljayBtb2R1bGVcbiAgICAgICAgaWYgKCFtYXRjaE1lZGlhKCcobWF4LXdpZHRoOjQ4MHB4KScpLm1hdGNoZXMpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMudmlld3MgPSBbXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZmlsZScpLFxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NraWxsJyksXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnJlYWRjcnVtYnMnKTtcbiAgICAgICAgdGhpcy5tb2RhbE1vZHVsZSA9IG5ldyBNb2RhbE1vZHVsZSgpO1xuICAgICAgICB0aGlzLm9uU3dpcGUoKTtcbiAgICAgICAgdGhpcy5tb2RhbE1vZHVsZS5oYW5kbGVyKCk7XG4gICAgfVxuICAgIG9uU3dpcGUoKSB7XG4gICAgICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpO1xuICAgICAgICBjb25zdCBESVNUQU5DRSA9IDEyMDtcbiAgICAgICAgbGV0IHN0YXJ0WCA9IDA7XG4gICAgICAgIGxldCBlbmRYID0gMDtcbiAgICAgICAgbWFpbi5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZSA9PiB7XG4gICAgICAgICAgICBzdGFydFggPSBlLnRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgIH0pO1xuICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGUgPT4ge1xuICAgICAgICAgICAgZW5kWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgIH0pO1xuICAgICAgICBtYWluLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZW5kWCA9PSAwKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlmIChzdGFydFggPiAoZW5kWCArIERJU1RBTkNFKSkge1xuICAgICAgICAgICAgICAgIC8vIGxlZnQgc3dpcGVcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXdDaGFuZ2VyKG1haW4sICdsZWZ0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoc3RhcnRYICsgRElTVEFOQ0UpIDwgZW5kWCkge1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IHN3aXBlXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3Q2hhbmdlcihtYWluLCAncmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXJ0WCA9IGVuZFggPSAwO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmlld0NoYW5nZXIobWFpbiwgc3RhdGUpIHtcbiAgICAgICAgLy8gaW52aXNpYmxlIGN1cnJlbnQgdmlld1xuICAgICAgICBjb25zdCBwcmV2VmlldyA9IHRoaXMudmlld3NbdGhpcy52aWV3SWR4XTtcbiAgICAgICAgcHJldlZpZXcuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIHByZXZWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2QtYmxvY2snKTtcbiAgICAgICAgdGhpcy5zZXRCcmVhZGNydW1iKHByZXZWaWV3KTtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy52aWV3SWR4ID0gKHRoaXMudmlld0lkeCA+PSAodGhpcy52aWV3cy5sZW5ndGggLSAxKSkgPyAwIDogKHRoaXMudmlld0lkeCArIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMudmlld0lkeCA9ICh0aGlzLnZpZXdJZHggPD0gMCkgPyAodGhpcy52aWV3cy5sZW5ndGggLSAxKSA6ICh0aGlzLnZpZXdJZHggLSAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyB2aXNpYmxlIG5ldyB2aWV3XG4gICAgICAgIGNvbnN0IG5leHRWaWV3ID0gdGhpcy52aWV3c1t0aGlzLnZpZXdJZHhdO1xuICAgICAgICBuZXh0Vmlldy5jbGFzc0xpc3QuYWRkKCdkLWJsb2NrJyk7XG4gICAgICAgIG5leHRWaWV3LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB0aGlzLnNldEJyZWFkY3J1bWIobmV4dFZpZXcpO1xuICAgIH1cbiAgICBzZXRCcmVhZGNydW1iKHZpZXcpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBwYWdlSWQgPSB2aWV3LmdldEF0dHJpYnV0ZSgnaWQnKTtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYiA9IChfYSA9IHRoaXMuYnJlYWRjcnVtYnMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKGBzcGFuW2RhdGEtdGFyZ2V0PVwiJHtwYWdlSWR9XCJdYCk7XG4gICAgICAgIGJyZWFkY3J1bWIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgfVxufVxuZXhwb3J0cy5Nb2JpbGVDb21wb25lbnQgPSBNb2JpbGVDb21wb25lbnQ7XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=