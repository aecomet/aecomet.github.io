<template lang="pug">
    v-layout(row wrap justify-center)#skill
        v-flex(md10 xs12).my-3
            .headline.mb-4 {{ $t('skill.certificationTitle')}}
            v-card
                v-data-table(:headers="$t('skill.certificationHeader')" :items="$t('skill.certification')" hide-actions)
                    template(slot="headerCell" slot-scope="props")
                        .text-xs-center.body-2 {{ props.header.text }}
                    template(slot="items" slot-scope="props")
                        td: .text-xs-center.body-2 {{ props.item.date }}
                        td: .text-xs-center.body-2 {{ props.item.name }}

        v-flex(md10 xs12).my-3
            .headline.mb-4 {{ $t('link.techTitle') }}
            v-list.elevation-1
                v-list-tile(v-for="(link, idx) in $t('link.technologies')" :key="`tech-link-${idx}`" :to="link.href" color="blue") {{ link.name }}

        v-flex(md10 xs12).my-3
            .headline.mb-4 {{ $t('skill.programingTitle') }}
            v-card
                v-card-title(primary-title)
                    .select-form: v-combobox(v-model="skill" :items="$t('skill.programing')" item-text="name" placeholder="未選択(Not select)" hint="プログラミング言語を選択してください (Select a programming language)" persistent-hint)
                v-card-text
                    v-layout(align-center)
                        v-item-group(v-model="currentWindow" tag="v-flex").mr-4
                            v-item(v-for="idx in skill.remark.length" :key="`key-item-${idx}`")
                                div(slot-scope="{ active, toggle }")
                                    v-btn(:input-value="active" @click="toggle" icon small): v-icon label

                        v-flex
                            v-window(v-model="currentWindow" vertical)
                                v-window-item(v-for="(item, idx) in skill.remark" :key="`window-item-${idx}`")
                                    v-card(flat)
                                        v-card-title(primary-title).title {{ item.title }}
                                        v-card-text.skill-text.body-2 {{ item.text }}
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