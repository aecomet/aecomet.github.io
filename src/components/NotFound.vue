<template lang="pug">
    v-layout(row justify-center)#not-found
        v-flex(md8 xs12).my-3
            v-card(height="300px" hover tile)
                v-card-title(primary-title)
                    h3.headline {{ $t('base.not_found') }}

</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class NotFound extends Vue {
        created () {}
        mounted () {}
    }
</script>

<style scoped>

</style>