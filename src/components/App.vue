<template lang="pug">
    v-app(app :light="theme" :dark="!theme")
        v-toolbar(app :scroll-threshold="300" :light="theme" :dark="!theme" dense scroll-off-screen clipped-left)
            v-toolbar-side-icon(@click="onChangeDrawer" :light="theme" :dark="!theme")
            v-toolbar-title {{ $t('base.title') }}
            v-spacer
            v-toolbar-items.hidden-sm-and-down
                v-tabs(slot="extension" v-model="tab" slider-color="red" :light="theme" :dark="!theme" right)
                    //- v-tab(v-for="(header, idx) in $t('base.content')" :key="`header-${idx}`" :href="`#tab-${idx}`" :to="header.href" style="width: 120px") {{ header.name }}
                    v-tab(v-for="(header, idx) in $t('base.content')" :key="`header-${idx}`" :to="header.href" :href="`#tab-${idx}`"): v-btn(flat icon): v-icon {{ header.icon }}
            span(style="margin: auto 5px").hidden-sm-and-down
            v-btn(v-if="$i18n.locale !== 'ja'" @click="onChangeLanguage('ja')" icon flat): v-icon translate
            v-btn(v-else @click="onChangeLanguage('en')" icon flat): v-icon translate
            v-btn(@click="onChangeTheme" icon flat): v-icon brightness_4

        //- Navigation Drawer
        v-navigation-drawer(v-model="drawer" app :light="theme" :dark="!theme" disable-resize-watcher clipped)
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
        v-footer(height="auto" app :light="theme" :dark="!theme" absolute)
            v-layout(row wrap justify-center)
                v-btn(v-for="(link, idx) in $t('base.footer')" :key="`link-${idx}`" color="grey" :href="link.href" target="_blank" flat): font-awesome-icon(size="lg" :icon="['fab', link.icon]")
                v-flex(xs12).text-xs-right.pa-1
                    span.mr-3 &copy; {{ new Date().getFullYear() }} {{ $t('base.attribute') }}
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
            vm.$t('resume.school').reverse()
            vm.$forceUpdate()
        }

        onChangeTheme() {
            vm.theme = !vm.theme
            vm.$ls.set('theme', vm.theme)
        }
    }
</script>

<style scoped>
</style>