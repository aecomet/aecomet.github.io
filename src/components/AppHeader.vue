<template>
  <v-app-bar app elevate-on-scrol absolute>
    <v-toolbar-title>Portfolio</v-toolbar-title>
    <v-btn aria-label="toggle-btn" @click="toggleTheme"><v-icon icon="fa:fas fa-adjust"></v-icon></v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify';
const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
};
</script>
