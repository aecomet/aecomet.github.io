<template>
  <nav>
    <ul class="nav-links">
      <li>
        <router-link to="/" class="nav-link" :class="{ active: isActive('/') }">{{ t('nav.home') }}</router-link>
      </li>
      <li>
        <router-link to="/profile" class="nav-link" :class="{ active: isActive('/profile') }">{{
          t('nav.profile')
        }}</router-link>
      </li>
      <li>
        <router-link to="/career" class="nav-link" :class="{ active: isActive('/career') }">{{
          t('nav.career')
        }}</router-link>
      </li>
      <li>
        <router-link to="/projects" class="nav-link" :class="{ active: isActive('/projects') }">{{
          t('nav.projects')
        }}</router-link>
      </li>
      <li>
        <router-link to="/contact" class="nav-link" :class="{ active: isActive('/contact') }">{{
          t('nav.contact')
        }}</router-link>
      </li>
    </ul>

    <v-btn
      class="lang-toggle"
      variant="outlined"
      color="#b8bec8"
      size="small"
      :prepend-icon="mdiTranslate"
      :title="t('nav.languageTitle')"
      :aria-label="t('nav.languageTitle')"
      @click="toggleLocale"
    >
      {{ locale === 'ja' ? t('nav.toEnglish') : t('nav.toJapanese') }}
    </v-btn>
  </nav>
</template>

<script setup lang="ts">
import { mdiTranslate } from '@mdi/js';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { toggleLocale } from '@src/plugins/i18n';

const route = useRoute();
const { t, locale } = useI18n();

const isActive = (path: string) => route.path === path;
</script>

<style scoped>
.lang-toggle {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-left: 2.5rem;
}

@media (max-width: 768px) {
  .lang-toggle {
    margin-left: 1.5rem;
  }
}
</style>
