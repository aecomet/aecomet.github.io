import API from './js/API';

$(() => {
    app.init();
    API.init();
});

const app = {
    init: () => {
        app.modal();
        app.moveTop();
        // getAnime();
    },
    modal: () => {
        $('.modal').modal(); // Enable Modal
    },
    moveTop: () => {
        let pageTopBtn = $('#page-top');
        let height = 150;
        if ($(this).scrollTop() < height) pageTopBtn.hide();

        $(window).scroll(() => {
            ($(this).scrollTop() > height) ? pageTopBtn.fadeIn() : pageTopBtn.fadeOut();
        });
        pageTopBtn.on('click', (e) => {
            $("html,body").animate({scrollTop: 0}, 500, 'swing');
        });
    }
};


// reference: https://qiita.com/AKB428/items/64938febfd4dcf6ea698
function getAnime() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let cour = ''; // 1: 冬, 2: 春, 3: 夏, 4: 秋
    if (9 < month && month < 13) // 冬
        cour = 1;
    else if (0 < month && month < 4) // 春
        cour = 2;
    else if (3 < month && month < 7) // 夏
        cour = 3;
    else if (6 < month && month < 10) // 秋
        cour = 4;

    let $ul = document.querySelector('#anime-list');
    let fragment = document.createDocumentFragment();
    $.getJSON('https://api.moemoe.tokyo/anime/v1/master/' + year + '/' + cour)
        .done(function (data) {
            for (let i = 0; i < data.length; i++) {
                let $li = document.createElement('li');
                $li.innerHTML = data[i].title;
                fragment.appendChild($li); // fragmentの追加する
            }
            $ul.appendChild(fragment);
        })
        .fail(function (data) {
            let $li = document.createElement('li');
            $li.innerHTML = 'データの取得に失敗しました．時間を置いてアクセスし直してみてください';
            console.error(data.statusText);
        });
}
