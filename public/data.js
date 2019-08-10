/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ({

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_json_1 = __importDefault(__webpack_require__(33));
exports.BaseJSON = base_json_1.default;
const Profile_json_1 = __importDefault(__webpack_require__(34));
exports.ProfileJSON = Profile_json_1.default;
const Skill_json_1 = __importDefault(__webpack_require__(35));
exports.SkillJSON = Skill_json_1.default;
const Link_json_1 = __importDefault(__webpack_require__(36));
exports.LinkJSON = Link_json_1.default;
const Work_json_1 = __importDefault(__webpack_require__(37));
exports.WorkJSON = Work_json_1.default;
const Contact_json_1 = __importDefault(__webpack_require__(38));
exports.ContactJSON = Contact_json_1.default;


/***/ }),

/***/ 33:
/***/ (function(module) {

module.exports = JSON.parse("{\"ja\":{\"title\":\"ポートフォリオ\",\"top\":\"public/static/images/top.svg\",\"content\":[{\"name\":\"プロフィール\",\"href\":\"/\",\"icon\":\"person\"},{\"name\":\"実績\",\"href\":\"/work\",\"icon\":\"assignment\"}],\"attribute\":\"hiyoko3\",\"not_found\":\"お探しのページは存在しません．\",\"footer\":[{\"name\":\"Github\",\"href\":\"https://github.com/hiyoko3\",\"icon\":\"github\"}]},\"en\":{\"title\":\"\",\"top\":\"\",\"content\":[{\"name\":\"Profile\",\"href\":\"/\",\"icon\":\"person\"},{\"name\":\"Works\",\"href\":\"/work\",\"icon\":\"assignment\"}],\"attribute\":\"\",\"not_found\":\"\",\"footer\":[{\"name\":\"\",\"href\":\"\",\"icon\":\"\"}]}}");

/***/ }),

/***/ 34:
/***/ (function(module) {

module.exports = JSON.parse("{\"ja\":{\"img\":\"public/static/images/logo.png\",\"introduction\":\"JavaScriptが好きなバックエンドエンジニアです。実務ではRuby, Javaをメインで利用しています。\",\"profileTitle\":\"プロフィール\",\"name\":\"hiyoko3\",\"status\":\"ITエンジニア\"},\"en\":{\"img\":\"\",\"introduction\":\"\",\"profileTitle\":\"\",\"name\":\"\",\"status\":\"\"}}");

/***/ }),

