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
/******/ 	deferredModules.push([5,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
var _Profile_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(1, 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "ProfileJsonState", function() { return _Profile_json__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _Skill_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
var _Skill_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(2, 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "SkillJsonState", function() { return _Skill_json__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ 1:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"プロフィール\",\"body\":{\"logo\":\"public/static/images/logo.png\",\"name\":\"hiyoko3\",\"note\":\"アプリケーションエンジニア\",\"birth\":1994,\"gender\":\"男性\",\"histories\":[\"2013年 大学(情報工学)入学\",\"2017年 大学(情報工学)卒業\",\"2017年 大学院(情報工学専攻)入学\",\"2019年 大学院(情報工学専攻)修了\",\"2019年 新卒入社（現在に至る）\"],\"vision\":{\"work\":[\"顧客にサービス提供している\",\"「やってみよう」だけではなく、事前調査を行い、根拠の上で行動を起こせる\"],\"wantto\":[\"大規模サービス開発チームにジョインし、開発に携わりたい\",\"バックエンド(言語+DB+サーバー構成)が第一志望。第二志望でフロントエンド\"],\"contribution\":[\"小規模〜大規模Webサービスのチーム開発経験があります\",\"小規模かつ少人数の案件であれば、擬似的なプロジェクト管理を実施し、プロジェクトマネージャーを支援できます。\"]},\"email\":{\"prefix\":\"sb.gm.0823@***\",\"suffix\":\"※ ***にはgmail.comを入力してください\"},\"social_links\":[{\"name\":\"AtCoder\",\"url\":\"https://atcoder.jp/users/ae_hiyoko3\"},{\"name\":\"Github\",\"url\":\"https://github.com/hiyoko3\"},{\"name\":\"Qiita\",\"url\":\"https://qiita.com/hiyoko3\"},{\"name\":\"Twitter\",\"url\":\"https://twitter.com/ae_hiyoko3\"}]}}");

/***/ }),

/***/ 2:
/***/ (function(module) {

module.exports = JSON.parse("{\"header\":\"Skill & Products\",\"body\":{\"langexps\":[{\"name\":\"C++\",\"exp\":1,\"note\":\"競技プログラミングでのみ使用してます。\"},{\"name\":\"JavaScript\",\"exp\":4,\"note\":\"趣味がメインです。時々業務でも使用してます。jQuery / Node.js / TypeScript / Vue.js / React.jsも含む\"},{\"name\":\"Java\",\"exp\":2,\"note\":\"業務メイン。Androidも含む。\"},{\"name\":\"Kotlin\",\"exp\":1,\"note\":\"ちょっとかじった程度です。Javaが書けるのでドキュメント見ながらなら人並みにコーディングできるかと思います\"},{\"name\":\"MySQL\",\"exp\":2,\"note\":\"ガッツリ関わる（トランザクション分離、バッファプールなど）ようになったのは業務からです。それまでは基礎構文程度しか抑えていませんでした。\"},{\"name\":\"Perl\",\"exp\":2,\"note\":\"業務でしか触りません。\"},{\"name\":\"PHP\",\"exp\":3,\"note\":\"学生時代（趣味+インターン先）でよく書いてました。嫌いじゃないです。Laravelも含む\"},{\"name\":\"Python\",\"exp\":2,\"note\":\"研究用のプログラムで書いてました。Djangoも含む。\"},{\"name\":\"Ruby / Ruby on Rails\",\"exp\":4,\"note\":\"学生時代（趣味+インターン先）から書いてて今の業務でも使ってます。ほとんどRailsなので、Rubyと言えるか怪しい。。\"},{\"name\":\"Swift\",\"exp\":1,\"note\":\"趣味でちょっと触っただけです。設計が難しい印象しかないです。\"}],\"products\":[{\"name\":\"Portfilo\",\"logo\":\"public/static/images/no_image.png\",\"desc\":\"本ページです。フレームワークは利用せず、全て自前実装で書いてます。デザインが頻繁に変わるので画像はつけていません。\",\"github\":\"https://github.com/hiyoko3/hiyoko3.github.io\",\"langs\":[\"TypeScript\"]},{\"name\":\"NaruHiyo Project\",\"logo\":\"public/static/images/naruhiyo.png\",\"desc\":\"友人と色々なモノを作ったり勉強したり、エンジニアとして高め合うために設立したチーム。リンクはチームのポートフォリオへ飛びます\",\"github\":\"https://github.com/naruhiyo/naruhiyo.github.io\",\"langs\":[\"React.js\"]},{\"name\":\"Memoma\",\"logo\":\"public/static/images/memoma.gif\",\"desc\":\"Markdown変換に対応したクロスプラットフォーム型メモアプリ。マルチカラムに対応してます。公開してないです。\",\"github\":\"https://github.com/naruhiyo/Memoma\",\"langs\":[\"Electron\"]},{\"name\":\"Partytion\",\"logo\":\"public/static/images/partytion.gif\",\"desc\":\"「飲み会の盛り上げる」をコンセプトに作成したクイズ型のiOSアプリです。公開してないです。\",\"github\":\"https://github.com/naruhiyo/partytion\",\"langs\":[\"Swift 5\"]},{\"name\":\"研究室HP\",\"logo\":\"public/static/images/no_image.png\",\"desc\":\"学生時代に作成した研究室のHPです。SPAで構築されています。身バレ防止のため画像などは添付していません。\",\"github\":\"\",\"langs\":[\"Vue.js\"]},{\"name\":\"AtCoder 過去問集\",\"logo\":\"public/static/images/no_image.png\",\"desc\":\"AtCoderの過去問\",\"github\":\"https://github.com/hiyoko3/practice-contest\",\"langs\":[\"C++\"]}]}}");

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"profile\"><div class=\"w-80 text-center py-5\"><user-profile class=\"text-left\"></user-profile></div></div>");

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"skill\"><h2 class=\"py-1 h2\">プログラミング経験</h2><lang-exps class=\"text-left\"></lang-exps><h2 class=\"mt-3 h2\">実績 / 製作物</h2><product-list></product-list></div>");

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-free/css/all.css
var css_all = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/modern-css-reset/dist/reset.min.css
var reset_min = __webpack_require__(26);

// EXTERNAL MODULE: ./src/style.scss
var style = __webpack_require__(28);

// CONCATENATED MODULE: ./src/components/Base.ts
var Base;
(function (Base) {
    class WebComponentBase extends HTMLElement {
        /**
         * 有効にする属性値
         */
        static get observedAttributes() {
            return [];
        }
        constructor() {
            super();
            // Note: Shadow Mode を on にすると内部CSSを必ず定義しなければならない
            // this.attachShadow({ mode: 'open' });
        }
        // Custom ElementがDOMに追加されたタイミング
        // connectedCallback() {
        //   console.log('connectedCallback');
        // }
        // Custom ElementがDOMから削除されたタイミング
        // disconnectedCallback() {
        //   console.log('disconnectedCallback');
        // }
        /**
         * 属性値によってイベントをフックする。observedAttributesと併用する必要がる
         * @param attributeName
         * @param oldValue
         * @param newValue
         */
        // attributeChangedCallback(
        //   attributeName: string,
        //   oldValue: string,
        //   newValue: string
        // ): void {
        //   // 定義していないデータは処理しない
        //   if (!this.data[newValue]) return;
        //   return;
        // }
        /**
         * 描画処理
         */
        _render() {
            return;
        }
        /**
         * テンプレート解析
         * 変数があれば展開する
         * FIXME: 配列展開さえできれば実用化可能
         */
        parseTemplate(template, data) {
            const regexp = new RegExp(`\\$` + `{data.(${Object.keys(data).join('|')})}`, 'g');
            return template.replace(regexp, (s) => {
                // 変数のkeyを取得
                const key = s.split('.')[1].split('}')[0];
                return data[key];
            });
        }
    }
    Base.WebComponentBase = WebComponentBase;
})(Base || (Base = {}));

// CONCATENATED MODULE: ./src/components/layouts/Header.ts

class Header_Header extends Base.WebComponentBase {
    constructor() {
        super();
        this._render();
    }
    _render() {
        const dom = `<header id="header">` +
            `<h1 class="h1 text-center">Portfolio</h1>` +
            `</header>`;
        this.innerHTML = dom;
        return;
    }
}

// CONCATENATED MODULE: ./src/components/layouts/Footer.ts

class Footer_Footer extends Base.WebComponentBase {
    constructor() {
        super();
        this._render();
    }
    _render() {
        const dom = `<footer id="footer">` +
            `<div class="text-center pa-2">` +
            `<span>&copy</span>` +
            `<span class="pl-1">2016 - ${new Date().getFullYear()}</span>` +
            `<span class="pl-1">hiyoko3</span>` +
            `</div>` +
            `</footer>`;
        this.innerHTML = dom;
        return;
    }
}

// CONCATENATED MODULE: ./src/components/layouts/index.ts


var layouts_LayoutComponent;
(function (LayoutComponent) {
    function init() {
        customElements.define('app-header', Header_Header);
        customElements.define('app-footer', Footer_Footer);
    }
    LayoutComponent.init = init;
})(layouts_LayoutComponent || (layouts_LayoutComponent = {}));

// EXTERNAL MODULE: ./src/assets/data/index.ts
var data = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/profile/User.ts


class User_User extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = data["ProfileJsonState"].body;
        this.content = null;
        this._render();
        User_User._this = this;
    }
    connectedCallback() {
        // イベントの追加
        const productNames = document.querySelectorAll('.next-to');
        productNames.forEach(product => product.addEventListener('click', this.reverseCard));
    }
    _render() {
        const dom = `<div class="d-flex user justify-content-space-around align-items-center">` +
            `<div class="pa-1"><img alt="profile-logo" id="profile-logo" src="${this.data.logo}"/></div>` +
            `<div class="pa-2 is-profile" id="profile-content">` +
            `<div class="surface">` +
            `<h4 class="h4">基本情報</h4>` +
            `<p class="pl-2 my-1">名前: ${this.data.name}</p>` +
            `<p class="pl-2 my-1">職種: ${this.data.note}</p>` +
            `<p class="pl-2 my-1">年齢: ${new Date().getFullYear() - this.data.birth}</p>` +
            `<p class="pl-2 my-1">性別: ${this.data.gender}</p>` +
            `<h4 class="h4 my-1">経歴</h4>` +
            `<ul>` +
            this.data.histories.map(history => `<li>${history}</li>`).join('') +
            `</ul>` +
            `<h4 class="h4 my-1">連絡</h4>` +
            `<p class="pl-2 my-1">${this.data.email.prefix}</p>` +
            `<p class="pl-2 my-1">${this.data.email.suffix}</p>` +
            `<h4 class="h4 my-2">SNS</h4>` +
            `<div class="pl-2 my-1">` +
            this.data.social_links.map(link => `<a target="_blank" rel="noopener" href="${link.url}" class="social-link">${link.name}</a>`).join('') +
            `</div>` +
            `</div>` +
            `<div class="reversed">` +
            `<h4 class="h4">働いてみたい会社</h4>` +
            this.data.vision.work.map(w => `<p class="pl-2 my-1">${w}</p>`).join('') +
            `<h4 class="h4">挑戦してみたいこと</h4>` +
            this.data.vision.wantto.map(wo => `<p class="pl-2 my-1">${wo}</p>`).join('') +
            `<h4 class="h4">貢献できること</h4>` +
            this.data.vision.contribution.map(c => `<p class="pl-2 my-1">${c}</p>`).join('') +
            `</div>` +
            `<div class="my-3 text-right">` +
            `<span class="next-to">切り替え <i class="fas fa-exchange-alt"></i></span>` +
            `</div>` +
            `</div>` +
            `</div>`;
        this.innerHTML = dom;
        return;
    }
    // カードを裏返す
    reverseCard() {
        if (User_User._this === null)
            return;
        if (User_User._this.content === null)
            User_User._this.content = document.querySelector('#profile-content');
        User_User._this.content.classList.toggle('is-profile');
        User_User._this.content.classList.toggle('is-profile-reverse');
    }
}
User_User._this = null;

// CONCATENATED MODULE: ./src/components/profile/Profile.ts


class Profile_Profile extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = {
            header: data["ProfileJsonState"].header,
        };
        this._render();
    }
    _render() {
        const dom = __webpack_require__(3).default;
        this.innerHTML = dom.replace('${data.header}', this.data.header);
        return;
    }
}

