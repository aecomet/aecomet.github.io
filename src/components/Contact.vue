<template lang="pug">
    v-layout(row wrap justify-center)#contact-me
        v-flex(md10 xs12).my-3
            .headline.mb-4 {{ $t('contact.title') }}
            v-card
                v-card-text.text-xs-center
                    .body-2 {{ $t('contact.text') }}
                    .body-2 {{ $t('contact.subtext') }}

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