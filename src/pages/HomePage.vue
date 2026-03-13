<template>
  <section id="home" class="page">
    <div class="hero">
      <div class="hero-badge">Portfolio</div>
      <h1>
        <span class="accent">こめっと</span>
      </h1>
      <p class="hero-sub">Software Engineer</p>
      <div class="hero-cta">
        <button class="btn-primary" @click="go('/profile')">プロフィール</button>
        <button class="btn-ghost" @click="go('/career')">経歴を見る</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const go = (path: string) => router.push(path);
</script>
