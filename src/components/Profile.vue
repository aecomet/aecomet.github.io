<template lang="pug">
    v-layout(row wrap justify-center)#profile
        v-flex(md10 xs12).my-5
            blockquote.display-1.text-xs-center {{ $t('profile.introduction') }}
        v-flex(md10 xs12).my-3
            v-card(hover)
                v-layout(row wrap)
                    v-flex(md5 xs12)
                        v-card-title(primary-title): span.headline {{ $t('profile.profileTitle') }}
                        v-card-text.pa-3
                            .my-2.headline {{ $t('profile.name') }}
                            .my-4.title {{ $t('profile.status') }}
                        v-card-actions
                            v-list(style="width: 100%;" light)
                                v-list-tile(v-for="(u, idx) in $t('profile.univ')" :key="`univ-${idx}`" @click="" :href="u.href" target="_blank" avatar ripple)
                                    v-list-tile-action: v-icon(color="") school
                                    v-list-tile-content: v-list-tile-title.orange--text.subheading {{ u.name }}

                    v-flex(md7 xs12)
                        v-card-title(primary-title): span.headline {{ $t('profile.hobbyTitle') }}
                        v-data-table(:items="$t('profile.hobby')" hide-actions hide-headers).elevation-1.ma-1
                            template(slot="items" slot-scope="props"): td: span.subheading {{ props.item }}

                    v-flex(xs12).my-3
                        .subheading.my-2.text-xs-center {{ $t('profile.favorite.wordTitle') }}
                        v-card(tile flat).pa-2
                            .text-xs-center.vertical-text.headline {{ $t('profile.favorite.word')}}

                    v-flex(md6 xs12).my-3
                        .subheading.my-2.text-xs-center {{ $t('profile.favorite.foodTitle') }}
                        .text-xs-center.body-1.grey--text(v-for="(food, idx) in $t('profile.favorite.food')" :key="`food-${idx}`") {{ food }}
                    v-flex(md6 xs12).my-3
                        .subheading.my-2.text-xs-center {{ $t('profile.favorite.artistTitle') }}
                        .text-xs-center.body-1.grey--text(v-for="(artist, idx) in $t('profile.favorite.artist')" :key="`artist-${idx}`") {{ artist }}


        v-flex(md4 xs6).my-3
            v-card(hover)
                v-card-title(primary-title): span.headline {{ $t('profile.from.title') }}
                v-card-text: span.subheading {{ $t('profile.from.name') }}
                gmap-map(:center="$t('profile.from.center')" :zoom="opts.zoom" style="height: 300px; width: 100%;")
                    gmap-marker(:position="$t('profile.from.center')" :clickable="true" :draggable="true" @click="")

        v-flex(md1 xs0).my-3

        v-flex(md4 xs6).my-3
            v-card(hover)
                v-card-title(primary-title): span.headline {{ $t('profile.stay.title') }}
                v-card-text: span.subheading {{ $t('profile.stay.name') }}
                gmap-map(:center="$t('profile.stay.center')" :zoom="opts.zoom" style="height: 300px; width: 100%;")
                    gmap-marker(:position="$t('profile.stay.center')" :clickable="true" :draggable="true" @click="")

</template>

<script>
    'use strict'

    export default {
        name: "Profile",
        components: {},
        data: () => ({
            opts: {
                zoom: 17,
                scrollWheel: false,
            }
        }),
        props: {},
        created() {
        },
        mounted() {
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped>
    .vertical-text {
        font-family: 'Yu Mincho', YuMincho, 'Hiragino Mincho ProN', 'Hiragino Mincho Pro', 'HGP明朝B', serif;
        font-feature-settings: 'pkna';
        letter-spacing: 0.03em;
    }
    .vertical-text ruby {
        font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Yu Gothic", YuGothic, Verdana, Meiryo, "M+ 1p", sans-serif;
    }
</style>