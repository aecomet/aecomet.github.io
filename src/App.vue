<template lang="pug">
    v-app(app)
        v-toolbar(color="grey darken-4" :scroll-threshold="isHide" flat app dark dense scroll-off-screen)
            v-toolbar-side-icon
            v-toolbar-title Portfolio
            v-spacer
            v-toolbar-items.hidden-sm-and-down
                v-tabs(slot="extension" v-model="tab" color="grey darken-4" slider-color="white" right)
                    v-tab(v-for="i in 3" :key="i" :href="`#tab-${i}`") Item {{ i }}

        //- Main Contents
        v-content.grey.darken-4
            v-container(fluid)

        //- footer
        v-footer(app).grey.darken-4
            v-layout(row).text-xs-right.pa-1
                v-flex(xs12).white--text &copy; {{ new Date().getFullYear() }} Tatsuya Oyanagi
</template>

<script>
    'use strict'

    export default {
        components: {},
        name: 'app',
        data: () => ({
            drawer: null,
            tab: null
        }),
        props: {},
        created () {},
        mounted () {},
        methods: {},
        computed: {
            isHide: (e) => (e.drawer) ? 10000 : 100
        }
    }
</script>

<style scoped>
</style>