// CONCATENATED MODULE: ./src/components/profile/index.ts


var profile_ProfileComponent;
(function (ProfileComponent) {
    function init() {
        customElements.define('profile-component', Profile_Profile);
        customElements.define('user-profile', User_User);
    }
    ProfileComponent.init = init;
})(profile_ProfileComponent || (profile_ProfileComponent = {}));

// CONCATENATED MODULE: ./src/components/skill/Skill.ts


class Skill_Skill extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = {
            header: data["SkillJsonState"].header,
        };
        this._render();
    }
    _render() {
        const dom = __webpack_require__(4).default;
        this.innerHTML = dom.replace('${data.header}', this.data.header);
        return;
    }
}

// CONCATENATED MODULE: ./src/components/skill/LangExp.ts


class LangExp_LangExp extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = data["SkillJsonState"].body.langexps;
        this._render();
    }
    _render() {
        const dom = this.data.map(skill => `<div class="skill-item pa-1 ma-1">` +
            `<div class="d-flex align-items-center">` +
            `<span class="skill-name"><strong>${skill.name}</strong></span>` +
            `<progress class="ml-2 skill-exp" max="100" value="${skill.exp * 10}">${skill.exp}年</progress>` +
            `<span class="ml-2 h5">${skill.exp} 年</span>` +
            `</div>` +
            `<p class="mt-1 skill-note">${skill.note}</p>` +
            `</div>`).join('');
        this.innerHTML = dom;
        return;
    }
}

