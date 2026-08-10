<template>
  <nav>
    <router-link to="/" class="brand" :aria-label="t('brand.name')">{{ t('brand.name') }}</router-link>

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

    <div class="lang-select" :class="{ open }" ref="rootRef">
      <button
        type="button"
        class="lang-trigger"
        :aria-expanded="open"
        aria-haspopup="listbox"
        :aria-label="t('nav.languageTitle')"
        @click="toggle"
        @keydown="onTriggerKeydown"
      >
        {{ currentLabel }}
      </button>
      <ul
        v-if="open"
        class="lang-menu"
        role="listbox"
        :aria-label="t('nav.languageTitle')"
        :aria-activedescendant="`lang-opt-${highlightIndex}`"
      >
        <li
          v-for="(opt, i) in options"
          :id="`lang-opt-${i}`"
          :key="opt.value"
          role="option"
          :aria-selected="locale === opt.value"
          :class="{ active: locale === opt.value, highlight: i === highlightIndex }"
          @click="selectLang(opt.value)"
          @mouseenter="highlightIndex = i"
        >
          {{ opt.label }}
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { setLocale, type Locale } from '@src/plugins/i18n';

const route = useRoute();
const { t, locale } = useI18n();

const options = [
  { value: 'ja', label: '日本語' },
  { value: 'en', label: 'English' }
] as const;

const open = ref(false);
const highlightIndex = ref(0);
const rootRef = ref<HTMLElement | null>(null);

const currentLabel = computed(() => options.find((o) => o.value === locale.value)?.label ?? '日本語');

const isActive = (path: string) => route.path === path;

function currentIndex(): number {
  return Math.max(
    0,
    options.findIndex((o) => o.value === locale.value)
  );
}

function toggle() {
  open.value = !open.value;
  if (open.value) highlightIndex.value = currentIndex();
}

function selectLang(lang: Locale) {
  if (locale.value !== lang) setLocale(lang);
  open.value = false;
}

function moveHighlight(delta: number) {
  highlightIndex.value = (highlightIndex.value + delta + options.length) % options.length;
}

function onTriggerKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    open.value = false;
    return;
  }
  if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
    e.preventDefault();
    if (!open.value) {
      open.value = true;
      highlightIndex.value = currentIndex();
    } else {
      moveHighlight(e.key === 'ArrowDown' ? 1 : -1);
    }
    return;
  }
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    if (!open.value) {
      open.value = true;
      highlightIndex.value = currentIndex();
    } else {
      selectLang(options[highlightIndex.value].value);
    }
  }
}

function onClickOutside(e: PointerEvent) {
  if (rootRef.value && !rootRef.value.contains(e.target as Node)) {
    open.value = false;
  }
}

onMounted(() => document.addEventListener('pointerdown', onClickOutside));
onBeforeUnmount(() => document.removeEventListener('pointerdown', onClickOutside));
</script>

<style scoped>
.lang-select {
  position: relative;
  flex-shrink: 0;
  margin-left: 36px;
}
.lang-trigger {
  appearance: none;
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--muted);
  background-color: var(--surface);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2300f5c4' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px 6px;
  border: 1px solid var(--border);
  border-radius: 0;
  padding: 7px 30px 7px 12px;
  cursor: pointer;
  transition:
    color 0.3s,
    border-color 0.3s,
    background-color 0.3s,
    box-shadow 0.3s;
}
.lang-trigger:hover,
.lang-select.open .lang-trigger {
  color: var(--text);
  border-color: var(--glow);
  background-color: var(--surface);
}
.lang-trigger:focus-visible {
  color: var(--text);
  border-color: var(--accent1);
  outline: none;
  box-shadow: 0 0 0 3px var(--glow);
}
.lang-menu {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  z-index: 700;
  min-width: 100%;
  list-style: none;
  padding: 4px 0;
  background: var(--surface);
  border: 1px solid var(--glow);
  border-radius: 0;
  animation: lang-fade 0.18s ease-out;
}
.lang-menu li {
  font-family: 'DM Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 0.15em;
  color: var(--muted);
  padding: 8px 14px;
  cursor: pointer;
  white-space: nowrap;
  transition:
    color 0.2s,
    background-color 0.2s;
}
.lang-menu li:hover,
.lang-menu li.highlight {
  color: var(--text);
  background-color: rgba(0, 245, 196, 0.08);
}
.lang-menu li.active {
  color: var(--accent1);
}
@keyframes lang-fade {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .lang-select {
    order: 2;
    margin-left: auto;
  }
  .lang-trigger {
    font-size: 0.65rem;
  }
  .lang-menu li {
    font-size: 0.65rem;
  }
}

@media (max-width: 480px) {
  .lang-trigger {
    font-size: 0.6rem;
    padding: 6px 28px 6px 10px;
  }
  .lang-menu li {
    font-size: 0.6rem;
    padding: 7px 12px;
  }
}
</style>
