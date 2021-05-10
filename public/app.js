/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 205:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"profile\"><div class=\"w-80 text-center py-5\"><user-profile class=\"text-left\"></user-profile></div></div>");

/***/ }),

/***/ 416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"skill\"><h2 class=\"py-1 h2\">プログラミング経験</h2><lang-exps class=\"text-left\"></lang-exps><h2 class=\"mt-3 h2\">実績 / 製作物</h2><product-list></product-list></div>");

/***/ }),

/***/ 568:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


;// CONCATENATED MODULE: ./src/components/Base.ts
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

;// CONCATENATED MODULE: ./src/components/layouts/Header.ts

class Header extends Base.WebComponentBase {
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

;// CONCATENATED MODULE: ./src/components/layouts/Footer.ts

class Footer extends Base.WebComponentBase {
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

;// CONCATENATED MODULE: ./src/components/layouts/index.ts


var LayoutComponent;
(function (LayoutComponent) {
    function init() {
        customElements.define('app-header', Header);
        customElements.define('app-footer', Footer);
    }
    LayoutComponent.init = init;
})(LayoutComponent || (LayoutComponent = {}));

// EXTERNAL MODULE: ./src/assets/data/index.ts + 2 modules
var data = __webpack_require__(180);
;// CONCATENATED MODULE: ./src/components/profile/User.ts


class User extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = data/* ProfileJsonState.body */.L.body;
        this.content = null;
        this._render();
        User._this = this;
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
        if (User._this === null)
            return;
        if (User._this.content === null)
            User._this.content = document.querySelector('#profile-content');
        User._this.content.classList.toggle('is-profile');
        User._this.content.classList.toggle('is-profile-reverse');
    }
}
User._this = null;

;// CONCATENATED MODULE: ./src/components/profile/Profile.ts


class Profile extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = {
            header: data/* ProfileJsonState.header */.L.header,
        };
        this._render();
    }
    _render() {
        const dom = __webpack_require__(205)/* .default */ .Z;
        this.innerHTML = dom.replace('${data.header}', this.data.header);
        return;
    }
}

;// CONCATENATED MODULE: ./src/components/profile/index.ts


var ProfileComponent;
(function (ProfileComponent) {
    function init() {
        customElements.define('profile-component', Profile);
        customElements.define('user-profile', User);
    }
    ProfileComponent.init = init;
})(ProfileComponent || (ProfileComponent = {}));

;// CONCATENATED MODULE: ./src/components/skill/Skill.ts


class Skill extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = {
            header: data/* SkillJsonState.header */.F.header,
        };
        this._render();
    }
    _render() {
        const dom = __webpack_require__(416)/* .default */ .Z;
        this.innerHTML = dom.replace('${data.header}', this.data.header);
        return;
    }
}

;// CONCATENATED MODULE: ./src/components/skill/LangExp.ts


class LangExp extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = data/* SkillJsonState.body.langexps */.F.body.langexps;
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

;// CONCATENATED MODULE: ./src/components/skill/Product.ts


class Product extends Base.WebComponentBase {
    constructor() {
        super();
        this.data = data/* SkillJsonState.body.products */.F.body.products;
        this.logo = null;
        this.desc = null;
        this.github = null;
        this.langs = null;
        this._render();
        Product._this = this;
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
        if (key === NaN || Product._this == null)
            return;
        const product = Product._this.data[key];
        if (Product._this.logo === null)
            Product._this.logo = document.querySelector('#product-logo');
        if (Product._this.desc === null)
            Product._this.desc = document.querySelector('#product-desc');
        if (Product._this.langs === null)
            Product._this.langs = document.querySelector('#product-lang');
        if (Product._this.github === null)
            Product._this.github = document.querySelector('#product-github');
        Product._this.logo.src = product.logo;
        Product._this.desc.innerHTML = product.desc;
        Product._this.langs.innerHTML = product.langs.map(lang => `<span>${lang}</span>`).join('');
        Product._this.github.href = product.github;
        // display on
        Product._this.desc.classList.remove('d-none');
        Product._this.langs.classList.remove('d-none');
        Product._this.github.classList.remove('d-none');
    }
}
Product._this = null;

;// CONCATENATED MODULE: ./src/components/skill/index.ts



var SkillComponent;
(function (SkillComponent) {
    function init() {
        customElements.define('skill-component', Skill);
        customElements.define('lang-exps', LangExp);
        customElements.define('product-list', Product);
    }
    SkillComponent.init = init;
})(SkillComponent || (SkillComponent = {}));

;// CONCATENATED MODULE: ./src/components/main.ts




class Main extends Base.WebComponentBase {
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
var MainComponent;
(function (MainComponent) {
    function init() {
        // render view
        LayoutComponent.init();
        ProfileComponent.init();
        SkillComponent.init();
        customElements.define('app-main', Main);
    }
    MainComponent.init = init;
})(MainComponent || (MainComponent = {}));

;// CONCATENATED MODULE: ./src/app.ts
/* === Main Application bundle file === */
// Libraries


// Custom Style and Script


// import VirtualDomApp from './app/VirtualDomApp'
// render custom component
MainComponent.init();
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

/***/ 180:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "L": () => (/* reexport */ Profile_namespaceObject),
  "F": () => (/* reexport */ Skill_namespaceObject)
});

