<template lang="pug">
    v-app(app light)
        v-toolbar(:scroll-threshold="isHide" app light dense scroll-off-screen)
            v-toolbar-side-icon
            v-toolbar-title {{ $t('base.title') }}
            v-spacer
            v-toolbar-items.hidden-sm-and-down
                v-tabs(slot="extension" v-model="tab" slider-color="red" color="grey lighten-4" right)
                    v-tab(v-for="(header, idx) in $t('base.header')" :key="idx" :href="`#tab-${idx}`" :to="header.href") {{ header.name }}
            v-menu(transition="slide-x-transition")
                v-btn(slot="activator" icon light): v-icon more_vert
                v-list
                    v-list-tile(@click="changeLanguage('ja')"): v-list-tile-title JP
                    v-list-tile(@click="changeLanguage('en')"): v-list-tile-title EN

        //- Main Contents
        v-content.grey.lighten-5
            v-container(fluid)
                router-view

        //- footer
        v-footer(height="auto" app light)
            v-layout(row wrap justify-center)
                v-btn(v-for="(link, idx) in $t('base.footer')" :key="`link-${idx}`" color="grey" :href="link.href" target="_blank" flat): font-awesome-icon(size="lg" :icon="['fab', link.icon]")
                v-flex(xs12).text-xs-right.pa-1
                   span.mr-3 &copy; {{ new Date().getFullYear() }} {{ $t('base.attribute') }}
</template>

<script>
    'use strict'
    let vm = null
    import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

    export default {
        components: {
            FontAwesomeIcon
        },
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