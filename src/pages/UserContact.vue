<script setup lang="ts">
import { mdiEmail } from '@mdi/js';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>
  <section id="contact" class="page">
    <div class="container">
      <div class="page-label">{{ t('contact.label') }}</div>
      <div class="content-item">
        <div>
          <div class="contact-label">
            <v-icon class="contact-icon" :icon="mdiEmail"></v-icon> {{ t('contact.email') }}
          </div>
          <div class="contact-value">
            <div>engineer.t.o.0823@***</div>
            <div class="email-note">{{ t('contact.emailNote') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
