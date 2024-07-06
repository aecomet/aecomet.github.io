<template>
  <v-app>
    <AppHeader></AppHeader>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="10">
            <UserProfile></UserProfile>
          </v-col>

          <v-col cols="12" md="10">
            <UserCareer></UserCareer>
          </v-col>
        </v-row>

        <v-lazy height="500" transition="fade-transition">
          <v-row justify="center">
            <v-col cols="12" md="10">
              <UserSkill></UserSkill>
            </v-col>
            <v-col cols="12" md="12">
              <AppFooter></AppFooter>
            </v-col>
          </v-row>
        </v-lazy>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import AppFooter from '@src/components/AppFooter.vue';
import AppHeader from '@src/components/AppHeader.vue';
import UserCareer from '@src/pages/UserCareer.vue';
import UserProfile from '@src/pages/UserProfile.vue';
import UserSkill from '@src/pages/UserSkill.vue';
</script>