// CONCATENATED MODULE: ./src/components/skill/Product.ts


class Product_Product extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = data["SkillJsonState"].body.products;
        this.logo = null;
        this.desc = null;
        this.github = null;
        this.langs = null;
        this._render();
        Product_Product._this = this;
    }
    connectedCallback() {
        // イベントの追加
        const productNames = document.querySelectorAll('.product-name');
        productNames.forEach(product => product.addEventListener('click', this.setImg));
    }
    _render() {
        const dom = `<div id="product-field" class="pa-2 d-flex">` +
            `<div class="product-list">` +
            this.data.map((product, idx) => `<p class="py-1 h4 product-name" data-key="${idx}">${product.name}</p>`).join('') +
            `</div>` +
            `<div class="ma-3 pa-2 product-content text-left">` +
            `<div class="pa-1 text-center"><img src="public/static/images/no_image.png" alt="product-img" id="product-logo" /></div>` +
            `<p class="my-1" id="product-desc">Productを選択すると詳細が表示されます</p>` +
            `<p class="my-2 d-none" id="product-lang"></p>` +
            `<a href="#" target="_blank" rel="noopener" id="product-github" class="my-1 d-none"><i class="mr-1 fab fa-github-alt"></i>Github<i class="ml-1 fab fa-github-alt"></i></a>` +
            `</div>` +
            `</div>`;
        this.innerHTML = dom;
        return;
    }
    /**
     * 画像の切り替え
     */
    setImg() {
        const key = parseInt(this.dataset.key || '');
        if (key === NaN || Product_Product._this == null)
            return;
        const product = Product_Product._this.data[key];
        if (Product_Product._this.logo === null)
            Product_Product._this.logo = document.querySelector('#product-logo');
        if (Product_Product._this.desc === null)
            Product_Product._this.desc = document.querySelector('#product-desc');
        if (Product_Product._this.langs === null)
            Product_Product._this.langs = document.querySelector('#product-lang');
        if (Product_Product._this.github === null)
            Product_Product._this.github = document.querySelector('#product-github');
        Product_Product._this.logo.src = product.logo;
        Product_Product._this.desc.innerHTML = product.desc;
        Product_Product._this.langs.innerHTML = product.langs.map(lang => `<span>${lang}</span>`).join('');
        Product_Product._this.github.href = product.github;
        // display on
        Product_Product._this.desc.classList.remove('d-none');
        Product_Product._this.langs.classList.remove('d-none');
        Product_Product._this.github.classList.remove('d-none');
    }
}
Product_Product._this = null;

// CONCATENATED MODULE: ./src/components/skill/index.ts



var skill_SkillComponent;
(function (SkillComponent) {
    function init() {
        customElements.define('skill-component', Skill_Skill);
        customElements.define('lang-exps', LangExp_LangExp);
        customElements.define('product-list', Product_Product);
    }
    SkillComponent.init = init;
})(skill_SkillComponent || (skill_SkillComponent = {}));

// CONCATENATED MODULE: ./src/components/main.ts




class main_Main extends Base.WebComponentBase {
    constructor() {
        super();
        this._render();
    }
    _render() {
        const dom = `<main class="text-center">` +
            `<profile-component></profile-component>` +
            `<skill-component></skill-component>` +
            `</main>`;
        this.innerHTML = dom;
        return;
    }
}
var main_MainComponent;
(function (MainComponent) {
    function init() {
        // render view
        layouts_LayoutComponent.init();
        profile_ProfileComponent.init();
        skill_SkillComponent.init();
        customElements.define('app-main', main_Main);
    }
    MainComponent.init = init;
})(main_MainComponent || (main_MainComponent = {}));

// CONCATENATED MODULE: ./src/app.ts
/* === Main Application bundle file === */
// Libraries


// Custom Style and Script


