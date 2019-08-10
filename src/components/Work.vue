<template lang="pug">
  v-layout(row wrap justify-center)#work.pa-2
    v-flex(md10 xs12)
      .headline.mb-2 {{ $t('work.title') }}

      .body-2.my-4.red--text {{ $t('work.desc') }}

      v-layout(v-for="(product, p_idx) in $t('work.products')" :key="`product-${p_idx}`" row wrap justify-start).pa-1
        v-flex(xs12 text-center)
          .display-1.my-3.font-weight-block {{ product.year }} 年
        v-flex(v-for="(item, idx) in product.items" :key="`product-item-${idx}`" md3 sm4 xs12)
          v-card(min-height="300" max-height="430")
            v-card-text
              .text-center(v-if="item.src.length > 0"): img(:src="item.src" :alt="`${product.name}`").work-img
              .text-center(v-else): v-icon {{ item.icon }}
              .subheading.mt-2 {{ item.name }}
              .body-2.my-2 {{ item.text }}
              v-chip.mx-1(v-for="(label, idx) in item.language.split(',')" :key="`product-label-${idx}`" color="red" outlined small) {{ label }}
            v-card-actions(v-if="item.href.length > 0")
              v-spacer
              v-btn(:href="item.href" target="_blank" rel="noopener noreferrer" :aria-label="`product-link-${idx}`" color="blue" outlined rounded small) Link
</template>

<script lang="ts">
  'use strict'

  import Vue from 'vue'
  import Component from 'vue-class-component'

  @Component
  export default class Profile extends Vue {

    created() {}

    mounted() {}
  }
</script>

<style scoped>
  .work-icon,
  .v-icon.fas {
    font-size: 8em !important;
  }

  .work-img {
    height: 150px;
    width: 100%;
    object-fit: contain;
  }
</style>