/***/ 35:
/***/ (function(module) {

module.exports = JSON.parse("{\"ja\":{\"certificationTitle\":\"資格\",\"certificationHeader\":[{\"text\":\"取得年月日\",\"value\":\"date\",\"sortable\":false},{\"text\":\"資格名\",\"value\":\"name\",\"sortable\":false}],\"certification\":[{\"date\":\"2013年9月17日\",\"name\":\"普通自動車第一種運転免許\"},{\"date\":\"2015年5月18日\",\"name\":\"基本情報技術者\"},{\"date\":\"2015年12月18日\",\"name\":\"応用情報技術者\"}],\"programingTitle\":\"スキル\",\"programing\":[{\"name\":\"PHP\",\"remark\":[{\"title\":\"Laravel\",\"text\":\"\"},{\"title\":\"Slim3\",\"text\":\"\"},{\"title\":\"WordPress\",\"text\":\"\"}]},{\"name\":\"HTML/CSS\",\"remark\":[{\"title\":\"Bootstrap 3, 4\",\"text\":\"\"},{\"title\":\"Materialize\",\"text\":\"\"},{\"title\":\"Bulma\",\"text\":\"\"},{\"title\":\"UIkit\",\"text\":\"\"}]},{\"name\":\"JavaScript\",\"remark\":[{\"title\":\"jQuery\",\"text\":\"\"},{\"title\":\"AngularJS / Angular\",\"text\":\"\"},{\"title\":\"Vue.js\",\"text\":\"\"},{\"title\":\"Node.js\",\"text\":\"\"},{\"title\":\"React.js\",\"text\":\"\"},{\"title\":\"Electron\",\"text\":\"\"}]},{\"name\":\"Ruby\",\"remark\":[{\"title\":\"Ruby On Rails\",\"text\":\"\"}]},{\"name\":\"Go lang\",\"remark\":[{\"title\":\"Gin\",\"text\":\"\"}]},{\"name\":\"C / C++\",\"remark\":[]},{\"name\":\"Java\",\"remark\":[{\"title\":\"Android\",\"text\":\"\"},{\"title\":\"Kotlin\",\"text\":\"\"}]},{\"name\":\"Python\",\"remark\":[{\"title\":\"Django Rest Framework\",\"text\":\"\"}]},{\"name\":\"Swift\",\"remark\":[{\"title\":\"iOS App\",\"text\":\"\"}]},{\"name\":\"Database\",\"remark\":[{\"title\":\"MySQL\",\"text\":\"小中規模のアプリケーション開発にはこれを利用します\"},{\"title\":\"MongoDB\",\"text\":\"\"},{\"title\":\"SQLite\",\"text\":\"講義の課題や新しい言語を学ぶ時などの簡易アプリケーション開発時に利用します\"}]},{\"name\":\"その他\",\"remark\":[{\"title\":\"Mecab\",\"text\":\"coming soon.\"},{\"title\":\"ElasticSearch\",\"text\":\"検索エンジンを構築する際に必要だったため使い方を学び利用しています\"}]}]},\"en\":{\"certificationTitle\":\"\",\"certificationHeader\":[{\"text\":\"\",\"value\":\"\",\"sortable\":false}],\"certification\":[{\"date\":\"\",\"name\":\"\"}],\"programingTitle\":\"Skill\",\"programing\":[{\"name\":\"\",\"remark\":[{\"title\":\"\",\"text\":\"\"},{\"title\":\"\",\"text\":\"\"},{\"title\":\"\",\"text\":\"\"}]}]}}");

/***/ }),

/***/ 36:
/***/ (function(module) {

module.exports = JSON.parse("{\"ja\":{\"techTitle\":\"外部リンク\",\"technologies\":[{\"name\":\"Github\",\"href\":\"https://github.com/hiyoko3\",\"icon\":\"\"},{\"name\":\"Qiita\",\"href\":\"https://qiita.com/hiyoko3\",\"icon\":\"\"}]},\"en\":{\"techTitle\":\"\",\"technologies\":[{\"name\":\"\",\"href\":\"\",\"icon\":\"\"}]}}");

/***/ }),

