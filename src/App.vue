<template>
  <v-app>
    <StarfieldCanvas />
    <CursorGlow />
    <AppHeader />

    <div id="app">
      <router-view />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from '@src/components/AppHeader.vue';
import CursorGlow from '@src/components/CursorGlow.vue';
import StarfieldCanvas from '@src/components/StarfieldCanvas.vue';
</script>
