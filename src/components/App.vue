<template lang="pug">
    v-app(:light="theme" :dark="!theme" app)
        v-toolbar(:scroll-threshold="300" :light="theme" :dark="!theme" extended app scroll-off-screen)
            //- v-toolbar-side-icon(@click="onChangeDrawer" :light="theme" :dark="!theme")
            v-toolbar-title {{ $t('base.title') }}
            v-spacer
            v-btn(v-if="$i18n.locale !== 'ja'" @click="onChangeLanguage('ja')" icon): v-icon g_translate
            v-btn(v-else @click="onChangeLanguage('en')" icon): v-icon g_translate
            v-btn(@click="onChangeTheme" icon): v-icon brightness_4

            v-tabs(slot="extension" color="transparent" v-model="tab" :light="theme" :dark="!theme" height="63px" grow centered icons-and-text)
                v-tabs-slider(color="blue")
                v-tab(v-for="(header, idx) in $t('base.content')" :key="`header-${idx}`" :to="header.href" :href="`#tab-${idx}`")
                    span.caption {{ header.name }}
                    v-icon {{ header.icon }}

        //- Navigation Drawer
        //- v-navigation-drawer(v-model="drawer" app :light="theme" :dark="!theme" disable-resize-watcher clipped)
            v-list(subheader dense)
                v-list-tile(v-for="(nav, idx) in $t('base.content')" :key="`nav-${idx}`" :to="nav.href" @click="" avatar ripple)
                    v-list-tile-content
                        v-list-tile-title
                            span.subheading
                                v-icon {{ nav.icon }}
                                | &nbsp;{{ nav.name }}

        //- Main Contents
        v-content
            v-container(fluid)
                transition(name="fade" mode="out-in" appear): router-view

        //- footer
        v-footer(height="auto" :light="theme" :dark="!theme" app absolute)
            v-card(width="100%" flat tile).text-xs-center
                v-card-text
                    v-btn(v-for="(link, idx) in $t('base.footer')" :key="`link-${idx}`" color="grey" :href="link.href" target="_blank" icon flat large).mx-2: font-awesome-icon(size="lg" :icon="['fab', link.icon]")
                v-divider
                v-card-text.pa-2
                    span.mr-3.subheading &copy; {{ new Date().getFullYear() }} {{ $t('base.attribute') }}

</template>

<script lang="ts">
    'use strict'
    let vm:any = null
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
    import { Prop } from 'vue-property-decorator';

    @Component({
        components: FontAwesomeIcon
    })
    export default class App extends Vue {
        drawer: boolean = false
        tab: any = null
        theme: boolean = true

        @Prop()


        created() {
            vm = this
            if (vm.$ls.get('theme') !== undefined) {
                vm.theme = vm.$ls.get('theme')
            } else {
                vm.$ls.set('theme', vm.theme)
            }

            if (vm.$ls.get('lang')) {
                vm.$i18n.locale = vm.$ls.get('lang')
            } else {
                vm.$ls.set('lang', vm.$i18n.locale)
            }
        }

        mounted() {}

        onChangeDrawer() {
            vm.drawer = !vm.drawer
        }

        onChangeLanguage(code: any) {
            if (vm.$i18n.locale === code) return
            vm.$i18n.locale = code
            vm.$ls.set('lang', vm.$i18n.locale)
        }

        onChangeTheme() {
            vm.theme = !vm.theme
            vm.$ls.set('theme', vm.theme)
        }
    }
</script>

<style scoped>
</style>