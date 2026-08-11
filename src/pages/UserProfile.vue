<template>
  <section id="profile" class="page">
    <div class="container">
      <div class="page-label">{{ t('profile.label') }}</div>

      <div class="content-item">
        <v-img
          class="align-end text-white mx-auto"
          height="250"
          width="250"
          src="/images/logo.png"
          alt="profile-img"
          cover
        >
        </v-img>

        <div class="ma-2 text-center default-text">
          <div class="text-h5 mb-1">{{ t('brand.name') }}</div>
          <div>{{ t('profile.role') }}</div>
        </div>

        <div class="contact-label">{{ t('profile.links') }}</div>

        <div class="ma-2 d-flex justify-center">
          <v-btn
            variant="outlined"
            class="ma-2"
            href="https://github.com/aecomet"
            target="_blank"
            rel="noopener"
            color="#b8bec8"
            >Github</v-btn
          >

          <v-btn
            variant="outlined"
            class="ma-2"
            href="https://zenn.dev/aecomet"
            target="_blank"
            rel="noopener"
            color="#b8bec8"
            >Zenn</v-btn
          >

          <v-btn
            variant="outlined"
            class="ma-2"
            href="https://atcoder.jp/users/ae_hiyoko3"
            target="_blank"
            rel="noopener"
            color="#b8bec8"
          >
            AtCoder
          </v-btn>
        </div>

        <div class="contact-label">{{ t('profile.experience') }}</div>

        <div class="ma-2 d-flex justify-center flex-wrap">
          <v-chip class="ma-2" color="#b8bec8" variant="outlined">
            {{ t('profile.experiences.techSelection') }}
          </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined">
            {{ t('profile.experiences.systemArchitect') }}
          </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined"> {{ t('profile.experiences.teamLead') }} </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined">
            {{ t('profile.experiences.incidentResponse') }}
          </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined"> {{ t('profile.experiences.development') }} </v-chip>
        </div>

        <div class="contact-label">{{ t('profile.certifications') }}</div>

        <div class="ma-2 d-flex justify-center flex-wrap">
          <v-chip class="ma-2" color="#b8bec8" variant="outlined"> {{ t('profile.certifications.fe') }} </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined"> {{ t('profile.certifications.ap') }} </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined"> {{ t('profile.certifications.security') }} </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined"> {{ t('profile.certifications.database') }} </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined"> {{ t('profile.certifications.architect') }} </v-chip>
          <v-chip class="ma-2" color="#b8bec8" variant="outlined"> {{ t('profile.certifications.eiken') }} </v-chip>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
