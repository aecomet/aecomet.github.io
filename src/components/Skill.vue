<template lang="pug">
    v-layout(row wrap justify-start)#skill
        v-flex(md10 xs12)
            .subheading.mb-2 {{ $t('skill.certificationTitle')}}

            v-list(dense)
                v-list-tile(v-for="(c, idx) in $t('skill.certification')" :key="`certification-${idx}`") {{ `${c.date} : ${c.name} 取得` }}

        v-flex(md10 xs12)
            .subheading.mb-2 {{ $t('link.techTitle') }}
            v-list(dense)
                v-list-tile(v-for="(link, idx) in $t('link.technologies')" :key="`tech-link-${idx}`" :href="link.href" target="_blank" rel="noopener noreferrer" :aria-label="`tech-link-${idx}`" color="blue") {{ link.name }}

        v-flex(md10 xs12).my-3
            .subheading.mb-4 {{ $t('skill.programingTitle') }}

            v-layout(row wrap justify-start)
                v-flex(v-for="(p, idx) in $t('skill.programing')" :key="`programing-${idx}`" md2 sm3 xs6).pa-1
                    v-card(color="pink lighten-5" min-height="150" tile)
                        v-card-text
                            .subheading {{ p.name }}
                            ul
                                li(v-for="(item, idx) in p.remark" :key="`p-item-${idx}`") {{ item.title }}
</template>

<script lang="ts">
    'use strict'

    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Skill extends Vue {
        skill: object = {
            name: '',
            remark: []
        };

        currentWindow: number = 0;

        created () {}
        mounted () {}
    }
</script>

<style scoped>
    .select-form {
        max-width: 250px;
    }

    .skill-text {
        line-height: 30px;
    }
</style>