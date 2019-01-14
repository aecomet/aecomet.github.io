<template lang="pug">
    v-layout(row wrap justify-center)#work
        v-flex(md10 xs12)
            .headline.mb-2 {{ $t('work.title') }}

            .body-2.my-4.red--text {{ $t('work.desc') }}

            v-layout(row wrap justify-start)
                v-flex(v-for="(product, idx) in $t('work.products')" :key="`product-${idx}`" md3 sm4 xs12).pa-1
                    v-card(min-height="300" max-height="400")
                        v-card-text
                            img(v-if="product.src.length > 0" :src="product.src" :alt="`${product.name}`").work-img
                            .text-xs-center(v-else): v-icon {{ product.icon }}
                            .subheading.mt-2 {{ product.name }}
                            .body-2.my-2 {{ product.text }}
                            v-chip(v-for="(label, idx) in product.language.split(',')" :key="`product-label-${idx}`" color="red" outline small) {{ label }}
                        v-card-actions(v-if="product.href.length > 0")
                            v-spacer
                            v-btn(:href="product.href" target="_blank" rel="noopener noreferrer" :aria-label="`product-link-${idx}`" color="blue" outline round small) Link
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
    .work-icon,
    .v-icon.fas {
        font-size: 8em !important;
    }

    .work-img {
        height: 150px;
        width: 100%;
        object-fit: contain;
    }

</style>