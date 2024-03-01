<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col md="10" sm="12">
            <v-lazy height="550" transition="fade-transition">
              <UserProfile></UserProfile>
            </v-lazy>
          </v-col>
        </v-row>

        <v-lazy height="2300" transition="fade-transition">
          <v-row justify="center">
            <v-col md="10" sm="12">
              <UserCareer></UserCareer>
            </v-col>

            <v-col md="10" sm="12">
              <UserSkill></UserSkill>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>
    </v-main>

    <AppFooter></AppFooter>
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from '@src/components/layouts/AppFooter.vue';
import AppHeader from '@src/components/layouts/AppHeader.vue';
import UserCareer from '@src/components/pages/UserCareer.vue';
import UserProfile from '@src/components/pages/UserProfile.vue';
import UserSkill from '@src/components/pages/UserSkill.vue';
</script>
