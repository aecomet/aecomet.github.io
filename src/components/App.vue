<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12">
            <user-profile></user-profile>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12">
            <user-career></user-career>
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col cols="12">
            <user-skill></user-skill>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script lang="ts">
import AppFooter from '@src/components/layouts/AppFooter.vue';
import AppHeader from '@src/components/layouts/AppHeader.vue';
import Career from '@src/components/pages/Career.vue';
import Profile from '@src/components/pages/Profile.vue';
import Skill from '@src/components/pages/Skill.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'user-profile': Profile,
    'user-skill': Skill,
    'user-career': Career
  },
  setup() {
    return {};
  }
});
</script>

<style lang="sass"></style>
