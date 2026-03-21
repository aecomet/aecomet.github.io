<template>
  <v-app>
    <StarfieldCanvas v-if="isHome" />
    <CursorGlow />
    <AppHeader />

    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import AppHeader from '@src/components/AppHeader.vue';
import CursorGlow from '@src/components/CursorGlow.vue';
import StarfieldCanvas from '@src/components/StarfieldCanvas.vue';

const route = useRoute();
const isHome = computed(() => route.name === 'Home');
</script>
