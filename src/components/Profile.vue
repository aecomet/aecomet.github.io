<template lang="pug">
    #profile
        .text-xs-center: img(:src="$t('profile.top')" alt="top-img").top-img

        v-layout(row wrap justify-center)
            v-flex(md10 xs12).my-2
                v-card(hover)
                    v-layout(row wrap justify-center)
                        v-flex(md5 xs12)
                            v-card-title(primary-title): .headline {{ $t('profile.profileTitle') }}
                            v-card-text: .text-xs-center: v-icon fas fa-user-circle fa-8x
                            v-card-text.pa-3
                                .my-2.headline {{ $t('profile.name') }}
                                .my-3.subheading
                                    v-icon.mr-2 fas fa-birthday-cake
                                    | {{ $t('profile.birthday') }}
                                .my-3.subheading
                                    v-icon.mr-2 fas fa-briefcase
                                    | {{ $t('profile.status') }}
                                    v-btn(:href="$t('link.laboratory.href')" color="red" target="_blank" rel="noopener noreferrer" flat outline).ml-2 {{ `${$t('link.laboratoryTitle')}` }}
                                .my-3.body-2
                                    .caption 外部リンク
                                    v-btn(v-for="(link, idx) in $t('base.footer')" :key="`link-${idx}`" :href="link.href" target="_blank" rel="noopener noreferrer" :aria-label="`ext-link-${idx}`" flat icon small).mx-2
                                        v-icon {{ `fab fa-${link.icon}` }}

                        v-flex(md7 xs12)
                            v-card-title(primary-title)
                            v-card-text
                                .subheading {{ $t('profile.introduction') }}

                                .my-4.pa-1.body-2.greeting-text {{ $t('profile.greeting') }}

                                .text-xs-center
                                    .title {{ $t('profile.wordTitle') }}
                                    .mt-3.title.font-weight-bold {{ $t('profile.word')}}
</template>

<script lang="ts">
    'use strict'

    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Profile extends Vue {

        placeIdx = 0;

        panels = [ true, true, true, true, true, true ];

        created() {}

        mounted() {
        }
    }
</script>

<style scoped>
    .top-img {
        margin: 0;
        padding: 0;
        vertical-align: top;
        width: 80%;
    }

    .greeting-text {
        line-height: 32px !important;
    }
</style>