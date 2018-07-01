<template lang="pug">
    v-layout(row wrap justify-center)#skill
        v-flex(md10 xs12).my-3
            .display-1.my-2.text-xs-center {{ $t('skill.certificationTitle')}}
            v-card(tile flat)
                v-data-table(:headers="$t('skill.certificationHeader')" :items="$t('skill.certification')" hide-actions).elevation-1
                    template(slot="headerCell" slot-scope="props")
                        .text-xs-center.title {{ props.header.text }}
                    template(slot="items" slot-scope="props")
                        td: .text-xs-center.subheading {{ props.item.date }}
                        td: .text-xs-center.subheading {{ props.item.name }}

        v-flex(md10 xs12).my-3
            .display-1.my-2.text-xs-center {{ $t('skill.programingTitle')}}
            v-card(tile flat).py-1
                v-layout(row wrap justify-start)
                    v-flex(v-for="(p, idx) in $t('skill.programing')" :key="`programing-${idx}`" md3 xs6).pa-2
                        .text-xs-center
                            //- .title.my-3 {{ p.name }}
                            //-v-progress-circular(color="red" :size="100" :width="15" :rotate="360" :value="p.experience") {{ p.experience }}
                            .title.my-3
                            v-progress-circular(color="red" :size="100" :width="15" :rotate="360" :value="p.experience") 0
                        .text-xs-left.mt-2
                            span(v-for="(chip, idx) in p.remark" :key="`chip-${idx}`"): v-chip(color="red" label outline) {{ chip }}
</template>

<script>
    'use strict'
    export default {
        name: "Skill",
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