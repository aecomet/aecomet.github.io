<template>
  <v-app>
    <app-header></app-header>
    <v-main>
      <v-container>
        <v-row   justify="center">
          <v-col lg="4" md="8" sm="12">
            <user-profile></user-profile>
          </v-col>
        </v-row>

        <v-row  justify="center">
          <v-col lg="4" md="8" sm="12">
            <user-career></user-career>
          </v-col>
        </v-row>

        <v-row  justify="center">
          <v-col lg="4" md="8" sm="12">
            <user-skill></user-skill>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script lang="ts">
import AppHeader from '@src/components/layouts/AppHeader.vue';
import AppFooter from '@src/components/layouts/AppFooter.vue';
import Profile from '@src/components/pages/Profile.vue';
import Skill from '@src/components/pages/Skill.vue';
import Career from '@src/components/pages/Career.vue';

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
    'user-profile': Profile,
    'user-skill': Skill,
    'user-career': Career,
  },
  created() {}
};
</script>

<style lang="sass"></style>