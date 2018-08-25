<template lang="pug">
    v-layout(row wrap justify-center)#skill
        v-flex(md10 xs12).my-3
            .headline.mb-4.text-xs-left {{ $t('skill.certificationTitle')}}
            v-card(tile flat)
                v-data-table(:headers="$t('skill.certificationHeader')" :items="$t('skill.certification')" hide-actions).elevation-1
                    template(slot="headerCell" slot-scope="props")
                        .text-xs-center.title {{ props.header.text }}
                    template(slot="items" slot-scope="props")
                        td: .text-xs-center.subheading {{ props.item.date }}
                        td: .text-xs-center.subheading {{ props.item.name }}

        v-flex(md10 xs12).my-3
            .headline.mb-4.text-xs-left {{ $t('skill.programingTitle')}}
            v-card(tile flat).py-1
                v-layout(row wrap justify-start)
                    v-flex(v-for="(p, idx) in $t('skill.programing')" :key="`programing-${idx}`" md3 xs6).pa-2
                        .text-xs-center
                            //- .title.my-3 {{ p.name }}
                            //-v-progress-circular(color="red" :size="100" :width="15" :rotate="360" :value="p.experience") {{ p.experience }}
                            .title.my-3
                            v-progress-circular(color="blue" :size="100" :width="15" :rotate="360" :value="100") {{ p.name }}
                        .text-xs-left.mt-2
                            span(v-for="(chip, idx) in p.remark" :key="`chip-${idx}`"): v-chip(color="blue" label outline) {{ chip }}

        v-flex(md10 xs12).my-3
            .headline.mb-4.text-xs-left {{ $t('skill.developTitle')}}
            v-card(v-for="(d, idx) in $t('skill.develops')" :key="`develop-${idx}`" tile flat).py-1
                .text-xs-left.pa-2.blue--text {{ d.name }}

</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Skill extends Vue {
        created () {}
        mounted () {}
    }
</script>

<style scoped>

</style>