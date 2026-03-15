<template>
  <section id="not-found" class="page">
    <div class="container">
      <div class="page-label">— Not Found</div>
      <div class="content-item">
        <h2>ページが見つかりません</h2>
        <p>指定されたURLは存在しないか、移動された可能性があります。</p>
        <button class="btn-primary" @click="go('/')">トップページへ戻る</button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { go } from '@src/plugins/router.ts';
</script>
