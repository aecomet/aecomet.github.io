<template>
  <section id="contact" class="page">
    <div class="container">
      <div class="page-label">— Career</div>

      <div class="content-item">
        <v-card-text>
          <v-card-text class="default-text">
            <h4 class="headline">職務経歴について</h4>

            <p>詳しい職務経歴についてはメールしていただければ職務経歴書を送付します</p>
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
    note: 'ソーシャルゲーム開発を支援する共通基盤システムの開発チームにアプリケーションエンジニアとして入社。入社後数年はRuby､Java､ Python､Vueを用いたシステム開発に従事。その後は案件の主担当としてUMLを用いたシステムの詳細設計も担当。その後、認証やゲームユーザーを管理するマイクロサービスの機能開発を主導するチームリーダーに就任し､5人のメンバーをリードしながらシステム開発を続けている。'
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
    date: '2026年3月',
    header: '転職して新しい環境での挑戦を開始',
    note: 'To be continued...'
  }
]);
</script>
