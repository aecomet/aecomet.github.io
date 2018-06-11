<template lang="pug">
    v-layout(row wrap justify-center)#resume
        v-flex(md10 xs12).my-3
            .display-1.my-2.text-xs-center {{ $t('resume.schoolTitle') }}
            timeline
                timeline-item(v-for="(school, idx) in $t('resume.school')" :key="`school-${idx}`" :hollow="school.hollow")
                    v-card(flat tile).pa-3
                        a(:href="school.href").title {{ school.name }}
                        .body-1 {{ school.start }} - {{ school.end }}
                        .subheading {{ school.remark }}


        v-flex(md10 xs12).my-3
            .display-1.my-2.text-xs-center {{ $t('resume.paperTitle')}}
            v-card(v-for="(p, idx) in $t('resume.paper')" :key="`paper-${idx}`" flat tile).pa-3
                .title.mb-1
                    | {{ p.title }}
                    v-chip(color="red" label outline) {{ p.tag }}
                .subheading.grey--text {{ p.subtitle }}
                .subheading.grey--text {{ p.member }}

        v-flex(md10 xs12).my-3
            .display-1.my-2.text-xs-center {{ $t('resume.researchTitle')}}
            v-card(v-for="(r, idx) in $t('resume.research')" :key="`research-${idx}`" hover).my-3.pa-3
                v-card-title(primary-title): span.title {{ r.title }}
                v-card-text
                    v-layout(row wrap justify-center)
                        v-flex(v-for="(img, idx) in r.images" :key="`img-${idx}`" md6 xs12)
                            .text-xs-center: img(:src="img.src" :alt="img.alt" width="400" height="300")
                    .body-1.mt-2 {{ r.abstract }}

</template>

<script>
    'use strict'
    import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'

    export default {
        name: "Resume",
        components: {
            Timeline,
            TimelineItem,
            TimelineTitle
        },
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