/***/ 37:
/***/ (function(module) {

module.exports = JSON.parse("{\"ja\":{\"title\":\"制作物\",\"desc\":\"※ インターン中に開発したものなど，画像を掲載できないものはアイコンを表示しています．また，公開されているアプリケーションには外部リンクが付属しています．\",\"products\":[{\"year\":\"2019\",\"items\":[{\"name\":\"（共同開発）Memoma\",\"language\":\"Electron\",\"text\":\"クロスプラットフォーム対応のスタンドアロンなメモアプリ\",\"src\":\"public/static/images/works/memoma.png\",\"icon\":\"fas fa-laptop-code\",\"href\":\"https://github.com/narugit/Memoma\"},{\"name\":\"ブログページ開発\",\"language\":\"PHP(WordPress)\",\"text\":\"WordPressを用いたブログページ開発\",\"src\":\"public/static/images/works/soda.png\",\"icon\":\"fas fa-laptop-code\",\"href\":\"https://lifelearning.tokyo/\"},{\"name\":\"研究室HP\",\"language\":\"Vue.js\",\"text\":\"研究室のHPリニューアル\",\"src\":\"public/static/images/works/hp.png\",\"icon\":\"fas fa-mobile-alt\",\"href\":\"https://glocalvision.net/ishilab/\"},{\"name\":\"ポートフォリオ\",\"language\":\"Vue.js\",\"text\":\"ポートフォリオサイトを作成\",\"src\":\"public/static/images/works/portfolio.png\",\"icon\":\"fas fa-mobile-alt\",\"href\":\"https://hiyoko3.github.io/\"},{\"name\":\"災害記録史可視化・分析システム\",\"language\":\"Django REST Framework,ElasticSearch,Vue.js,Mecab\",\"text\":\"修士研究で開発．自治体向け災害対策意思決定支援システムの開発\",\"src\":\"public/static/images/works/research.png\",\"icon\":\"fas fa-laptop-code\",\"href\":\"\"}]},{\"year\":\"2018\",\"items\":[{\"name\":\"動物園ナビゲーションアプリ\",\"language\":\"Java(Android)\",\"text\":\"動物園散策アプリケーションのデザイン刷新とパフォーマンス改善を担当\",\"src\":\"public/static/images/works/zoo_app.png\",\"icon\":\"fas fa-mobile-alt\",\"href\":\"\"},{\"name\":\"潮流予測配信サイト\",\"language\":\"jQuery,Bootstrap\",\"text\":\"他研究室の研究成果を公開するページを作成\",\"src\":\"public/static/images/works/go_shima.png\",\"icon\":\"fas fa-mobile-alt\",\"href\":\"http://eiji.eng.ibaraki.ac.jp/GOShima/\"},{\"name\":\"衝撃検知アプリケーション\",\"language\":\"Kotlin(Android)\",\"text\":\"IoTデバイスを利用した衝撃検知アプリケーションの開発\",\"src\":\"\",\"icon\":\"fas fa-mobile-alt\",\"href\":\"\"},{\"name\":\"車両データ収集アプリ\",\"language\":\"Java(Android)\",\"text\":\"IoTデバイスと連動した車両データ収集アプリケーションの開発\",\"src\":\"\",\"icon\":\"fas fa-mobile-alt\",\"href\":\"\"},{\"name\":\"広告表示システム\",\"language\":\"C#\",\"text\":\"広告ディスプレイに表示する資料（プレゼンテーション）を動的に更新するシステムの開発\",\"src\":\"\",\"icon\":\"fas fa-laptop-code\",\"href\":\"\"}]},{\"year\":\"2017\",\"items\":[{\"name\":\"動物園業務統合管理システム\",\"language\":\"Laravel,jQuery\",\"text\":\"動物園内部で利用する総合業務管理システムの開発\",\"src\":\"public/static/images/works/zoo_admin.png\",\"icon\":\"fas fa-laptop-code\",\"href\":\"\"},{\"name\":\"走行軌跡可視化アプリ\",\"language\":\"Kotlin(Android)\",\"text\":\"自立型掃除機が走行した軌跡と収集したゴミの量を一元的に可視化するアプリケーションの開発\",\"src\":\"\",\"icon\":\"fas fa-mobile-alt\",\"href\":\"\"}]},{\"year\":\"2016\",\"items\":[{\"name\":\"物件閲覧システム\",\"language\":\"PHP, jQuery\",\"text\":\"物件閲覧システムの開発\",\"src\":\"\",\"icon\":\"fas fa-laptop-code\",\"href\":\"\"},{\"name\":\"住宅販売管理システム\",\"language\":\"Ruby on Rails,jQuery\",\"text\":\"住宅販売管理システムの開発\",\"src\":\"\",\"icon\":\"fas fa-laptop-code\",\"href\":\"\"}]}]},\"en\":{\"title\":\"\",\"desc\":\"\",\"products\":[{\"year\":\"2018\",\"items\":[]}]}}");

/***/ }),

/***/ 38:
/***/ (function(module) {

module.exports = JSON.parse("{\"ja\":{\"title\":\"問い合わせ\",\"text\":\"sb.gm.0823@***\",\"subtext\":\"***にはgmail.comを入力してください\"},\"en\":{\"title\":\"\",\"text\":\"\",\"subtext\":\"\"}}");

/***/ })

/******/ });