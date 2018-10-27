<template lang="pug">
    v-layout(row wrap justify-center)#work
        v-flex(md10 xs12).my-3
            .headline.mb-4 {{ $t('work.title') }}
            v-card

</template>

<script lang="ts">
    'use strict'

    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Profile extends Vue {

        created() {}

        mounted() {
        }
    }
</script>

<style scoped>

</style>