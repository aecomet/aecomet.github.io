<script setup lang="ts">
import { mdiEmail } from '@mdi/js';
</script>

<template>
  <section id="contact" class="page">
    <div class="container">
      <div class="page-label">— Contact</div>
      <div class="content-item">
        <div>
          <div class="contact-label"><v-icon class="contact-icon" :icon="mdiEmail"></v-icon> Email</div>
          <div class="contact-value">
            <div>engineer.t.o.0823@***</div>
            <div class="email-note">※ ***にはgmail.comを入力してください</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
