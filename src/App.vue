<template lang="pug">
    v-app(app)
        v-toolbar(color="grey darken-4" :scroll-threshold="isHide" flat app dark dense scroll-off-screen)
            v-toolbar-side-icon
            v-toolbar-title {{ $t('base.title') }}
            v-spacer
            v-toolbar-items.hidden-sm-and-down
                v-tabs(slot="extension" v-model="tab" color="grey darken-4" slider-color="white" right)
                    v-tab(v-for="(header, idx) in $t('base.header')" :key="idx" :href="`#tab-${idx}`" :to="header.href") {{ header.name }}
            v-menu(transition="slide-x-transition")
                v-btn(icon slot="activator" dark): v-icon more_vert
                v-list
                    v-list-tile(@click="changeLanguage('ja')"): v-list-tile-title JP
                    v-list-tile(@click="changeLanguage('en')"): v-list-tile-title EN

        //- Main Contents
        v-content.grey.darken-4
            v-container(fluid)
                router-view

        //- footer
        v-footer(app).grey.darken-4
            v-layout(row).text-xs-right.pa-1
                 v-flex(xs12).white--text.mr-3 &copy; {{ new Date().getFullYear() }} {{ $t('base.attribute') }}
</template>

<script>
    'use strict'
    let vm = null

    export default {
        components: {},
        name: 'app',
        data: () => ({
            drawer: null,
            tab: null
        }),
        props: {},
        created () {
            vm = this
        },
        mounted () {
        },
        methods: {
            changeLanguage (code) {
                vm.$i18n.locale = code
                vm.$forceUpdate()
            }
        },
        computed: {
            isHide: (e) => (e.drawer) ? 10000 : 100
        }
    }
</script>

<style scoped>
</style>