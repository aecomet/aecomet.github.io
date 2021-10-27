<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Career</div>
        <v-list-item-title class="text-h5 mb-1">経歴</v-list-item-title>
        <v-list-item-subtitle>大学入学から現在まで</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-timeline>
        <v-timeline-item v-for="(career, idx) in careers" :key="idx" small>
          <template v-slot:opposite>
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
export default {
  data: () => ({
    careers: [
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
        note: '情報システム部に配属。Ruby, Perl, Javaをメインにマイクロサービスの開発や保守開発を行う。最近になってFlask, Vueを利用した新規アプリケーション開発にも携わる'
      },
      {
        date: '現在',
        header: '',
        note: ''
      },
    ]
  })
};
</script>