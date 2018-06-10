<template lang="pug">
    v-layout(row justify-center)#not-found
        v-flex(md8 xs12).my-3
            v-card(height="300px" hover tile)
                v-card-title(primary-title)
                    h3.headline {{ $t('base.not_found') }}

</template>

<script>
    'use strict'

    export default {
        name: "NotFound",
        components: {},
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