<template lang="pug">
  v-app(app)
    v-app-bar(color="white" extended app scroll-off-screen dense flat)
      .text-xs-left: img(:src="$t('base.top')").top-img

      v-tabs(slot="extension" color="black" v-model="tab" right)
        v-tabs-slider(color="white")
        v-tab(v-for="(header, idx) in $t('base.content')" :key="`header-${idx}`" :to="header.href" :href="`#tab-${idx}`")
          span.body-1 {{ header.name }}

    //- Main Contents
    v-content(v-touch="{ left: () => onSwipe('left'), right: () => onSwipe('right') }").white
      v-container(fluid)
        transition(name="fade" mode="out-in" appear): router-view

    //- footer
    v-footer(height="auto" app dark absolute)
      v-flex(text-center)
        .subheading.font-weight-bold &copy; {{ new Date().getFullYear() }} {{ $t('base.attribute') }}
</template>

<script lang="ts">
    'use strict'

    let vm:any = null
    import Vue from 'vue'
    import Component from 'vue-class-component'
    import { Prop } from 'vue-property-decorator';

    @Component({})
    export default class App extends Vue {
        tab: any = null
        currentPage: number = 0;
        pages: Array<string> = [
            'profile_path',
            'work_path',
        ];

        @Prop()


        created() {
            vm = this
            // set page position
            vm.currentPage = 0
            vm.pages.forEach((name: string, idx: number) => {
                if (name === vm.$route.name) vm.currentPage = idx
            })

        }

        mounted() {}

        onSwipe (direction: string) {
            switch (direction) {
                case 'right':
                    if (this.currentPage <= 0)
                        this.currentPage += 1;
                    else
                        this.currentPage -= 1;
                    break;
                case 'left':
                    if (this.currentPage >= this.pages.length -1) 
                        this.currentPage -= 1;
                    else
                        this.currentPage += 1;
                    break;
            }
            vm.$router.push({ name: this.pages[this.currentPage] })
        }
    }
</script>

<style scoped>
    .top-img {
        margin: 0;
        padding: 2px 0;
        vertical-align: top;
        height: 44px;
    }

    @media (max-width: 767px) {
        /* Only smart phone css */
        .top-img {
            width: 80%;
            height: 32px;
        }
    }
</style>