// import VirtualDomApp from './app/VirtualDomApp'
// render custom component
main_MainComponent.init();
/* === Service Worker === */
// Checking support a `service worker`
if ('serviceWorker' in navigator &&
    (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    // const registration = runtime.register()
}
else {
    console.warn('This browser doesn\'t use a service worker');
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kYXRhL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5wdWciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2tpbGwvc2tpbGwucHVnIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0Jhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0cy9IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0cy9Gb290ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9maWxlL1VzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2tpbGwvU2tpbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2tpbGwvTGFuZ0V4cC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9za2lsbC9Qcm9kdWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NraWxsL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNB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LEdBQUcsR0FBRyxDQUFDO1FBQ3JCLE9BQU87SUFDVCxDQUFDO0NBQ0Y7QUFFTSxJQUFVLGtCQUFhLENBUTdCO0FBUkQsV0FBaUIsYUFBYTtJQUM1QixTQUFnQixJQUFJO1FBQ2xCLGNBQWM7UUFDZCx1QkFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLHdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLG9CQUFjLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQU5lLGtCQUFJLE9BTW5CO0FBQ0gsQ0FBQyxFQVJnQixrQkFBYSxLQUFiLGtCQUFhLFFBUTdCOzs7QUMvQkQsMENBQTBDO0FBQzFDLFlBQVk7QUFDc0M7QUFDTjtBQUU1QywwQkFBMEI7QUFDTDtBQUM0QjtBQUNqRCxrREFBa0Q7QUFFbEQsMEJBQTBCO0FBQzFCLGtCQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7QUFFckIsNEJBQTRCO0FBQzVCLHNDQUFzQztBQUN0QyxJQUFJLGVBQWUsSUFBSSxTQUFTO0lBQzVCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQyxFQUFFO0lBQ3JGLDBDQUEwQztDQUM3QztLQUFNO0lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsQ0FBQztDQUM3RCIsImZpbGUiOiJwdWJsaWMvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwLFxuIFx0XHQxOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbNSwyXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBQcm9maWxlSlNPTiBmcm9tICcuL1Byb2ZpbGUuanNvbic7XG5pbXBvcnQgU2tpbGxKU09OIGZyb20gJy4vU2tpbGwuanNvbic7XG5cbnR5cGUgUHJvZmlsZUpzb25TdGF0ZSA9IHtcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIGJvZHk6IHtcbiAgICBsb2dvOiBzdHJpbmc7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIG5vdGU6IHN0cmluZztcbiAgICBicml0aDogbnVtYmVyLFxuICAgIGdlbmRlcjogc3RyaW5nLFxuICAgIGhpc3Rvcmllczogc3RyaW5nW10sXG4gICAgdmlzaW9uOiB7XG4gICAgICB3b3JrOnN0cmluZ1tdLFxuICAgICAgd2FudG90bzogc3RyaW5nW10sXG4gICAgICBjb250cmlidXRpb246IHN0cmluZ1tdXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgcHJlZml4OiBzdHJpbmc7XG4gICAgICBzdWZmaXg6IHN0cmluZztcbiAgICB9O1xuICAgIHNvY2lhbF9saW5rczoge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgdXJsOiBzdHJpbmc7XG4gICAgfVtdO1xuICB9O1xufTtcblxudHlwZSBTa2lsbEpzb25TdGF0ZSA9IHtcbiAgaGVhZGVyOiBzdHJpbmc7XG4gIGJvZHk6IHtcbiAgICBza2lsbHM6IHtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIGV4cDogbnVtYmVyO1xuICAgICAgbm90ZTogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBwcm9kdWN0czoge1xuICAgICAgbmFtZTogc3RyaW5nO1xuICAgICAgbG9nbzogc3RyaW5nO1xuICAgICAgZGVzYzogc3RyaW5nO1xuICAgICAgZ2l0aHViOiBzdHJpbmc7XG4gICAgICBsYW5nczogc3RyaW5nW107XG4gICAgfVtdO1xuICB9O1xufTtcblxuZXhwb3J0IHsgUHJvZmlsZUpTT04gYXMgUHJvZmlsZUpzb25TdGF0ZSwgU2tpbGxKU09OIGFzIFNraWxsSnNvblN0YXRlIH07XG4iLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwicHJvZmlsZVxcXCI+PGRpdiBjbGFzcz1cXFwidy04MCB0ZXh0LWNlbnRlciBweS01XFxcIj48dXNlci1wcm9maWxlIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPjwvdXNlci1wcm9maWxlPjwvZGl2PjwvZGl2PlwiOyIsImV4cG9ydCBkZWZhdWx0IFwiPGRpdiBpZD1cXFwic2tpbGxcXFwiPjxoMiBjbGFzcz1cXFwicHktMSBoMlxcXCI+44OX44Ot44Kw44Op44Of44Oz44Kw57WM6aiTPC9oMj48bGFuZy1leHBzIGNsYXNzPVxcXCJ0ZXh0LWxlZnRcXFwiPjwvbGFuZy1leHBzPjxoMiBjbGFzcz1cXFwibXQtMyBoMlxcXCI+5a6f57i+IC8g6KO95L2c54mpPC9oMj48cHJvZHVjdC1saXN0PjwvcHJvZHVjdC1saXN0PjwvZGl2PlwiOyIsImludGVyZmFjZSBXZWJDb21wb25lbnRJbnRlcmZhY2Uge31cblxuZXhwb3J0IG5hbWVzcGFjZSBCYXNlIHtcbiAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdlYkNvbXBvbmVudEJhc2UgZXh0ZW5kcyBIVE1MRWxlbWVudFxuICAgIGltcGxlbWVudHMgV2ViQ29tcG9uZW50SW50ZXJmYWNlIHtcblxuICAgIC8qKlxuICAgICAqIOacieWKueOBq+OBmeOCi+WxnuaAp+WApFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCk6IHN0cmluZ1tdIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKCk7XG4gICAgICAvLyBOb3RlOiBTaGFkb3cgTW9kZSDjgpIgb24g44Gr44GZ44KL44Go5YaF6YOoQ1NT44KS5b+F44Ga5a6a576p44GX44Gq44GR44KM44Gw44Gq44KJ44Gq44GEXG4gICAgICAvLyB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB9XG5cbiAgICAvLyBDdXN0b20gRWxlbWVudOOBjERPTeOBq+i/veWKoOOBleOCjOOBn+OCv+OCpOODn+ODs+OCsFxuICAgIC8vIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8vICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZENhbGxiYWNrJyk7XG4gICAgLy8gfVxuXG4gICAgLy8gQ3VzdG9tIEVsZW1lbnTjgYxET03jgYvjgonliYrpmaTjgZXjgozjgZ/jgr/jgqTjg5/jg7PjgrBcbiAgICAvLyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdkaXNjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgIC8vIH1cbiAgICAvKipcbiAgICAgKiDlsZ7mgKflgKTjgavjgojjgaPjgabjgqTjg5njg7Pjg4jjgpLjg5Xjg4Pjgq/jgZnjgovjgIJvYnNlcnZlZEF0dHJpYnV0ZXPjgajkvbXnlKjjgZnjgovlv4XopoHjgYzjgotcbiAgICAgKiBAcGFyYW0gYXR0cmlidXRlTmFtZVxuICAgICAqIEBwYXJhbSBvbGRWYWx1ZVxuICAgICAqIEBwYXJhbSBuZXdWYWx1ZVxuICAgICAqL1xuICAgIC8vIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhcbiAgICAvLyAgIGF0dHJpYnV0ZU5hbWU6IHN0cmluZyxcbiAgICAvLyAgIG9sZFZhbHVlOiBzdHJpbmcsXG4gICAgLy8gICBuZXdWYWx1ZTogc3RyaW5nXG4gICAgLy8gKTogdm9pZCB7XG4gICAgLy8gICAvLyDlrprnvqnjgZfjgabjgYTjgarjgYTjg4fjg7zjgr/jga/lh6bnkIbjgZfjgarjgYRcbiAgICAvLyAgIGlmICghdGhpcy5kYXRhW25ld1ZhbHVlXSkgcmV0dXJuO1xuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICAvKipcbiAgICAgKiDmj4/nlLvlh6bnkIZcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgX3JlbmRlcigpOiB2b2lkIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLyoqXG4gICAgICog44OG44Oz44OX44Os44O844OI6Kej5p6QXG4gICAgICog5aSJ5pWw44GM44GC44KM44Gw5bGV6ZaL44GZ44KLXG4gICAgICogRklYTUU6IOmFjeWIl+WxlemWi+OBleOBiOOBp+OBjeOCjOOBsOWun+eUqOWMluWPr+iDvVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBwYXJzZVRlbXBsYXRlKHRlbXBsYXRlOiBzdHJpbmcsIGRhdGE6IGFueSk6IHN0cmluZyB7XG4gICAgICBjb25zdCByZWdleHA6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoYFxcXFwkYCArIGB7ZGF0YS4oJHtPYmplY3Qua2V5cyhkYXRhKS5qb2luKCd8Jyl9KX1gLCAnZycpO1xuXG4gICAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShyZWdleHAsIChzOnN0cmluZyk6c3RyaW5nID0+IHtcbiAgICAgICAgLy8g5aSJ5pWw44Gua2V544KS5Y+W5b6XXG4gICAgICAgIGNvbnN0IGtleTpzdHJpbmcgPSBzLnNwbGl0KCcuJylbMV0uc3BsaXQoJ30nKVswXTtcbiAgICAgICAgcmV0dXJuIGRhdGFba2V5XTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uL0Jhc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBCYXNlLldlYkNvbXBvbmVudEJhc2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvbSA9XG4gICAgICBgPGhlYWRlciBpZD1cImhlYWRlclwiPmAgK1xuICAgICAgICBgPGgxIGNsYXNzPVwiaDEgdGV4dC1jZW50ZXJcIj5Qb3J0Zm9saW88L2gxPmAgK1xuICAgICAgYDwvaGVhZGVyPmA7XG5cbiAgICB0aGlzLmlubmVySFRNTCA9IGRvbTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9CYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQmFzZS5XZWJDb21wb25lbnRCYXNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBkb20gPVxuICAgICAgYDxmb290ZXIgaWQ9XCJmb290ZXJcIj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBwYS0yXCI+YCArXG4gICAgICAgICAgYDxzcGFuPiZjb3B5PC9zcGFuPmAgK1xuICAgICAgICAgIGA8c3BhbiBjbGFzcz1cInBsLTFcIj4yMDE2IC0gJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9zcGFuPmAgK1xuICAgICAgICAgIGA8c3BhbiBjbGFzcz1cInBsLTFcIj5oaXlva28zPC9zcGFuPmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgICBgPC9mb290ZXI+YDtcblxuICAgIHRoaXMuaW5uZXJIVE1MID0gZG9tO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyJztcblxuZXhwb3J0IG5hbWVzcGFjZSBMYXlvdXRDb21wb25lbnQge1xuICBleHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1oZWFkZXInLCBIZWFkZXIpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLWZvb3RlcicsIEZvb3Rlcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9CYXNlJztcbmltcG9ydCB7IFByb2ZpbGVKc29uU3RhdGUgfSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YSc7XG5cbnR5cGUgVXNlclN0YXRlID0ge1xuICBsb2dvOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgbm90ZTogc3RyaW5nO1xuICBiaXJ0aDogbnVtYmVyO1xuICBnZW5kZXI6IHN0cmluZztcbiAgaGlzdG9yaWVzOiBzdHJpbmdbXTtcbiAgdmlzaW9uOiB7XG4gICAgd29yazpzdHJpbmdbXSxcbiAgICB3YW50dG86IHN0cmluZ1tdLFxuICAgIGNvbnRyaWJ1dGlvbjogc3RyaW5nW11cbiAgfTtcbiAgZW1haWw6IHtcbiAgICBwcmVmaXg6IHN0cmluZztcbiAgICBzdWZmaXg6IHN0cmluZztcbiAgfTtcbiAgc29jaWFsX2xpbmtzOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICB9W107XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXIgZXh0ZW5kcyBCYXNlLldlYkNvbXBvbmVudEJhc2Uge1xuICBwcml2YXRlIGRhdGE6IFVzZXJTdGF0ZSA9IFByb2ZpbGVKc29uU3RhdGUuYm9keVxuICBwcml2YXRlIGNvbnRlbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGF0aWMgX3RoaXM6IFVzZXIgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgICBVc2VyLl90aGlzID0gdGhpcztcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIC8vIOOCpOODmeODs+ODiOOBrui/veWKoFxuICAgIGNvbnN0IHByb2R1Y3ROYW1lczogTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmV4dC10bycpO1xuICAgIHByb2R1Y3ROYW1lcy5mb3JFYWNoKHByb2R1Y3QgPT4gcHJvZHVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMucmV2ZXJzZUNhcmQpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvbSA9XG4gICAgICBgPGRpdiBjbGFzcz1cImQtZmxleCB1c2VyIGp1c3RpZnktY29udGVudC1zcGFjZS1hcm91bmQgYWxpZ24taXRlbXMtY2VudGVyXCI+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwicGEtMVwiPjxpbWcgYWx0PVwicHJvZmlsZS1sb2dvXCIgaWQ9XCJwcm9maWxlLWxvZ29cIiBzcmM9XCIke3RoaXMuZGF0YS5sb2dvfVwiLz48L2Rpdj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJwYS0yIGlzLXByb2ZpbGVcIiBpZD1cInByb2ZpbGUtY29udGVudFwiPmAgK1xuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic3VyZmFjZVwiPmAgK1xuICAgICAgICAgICAgYDxoNCBjbGFzcz1cImg0XCI+5Z+65pys5oOF5aCxPC9oND5gICtcbiAgICAgICAgICAgIGA8cCBjbGFzcz1cInBsLTIgbXktMVwiPuWQjeWJjTogJHt0aGlzLmRhdGEubmFtZX08L3A+YCArXG4gICAgICAgICAgICBgPHAgY2xhc3M9XCJwbC0yIG15LTFcIj7ogbfnqK46ICR7dGhpcy5kYXRhLm5vdGV9PC9wPmAgK1xuICAgICAgICAgICAgYDxwIGNsYXNzPVwicGwtMiBteS0xXCI+5bm06b2iOiAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIHRoaXMuZGF0YS5iaXJ0aH08L3A+YCArXG4gICAgICAgICAgICBgPHAgY2xhc3M9XCJwbC0yIG15LTFcIj7mgKfliKU6ICR7dGhpcy5kYXRhLmdlbmRlcn08L3A+YCArXG4gICAgICAgICAgICBgPGg0IGNsYXNzPVwiaDQgbXktMVwiPue1jOattDwvaDQ+YCArXG4gICAgICAgICAgICBgPHVsPmAgK1xuICAgICAgICAgICAgICB0aGlzLmRhdGEuaGlzdG9yaWVzLm1hcChoaXN0b3J5ID0+IGA8bGk+JHtoaXN0b3J5fTwvbGk+YCkuam9pbignJykgK1xuICAgICAgICAgICAgYDwvdWw+YCArXG4gICAgICAgICAgICBgPGg0IGNsYXNzPVwiaDQgbXktMVwiPumAo+e1oTwvaDQ+YCArXG4gICAgICAgICAgICBgPHAgY2xhc3M9XCJwbC0yIG15LTFcIj4ke3RoaXMuZGF0YS5lbWFpbC5wcmVmaXh9PC9wPmAgK1xuICAgICAgICAgICAgYDxwIGNsYXNzPVwicGwtMiBteS0xXCI+JHt0aGlzLmRhdGEuZW1haWwuc3VmZml4fTwvcD5gICtcbiAgICAgICAgICAgIGA8aDQgY2xhc3M9XCJoNCBteS0yXCI+U05TPC9oND5gICtcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwicGwtMiBteS0xXCI+YCArXG4gICAgICAgICAgICAgIHRoaXMuZGF0YS5zb2NpYWxfbGlua3MubWFwKGxpbmsgPT4gYDxhIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgaHJlZj1cIiR7bGluay51cmx9XCIgY2xhc3M9XCJzb2NpYWwtbGlua1wiPiR7bGluay5uYW1lfTwvYT5gKS5qb2luKCcnKSArXG4gICAgICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgICAgYDwvZGl2PmAgK1xuXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJyZXZlcnNlZFwiPmAgK1xuICAgICAgICAgICAgYDxoNCBjbGFzcz1cImg0XCI+5YON44GE44Gm44G/44Gf44GE5Lya56S+PC9oND5gICtcbiAgICAgICAgICAgIHRoaXMuZGF0YS52aXNpb24ud29yay5tYXAodyA9PiBgPHAgY2xhc3M9XCJwbC0yIG15LTFcIj4ke3d9PC9wPmApLmpvaW4oJycpICtcbiAgICAgICAgICAgIGA8aDQgY2xhc3M9XCJoNFwiPuaMkeaIpuOBl+OBpuOBv+OBn+OBhOOBk+OBqDwvaDQ+YCArXG4gICAgICAgICAgICB0aGlzLmRhdGEudmlzaW9uLndhbnR0by5tYXAod28gPT4gYDxwIGNsYXNzPVwicGwtMiBteS0xXCI+JHt3b308L3A+YCkuam9pbignJykgK1xuICAgICAgICAgICAgYDxoNCBjbGFzcz1cImg0XCI+6LKi54yu44Gn44GN44KL44GT44GoPC9oND5gICtcbiAgICAgICAgICAgIHRoaXMuZGF0YS52aXNpb24uY29udHJpYnV0aW9uLm1hcChjID0+IGA8cCBjbGFzcz1cInBsLTIgbXktMVwiPiR7Y308L3A+YCkuam9pbignJykgK1xuICAgICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cIm15LTMgdGV4dC1yaWdodFwiPmAgK1xuICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwibmV4dC10b1wiPuWIh+OCiuabv+OBiCA8aSBjbGFzcz1cImZhcyBmYS1leGNoYW5nZS1hbHRcIj48L2k+PC9zcGFuPmAgK1xuICAgICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgYDwvZGl2PmAgK1xuICAgICAgYDwvZGl2PmA7XG5cbiAgICB0aGlzLmlubmVySFRNTCA9IGRvbTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyDjgqvjg7zjg4njgpLoo4/ov5TjgZlcbiAgcHJpdmF0ZSByZXZlcnNlQ2FyZCgpOiB2b2lkIHtcbiAgICBpZiAoVXNlci5fdGhpcyA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgaWYgKFVzZXIuX3RoaXMuY29udGVudCA9PT0gbnVsbCkgVXNlci5fdGhpcy5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2ZpbGUtY29udGVudCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBVc2VyLl90aGlzLmNvbnRlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtcHJvZmlsZScpXG4gICAgVXNlci5fdGhpcy5jb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXByb2ZpbGUtcmV2ZXJzZScpO1xuICB9XG59IiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uL0Jhc2UnO1xuaW1wb3J0IHsgUHJvZmlsZUpzb25TdGF0ZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhJztcblxudHlwZSBQcm9maWxlU3RhdGUgPSB7XG4gIGhlYWRlcjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZmlsZSBleHRlbmRzIEJhc2UuV2ViQ29tcG9uZW50QmFzZSB7XG4gIHByaXZhdGUgZGF0YTogUHJvZmlsZVN0YXRlID0ge1xuICAgIGhlYWRlcjogUHJvZmlsZUpzb25TdGF0ZS5oZWFkZXIsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG5cdHByb3RlY3RlZCBfcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvbSA9IHJlcXVpcmUoJy4vcHJvZmlsZS5wdWcnKS5kZWZhdWx0O1xuICAgIHRoaXMuaW5uZXJIVE1MID0gZG9tLnJlcGxhY2UoJyR7ZGF0YS5oZWFkZXJ9JywgdGhpcy5kYXRhLmhlYWRlcik7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnLi9Qcm9maWxlJztcblxuZXhwb3J0IG5hbWVzcGFjZSBQcm9maWxlQ29tcG9uZW50IHtcbiAgZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwcm9maWxlLWNvbXBvbmVudCcsIFByb2ZpbGUpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgndXNlci1wcm9maWxlJywgVXNlcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9CYXNlJztcbmltcG9ydCB7IFNraWxsSnNvblN0YXRlIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEnO1xuXG50eXBlIFNraWxsU3RhdGUgPSB7XG4gIGhlYWRlcjogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpbGwgZXh0ZW5kcyBCYXNlLldlYkNvbXBvbmVudEJhc2Uge1xuICBwcml2YXRlIGRhdGE6IFNraWxsU3RhdGUgPSB7XG4gICAgaGVhZGVyOiBTa2lsbEpzb25TdGF0ZS5oZWFkZXIsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvbSA9IHJlcXVpcmUoJy4vc2tpbGwucHVnJykuZGVmYXVsdDtcbiAgICB0aGlzLmlubmVySFRNTCA9IGRvbS5yZXBsYWNlKCcke2RhdGEuaGVhZGVyfScsIHRoaXMuZGF0YS5oZWFkZXIpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4uL0Jhc2UnO1xuaW1wb3J0IHsgU2tpbGxKc29uU3RhdGUgfSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YSc7XG5cbnR5cGUgTGFuZ1N0YXRlID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGV4cDogbnVtYmVyO1xuICBub3RlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5nRXhwIGV4dGVuZHMgQmFzZS5XZWJDb21wb25lbnRCYXNlIHtcbiAgcHJpdmF0ZSBkYXRhOiBMYW5nU3RhdGVbXSA9IFNraWxsSnNvblN0YXRlLmJvZHkubGFuZ2V4cHM7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9yZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3QgZG9tID1cbiAgICAgICAgdGhpcy5kYXRhLm1hcChcbiAgICAgICAgICBza2lsbCA9PlxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJza2lsbC1pdGVtIHBhLTEgbWEtMVwiPmAgK1xuICAgICAgICAgICAgICBgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5gICtcbiAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJza2lsbC1uYW1lXCI+PHN0cm9uZz4ke3NraWxsLm5hbWV9PC9zdHJvbmc+PC9zcGFuPmAgK1xuICAgICAgICAgICAgICAgIGA8cHJvZ3Jlc3MgY2xhc3M9XCJtbC0yIHNraWxsLWV4cFwiIG1heD1cIjEwMFwiIHZhbHVlPVwiJHtza2lsbC5leHAgKiAxMH1cIj4ke3NraWxsLmV4cH3lubQ8L3Byb2dyZXNzPmAgK1xuICAgICAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIm1sLTIgaDVcIj4ke3NraWxsLmV4cH0g5bm0PC9zcGFuPmAgK1xuICAgICAgICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgICAgICAgIGA8cCBjbGFzcz1cIm10LTEgc2tpbGwtbm90ZVwiPiR7c2tpbGwubm90ZX08L3A+YCArXG4gICAgICAgICAgICBgPC9kaXY+YFxuICAgICAgICAgICkuam9pbignJyk7XG5cbiAgICB0aGlzLmlubmVySFRNTCA9IGRvbTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9CYXNlJztcbmltcG9ydCB7IFNraWxsSnNvblN0YXRlIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEnO1xuXG50eXBlIFByb2R1Y3RTdGF0ZSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBsb2dvOiBzdHJpbmc7XG4gIGRlc2M6IHN0cmluZztcbiAgZ2l0aHViOiBzdHJpbmc7XG4gIGxhbmdzOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3QgZXh0ZW5kcyBCYXNlLldlYkNvbXBvbmVudEJhc2Uge1xuICBwcml2YXRlIGRhdGE6IFByb2R1Y3RTdGF0ZVtdID0gU2tpbGxKc29uU3RhdGUuYm9keS5wcm9kdWN0cztcbiAgcHJpdmF0ZSBsb2dvOiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgZGVzYzogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGdpdGh1YjogSFRNTEFuY2hvckVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBsYW5nczogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN0YXRpYyBfdGhpczogUHJvZHVjdCB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgUHJvZHVjdC5fdGhpcyA9IHRoaXM7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyDjgqTjg5njg7Pjg4jjga7ov73liqBcbiAgICBjb25zdCBwcm9kdWN0TmFtZXM6IE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtbmFtZScpO1xuICAgIHByb2R1Y3ROYW1lcy5mb3JFYWNoKHByb2R1Y3QgPT4gcHJvZHVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuc2V0SW1nKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBkb20gPSBcbiAgICAgIGA8ZGl2IGlkPVwicHJvZHVjdC1maWVsZFwiIGNsYXNzPVwicGEtMiBkLWZsZXhcIj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJwcm9kdWN0LWxpc3RcIj5gICsgXG4gICAgICAgICAgdGhpcy5kYXRhLm1hcCgocHJvZHVjdCwgaWR4KSA9PiBgPHAgY2xhc3M9XCJweS0xIGg0IHByb2R1Y3QtbmFtZVwiIGRhdGEta2V5PVwiJHtpZHh9XCI+JHtwcm9kdWN0Lm5hbWV9PC9wPmApLmpvaW4oJycpICtcbiAgICAgICAgYDwvZGl2PmAgK1xuICAgICAgICBgPGRpdiBjbGFzcz1cIm1hLTMgcGEtMiBwcm9kdWN0LWNvbnRlbnQgdGV4dC1sZWZ0XCI+YCArXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJwYS0xIHRleHQtY2VudGVyXCI+PGltZyBzcmM9XCJwdWJsaWMvc3RhdGljL2ltYWdlcy9ub19pbWFnZS5wbmdcIiBhbHQ9XCJwcm9kdWN0LWltZ1wiIGlkPVwicHJvZHVjdC1sb2dvXCIgLz48L2Rpdj5gICtcbiAgICAgICAgICBgPHAgY2xhc3M9XCJteS0xXCIgaWQ9XCJwcm9kdWN0LWRlc2NcIj5Qcm9kdWN044KS6YG45oqe44GZ44KL44Go6Kmz57Sw44GM6KGo56S644GV44KM44G+44GZPC9wPmAgK1xuICAgICAgICAgIGA8cCBjbGFzcz1cIm15LTIgZC1ub25lXCIgaWQ9XCJwcm9kdWN0LWxhbmdcIj48L3A+YCArXG4gICAgICAgICAgYDxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBpZD1cInByb2R1Y3QtZ2l0aHViXCIgY2xhc3M9XCJteS0xIGQtbm9uZVwiPjxpIGNsYXNzPVwibXItMSBmYWIgZmEtZ2l0aHViLWFsdFwiPjwvaT5HaXRodWI8aSBjbGFzcz1cIm1sLTEgZmFiIGZhLWdpdGh1Yi1hbHRcIj48L2k+PC9hPmAgK1xuICAgICAgICBgPC9kaXY+YCArXG4gICAgICBgPC9kaXY+YDtcbiAgICB0aGlzLmlubmVySFRNTCA9IGRvbTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICog55S75YOP44Gu5YiH44KK5pu/44GIXG4gICAqL1xuICBwcml2YXRlIHNldEltZygpOiB2b2lkIHtcbiAgICBjb25zdCBrZXk6IG51bWJlciA9IHBhcnNlSW50KHRoaXMuZGF0YXNldC5rZXkgfHwgJycpO1xuICBcbiAgICBpZiAoa2V5ID09PSBOYU4gfHwgUHJvZHVjdC5fdGhpcyA9PSBudWxsKSByZXR1cm47XG4gIFxuICAgIGNvbnN0IHByb2R1Y3Q6IFByb2R1Y3RTdGF0ZSA9IFByb2R1Y3QuX3RoaXMuZGF0YVtrZXldO1xuICAgIGlmIChQcm9kdWN0Ll90aGlzLmxvZ28gPT09IG51bGwpIFByb2R1Y3QuX3RoaXMubG9nbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWxvZ28nKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChQcm9kdWN0Ll90aGlzLmRlc2MgPT09IG51bGwpIFByb2R1Y3QuX3RoaXMuZGVzYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWRlc2MnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChQcm9kdWN0Ll90aGlzLmxhbmdzID09PSBudWxsKSBQcm9kdWN0Ll90aGlzLmxhbmdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2R1Y3QtbGFuZycpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKFByb2R1Y3QuX3RoaXMuZ2l0aHViID09PSBudWxsKSBQcm9kdWN0Ll90aGlzLmdpdGh1YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWdpdGh1YicpIGFzIEhUTUxBbmNob3JFbGVtZW50O1xuXG4gICAgUHJvZHVjdC5fdGhpcy5sb2dvLnNyYyA9IHByb2R1Y3QubG9nbztcbiAgICBQcm9kdWN0Ll90aGlzLmRlc2MuaW5uZXJIVE1MID0gcHJvZHVjdC5kZXNjO1xuICAgIFByb2R1Y3QuX3RoaXMubGFuZ3MuaW5uZXJIVE1MID0gcHJvZHVjdC5sYW5ncy5tYXAobGFuZyA9PiBgPHNwYW4+JHtsYW5nfTwvc3Bhbj5gKS5qb2luKCcnKTtcbiAgICBQcm9kdWN0Ll90aGlzLmdpdGh1Yi5ocmVmID0gcHJvZHVjdC5naXRodWI7XG5cbiAgICAvLyBkaXNwbGF5IG9uXG4gICAgUHJvZHVjdC5fdGhpcy5kZXNjLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIFByb2R1Y3QuX3RoaXMubGFuZ3MuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgUHJvZHVjdC5fdGhpcy5naXRodWIuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gIH1cbn1cbiIsImltcG9ydCBTa2lsbCBmcm9tICcuL1NraWxsJztcbmltcG9ydCBMYW5nRXhwIGZyb20gJy4vTGFuZ0V4cCc7XG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuL1Byb2R1Y3QnO1xuXG5leHBvcnQgbmFtZXNwYWNlIFNraWxsQ29tcG9uZW50IHtcbiAgZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdza2lsbC1jb21wb25lbnQnLCBTa2lsbCk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsYW5nLWV4cHMnLCBMYW5nRXhwKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3Byb2R1Y3QtbGlzdCcsIFByb2R1Y3QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL2xheW91dHMnO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gJy4vcHJvZmlsZSc7XG5pbXBvcnQgeyBTa2lsbENvbXBvbmVudCB9IGZyb20gJy4vc2tpbGwnO1xuaW1wb3J0IHsgQmFzZSB9IGZyb20gJy4vQmFzZSc7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBCYXNlLldlYkNvbXBvbmVudEJhc2Uge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvbSA9XG4gICAgICBgPG1haW4gY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPmAgK1xuICAgICAgICBgPHByb2ZpbGUtY29tcG9uZW50PjwvcHJvZmlsZS1jb21wb25lbnQ+YCArXG4gICAgICAgIGA8c2tpbGwtY29tcG9uZW50Pjwvc2tpbGwtY29tcG9uZW50PmAgK1xuICAgICAgYDwvbWFpbj5gO1xuXG4gICAgdGhpcy5pbm5lckhUTUwgPSBkb207XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgTWFpbkNvbXBvbmVudCB7XG4gIGV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIC8vIHJlbmRlciB2aWV3XG4gICAgTGF5b3V0Q29tcG9uZW50LmluaXQoKTtcbiAgICBQcm9maWxlQ29tcG9uZW50LmluaXQoKTtcbiAgICBTa2lsbENvbXBvbmVudC5pbml0KCk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtbWFpbicsIE1haW4pO1xuICB9XG59XG4iLCIvKiA9PT0gTWFpbiBBcHBsaWNhdGlvbiBidW5kbGUgZmlsZSA9PT0gKi9cbi8vIExpYnJhcmllc1xuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS9jc3MvYWxsLmNzcydcbmltcG9ydCAnbW9kZXJuLWNzcy1yZXNldC9kaXN0L3Jlc2V0Lm1pbi5jc3MnXG5cbi8vIEN1c3RvbSBTdHlsZSBhbmQgU2NyaXB0XG5pbXBvcnQgJy4vc3R5bGUuc2NzcydcbmltcG9ydCB7IE1haW5Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWFpbidcbi8vIGltcG9ydCBWaXJ0dWFsRG9tQXBwIGZyb20gJy4vYXBwL1ZpcnR1YWxEb21BcHAnXG5cbi8vIHJlbmRlciBjdXN0b20gY29tcG9uZW50XG5NYWluQ29tcG9uZW50LmluaXQoKTtcblxuLyogPT09IFNlcnZpY2UgV29ya2VyID09PSAqL1xuLy8gQ2hlY2tpbmcgc3VwcG9ydCBhIGBzZXJ2aWNlIHdvcmtlcmBcbmlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yICYmXG4gICAgKHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOicgfHwgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnbG9jYWxob3N0JykpIHtcbiAgICAvLyBjb25zdCByZWdpc3RyYXRpb24gPSBydW50aW1lLnJlZ2lzdGVyKClcbn0gZWxzZSB7XG4gICAgY29uc29sZS53YXJuKCdUaGlzIGJyb3dzZXIgZG9lc25cXCd0IHVzZSBhIHNlcnZpY2Ugd29ya2VyJylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=