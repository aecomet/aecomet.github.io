<template>
  <v-app-bar app elevate-on-scrol absolute>
    <v-toolbar-title>Portfolio</v-toolbar-title>
    <v-btn @click="toggleTheme"><v-icon icon="fa:fas fa-adjust"></v-icon></v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTheme } from 'vuetify';
export default defineComponent({
  setup() {
    const theme = useTheme();

    const toggleTheme = (): void => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    };

    return {
      theme,
      toggleTheme
    };
  }
});
</script>
