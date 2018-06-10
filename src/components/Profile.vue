<template lang="pug">
    v-layout(row wrap justify-center)#profile
        v-flex(md10 xs12).my-5
            blockquote.display-1.text-xs-center {{ $t('profile.introduction') }}
        v-flex(md10 xs12).my-3
            v-card(hover)
                v-container(fluid grid-list-lg)
                    v-layout(row wrap)
                        v-flex(md5 xs12)
                            v-card-title(primary-title): span.headline My Profile
                            v-card-text.pa-2
                                .my-2.headline {{ $t('profile.name') }}
                                .mt-3.my-2.title {{ $t('profile.status') }}
                            v-card-actions
                                v-list(two-line dense light style="width: 100%;")
                                    v-list-tile(v-for="(u, idx) in univs" :key="`univ-${idx}`" @click="" :href="u.href" target="_blank")
                                        v-list-tile-content
                                            v-list-tile-title.orange--text {{ u.name_ja }}
                                            v-list-tile-sub-title {{ u.name_en }}

                        v-flex(md7 xs12)
                            v-card-title(primary-title).text-xs-center: span.headline Hobby
                            v-data-table(:items="$t('profile.hobbies')" hide-actions hide-headers).elevation-1
                                template(slot="items" slot-scope="props"): td {{ props.item }}

        v-flex(md4 xs12).my-3
            v-card(hover)
                v-card-title(primary-title): span.headline From
                v-card-text: span.subheading {{ $t('profile.from.name') }}
                gmap-map(:center="$t('profile.from.center')" :zoom="opts.zoom" style="height: 500px; width: 100%;")
                    gmap-marker(:position="$t('profile.from.center')" :clickable="true" :draggable="true" @click="")

        v-flex(md1 xs0).my-3

        v-flex(md4 xs12).my-3
            v-card(hover)
                v-card-title(primary-title): span.headline Stay
                v-card-text: span.subheading {{ $t('profile.stay.name') }}
                gmap-map(:center="$t('profile.stay.center')" :zoom="opts.zoom" style="height: 500px; width: 100%;")
                    gmap-marker(:position="$t('profile.stay.center')" :clickable="true" :draggable="true" @click="")

</template>

<script>
    'use strict'

    export default {
        name: "Profile",
        data: () => ({
            univs: [
                {
                    name_ja: '茨城大学',
                    name_en: 'Ibaraki University',
                    href: 'http://www.ibaraki.ac.jp/index.html'
                },
                {
                    name_ja: '茨城大学院理工学研究科',
                    name_en: 'Graduate School of Science and Engineering',
                    href: 'http://www.gse.ibaraki.ac.jp/'
                },
                {
                    name_ja: '情報工学専攻',
                    name_en: 'Major in Computer and Information Sciences',
                    href: 'http://www.cis.ibaraki.ac.jp/'
                }
            ],
            opts: {
                zoom: 17,
                scrollWheel: false,
            }
        }),
        props: {},
        created () {},
        mounted () {},
        methods: {},
        computed: {}
    }
</script>

<style scoped>

</style>