<template lang="pug">
    v-layout(row wrap justify-center)#profile
        v-flex(md10 xs12).text-xs-center.my-3: img(:src="$t('profile.top')" alt="top-img").top-img

        v-flex(md10 xs12).mb-3
            v-card(hover)
                v-layout(row wrap)
                    v-flex(md5 xs12)
                        v-card-title(primary-title): .headline {{ $t('profile.profileTitle') }}
                        v-card-text: .text-xs-center.display-4: font-awesome-icon(:icon="['fas', 'user-circle']")
                        v-card-text.pa-3
                            .my-2.headline {{ $t('profile.name') }}
                            .my-4.subheading
                                v-icon.mr-2 cake
                                | {{ $t('profile.birthday') }}
                            .my-4.subheading
                                v-icon.mr-2 work
                                | {{ $t('profile.status') }}
                                v-btn(:to="$t('link.laboratory.href')" color="orange" flat) {{ `${$t('link.laboratoryTitle')}` }}

                    v-flex(md7 xs12)
                        v-card-title(primary-title)
                        v-card-text
                            .headline {{ $t('profile.introduction') }}

                            .my-4.pa-1.title.greeting-text {{ $t('profile.greeting') }}

                            .text-xs-center.orange--text
                                .subheading {{ $t('profile.wordTitle') }}
                                .pa-2.headline {{ $t('profile.word')}}
</template>

<script lang="ts">
    import Vue from 'vue'
    import Component from 'vue-class-component'

    @Component
    export default class Profile extends Vue {

        placeIdx = 0;

        panels = [ true, true, true, true, true, true ];

        created() {}

        mounted() {
        }
    }
</script>

<style scoped>
    .top-img {
        margin: 0;
        padding: 0;
        vertical-align: top;
        max-width: 100%;
    }

    .greeting-text {
        line-height: 32px !important;
    }
</style>