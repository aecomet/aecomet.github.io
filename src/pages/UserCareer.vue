<template>
  <section id="contact" class="page">
    <div class="container">
      <div class="page-label">{{ t('career.label') }}</div>

      <div class="content-item">
        <v-card-text>
          <v-card-text class="default-text">
            <h4 class="headline">{{ t('career.title') }}</h4>

            <p>{{ t('career.description') }}</p>
          </v-card-text>
        </v-card-text>

        <v-timeline side="end" align="start">
          <v-timeline-item v-for="(career, idx) in careers" :key="idx" size="small">
            <template #opposite>
              <div v-text="career.date"></div>
            </template>
            <div>
              <div class="text-title-large text-left">
                {{ career.header }}
              </div>
              <p>
                {{ career.note }}
              </p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import { Career } from '@src/types/Career';

const CAREER_KEYS = [
  'highSchool',
  'university',
  'gradUniversity',
  'gradSchool',
  'gradGradSchool',
  'company',
  'securityExam',
  'databaseExam',
  'architectExam',
  'eiken',
  'newRole'
] as const;

const { t } = useI18n();

const careers = computed<Array<Career>>(() =>
  CAREER_KEYS.map((key) => ({
    date: t(`career.items.${key}.date`),
    header: t(`career.items.${key}.header`),
    note: t(`career.items.${key}.note`)
  }))
);
</script>
