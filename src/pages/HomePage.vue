<template>
  <section id="home" class="page">
    <div class="hero">
      <div class="hero-badge">{{ t('home.badge') }}</div>
      <h1>
        <span class="accent">こめっと</span>
      </h1>
      <p class="hero-sub">{{ t('home.subtitle') }}</p>
      <div class="hero-cta">
        <button class="btn-primary" @click="go('/profile')">{{ t('home.ctaProfile') }}</button>
        <button class="btn-ghost" @click="go('/career')">{{ t('home.ctaCareer') }}</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

const { t } = useI18n();
const router = useRouter();
const go = (path: string) => router.push(path);
</script>
