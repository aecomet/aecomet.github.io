<template>
  <v-card class="mx-auto" outlined>
    <v-card-subtitle class="text-overline mb-4 pt-4">Career</v-card-subtitle>

    <v-card-text>
      <div class="text-h5 mb-1">経歴</div>
      <div>大学入学から現在まで</div>
    </v-card-text>

    <v-card-text>
      <v-timeline side="end" align="start">
        <v-timeline-item v-for="(career, idx) in careers" :key="idx" size="small">
          <template #opposite>
            <div class="pt-1" v-text="career.date"></div>
          </template>
          <div class="pt-1">
            <h2 class="headline font-weight-light mb-4">
              {{ career.header }}
            </h2>
            <div>
              {{ career.note }}
            </div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { Career } from '@src/types/Career.ts';
import { ref } from 'vue';

const careers = ref<Array<Career>>([
  {
    date: '2013年3月',
    header: '高等学校卒業',
    note: '高校ではプログラミングに直接関わる機会はなかったが文化祭で動画編集を担当したことがきっかけでコンピュータ関連に興味を持つ。'
  },
  {
    date: '2013年4月',
    header: '大学入学',
    note: '情報工学科。在学中にベンチャー企業にてプログラミングのアルバイトを行う。このとき初めてPHP, Ruby, jQueryを触る。授業では簡単なJava, C, Perlを学ぶ'
  },
  {
    date: '2017年3月',
    header: '大学卒業',
    note: ''
  },
  {
    date: '2017年4月',
    header: '大学院入学',
    note: '情報工学専攻。プログラミングのアルバイトは継続。その他夏冬に企業インターンシップに参加。研究でPythonのDjango, Vuexを用いたアプリケーション開発を行う。'
  },
  {
    date: '2019年3月',
    header: '大学院卒業',
    note: ''
  },
  {
    date: '2019年4月',
    header: '企業に入社',
    note: '情報システム部に配属。社内向けの共通基盤開発を担当。利用技術: Rails/Flask/Java/Golang/Vue/Kubernetes/Google Cloud/AWS'
  },
  {
    date: '2023年6月',
    header: '情報処理安全確保支援士試験 合格',
    note: ''
  },
  {
    date: '2023年12月',
    header: 'データベーススペシャリスト試験 合格',
    note: ''
  },
  {
    date: '2024年7月',
    header: 'システムアーキテクト試験 合格',
    note: ''
  },
  {
    date: '2024年8月',
    header: '英検2級 合格',
    note: ''
  },
  {
    date: '',
    header: '現在',
    note: ''
  }
]);
</script>
