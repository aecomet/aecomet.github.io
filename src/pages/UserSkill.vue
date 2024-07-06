<template>
  <v-card class="mx-auto" outlined>
    <v-card-subtitle class="text-overline mb-4 pt-4">Skill</v-card-subtitle>

    <v-card-text>
      <div class="text-h5 mb-1">スキル</div>
      <div>触れたことのある技術</div>

      <v-list aria-label="skill-list">
        <v-list-item v-for="(skill, idx) in skills" :key="idx" role="option">
          <v-list-item-title>
            <div class="flex align-center">
              <span class="mr-1">{{ skill.name }}</span>

              <v-chip
                v-for="(exp, expIdx) in skill.exps"
                :key="expIdx"
                :color="exp.color"
                label
                size="x-small"
                class="mx-1"
              >
                {{ exp.label }}
              </v-chip>
            </div>
          </v-list-item-title>
          <v-list-item-subtitle class="wrap-text">{{ skill.note }}</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { Skill } from '@src/types/Skill.ts';
import { ref } from 'vue';

const skills = ref<Array<Skill>>([
  {
    name: 'JavaScript',
    exps: [
      {
        label: '業務',
        color: 'primary'
      },
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: 'Typescript で利用することが多いです'
  },
  {
    name: 'Vue',
    exps: [
      {
        label: '業務',
        color: 'primary'
      },
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: 'Vuexも利用してます。業務のフロントエンドは基本Vueで構築しています'
  },
  {
    name: 'React',
    exps: [
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: '規模に応じてReduxも採用してます'
  },
  {
    name: 'Java',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: 'Java8がメインで、jerseyというマイクロWebフレームワークを用いてWeb API開発をしています'
  },
  {
    name: 'PHP',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: 'サーバー言語を初めて触った際に触れた言語です。業務では簡易スクリプトを作成するときなどに利用しています'
  },
  {
    name: 'Python',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: '業務ではFlaskを採用しています'
  },
  {
    name: 'Ruby',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: '業務ではワンタイムバッチを作るときに利用します'
  },
  {
    name: 'Ruby on Rails',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: '業務では保守開発メインです(Vue + Flask に移行しつつあるため)'
  },
  {
    name: 'Perl',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: '保守開発メインで利用しています(Java に移行しつつあるため)'
  },
  {
    name: 'MySQL',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: '業務ではMySQL 8.x 系を利用しています'
  },
  {
    name: 'Redis',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: 'Memcached に変わるキャッシュとして利用が増えてます'
  },
  {
    name: 'Memcached',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: '最近は Redis に移行しつつあります'
  },
  {
    name: 'Apache Kafka',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: 'Pub / Sub 型のアーキテクチャを採用する際に利用します'
  },
  {
    name: 'Docker',
    exps: [
      {
        label: '業務',
        color: 'primary'
      },
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: '開発環境を作る際には基本的にDockerで動かせる環境を提供しているため個人・業務どちらでもよく使っています'
  },
  {
    name: 'C++',
    exps: [
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: '競技プログラミングに参加する際に利用していますx'
  },
  {
    name: 'Kotlin',
    exps: [
      {
        label: 'その他',
        color: 'black'
      }
    ],
    note: 'インターンシップをしていた際に触りました。'
  },
  {
    name: 'Swift',
    exps: [
      {
        label: '業務',
        color: 'primary'
      },
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: '業務ではiOS専用の機能を検証する際のアプリケーションをSwiftで構築してあります'
  },
  {
    name: 'Go lang',
    exps: [
      {
        label: '業務',
        color: 'primary'
      },
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: '業務ではCLIを作成する際に利用しています'
  },
  {
    name: 'Flutter',
    exps: [
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: '技術を学ぶ目的で利用しました'
  },
  {
    name: 'Google Cloud',
    exps: [
      {
        label: '業務',
        color: 'primary'
      }
    ],
    note: '業務では Big Query, Cloud Storage, Cloud SQL, Cloud Functions, Kubernetes Engine, Memorystore などを利用しています(もう少し増えるかも)'
  },
  {
    name: 'Kubernetes',
    exps: [
      {
        label: '業務',
        color: 'primary'
      },
      {
        label: '個人',
        color: 'green'
      }
    ],
    note: '業務で利用しています、まだまだ勉強中です'
  }
]);
</script>

<style lang="scss" scoped>
.wrap-text {
  -webkit-line-clamp: inherit !important;
}
</style>
