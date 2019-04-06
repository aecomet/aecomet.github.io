<template lang="pug">
    v-app(app)
        v-toolbar(color="white" extended app scroll-off-screen dense flat)
            .text-xs-left: img(:src="$t('base.top')").top-img
            v-spacer
            v-btn(v-if="$i18n.locale !== 'ja'" @click="onChangeLanguage('ja')" aria-label="jp_translate" icon): v-icon fas fa-language
            v-btn(v-else @click="onChangeLanguage('en')" aria-label="en_translate" icon): v-icon fas fa-language

            v-tabs(slot="extension" color="transparent" v-model="tab" right)
                v-tabs-slider(color="white")
                v-tab(v-for="(header, idx) in $t('base.content')" :key="`header-${idx}`" :to="header.href" :href="`#tab-${idx}`")
                    span.body-1.font-weight-bold {{ header.name }}

        //- Main Contents
        v-content(v-touch="{ left: () => onSwipe('left'), right: () => onSwipe('right') }").white
            v-container(fluid)
                transition(name="fade" mode="out-in" appear): router-view

        //- footer
        v-footer(height="auto" app dark absolute)
            v-card(width="100%" flat tile).text-xs-center
                v-card-text
                    v-btn(v-for="(link, idx) in $t('base.footer')" :key="`link-${idx}`" :href="link.href" target="_blank" rel="noopener noreferrer" :aria-label="`ext-link-${idx}`" flat icon small).mx-2
                        v-icon {{ `fab fa-${link.icon}` }}
                    v-divider.my-2
                    .text-xs-center: span.subheading.font-weight-bold &copy; {{ new Date().getFullYear() }} {{ $t('base.attribute') }}
</template>

<script lang="ts">
    'use strict'

    let vm:any = null
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { Prop } from 'vue-property-decorator';

    @Component({})
    export default class App extends Vue {
        tab: any = null
        currentPage: number = 0;
        pages: Array<string> = [
            'profile_path',
            'skill_path',
            'work_path',
            'contact_path'
        ];

        @Prop()


        created() {
            vm = this
            // set page position
            vm.currentPage = 0
            vm.pages.forEach((name: string, idx: number) => {
                if (name === vm.$route.name) vm.currentPage = idx
            })

            // set default lang
            if (vm.$ls.get('lang')) {
                vm.$i18n.locale = vm.$ls.get('lang')
            } else {
                vm.$ls.set('lang', vm.$i18n.locale)
            }
        }

        mounted() {}

        onSwipe (direction: string) {
            switch (direction) {
                case 'right':
                    if (this.currentPage <= 0) return;
                    this.currentPage -= 1;
                    break;
                case 'left':
                    if (this.currentPage >= this.pages.length -1) return;
                    this.currentPage += 1;
                    break;
            }
            vm.$router.push({ name: this.pages[this.currentPage] })
        }

        onChangeLanguage(code: any) {
            if (vm.$i18n.locale === code) return
            vm.$i18n.locale = code
            vm.$ls.set('lang', vm.$i18n.locale)
        }
    }
</script>

<style scoped>
    .top-img {
        margin: 0;
        padding: 2px 0;
        vertical-align: top;
        height: 44px;
    }

    @media (max-width: 767px) {
        /* Only smart phone css */
        .top-img {
            width: 80%;
            height: 32px;
        }
    }
</style>