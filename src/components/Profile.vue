<template lang="pug">
  #profile
    v-layout(row wrap justify-center)
      v-flex(md10 xs12 text-center).my-2
        v-card(color="grey lighten-5")
          v-card-text(primary-title).display-2.my-2 {{ $t('profile.profileTitle') }}

          v-card-text.text-xs-center: img(:src="$t('profile.img')" width="240")

          v-card-text
            .my-2.headline {{ $t('profile.name') }}

            .my-3.title {{ $t('profile.introduction') }}

            .title
              v-icon(small).mr-2 fas fa-envelope
                | {{ $t('contact.text') }}
                .title {{ $t('contact.subtext') }}

          v-card-text
            .my-3: .title.mb-2 {{ $t('skill.certificationTitle')}}

            v-list
              v-list-item(v-for="(c, idx) in $t('skill.certification')" :key="`certification-${idx}`"): .subtitle-1 {{ `${c.date} : ${c.name}` }}

            .my-3: .title.mb-2 {{ $t('link.techTitle') }}

            v-list
              v-list-item(v-for="(link, idx) in $t('link.technologies')" :key="`tech-link-${idx}`" :href="link.href" target="_blank" rel="noopener noreferrer" :aria-label="`tech-link-${idx}`" color="blue"): .subtitle-1 {{ link.name }}

            .my-3: .title.mb-4 {{ $t('skill.programingTitle') }}

            v-layout(row wrap justify-start)
              v-flex(v-for="(p, idx) in $t('skill.programing')" :key="`programing-${idx}`" sm3 xs6).pa-1
                v-card(color="white" min-height="150" tile)
                  v-card-text
                    .subtitle-1.black--text {{ p.name }}
                    ul: li.black--text(v-for="(item, idx) in p.remark" :key="`p-item-${idx}`") {{ item.title }}

</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component
  export default class Profile extends Vue {
    placeIdx = 0;

    panels = [true, true, true, true, true, true];

    created() {}

    mounted() {}
  }
</script>

<style scoped>
  .greeting-text {
    line-height: 32px !important;
  }
  .select-form {
    max-width: 250px;
  }

  .skill-text {
    line-height: 30px;
  }
</style>