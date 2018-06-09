<template lang="pug">
    v-layout(row wrap)#not-found
        p.white--text {{ $t('base.not_found') }}

</template>

<script>
    'use strict'

    export default {
        name: "NotFound",
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