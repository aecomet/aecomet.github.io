<template>
  <v-card class="mx-auto" outlined>
    <v-card-subtitle class="text-overline mb-4 pt-4">Career</v-card-subtitle>

    <v-card-text>
      <div class="text-h5 mb-1">経歴</div>
      <div>大学入学から現在まで</div>
    </v-card-text>

    <v-card-text>
      <v-timeline>
        <v-timeline-item v-for="(career, idx) in careers" :key="idx" small>
          <template #opposite>
            <span v-text="career.date"></span>
          </template>
          <div class="py-4">
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

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      careers: [
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
          note: '情報システム部に配属。社内向けの共通基盤開発を担当。主にJavaを用いたマイクロサービス開発と、Ruby/Python+Vueを用いた画面開発がメイン。'
        },
        {
          date: '',
          header: '現在',
          note: ''
        }
      ]
    };
  }
});
</script>
