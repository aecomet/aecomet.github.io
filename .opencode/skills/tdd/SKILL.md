---
name: tdd
description: aecomet.github.io の TDD 実装ワークフロー。テストを先に書き、最小限のコードで通過させ、リファクタリングするサイクルを厳守する。
---

# TDD for aecomet.github.io

## 基本サイクル

1. **RED**: 失敗するテストを書く。テストだけが仕様である。
2. **GREEN**: テストを通す最小限のコードを書く。汎用性や美しさは不要。
3. **REFACTOR**: テストが通っている状態を維持しながらコードを改善する。

## プロジェクト概要

Vue 3 + Vuetify 4 製ポートフォリオサイト（SSG: vite-ssg）。

```
src/
├── app.ts                  # アプリケーションエントリ
├── App.vue                 # ルートコンポーネント
├── index.html              # HTML テンプレート
├── assets/
│   ├── style.scss          # グローバルスタイル
│   └── images/
├── components/             # 共通コンポーネント
│   ├── AppHeader.vue
│   ├── CursorGlow.vue
│   └── StarfieldCanvas.vue
├── pages/                  # ルートページ
│   ├── HomePage.vue
│   ├── NotFoundPage.vue
│   ├── UserCareer.vue
│   ├── UserContact.vue
│   └── UserProfile.vue
├── plugins/
│   ├── router.ts           # Vue Router 設定
│   └── vuetify.ts          # Vuetify 設定
└── types/
    ├── Career.ts
    ├── json.d.ts
    └── vue.d.ts
```

## 技術スタック

| カテゴリ       | ツール                                                     |
| -------------- | ---------------------------------------------------------- |
| フレームワーク | Vue 3 (Composition API, `<script setup>`)                  |
| UI             | Vuetify 4                                                  |
| ルーティング   | Vue Router 5                                               |
| ビルド         | Vite 8 + vite-ssg 28                                       |
| 言語           | TypeScript 6 (strict)                                      |
| パスエイリアス | `@src/*` → `src/*`                                         |
| リンター       | ESLint 10 (flat config) + eslint-plugin-vue                |
| フォーマッター | Prettier 3 (printWidth 120, singleQuote, no trailingComma) |
| Git hooks      | Lefthook 2 (pre-commit: lint + format check)               |
| コミット       | Conventional Commits                                       |
| CI/CD          | GitHub Actions (build → Pages deploy → Docker)             |
| パッケージ管理 | pnpm                                                       |

## テスト環境（推奨セットアップ）

テストフレームワーク未導入のため、以下のセットアップを推奨：

```sh
pnpm add -D vitest @vue/test-utils happy-dom
```

### vitest 設定例（`vitest.config.mts`）

```ts
import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: { '@src': path.resolve(__dirname, 'src') }
  },
  test: {
    environment: 'happy-dom',
    globals: true
  }
});
```

### npm scripts 追加例

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  }
}
```

## テスト配置

```
__tests__/
├── unit/                     # 単位テスト（純粋関数・ロジックごと）
│   ├── components/           # コンポーネントのテスト
│   │   ├── AppHeader.test.ts
│   │   └── StarfieldCanvas.test.ts
│   └── utils/                # ユーティリティ関数のテスト
├── integration/              # 統合テスト（複数コンポーネント・画面遷移）
└── vitest.config.mts         # Vitest 設定
```

## テスト記法

- `describe` / `test` / `expect`（vitest, globals: true）
- `vi.fn()` でモック、`vi.spyOn()` でスパイ
- `@src/...` alias で import（`import { foo } from '@src/components/...'`）
- 1テスト = 1アサーションが理想。複数アサーションする場合はテスト名に理由を明記
- `.ts` 拡張子で記述（`.spec.ts` ではなく `.test.ts`）
- スナップショットテストは必要最小限に留める

## テストパターン

### Vue コンポーネントのレンダリングテスト

```ts
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import AppHeader from '@src/components/AppHeader.vue';

describe('AppHeader', () => {
  test('renders site title', () => {
    const wrapper = mount(AppHeader);
    expect(wrapper.text()).toContain('aecomet');
  });
});
```

### Vuetify コンポーネントを含むテスト

```ts
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createVuetify } from 'vuetify';
import UserProfile from '@src/pages/UserProfile.vue';

describe('UserProfile', () => {
  test('renders profile card with Vuetify', () => {
    const vuetify = createVuetify();
    const wrapper = mount(UserProfile, {
      global: { plugins: [vuetify] }
    });
    expect(wrapper.findComponent({ name: 'VCard' }).exists()).toBe(true);
  });
});
```

### Vue Router を含むテスト

```ts
import { describe, expect, test } from 'vitest';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@src/plugins/router';

describe('NotFoundPage', () => {
  test('renders 404 message for unknown routes', async () => {
    const router = createRouter({ history: createWebHistory(), routes });
    router.push('/nonexistent');
    await router.isReady();

    const wrapper = mount(NotFoundPage, {
      global: { plugins: [router] }
    });
    expect(wrapper.text()).toContain('404');
  });
});
```

### コンポーザブルのテスト

```ts
import { describe, expect, test } from 'vitest';

// もし composables/ が追加された場合の例
describe('useCounter', () => {
  test('increments count', () => {
    const { count, increment } = useCounter();
    expect(count.value).toBe(0);
    increment();
    expect(count.value).toBe(1);
  });
});
```

## 実装のルール

- GREEN フェーズでは **テストが通る最小限** を書く。余計なロジックを追加しない。
- REFACTOR フェーズでのみ、重複の除去・命名の改善・抽象化を行う。
- 一度に複数のテストを書かない。1テスト → 1実装 → リファクタリング のサイクルを守る。
- 全てのテストが常に GREEN である状態を保つ。
- Composition API + `<script setup>` をデフォルトとする。
- Vuetify コンポーネントは `v-card`, `v-btn` などのタグ名または `findComponent` で検証する。
- コンポーネントのスタイル検証より、振る舞いの検証を優先する。

## コミットメッセージ

プロジェクトの規約に従い Conventional Commits を使用する。

```
test(component): add AppHeader render test
feat(component): implement AppHeader with Vuetify
refactor(component): extract navigation items to config
```

## プッシュ前の自己同期

`git push` する前に、この SKILL.md 自身とドキュメント群を最新のコードベースに合わせて更新する。

### 同期チェックリスト

1. **SKILL.md のプロジェクト構成を実物と照合**
   - `src/` 以下の実際のファイル一覧と「プロジェクト概要」セクションが一致しているか確認
   - 追加・削除・移動があれば更新する

2. **テストパターンを実装と照合**
   - 新しいコンポーネントや機能が増えていればサンプルコードを追加
   - 使われていない型や関数のパターンは削除

3. **プロジェクトドキュメントを更新**
   - `docs/architecture.md` — ディレクトリ構造・API・ビルド設定が実態に合っているか
   - `README.md` — セットアップ手順や特徴が最新か
   - `.github/copilot-instructions.md` — コーディング規約が最新か

4. **テスト・ビルドの通過確認**

   ```sh
   pnpm test
   pnpm build
   ```

5. **この SKILL.md 自身も更新内容を反映する**
   （`.opencode/skills/tdd/SKILL.md` に配置。プロジェクトと一緒にコミットされる）
