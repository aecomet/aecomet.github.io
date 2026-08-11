<template>
  <section id="not-found" class="page">
    <div class="container">
      <div class="page-label">{{ t('notFound.label') }}</div>
      <div class="content-item">
        <h2>{{ t('notFound.title') }}</h2>
        <p>{{ t('notFound.description') }}</p>
        <button class="btn-primary" @click="go('/')">{{ t('notFound.back') }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { go } from '@src/plugins/router';

const { t } = useI18n();
</script>
