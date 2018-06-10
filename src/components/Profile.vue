<template lang="pug">
    v-layout(row wrap justify-center)#profile
        v-flex(md10 xs12).my-5
            blockquote.display-1.text-xs-center {{ $t('profile.introduction') }}
        v-flex(md10 xs12).my-3
            v-card(hover)
                v-layout(row wrap)
                    v-flex(md5 xs12)
                        v-card-title(primary-title): span.headline My Profile
                        v-card-text.pa-2
                            .my-2.headline {{ $t('profile.name') }}
                            .mt-3.my-2.title {{ $t('profile.status') }}
                        v-card-actions
                            v-list(style="width: 100%;" light)
                                v-list-tile(v-for="(u, idx) in $t('profile.univs')" :key="`univ-${idx}`" @click="" :href="u.href" target="_blank" avatar ripple)
                                    v-list-tile-action: v-icon(color="") school
                                    v-list-tile-content: v-list-tile-title.orange--text {{ u.name }}

                    v-flex(md7 xs12)
                        v-card-title(primary-title): span.headline Hobby
                        v-data-table(:items="$t('profile.hobbies')" hide-actions hide-headers).elevation-1
                            template(slot="items" slot-scope="props"): td {{ props.item }}

        v-flex(md4 xs12).my-3
            v-card(hover)
                v-card-title(primary-title): span.headline From
                v-card-text: span.subheading {{ $t('profile.from.name') }}
                gmap-map(:center="$t('profile.from.center')" :zoom="opts.zoom" style="height: 500px; width: 100%;")
                    gmap-marker(:position="$t('profile.from.center')" :clickable="true" :draggable="true" @click="")

        v-flex(md1 xs0).my-3

        v-flex(md4 xs12).my-3
            v-card(hover)
                v-card-title(primary-title): span.headline Stay
                v-card-text: span.subheading {{ $t('profile.stay.name') }}
                gmap-map(:center="$t('profile.stay.center')" :zoom="opts.zoom" style="height: 500px; width: 100%;")
                    gmap-marker(:position="$t('profile.stay.center')" :clickable="true" :draggable="true" @click="")

</template>

<script>
    'use strict'

    export default {
        name: "Profile",
        components: {},
        data: () => ({
            opts: {
                zoom: 17,
                scrollWheel: false,
            }
        }),
        props: {},
        created() {
        },
        mounted() {
        },
        methods: {},
        computed: {}
    }
</script>

<style scoped>

</style>