<template lang="pug">
    v-layout(row wrap justify-center)#work
        v-flex(md10 xs12).my-3
            .headline.mb-4 {{ $t('work.title') }}
            v-card(tile)
                v-card-text(v-for="(product, idx) in $t('work.products')" :key="`product-${idx}`")
                    .subheading
                        | {{ product.name }}
                        v-chip(v-for="(label, idx) in product.language.split(',')" :key="`product-label-${idx}`" color="red" outline small) {{ label }}
                    .body-2 {{ product.text }}
                    v-divider.mt-3
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