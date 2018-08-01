<template lang="pug">
    v-layout(row wrap justify-center)#links
        v-flex(md10 xs12).my-3
            .display-1.my-2.text-xs-center {{ $t('link.laboratoryTitle')}}
            v-card(:href="$t('link.laboratory.href')" target="_blank" tile).pa-3
                .text-xs-center.title.mb-1.orange--text {{ $t('link.laboratory.name') }}

        v-flex(md10 xs12).my-3
            .display-1.my-2.text-xs-center {{ $t('link.technologyTitle')}}
            v-card(v-for="(l, idx) in $t('link.technologies')" :key="`tech-${idx}`" :href="l.href" target="_blank" ripple flat tile).pa-3
                .text-xs-center.title.mb-1.orange--text {{ l.name }}
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Link extends Vue {
        created () {}
        mounted () {}
    }
</script>

<style scoped>

</style>