<template lang="pug">
    v-app(app)
        //- Main Contents
        v-content.grey.darken-3
            v-container(fluid)
                p.white--text hello world
</template>

<script>
    'use strict'

    export default {
        components: {},
        name: 'app',
        data: () => ({}),
        props: {},
        created () {},
        mounted () {},
        methods: {},
        computed: {}
    }
</script>

<style scoped>
</style>