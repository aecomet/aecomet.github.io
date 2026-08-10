<template>
  <section id="projects" class="page">
    <div class="container">
      <div class="page-label">— Projects</div>

      <h1 class="projects-heading">Projects</h1>
      <p class="projects-desc">個人開発で公開しているライブラリ・サイトの紹介です。</p>

      <article class="project-card">
        <div class="card-top">
          <h2 class="card-name">backoff-util</h2>
          <span class="card-version">v2.3.0</span>
        </div>
        <p class="card-desc">
          任意の async 関数に指数バックオフ付きのリトライ処理を組み込める TypeScript
          ユーティリティライブラリ。ゼロ依存で ESM / CJS 両対応。
        </p>
        <div class="card-links">
          <v-btn
            variant="outlined"
            href="https://www.npmjs.com/package/@aecomet/backoff-util"
            target="_blank"
            rel="noopener"
            color="#00f5c4"
            >npm ↗</v-btn
          >
          <v-btn
            variant="outlined"
            href="https://github.com/aecomet/backoff-util"
            target="_blank"
            rel="noopener"
            color="#00f5c4"
            >GitHub ↗</v-btn
          >
        </div>
      </article>

      <p class="more-hint">※ 他のプロジェクトも随時追加予定</p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.projects-heading {
  font-size: 2rem;
  font-weight: 500;
  margin: 0 0 0.5rem;
}

.projects-desc {
  color: var(--muted);
  margin: 0 0 3rem;
  line-height: 1.8;
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 2rem 2rem 1.75rem;
  max-width: 640px;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent1), var(--accent2));
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.card-name {
  font-family: 'DM Mono', monospace;
  font-size: 1.1rem;
  color: var(--accent1);
  margin: 0;
}

.card-version {
  font-family: 'DM Mono', monospace;
  font-size: 0.72rem;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 0.15rem 0.6rem;
  border-radius: 100px;
  white-space: nowrap;
}

.card-desc {
  color: var(--text);
  line-height: 1.8;
  margin: 0 0 1.5rem;
}

.card-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.more-hint {
  margin-top: 2.5rem;
  color: var(--muted);
  font-size: 0.85rem;
  opacity: 0.7;
}
</style>