;// CONCATENATED MODULE: ./src/assets/data/Profile.json
const Profile_namespaceObject = JSON.parse('{"header":"プロフィール","body":{"logo":"public/static/images/logo.png","name":"hiyoko3","note":"アプリケーションエンジニア","birth":1994,"gender":"男性","histories":["2013年 大学(情報工学)入学","2017年 大学(情報工学)卒業","2017年 大学院(情報工学専攻)入学","2019年 大学院(情報工学専攻)修了","2019年 新卒入社（現在に至る）"],"vision":{"work":["顧客にサービス提供している","「やってみよう」だけではなく、事前調査を行い、根拠の上で行動を起こせる"],"wantto":["大規模サービス開発チームにジョインし、開発に携わりたい","バックエンド(言語+DB+サーバー構成)が第一志望。第二志望でフロントエンド"],"contribution":["小規模〜大規模Webサービスのチーム開発経験があります","小規模かつ少人数の案件であれば、擬似的なプロジェクト管理を実施し、プロジェクトマネージャーを支援できます。"]},"email":{"prefix":"sb.gm.0823@***","suffix":"※ ***にはgmail.comを入力してください"},"social_links":[{"name":"AtCoder","url":"https://atcoder.jp/users/ae_hiyoko3"},{"name":"Github","url":"https://github.com/hiyoko3"},{"name":"Qiita","url":"https://qiita.com/hiyoko3"},{"name":"Twitter","url":"https://twitter.com/ae_hiyoko3"}]}}');
;// CONCATENATED MODULE: ./src/assets/data/Skill.json
const Skill_namespaceObject = JSON.parse('{"header":"Skill & Products","body":{"langexps":[{"name":"C++","exp":1,"note":"競技プログラミングでのみ使用してます。"},{"name":"JavaScript","exp":5,"note":"趣味がメインです。時々業務でも使用してます。jQuery / Node.js / TypeScript / Vue.js / React.jsも含む"},{"name":"Java","exp":3,"note":"業務メイン。Androidも含む。"},{"name":"Kotlin","exp":1,"note":"ちょっとかじった程度です。Javaが書けるのでドキュメント見ながらなら人並みにコーディングできるかと思います"},{"name":"Perl","exp":2,"note":"業務でしか触りません。"},{"name":"PHP","exp":4,"note":"学生時代（趣味+インターン先）でよく書いてました。嫌いじゃないです。Laravelも含む"},{"name":"Python","exp":2,"note":"研究用のプログラムで書いてました。Djangoも含む。"},{"name":"Ruby","exp":5,"note":"学生時代（趣味+インターン先）から書いてて今の業務でも使ってます。ほとんどRailsなので、Rubyと言えるか怪しい。。"},{"name":"Swift","exp":1,"note":"趣味でちょっと触っただけです。設計が難しい印象しかないです。"},{"name":"MySQL","exp":5,"note":"ガッツリ関わる（トランザクション分離、バッファプールなど）ようになったのは業務からです。それまでは基礎構文程度しか抑えていませんでした。"},{"name":"Docker","exp":2,"note":"docker-composeがメインです。業務でしか使ってません。"},{"name":"git","exp":5,"note":"CLIでしか使ったことないです。これからもCLI（これはスキルと言えるのか、、？"}],"products":[{"name":"Portfilo","logo":"public/static/images/no_image.png","desc":"本ページです。フレームワークは利用せず、全て自前実装で書いてます。デザインが頻繁に変わるので画像はつけていません。","github":"https://github.com/hiyoko3/hiyoko3.github.io","langs":["TypeScript"]},{"name":"NaruHiyo Project","logo":"public/static/images/naruhiyo.png","desc":"友人と色々なモノを作ったり勉強したり、エンジニアとして高め合うために設立したチーム。リンクはチームのポートフォリオへ飛びます","github":"https://github.com/naruhiyo/naruhiyo.github.io","langs":["React.js"]},{"name":"Memoma","logo":"public/static/images/memoma.gif","desc":"Markdown変換に対応したクロスプラットフォーム型メモアプリ。マルチカラムに対応してます。公開してないです。","github":"https://github.com/naruhiyo/Memoma","langs":["Electron"]},{"name":"Partytion","logo":"public/static/images/partytion.gif","desc":"「飲み会の盛り上げる」をコンセプトに作成したクイズ型のiOSアプリです。公開してないです。","github":"https://github.com/naruhiyo/partytion","langs":["Swift 5"]},{"name":"研究室HP","logo":"public/static/images/no_image.png","desc":"学生時代に作成した研究室のHPです。SPAで構築されています。身バレ防止のため画像などは添付していません。","github":"","langs":["Vue.js"]},{"name":"AtCoder 過去問集","logo":"public/static/images/no_image.png","desc":"AtCoderの過去問","github":"https://github.com/hiyoko3/practice-contest","langs":["C++"]}]}}');
;// CONCATENATED MODULE: ./src/assets/data/index.ts





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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			222: 0,
/******/ 			121: 0,
/******/ 			368: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhiyoko3_github_io"] = self["webpackChunkhiyoko3_github_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [368], () => (__webpack_require__(568)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oaXlva28zLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5wdWciLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9za2lsbC9za2lsbC5wdWciLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9CYXNlLnRzIiwid2VicGFjazovL2hpeW9rbzMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0cy9IZWFkZXIudHMiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0Zvb3Rlci50cyIsIndlYnBhY2s6Ly9oaXlva28zLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9wcm9maWxlL1VzZXIudHMiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9wcm9maWxlL1Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9wcm9maWxlL2luZGV4LnRzIiwid2VicGFjazovL2hpeW9rbzMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvc2tpbGwvU2tpbGwudHMiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vLi9zcmMvY29tcG9uZW50cy9za2lsbC9MYW5nRXhwLnRzIiwid2VicGFjazovL2hpeW9rbzMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvc2tpbGwvUHJvZHVjdC50cyIsIndlYnBhY2s6Ly9oaXlva28zLmdpdGh1Yi5pby8uL3NyYy9jb21wb25lbnRzL3NraWxsL2luZGV4LnRzIiwid2VicGFjazovL2hpeW9rbzMuZ2l0aHViLmlvLy4vc3JjL2NvbXBvbmVudHMvbWFpbi50cyIsIndlYnBhY2s6Ly9oaXlva28zLmdpdGh1Yi5pby8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vLi9zcmMvYXNzZXRzL2RhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9oaXlva28zLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaGl5b2tvMy5naXRodWIuaW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9oaXlva28zLmdpdGh1Yi5pby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9oaXlva28zLmdpdGh1Yi5pby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUFlLHdIQUF3SCxFOzs7Ozs7Ozs7O0FDQXZJLGlFQUFlLHlLQUF5SyxFOzs7Ozs7Ozs7QUNFakwsSUFBVSxJQUFJLENBOERwQjtBQTlERCxXQUFpQixJQUFJO0lBQ25CLE1BQXNCLGdCQUFpQixTQUFRLFdBQVc7UUFHeEQ7O1dBRUc7UUFDSCxNQUFNLEtBQUssa0JBQWtCO1lBQzNCLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztRQUVEO1lBQ0UsS0FBSyxFQUFFLENBQUM7WUFDUixpREFBaUQ7WUFDakQsdUNBQXVDO1FBQ3pDLENBQUM7UUFFRCxnQ0FBZ0M7UUFDaEMsd0JBQXdCO1FBQ3hCLHNDQUFzQztRQUN0QyxJQUFJO1FBRUosaUNBQWlDO1FBQ2pDLDJCQUEyQjtRQUMzQix5Q0FBeUM7UUFDekMsSUFBSTtRQUNKOzs7OztXQUtHO1FBQ0gsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQixzQkFBc0I7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QU8sQ0FBQyxJQUFJLENBQUMsNENBQTRDLENBQUM7Q0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJ3QztBQUNKO0FBNkNtQzs7Ozs7OztVQzlDeEU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLDhCQUE4Qix3Q0FBd0M7V0FDdEU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQkFBZ0IscUJBQXFCO1dBQ3JDO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQzFCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLDRHOzs7OztVQ2hEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InB1YmxpYy9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcInByb2ZpbGVcXFwiPjxkaXYgY2xhc3M9XFxcInctODAgdGV4dC1jZW50ZXIgcHktNVxcXCI+PHVzZXItcHJvZmlsZSBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48L3VzZXItcHJvZmlsZT48L2Rpdj48L2Rpdj5cIjsiLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgaWQ9XFxcInNraWxsXFxcIj48aDIgY2xhc3M9XFxcInB5LTEgaDJcXFwiPuODl+ODreOCsOODqeODn+ODs+OCsOe1jOmokzwvaDI+PGxhbmctZXhwcyBjbGFzcz1cXFwidGV4dC1sZWZ0XFxcIj48L2xhbmctZXhwcz48aDIgY2xhc3M9XFxcIm10LTMgaDJcXFwiPuWun+e4viAvIOijveS9nOeJqTwvaDI+PHByb2R1Y3QtbGlzdD48L3Byb2R1Y3QtbGlzdD48L2Rpdj5cIjsiLCJpbnRlcmZhY2UgV2ViQ29tcG9uZW50SW50ZXJmYWNlIHt9XG5cbmV4cG9ydCBuYW1lc3BhY2UgQmFzZSB7XG4gIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBXZWJDb21wb25lbnRCYXNlIGV4dGVuZHMgSFRNTEVsZW1lbnRcbiAgICBpbXBsZW1lbnRzIFdlYkNvbXBvbmVudEludGVyZmFjZSB7XG5cbiAgICAvKipcbiAgICAgKiDmnInlirnjgavjgZnjgovlsZ7mgKflgKRcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpOiBzdHJpbmdbXSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgLy8gTm90ZTogU2hhZG93IE1vZGUg44KSIG9uIOOBq+OBmeOCi+OBqOWGhemDqENTU+OCkuW/heOBmuWumue+qeOBl+OBquOBkeOCjOOBsOOBquOCieOBquOBhFxuICAgICAgLy8gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgfVxuXG4gICAgLy8gQ3VzdG9tIEVsZW1lbnTjgYxET03jgavov73liqDjgZXjgozjgZ/jgr/jgqTjg5/jg7PjgrBcbiAgICAvLyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWRDYWxsYmFjaycpO1xuICAgIC8vIH1cblxuICAgIC8vIEN1c3RvbSBFbGVtZW5044GMRE9N44GL44KJ5YmK6Zmk44GV44KM44Gf44K/44Kk44Of44Oz44KwXG4gICAgLy8gZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnZGlzY29ubmVjdGVkQ2FsbGJhY2snKTtcbiAgICAvLyB9XG4gICAgLyoqXG4gICAgICog5bGe5oCn5YCk44Gr44KI44Gj44Gm44Kk44OZ44Oz44OI44KS44OV44OD44Kv44GZ44KL44CCb2JzZXJ2ZWRBdHRyaWJ1dGVz44Go5L2155So44GZ44KL5b+F6KaB44GM44KLXG4gICAgICogQHBhcmFtIGF0dHJpYnV0ZU5hbWVcbiAgICAgKiBAcGFyYW0gb2xkVmFsdWVcbiAgICAgKiBAcGFyYW0gbmV3VmFsdWVcbiAgICAgKi9cbiAgICAvLyBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soXG4gICAgLy8gICBhdHRyaWJ1dGVOYW1lOiBzdHJpbmcsXG4gICAgLy8gICBvbGRWYWx1ZTogc3RyaW5nLFxuICAgIC8vICAgbmV3VmFsdWU6IHN0cmluZ1xuICAgIC8vICk6IHZvaWQge1xuICAgIC8vICAgLy8g5a6a576p44GX44Gm44GE44Gq44GE44OH44O844K/44Gv5Yem55CG44GX44Gq44GEXG4gICAgLy8gICBpZiAoIXRoaXMuZGF0YVtuZXdWYWx1ZV0pIHJldHVybjtcbiAgICAvLyAgIHJldHVybjtcbiAgICAvLyB9XG4gICAgLyoqXG4gICAgICog5o+P55S75Yem55CGXG4gICAgICovXG4gICAgcHJvdGVjdGVkIF9yZW5kZXIoKTogdm9pZCB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOODhuODs+ODl+ODrOODvOODiOino+aekFxuICAgICAqIOWkieaVsOOBjOOBguOCjOOBsOWxlemWi+OBmeOCi1xuICAgICAqIEZJWE1FOiDphY3liJflsZXplovjgZXjgYjjgafjgY3jgozjgbDlrp/nlKjljJblj6/og71cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZTogc3RyaW5nLCBkYXRhOiBhbnkpOiBzdHJpbmcge1xuICAgICAgY29uc3QgcmVnZXhwOiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBcXFxcJGAgKyBge2RhdGEuKCR7T2JqZWN0LmtleXMoZGF0YSkuam9pbignfCcpfSl9YCwgJ2cnKTtcblxuICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UocmVnZXhwLCAoczpzdHJpbmcpOnN0cmluZyA9PiB7XG4gICAgICAgIC8vIOWkieaVsOOBrmtleeOCkuWPluW+l1xuICAgICAgICBjb25zdCBrZXk6c3RyaW5nID0gcy5zcGxpdCgnLicpWzFdLnNwbGl0KCd9JylbMF07XG4gICAgICAgIHJldHVybiBkYXRhW2tleV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9CYXNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZS5XZWJDb21wb25lbnRCYXNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBkb20gPVxuICAgICAgYDxoZWFkZXIgaWQ9XCJoZWFkZXJcIj5gICtcbiAgICAgICAgYDxoMSBjbGFzcz1cImgxIHRleHQtY2VudGVyXCI+UG9ydGZvbGlvPC9oMT5gICtcbiAgICAgIGA8L2hlYWRlcj5gO1xuXG4gICAgdGhpcy5pbm5lckhUTUwgPSBkb207XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vQmFzZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIEJhc2UuV2ViQ29tcG9uZW50QmFzZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9yZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3QgZG9tID1cbiAgICAgIGA8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcGEtMlwiPmAgK1xuICAgICAgICAgIGA8c3Bhbj4mY29weTwvc3Bhbj5gICtcbiAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJwbC0xXCI+MjAxNiAtICR7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvc3Bhbj5gICtcbiAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJwbC0xXCI+aGl5b2tvMzwvc3Bhbj5gICtcbiAgICAgICAgYDwvZGl2PmAgK1xuICAgICAgYDwvZm9vdGVyPmA7XG5cbiAgICB0aGlzLmlubmVySFRNTCA9IGRvbTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3Rlcic7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGF5b3V0Q29tcG9uZW50IHtcbiAgZXhwb3J0IGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtaGVhZGVyJywgSGVhZGVyKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FwcC1mb290ZXInLCBGb290ZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vQmFzZSc7XG5pbXBvcnQgeyBQcm9maWxlSnNvblN0YXRlIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEnO1xuXG50eXBlIFVzZXJTdGF0ZSA9IHtcbiAgbG9nbzogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIG5vdGU6IHN0cmluZztcbiAgYmlydGg6IG51bWJlcjtcbiAgZ2VuZGVyOiBzdHJpbmc7XG4gIGhpc3Rvcmllczogc3RyaW5nW107XG4gIHZpc2lvbjoge1xuICAgIHdvcms6c3RyaW5nW10sXG4gICAgd2FudHRvOiBzdHJpbmdbXSxcbiAgICBjb250cmlidXRpb246IHN0cmluZ1tdXG4gIH07XG4gIGVtYWlsOiB7XG4gICAgcHJlZml4OiBzdHJpbmc7XG4gICAgc3VmZml4OiBzdHJpbmc7XG4gIH07XG4gIHNvY2lhbF9saW5rczoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgfVtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIGV4dGVuZHMgQmFzZS5XZWJDb21wb25lbnRCYXNlIHtcbiAgcHJpdmF0ZSBkYXRhOiBVc2VyU3RhdGUgPSBQcm9maWxlSnNvblN0YXRlLmJvZHlcbiAgcHJpdmF0ZSBjb250ZW50OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3RhdGljIF90aGlzOiBVc2VyIHwgbnVsbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgVXNlci5fdGhpcyA9IHRoaXM7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAvLyDjgqTjg5njg7Pjg4jjga7ov73liqBcbiAgICBjb25zdCBwcm9kdWN0TmFtZXM6IE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5leHQtdG8nKTtcbiAgICBwcm9kdWN0TmFtZXMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJldmVyc2VDYXJkKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBkb20gPVxuICAgICAgYDxkaXYgY2xhc3M9XCJkLWZsZXggdXNlciBqdXN0aWZ5LWNvbnRlbnQtc3BhY2UtYXJvdW5kIGFsaWduLWl0ZW1zLWNlbnRlclwiPmAgK1xuICAgICAgICBgPGRpdiBjbGFzcz1cInBhLTFcIj48aW1nIGFsdD1cInByb2ZpbGUtbG9nb1wiIGlkPVwicHJvZmlsZS1sb2dvXCIgc3JjPVwiJHt0aGlzLmRhdGEubG9nb31cIi8+PC9kaXY+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwicGEtMiBpcy1wcm9maWxlXCIgaWQ9XCJwcm9maWxlLWNvbnRlbnRcIj5gICtcbiAgICAgICAgICBgPGRpdiBjbGFzcz1cInN1cmZhY2VcIj5gICtcbiAgICAgICAgICAgIGA8aDQgY2xhc3M9XCJoNFwiPuWfuuacrOaDheWgsTwvaDQ+YCArXG4gICAgICAgICAgICBgPHAgY2xhc3M9XCJwbC0yIG15LTFcIj7lkI3liY06ICR7dGhpcy5kYXRhLm5hbWV9PC9wPmAgK1xuICAgICAgICAgICAgYDxwIGNsYXNzPVwicGwtMiBteS0xXCI+6IG356iuOiAke3RoaXMuZGF0YS5ub3RlfTwvcD5gICtcbiAgICAgICAgICAgIGA8cCBjbGFzcz1cInBsLTIgbXktMVwiPuW5tOm9ojogJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSB0aGlzLmRhdGEuYmlydGh9PC9wPmAgK1xuICAgICAgICAgICAgYDxwIGNsYXNzPVwicGwtMiBteS0xXCI+5oCn5YilOiAke3RoaXMuZGF0YS5nZW5kZXJ9PC9wPmAgK1xuICAgICAgICAgICAgYDxoNCBjbGFzcz1cImg0IG15LTFcIj7ntYzmrbQ8L2g0PmAgK1xuICAgICAgICAgICAgYDx1bD5gICtcbiAgICAgICAgICAgICAgdGhpcy5kYXRhLmhpc3Rvcmllcy5tYXAoaGlzdG9yeSA9PiBgPGxpPiR7aGlzdG9yeX08L2xpPmApLmpvaW4oJycpICtcbiAgICAgICAgICAgIGA8L3VsPmAgK1xuICAgICAgICAgICAgYDxoNCBjbGFzcz1cImg0IG15LTFcIj7pgKPntaE8L2g0PmAgK1xuICAgICAgICAgICAgYDxwIGNsYXNzPVwicGwtMiBteS0xXCI+JHt0aGlzLmRhdGEuZW1haWwucHJlZml4fTwvcD5gICtcbiAgICAgICAgICAgIGA8cCBjbGFzcz1cInBsLTIgbXktMVwiPiR7dGhpcy5kYXRhLmVtYWlsLnN1ZmZpeH08L3A+YCArXG4gICAgICAgICAgICBgPGg0IGNsYXNzPVwiaDQgbXktMlwiPlNOUzwvaDQ+YCArXG4gICAgICAgICAgICBgPGRpdiBjbGFzcz1cInBsLTIgbXktMVwiPmAgK1xuICAgICAgICAgICAgICB0aGlzLmRhdGEuc29jaWFsX2xpbmtzLm1hcChsaW5rID0+IGA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGhyZWY9XCIke2xpbmsudXJsfVwiIGNsYXNzPVwic29jaWFsLWxpbmtcIj4ke2xpbmsubmFtZX08L2E+YCkuam9pbignJykgK1xuICAgICAgICAgICAgYDwvZGl2PmAgK1xuICAgICAgICAgIGA8L2Rpdj5gICtcblxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwicmV2ZXJzZWRcIj5gICtcbiAgICAgICAgICAgIGA8aDQgY2xhc3M9XCJoNFwiPuWDjeOBhOOBpuOBv+OBn+OBhOS8muekvjwvaDQ+YCArXG4gICAgICAgICAgICB0aGlzLmRhdGEudmlzaW9uLndvcmsubWFwKHcgPT4gYDxwIGNsYXNzPVwicGwtMiBteS0xXCI+JHt3fTwvcD5gKS5qb2luKCcnKSArXG4gICAgICAgICAgICBgPGg0IGNsYXNzPVwiaDRcIj7mjJHmiKbjgZfjgabjgb/jgZ/jgYTjgZPjgag8L2g0PmAgK1xuICAgICAgICAgICAgdGhpcy5kYXRhLnZpc2lvbi53YW50dG8ubWFwKHdvID0+IGA8cCBjbGFzcz1cInBsLTIgbXktMVwiPiR7d299PC9wPmApLmpvaW4oJycpICtcbiAgICAgICAgICAgIGA8aDQgY2xhc3M9XCJoNFwiPuiyoueMruOBp+OBjeOCi+OBk+OBqDwvaDQ+YCArXG4gICAgICAgICAgICB0aGlzLmRhdGEudmlzaW9uLmNvbnRyaWJ1dGlvbi5tYXAoYyA9PiBgPHAgY2xhc3M9XCJwbC0yIG15LTFcIj4ke2N9PC9wPmApLmpvaW4oJycpICtcbiAgICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJteS0zIHRleHQtcmlnaHRcIj5gICtcbiAgICAgICAgICAgIGA8c3BhbiBjbGFzcz1cIm5leHQtdG9cIj7liIfjgormm7/jgYggPGkgY2xhc3M9XCJmYXMgZmEtZXhjaGFuZ2UtYWx0XCI+PC9pPjwvc3Bhbj5gICtcbiAgICAgICAgICBgPC9kaXY+YCArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICAgIGA8L2Rpdj5gO1xuXG4gICAgdGhpcy5pbm5lckhUTUwgPSBkb207XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8g44Kr44O844OJ44KS6KOP6L+U44GZXG4gIHByaXZhdGUgcmV2ZXJzZUNhcmQoKTogdm9pZCB7XG4gICAgaWYgKFVzZXIuX3RoaXMgPT09IG51bGwpIHJldHVybjtcblxuICAgIGlmIChVc2VyLl90aGlzLmNvbnRlbnQgPT09IG51bGwpIFVzZXIuX3RoaXMuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9maWxlLWNvbnRlbnQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgVXNlci5fdGhpcy5jb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2lzLXByb2ZpbGUnKVxuICAgIFVzZXIuX3RoaXMuY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1wcm9maWxlLXJldmVyc2UnKTtcbiAgfVxufSIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9CYXNlJztcbmltcG9ydCB7IFByb2ZpbGVKc29uU3RhdGUgfSBmcm9tICcuLi8uLi9hc3NldHMvZGF0YSc7XG5cbnR5cGUgUHJvZmlsZVN0YXRlID0ge1xuICBoZWFkZXI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBCYXNlLldlYkNvbXBvbmVudEJhc2Uge1xuICBwcml2YXRlIGRhdGE6IFByb2ZpbGVTdGF0ZSA9IHtcbiAgICBoZWFkZXI6IFByb2ZpbGVKc29uU3RhdGUuaGVhZGVyLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gIH1cblxuXHRwcm90ZWN0ZWQgX3JlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBkb20gPSByZXF1aXJlKCcuL3Byb2ZpbGUucHVnJykuZGVmYXVsdDtcbiAgICB0aGlzLmlubmVySFRNTCA9IGRvbS5yZXBsYWNlKCcke2RhdGEuaGVhZGVyfScsIHRoaXMuZGF0YS5oZWFkZXIpO1xuICAgIHJldHVybjtcbiAgfVxufVxuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZSc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgUHJvZmlsZUNvbXBvbmVudCB7XG4gIGV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgncHJvZmlsZS1jb21wb25lbnQnLCBQcm9maWxlKTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ3VzZXItcHJvZmlsZScsIFVzZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vQmFzZSc7XG5pbXBvcnQgeyBTa2lsbEpzb25TdGF0ZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhJztcblxudHlwZSBTa2lsbFN0YXRlID0ge1xuICBoZWFkZXI6IHN0cmluZztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNraWxsIGV4dGVuZHMgQmFzZS5XZWJDb21wb25lbnRCYXNlIHtcbiAgcHJpdmF0ZSBkYXRhOiBTa2lsbFN0YXRlID0ge1xuICAgIGhlYWRlcjogU2tpbGxKc29uU3RhdGUuaGVhZGVyLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBkb20gPSByZXF1aXJlKCcuL3NraWxsLnB1ZycpLmRlZmF1bHQ7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBkb20ucmVwbGFjZSgnJHtkYXRhLmhlYWRlcn0nLCB0aGlzLmRhdGEuaGVhZGVyKTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiIsImltcG9ydCB7IEJhc2UgfSBmcm9tICcuLi9CYXNlJztcbmltcG9ydCB7IFNraWxsSnNvblN0YXRlIH0gZnJvbSAnLi4vLi4vYXNzZXRzL2RhdGEnO1xuXG50eXBlIExhbmdTdGF0ZSA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICBleHA6IG51bWJlcjtcbiAgbm90ZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ0V4cCBleHRlbmRzIEJhc2UuV2ViQ29tcG9uZW50QmFzZSB7XG4gIHByaXZhdGUgZGF0YTogTGFuZ1N0YXRlW10gPSBTa2lsbEpzb25TdGF0ZS5ib2R5LmxhbmdleHBzO1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9yZW5kZXIoKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfcmVuZGVyKCk6IHZvaWQge1xuICAgIGNvbnN0IGRvbSA9XG4gICAgICAgIHRoaXMuZGF0YS5tYXAoXG4gICAgICAgICAgc2tpbGwgPT5cbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPVwic2tpbGwtaXRlbSBwYS0xIG1hLTFcIj5gICtcbiAgICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+YCArXG4gICAgICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwic2tpbGwtbmFtZVwiPjxzdHJvbmc+JHtza2lsbC5uYW1lfTwvc3Ryb25nPjwvc3Bhbj5gICtcbiAgICAgICAgICAgICAgICBgPHByb2dyZXNzIGNsYXNzPVwibWwtMiBza2lsbC1leHBcIiBtYXg9XCIxMDBcIiB2YWx1ZT1cIiR7c2tpbGwuZXhwICogMTB9XCI+JHtza2lsbC5leHB95bm0PC9wcm9ncmVzcz5gICtcbiAgICAgICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJtbC0yIGg1XCI+JHtza2lsbC5leHB9IOW5tDwvc3Bhbj5gICtcbiAgICAgICAgICAgICAgYDwvZGl2PmAgK1xuICAgICAgICAgICAgICBgPHAgY2xhc3M9XCJtdC0xIHNraWxsLW5vdGVcIj4ke3NraWxsLm5vdGV9PC9wPmAgK1xuICAgICAgICAgICAgYDwvZGl2PmBcbiAgICAgICAgICApLmpvaW4oJycpO1xuXG4gICAgdGhpcy5pbm5lckhUTUwgPSBkb207XG4gICAgcmV0dXJuO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlIH0gZnJvbSAnLi4vQmFzZSc7XG5pbXBvcnQgeyBTa2lsbEpzb25TdGF0ZSB9IGZyb20gJy4uLy4uL2Fzc2V0cy9kYXRhJztcblxudHlwZSBQcm9kdWN0U3RhdGUgPSB7XG4gIG5hbWU6IHN0cmluZztcbiAgbG9nbzogc3RyaW5nO1xuICBkZXNjOiBzdHJpbmc7XG4gIGdpdGh1Yjogc3RyaW5nO1xuICBsYW5nczogc3RyaW5nW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgQmFzZS5XZWJDb21wb25lbnRCYXNlIHtcbiAgcHJpdmF0ZSBkYXRhOiBQcm9kdWN0U3RhdGVbXSA9IFNraWxsSnNvblN0YXRlLmJvZHkucHJvZHVjdHM7XG4gIHByaXZhdGUgbG9nbzogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIGRlc2M6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBnaXRodWI6IEhUTUxBbmNob3JFbGVtZW50IHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgbGFuZ3M6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGF0aWMgX3RoaXM6IFByb2R1Y3QgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX3JlbmRlcigpO1xuICAgIFByb2R1Y3QuX3RoaXMgPSB0aGlzO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8g44Kk44OZ44Oz44OI44Gu6L+95YqgXG4gICAgY29uc3QgcHJvZHVjdE5hbWVzOiBOb2RlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LW5hbWUnKTtcbiAgICBwcm9kdWN0TmFtZXMuZm9yRWFjaChwcm9kdWN0ID0+IHByb2R1Y3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnNldEltZykpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9yZW5kZXIoKTogdm9pZCB7XG4gICAgY29uc3QgZG9tID0gXG4gICAgICBgPGRpdiBpZD1cInByb2R1Y3QtZmllbGRcIiBjbGFzcz1cInBhLTIgZC1mbGV4XCI+YCArXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwicHJvZHVjdC1saXN0XCI+YCArIFxuICAgICAgICAgIHRoaXMuZGF0YS5tYXAoKHByb2R1Y3QsIGlkeCkgPT4gYDxwIGNsYXNzPVwicHktMSBoNCBwcm9kdWN0LW5hbWVcIiBkYXRhLWtleT1cIiR7aWR4fVwiPiR7cHJvZHVjdC5uYW1lfTwvcD5gKS5qb2luKCcnKSArXG4gICAgICAgIGA8L2Rpdj5gICtcbiAgICAgICAgYDxkaXYgY2xhc3M9XCJtYS0zIHBhLTIgcHJvZHVjdC1jb250ZW50IHRleHQtbGVmdFwiPmAgK1xuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwicGEtMSB0ZXh0LWNlbnRlclwiPjxpbWcgc3JjPVwicHVibGljL3N0YXRpYy9pbWFnZXMvbm9faW1hZ2UucG5nXCIgYWx0PVwicHJvZHVjdC1pbWdcIiBpZD1cInByb2R1Y3QtbG9nb1wiIC8+PC9kaXY+YCArXG4gICAgICAgICAgYDxwIGNsYXNzPVwibXktMVwiIGlkPVwicHJvZHVjdC1kZXNjXCI+UHJvZHVjdOOCkumBuOaKnuOBmeOCi+OBqOips+e0sOOBjOihqOekuuOBleOCjOOBvuOBmTwvcD5gICtcbiAgICAgICAgICBgPHAgY2xhc3M9XCJteS0yIGQtbm9uZVwiIGlkPVwicHJvZHVjdC1sYW5nXCI+PC9wPmAgK1xuICAgICAgICAgIGA8YSBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgaWQ9XCJwcm9kdWN0LWdpdGh1YlwiIGNsYXNzPVwibXktMSBkLW5vbmVcIj48aSBjbGFzcz1cIm1yLTEgZmFiIGZhLWdpdGh1Yi1hbHRcIj48L2k+R2l0aHViPGkgY2xhc3M9XCJtbC0xIGZhYiBmYS1naXRodWItYWx0XCI+PC9pPjwvYT5gICtcbiAgICAgICAgYDwvZGl2PmAgK1xuICAgICAgYDwvZGl2PmA7XG4gICAgdGhpcy5pbm5lckhUTUwgPSBkb207XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIOeUu+WDj+OBruWIh+OCiuabv+OBiFxuICAgKi9cbiAgcHJpdmF0ZSBzZXRJbWcoKTogdm9pZCB7XG4gICAgY29uc3Qga2V5OiBudW1iZXIgPSBwYXJzZUludCh0aGlzLmRhdGFzZXQua2V5IHx8ICcnKTtcbiAgXG4gICAgaWYgKGtleSA9PT0gTmFOIHx8IFByb2R1Y3QuX3RoaXMgPT0gbnVsbCkgcmV0dXJuO1xuICBcbiAgICBjb25zdCBwcm9kdWN0OiBQcm9kdWN0U3RhdGUgPSBQcm9kdWN0Ll90aGlzLmRhdGFba2V5XTtcbiAgICBpZiAoUHJvZHVjdC5fdGhpcy5sb2dvID09PSBudWxsKSBQcm9kdWN0Ll90aGlzLmxvZ28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1sb2dvJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoUHJvZHVjdC5fdGhpcy5kZXNjID09PSBudWxsKSBQcm9kdWN0Ll90aGlzLmRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1kZXNjJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBpZiAoUHJvZHVjdC5fdGhpcy5sYW5ncyA9PT0gbnVsbCkgUHJvZHVjdC5fdGhpcy5sYW5ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9kdWN0LWxhbmcnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChQcm9kdWN0Ll90aGlzLmdpdGh1YiA9PT0gbnVsbCkgUHJvZHVjdC5fdGhpcy5naXRodWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvZHVjdC1naXRodWInKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblxuICAgIFByb2R1Y3QuX3RoaXMubG9nby5zcmMgPSBwcm9kdWN0LmxvZ287XG4gICAgUHJvZHVjdC5fdGhpcy5kZXNjLmlubmVySFRNTCA9IHByb2R1Y3QuZGVzYztcbiAgICBQcm9kdWN0Ll90aGlzLmxhbmdzLmlubmVySFRNTCA9IHByb2R1Y3QubGFuZ3MubWFwKGxhbmcgPT4gYDxzcGFuPiR7bGFuZ308L3NwYW4+YCkuam9pbignJyk7XG4gICAgUHJvZHVjdC5fdGhpcy5naXRodWIuaHJlZiA9IHByb2R1Y3QuZ2l0aHViO1xuXG4gICAgLy8gZGlzcGxheSBvblxuICAgIFByb2R1Y3QuX3RoaXMuZGVzYy5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICBQcm9kdWN0Ll90aGlzLmxhbmdzLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgIFByb2R1Y3QuX3RoaXMuZ2l0aHViLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICB9XG59XG4iLCJpbXBvcnQgU2tpbGwgZnJvbSAnLi9Ta2lsbCc7XG5pbXBvcnQgTGFuZ0V4cCBmcm9tICcuL0xhbmdFeHAnO1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcblxuZXhwb3J0IG5hbWVzcGFjZSBTa2lsbENvbXBvbmVudCB7XG4gIGV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2tpbGwtY29tcG9uZW50JywgU2tpbGwpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGFuZy1leHBzJywgTGFuZ0V4cCk7XG4gICAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwcm9kdWN0LWxpc3QnLCBQcm9kdWN0KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTGF5b3V0Q29tcG9uZW50IH0gZnJvbSAnLi9sYXlvdXRzJztcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL3Byb2ZpbGUnO1xuaW1wb3J0IHsgU2tpbGxDb21wb25lbnQgfSBmcm9tICcuL3NraWxsJztcbmltcG9ydCB7IEJhc2UgfSBmcm9tICcuL0Jhc2UnO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQmFzZS5XZWJDb21wb25lbnRCYXNlIHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fcmVuZGVyKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX3JlbmRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBkb20gPVxuICAgICAgYDxtYWluIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5gICtcbiAgICAgICAgYDxwcm9maWxlLWNvbXBvbmVudD48L3Byb2ZpbGUtY29tcG9uZW50PmAgK1xuICAgICAgICBgPHNraWxsLWNvbXBvbmVudD48L3NraWxsLWNvbXBvbmVudD5gICtcbiAgICAgIGA8L21haW4+YDtcblxuICAgIHRoaXMuaW5uZXJIVE1MID0gZG9tO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIE1haW5Db21wb25lbnQge1xuICBleHBvcnQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyByZW5kZXIgdmlld1xuICAgIExheW91dENvbXBvbmVudC5pbml0KCk7XG4gICAgUHJvZmlsZUNvbXBvbmVudC5pbml0KCk7XG4gICAgU2tpbGxDb21wb25lbnQuaW5pdCgpO1xuICAgIGN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYXBwLW1haW4nLCBNYWluKTtcbiAgfVxufVxuIiwiLyogPT09IE1haW4gQXBwbGljYXRpb24gYnVuZGxlIGZpbGUgPT09ICovXG4vLyBMaWJyYXJpZXNcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5jc3MnXG5pbXBvcnQgJ21vZGVybi1jc3MtcmVzZXQvZGlzdC9yZXNldC5taW4uY3NzJ1xuXG4vLyBDdXN0b20gU3R5bGUgYW5kIFNjcmlwdFxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnXG5pbXBvcnQgeyBNYWluQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21haW4nXG4vLyBpbXBvcnQgVmlydHVhbERvbUFwcCBmcm9tICcuL2FwcC9WaXJ0dWFsRG9tQXBwJ1xuXG4vLyByZW5kZXIgY3VzdG9tIGNvbXBvbmVudFxuTWFpbkNvbXBvbmVudC5pbml0KCk7XG5cbi8qID09PSBTZXJ2aWNlIFdvcmtlciA9PT0gKi9cbi8vIENoZWNraW5nIHN1cHBvcnQgYSBgc2VydmljZSB3b3JrZXJgXG5pZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciAmJlxuICAgICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcpKSB7XG4gICAgLy8gY29uc3QgcmVnaXN0cmF0aW9uID0gcnVudGltZS5yZWdpc3RlcigpXG59IGVsc2Uge1xuICAgIGNvbnNvbGUud2FybignVGhpcyBicm93c2VyIGRvZXNuXFwndCB1c2UgYSBzZXJ2aWNlIHdvcmtlcicpXG59XG4iLCJpbXBvcnQgUHJvZmlsZUpTT04gZnJvbSAnLi9Qcm9maWxlLmpzb24nO1xuaW1wb3J0IFNraWxsSlNPTiBmcm9tICcuL1NraWxsLmpzb24nO1xuXG50eXBlIFByb2ZpbGVKc29uU3RhdGUgPSB7XG4gIGhlYWRlcjogc3RyaW5nO1xuICBib2R5OiB7XG4gICAgbG9nbzogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBub3RlOiBzdHJpbmc7XG4gICAgYnJpdGg6IG51bWJlcixcbiAgICBnZW5kZXI6IHN0cmluZyxcbiAgICBoaXN0b3JpZXM6IHN0cmluZ1tdLFxuICAgIHZpc2lvbjoge1xuICAgICAgd29yazpzdHJpbmdbXSxcbiAgICAgIHdhbnRvdG86IHN0cmluZ1tdLFxuICAgICAgY29udHJpYnV0aW9uOiBzdHJpbmdbXVxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgIHByZWZpeDogc3RyaW5nO1xuICAgICAgc3VmZml4OiBzdHJpbmc7XG4gICAgfTtcbiAgICBzb2NpYWxfbGlua3M6IHtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIHVybDogc3RyaW5nO1xuICAgIH1bXTtcbiAgfTtcbn07XG5cbnR5cGUgU2tpbGxKc29uU3RhdGUgPSB7XG4gIGhlYWRlcjogc3RyaW5nO1xuICBib2R5OiB7XG4gICAgc2tpbGxzOiB7XG4gICAgICBuYW1lOiBzdHJpbmc7XG4gICAgICBleHA6IG51bWJlcjtcbiAgICAgIG5vdGU6IHN0cmluZztcbiAgICB9W107XG4gICAgcHJvZHVjdHM6IHtcbiAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgIGxvZ286IHN0cmluZztcbiAgICAgIGRlc2M6IHN0cmluZztcbiAgICAgIGdpdGh1Yjogc3RyaW5nO1xuICAgICAgbGFuZ3M6IHN0cmluZ1tdO1xuICAgIH1bXTtcbiAgfTtcbn07XG5cbmV4cG9ydCB7IFByb2ZpbGVKU09OIGFzIFByb2ZpbGVKc29uU3RhdGUsIFNraWxsSlNPTiBhcyBTa2lsbEpzb25TdGF0ZSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHRyZXN1bHQgPSBmbigpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDIyMjogMCxcblx0MTIxOiAwLFxuXHQzNjg6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5raGl5b2tvM19naXRodWJfaW9cIl0gPSBzZWxmW1wid2VicGFja0NodW5raGl5b2tvM19naXRodWJfaW9cIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFszNjhdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyg1NjgpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iXSwic291cmNlUm9vdCI6IiJ9