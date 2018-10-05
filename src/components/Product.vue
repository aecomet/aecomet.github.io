<template lang="pug">
    v-layout(row wrap justify-center)#resume

        v-flex(md10 xs12).my-3
            .headline.mb-4.text-xs-left
                font-awesome-icon(:icon="['fab', 'github']").mr-2
                | Github Repos

            v-layout(row wrap)
                v-flex(v-for="(r, idx) in repos" :key="`github-repo-${idx}`" xs12)
                    v-card(color="transparent" v-if="!r.private" flat tile)
                        v-card-text.pa-1: a(:href="r.html_url" target="_blank" rel="noopener noreferrer" ).grey--text.subheading
                            font-awesome-icon(:icon="['fab', 'github']").mr-2
                            | {{ r.full_name }}

        v-flex(md10 xs12).my-3
            .headline.mb-4.text-xs-left
                font-awesome-icon(:icon="['far', 'newspaper']").mr-2
                | Qiita Articles

            v-layout(row wrap)
                v-flex(v-for="(a, idx) in articles" :key="`qiita-article-${idx}`" xs12)
                    v-card(color="transparent" v-if="!a.private" flat tile)
                        v-card-text.pa-1: a(:href="a.url" target="_blank" rel="noopener noreferrer" ).teal--text.subheading
                            font-awesome-icon(:icon="['far', 'newspaper']").mr-2
                            | {{ a.title }}

        v-flex(md10 xs12).my-3
            .headline.mb-4.text-xs-left
                font-awesome-icon(:icon="['fas', 'book-open']").mr-2
                | {{ $t('resume.paperTitle')}}
            v-card(v-for="(p, idx) in $t('resume.paper')" :key="`paper-${idx}`" flat tile).pa-3
                .title.mb-1
                    | {{ p.title }}
                    v-chip(color="red" label outline) {{ p.tag }}
                .subheading.grey--text {{ p.subtitle }}
                .subheading.grey--text {{ p.member }}

        v-flex(md10 xs12).my-3
            .headline.mb-4.text-xs-left
                font-awesome-icon(:icon="['fas', 'book-open']").mr-2
                | {{ $t('resume.otherTitle')}}
            v-card(v-for="(o, idx) in $t('resume.other')" :key="`other-${idx}`" flat tile).pa-3
                .title.mb-1
                    | {{ o.title }}
                    v-chip(color="red" label outline) {{ o.tag }}
                .subheading.grey--text {{ o.subtitle }}
                .subheading.grey--text {{ o.member }}

        v-flex(md10 xs12).my-3
            .headline.mb-4.text-xs-left
                font-awesome-icon(:icon="['fas', 'chalkboard-teacher']").mr-2
                | {{ $t('resume.researchTitle')}}

            v-card(v-for="(r, idx) in $t('resume.research')" :key="`research-${idx}`" hover).my-3.pa-3
                v-card-title(primary-title): span.title {{ r.title }}
                v-card-text
                    v-layout(row wrap justify-center)
                        v-flex(v-for="(img, idx) in r.images" :key="`img-${idx}`" md6 xs12)
                            .text-xs-center: img(:src="img.src" :alt="img.alt" width="100%" height="auto")
                    .body-1.mt-2 {{ r.abstract }}

</template>

<script lang="ts">
    import Vue from 'vue'
    import axios from 'axios'
    import Key from '../Key'
    import Component from 'vue-class-component'

    @Component({
        components: {}
    })
    export default class Resume extends Vue {

        repos = []
        articles = []

        created() {
            // Get Qiita article
            axios.get(`https://qiita.com/api/v2/authenticated_user/items`, {
                headers: {
                    Authorization: `Bearer ${Key.Qiita.appId}`
                }
            }).then(res => {
                console.log(res.data[0])
                this.articles = res.data
            }).catch(err => {
                console.error(err)
            })

            // Get Github repos
            axios.get('https://api.github.com/users/hiyoko3/repos')
                .then(res => {
                    console.log(res.data[0])
                    this.repos = res.data
                }).catch(err => {
                    console.error(err)
                })
        }
        mounted() {}
    }
</script>

<style scoped>

</style>