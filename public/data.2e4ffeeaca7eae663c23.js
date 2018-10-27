!function(t){var e={};function a(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=e,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=36)}({36:function(t,e,a){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=n(a(37));e.BaseJSON=o.default;const i=n(a(38));e.ProfileJSON=i.default;const r=n(a(39));e.SkillJSON=r.default;const l=n(a(40));e.LinkJSON=l.default;const m=n(a(41));e.WorkJSON=m.default;const s=n(a(42));e.ContactJSON=s.default},37:function(t){t.exports={ja:{title:"ポートフォリオ",content:[{name:"プロフィール",href:"/",icon:"person"},{name:"スキル",href:"/skill",icon:"fitness_center"},{name:"実績",href:"/work",icon:"assignment"},{name:"問い合わせ",href:"/contact",icon:"email"}],attribute:"大柳 達哉",not_found:"お探しのページは存在しません．",footer:[{name:"Github",href:"https://github.com/hiyoko3",icon:"github"},{name:"Facebook",href:"https://www.facebook.com/",icon:"facebook"},{name:"Instagram",href:"https://www.instagram.com/",icon:"instagram"},{name:"LinkedIn",href:"https://www.linkedin.com/in/%E9%81%94%E5%93%89-%E5%A4%A7%E6%9F%B3-a5ab72143/",icon:"linkedin-in"}]},en:{title:"Portfolio",content:[{name:"Profile",href:"/",icon:"person"},{name:"Skills",href:"/skill",icon:"fitness_center"},{name:"Works",href:"/work",icon:"assignment"},{name:"Contact",href:"/contact",icon:"email"}],attribute:"Tatsuya Oyanagi",not_found:"The page doesn't exist.",footer:[{name:"Github",href:"https://github.com/hiyoko3",icon:"github"},{name:"Facebook",href:"https://www.facebook.com/",icon:"facebook"},{name:"Instagram",href:"https://www.instagram.com/",icon:"instagram"},{name:"LinkedIn",href:"https://www.linkedin.com/in/%E9%81%94%E5%93%89-%E5%A4%A7%E6%9F%B3-a5ab72143/",icon:"linkedin-in"}]}}},38:function(t){t.exports={ja:{top:"public/static/images/top.svg",introduction:"2019年度より新社会人になるひよこエンジニア",profileTitle:"プロフィール",name:"大柳達哉（ｵｵﾔﾅｷﾞﾀﾂﾔ）",birthday:"1994/08/23",status:"大学院生",wordTitle:"好きな言葉",word:"「果報は寝て待て」",greeting:"2019年度よりITエンジニアとして働く学生のポートフォリオです．主にWebに関連する技術を学んでおり，現在はより洗練されたアプリケーションを構築したいと考え，アーキテクチャの勉強を進めています．"},en:{top:"public/static/images/top.svg",introduction:"A newbie engineer who will be office worker since 2019",profileTitle:"My Profile",name:"Tatsuya Oyanagi",birthday:"1994/08/23",status:"A graduate school student",wordTitle:"Favorite Quotes",word:"「Everything comes to those who wait」",greeting:"This is a portfolio of a graduate student who will work as IT engineer since 2019. Currently, I am mainly studying technologies related to the Web, and System Architect. In the future, I will build sophisticated applications!"}}},39:function(t){t.exports={ja:{certificationTitle:"資格",certificationHeader:[{text:"取得年月日",value:"date",sortable:!1},{text:"資格名",value:"name",sortable:!1}],certification:[{date:"2013年9月17日",name:"普通自動車第一種運転免許"},{date:"2015年5月18日",name:"基本情報技術者"},{date:"2015年12月18日",name:"応用情報技術者"}],programingTitle:"スキル",programing:[{name:"PHP",remark:[{title:"Laravel",text:"PHPで中規模アプリケーションを開発する際に利用しました．Railsライクに構成されており使い勝手が良いです．また，私が利用し始めた時と比べ今はユーザ数がとても多くいい感じですね"},{title:"Slim3",text:"PHPで小規模のAPIを開発する際に愛用しています．必要最小限の構成に自分でライブラリを注入していくスタイルなので軽快に動作するところがお気に入り"}]},{name:"HTML/CSS",remark:[{title:"Bootstrap 3, 4",text:"言わずと知れたフレームワーク．私がWeb技術を学び始めた際に非常にお世話になりました．"},{title:"Materialize",text:"Bootstrapのデザインに飽きていた頃に見つけたフレームワークです．Google の提言に従ってCSSがスタイリングされており最近は専らこいつを使います"},{title:"Bulma",text:"CSSのみのフレームワーク．インタラクティブな動作がいらず，マークアップだけ行いたいときはこのフレームワークが良いです"}]},{name:"JavaScript",remark:[{title:"jQuery",text:"web技術を学び始めた頃にお世話になりました．今は必要に迫られない限り使うことはありません"},{title:"AngularJS / Angular",text:"AngularJSから使ってました．typescriptで書くAngularは非常に見やすいのでたまに使いたい"},{title:"Vue.js",text:"クライアントアプリを開発する際はほぼこれです．VuetifyとVuexと組み合わせれば何でもいける気がします．"},{title:"React.js",text:"ただいま勉強中．．Vueに慣れるとちょっと辛いかも"}]},{name:"Ruby",remark:[{title:"Ruby On Rails",text:"インターンの業務アプリケーション開発を通じて学びました．rakeによる強力な補助機能に何度助けられたことか．．"}]},{name:"Go lang",remark:[{title:"Gin",text:"Goを学びたくてとりあえずドキュメント読んで使ってます．"}]},{name:"C / C++",remark:[{title:"",text:"大学の講義は基本 C or Javaなのでその時に基本文法を学んだ程度です"}]},{name:"Java",remark:[{title:"Java",text:"大学の講義でその時に基本文法を学んだ程度です"},{title:"Android(with Kotlin)",text:"インターンのアプリケーション開発で利用しました．Kotlinは洗練されててお気に入りです"}]},{name:"Python",remark:[{title:"Django Rest Framework",text:"修士研究で構築しているアプリケーションに利用しています．Pythonは様々な計算ライブラリに利用されているのでそれらと連携にする時など便利です"}]},{name:"Database",remark:[{title:"MySQL",text:"小中規模のアプリケーション開発にはこれを利用します"},{title:"SQLite",text:"講義の課題や新しい言語を学ぶ時などの簡易アプリケーション開発時に利用します"}]},{name:"その他",remark:[{title:"ElasticSearch",text:"検索エンジンを構築する際に必要だったため使い方を学び利用しています"}]}]},en:{certificationTitle:"Certification",certificationHeader:[{text:"Date",value:"date",sortable:!1},{text:"Name",value:"name",sortable:!1}],certification:[{date:"2013-9-17",name:"First-class drivers for normal vehicles"},{date:"2015-5-18",name:"Fundamental Information Technology Engineer Examination"},{date:"2015-12-18",name:"Applied Information Technology Engineer Examination"}],programingTitle:"Skill",programing:[{name:"PHP",remark:[{title:"Laravel",text:"coming soon."},{title:"Slim3",text:"coming soon."}]},{name:"HTML/CSS",remark:[{title:"Bootstrap 3, 4",text:"coming soon."},{title:"Materialize",text:"coming soon."},{title:"Bulma",text:"coming soon."}]},{name:"JavaScript",remark:[{title:"jQuery",text:"coming soon."},{title:"AngularJS / Angular",text:"coming soon."},{title:"Vue.js",text:"coming soon."},{title:"Node.js",text:"coming soon."},{title:"React.js",text:"coming soon."}]},{name:"Ruby",remark:[{title:"Ruby On Rails",text:"coming soon."}]},{name:"Go lang",remark:[{title:"Gin",text:"coming soon."}]},{name:"C / C++",remark:[{title:"",text:"coming soon."}]},{name:"Java",remark:[{title:"Android(with Kotlin)",text:"coming soon."}]},{name:"Python",remark:[{title:"Django Rest Framework",text:"coming soon."}]},{name:"Database",remark:[{title:"MySQL",text:"coming soon."},{title:"SQLite",text:"coming soon."}]},{name:"Others",remark:[{title:"ElasticSearch",text:"coming soon."}]}]}}},40:function(t){t.exports={ja:{laboratoryTitle:"研究室",laboratory:{name:"石田研究室",href:"https://glocalvision.net/ishilab/"},techTitle:"リンク",technologies:[{name:"Qiita",href:"https://github.com/hiyoko3"},{name:"Github",href:"https://qiita.com/tatsuya_oyanagi"}]},en:{laboratoryTitle:"Laboratory",laboratory:{name:"Ishilda Laboratory",href:"https://glocalvision.net/ishilab/"},techTitle:"Links",technologies:[{name:"Qiita",href:"https://github.com/hiyoko3"},{name:"Github",href:"https://qiita.com/tatsuya_oyanagi"}]}}},41:function(t){t.exports={ja:{title:"制作物",products:[{name:"業務管理システム開発",language:"PHP, jQuery",text:"企業内部で利用する販売管理システムの開発"},{name:"業務管理システム開発",language:"Ruby on Rails,jQuery",text:"企業内部で利用する販売管理システムの開発"},{name:"スマホアプリ開発",language:"Java(Android)",text:"小型IoTデバイスと連動したデータ収集アプリケーションの開発"},{name:"スマホアプリ開発",language:"Java(Android)",text:"動物園散策アプリケーションのデザイン刷新とパフォーマンス改善を担当"},{name:"業務管理システム開発",language:"Laravel,jQuery",text:"動物園内部で利用する総合業務管理システムの開発"},{name:"ポータルサイト作成",language:"jQuery,Bootstrap",text:"他研究室の研究成果を公開するページを作成"},{name:"研究室HP作成",language:"Vue.js",text:"所属している研究室のHPリニューアル"},{name:"ポートフォリオ作成",language:"Vue.js",text:"自身の成果を公開するためのポートフォリオサイトを作成"},{name:"業務支援システム開発",language:"Django REST Framework,ElasticSearch,Vue.js",text:"修士研究で開発．自治体向け災害対策意思決定支援システムの開発"}]},en:{title:"Products",products:[{name:"Operation Management System",language:"PHP, jQuery",text:"coming soon."},{name:"Operation Management System",language:"Ruby on Rails,jQuery",text:"coming soon."},{name:"Mobile Application",language:"Java(Android)",text:"coming soon."},{name:"Mobile Application",language:"Java(Android)",text:"coming soon."},{name:"Operation Management System",language:"Laravel,jQuery",text:"coming soon."},{name:"Portal Web Site",language:"jQuery,Bootstrap",text:"coming soon."},{name:"Renewal my laboratory HP",language:"Vue.js",text:"coming soon."},{name:"Portfolio",language:"Vue.js",text:"coming soon."},{name:"Development of Operation Support System",language:"Django REST Framework,ElasticSearch,Vue.js",text:"coming soon."}]}}},42:function(t){t.exports={ja:{title:"問い合わせ",text:"sb.gm.0823@***",subtext:"***にはgmail.comを入力してください"},en:{title:"Contact",text:"sb.gm.0823@***",subtext:"set 'gmail.com' to '***'"}}}});