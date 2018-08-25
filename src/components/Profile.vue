<template lang="pug">
    v-layout(row wrap justify-center)#profile
        v-flex(md10 xs12).my-5
            blockquote.display-1.text-xs-left {{ $t('profile.introduction') }}
        v-flex(md10 xs12).my-3
            v-card(hover)
                v-layout(row wrap)
                    v-flex(md5 xs12)
                        v-card-title(primary-title): span.headline {{ $t('profile.profileTitle') }}
                        v-card-text: .text-xs-center.display-4: font-awesome-icon(:icon="['fas', 'user-circle']")
                        v-card-text.pa-3
                            .my-2.headline {{ $t('profile.name') }}
                            .my-4.subheading
                                v-icon cake
                                | &nbsp;{{ $t('profile.birthday') }}
                            .my-4.subheading
                                v-icon work
                                | &nbsp;{{ $t('profile.status') }}

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


        v-flex(md7 xs8).my-3
            v-card(color="transparent" height="300" flat tile)
                gmap-map(:center="$t(`${placeState}.center`)" :zoom="opts.zoom" style="height: 300px; width: 100%;")
                    gmap-marker(:position="$t(`${placeState}.center`)" :clickable="true" :draggable="true" @click="")

        v-flex(md3 xs4).my-3
            v-card(color="transparent" height="300" flat tile)
                v-card-text.text-xs-center.py-0
                    v-btn(@click="changePlace" color="orange" outline icon small): v-icon loop

                v-card-text
                    span.headline {{ $t(`${placeState}.title`) }}

                    v-divider.my-3
                    span.subheading.d-block.mb-3 {{ $t(`${placeState}.name`) }}
                    v-btn(:href="$t(`${placeState}.web_page`)" target="_blank" outline round).orange--text
                        v-icon open_in_new
                        | Link

        v-flex(md10 xs12).my-3
            .title.my-2.text-xs-left {{ $t('link.laboratoryTitle')}}
            v-card(:href="$t('link.laboratory.href')" target="_blank"  color="transparent" flat tile).pa-3
                .text-xs-left.body-2.mb-1.orange--text {{ $t('link.laboratory.name') }}

</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Profile extends Vue {
        opts:object = {
            zoom: 17,
            scrollWheel: false,
        };

        places = [
            'from',
            'stay'
        ];

        place = ''
        placeIdx = 0;

        created() {
            this.place = this.places[0]
        }
        mounted() {}

        changePlace () {
            if (this.placeIdx === this.places.length - 1) {
                this.place = this.places[0]
                this.placeIdx = 0
            } else {
                this.place = this.places[++this.placeIdx]
            }
        }

        get placeState () {
            return `profile.${this.place}`
        }
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