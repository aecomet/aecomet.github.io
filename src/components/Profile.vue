<template lang="pug">
    #profile
        v-layout(row wrap justify-center)
            v-flex(md10 xs12).my-2
                v-card(color="white").text-xs-center
                    v-card-text(primary-title).display-2.my-2 {{ $t('profile.profileTitle') }}

                    v-card-text
                        v-avatar(:tile="tile" size="170px" color="grey lighten-4"): img(:src="$t('profile.img')")

                    v-card-text
                        .my-2.headline {{ $t('profile.name') }}

                    v-card-text
                        .subheading {{ $t('profile.introduction') }}

                        .my-4.pa-1.body-2.greeting-text {{ $t('profile.greeting') }}


                        .title {{ $t('profile.wordTitle') }}
                        .my-3.title.font-weight-bold {{ $t('profile.word')}}
</template>

<script lang="ts">
    'use strict'

    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Profile extends Vue {

        placeIdx = 0;

        panels = [ true, true, true, true, true, true ];

        tile = false;

        created() {}

        mounted() {}
    }
</script>

<style scoped>
    .greeting-text {
        line-height: 32px !important;
    }
</style>