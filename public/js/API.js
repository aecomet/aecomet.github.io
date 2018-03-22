import Key from './Key';

// Qiita
const API = {
    init: () => {
        API.qiita();
        API.facebook();
        API.github();
    },
    qiita: () => {
        let qiitaName = document.querySelector('.qiita-name'),
            qiitaDesc = document.querySelector('.qiita-desc'),
            qiitaImg = document.querySelector('.qiita-img');
        // http://qiita.com/api/v2/users/:user_id
        $.getJSON('http://qiita.com/api/v2/users/tatsuya_oyanagi', {
            header: 'Authorization: Bearer ' + btoa(Key.Qiita.appId),
        }).done((data) => {
            qiitaName.innerHTML = data.name;
            qiitaDesc.innerHTML = data.description;
            qiitaImg.src = data.profile_image_url;
        }).fail((data) => {
            qiitaDesc.innerHTML = 'データの取得に失敗しました．時間を置いてアクセスし直してみてください';
            console.error(data.statusText);
        });
    },
    facebook: () => {
        let fbName = document.querySelector('.fb-name'),
            fbDesc = document.querySelector('.fb-desc'),
            fbImg = document.querySelector('.fb-img');

        $.getJSON('https://graph.facebook.com/v2.11/' + Key.Facebook.appId, {
            access_token: Key.Facebook.accessToken,
            fields: 'id,name,about,address,birthday,picture,link'
        }).done((data) => {
            fbName.innerHTML = data.name;
            fbDesc.innerHTML = data.about;
            fbImg.src = Key.Facebook.profile_image;
        }).fail((data) => {
            fbDesc.innerHTML = 'データの取得に失敗しました．時間を置いてアクセスし直してみてください';
            console.error(data.statusText);
        });
    },
    github: () => {
        let ghName = document.querySelector('.gh-name'),
            ghDesc = document.querySelector('.gh-desc'),
            ghImg = document.querySelector('.gh-img'),
            ghRepos = document.querySelector('.gh-repos');

        let fragment = document.createDocumentFragment();

        $.getJSON('https://api.github.com/users/hiyoko3')
            .done((data) => {
                ghName.innerHTML = data.name;
                ghDesc.innerHTML = data.bio;
                ghImg.src = data.avatar_url;
            }).fail((data) => {
                ghDesc.innerHTML = 'データの取得に失敗しました．時間を置いてアクセスし直してみてください';
                console.error(data.statusText);
        });

        $.getJSON('https://api.github.com/users/hiyoko3/repos')
            .done((data) => {
                for (let i = 0; i < data.length; i++) {
                    if (!data[i].private) {
                        let $li = document.createElement('li');
                        $li.classList.add('collection-item');
                        $li.innerHTML = '<a href="' + data[i].html_url + '">' + data[i].full_name + '</a>';
                        fragment.appendChild($li);
                    }
                }
                ghRepos.appendChild(fragment);
            }).fail((data) => {
            console.error(data.statusText);
        });

    }
};

export default API;