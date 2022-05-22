<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Skill</div>
        <v-list-item-title class="text-h5 mb-1">スキル</v-list-item-title>
        <v-list-item-subtitle>触れたことのある技術</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-list-item three-line v-for="(skill, idx) in skills" :key="idx">
        <v-list-item-content>
          <v-list-item-title>{{ skill.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ skill.note }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      skills: [
        {
          name: 'JavaScript(jQuery)',
          note: '業務で利用していますが、保守開発が多いです。'
        },
        {
          name: 'Vue(+ TypeScript)',
          note: '業務で利用しており、Vuexの開発経験もあります。'
        },
        {
          name: 'React(+ TypeScript)',
          note: '個人開発で利用しており、Reduxの開発経験もあります。'
        },
        {
          name: 'Java',
          note: '業務で主に利用しており、Servletを拡張した独自フレームワークの開発をしております'
        },
        {
          name: 'PHP',
          note: 'サーバー言語を初めて触った際に触れた言語です。主に素のPHPやLaravelを用いた開発をしていました。'
        },
        {
          name: 'Python',
          note: '業務で利用しておりFlask, Djangoのようなアプリケーション開発方面なら経験があります。'
        },
        {
          name: 'Ruby',
          note: '業務で利用していますがRuby on Railsがメインであり、素のRubyはバッチ処理のようなものを作るときが多いです。'
        },
        {
          name: 'Perl',
          note: '業務で利用しています。保守開発メインなのであまり新しいバージョンは知りません。'
        },
        {
          name: 'MySQL',
          note: '業務で利用しています。'
        },
        {
          name: 'Docker',
          note: '業務で利用しています。'
        },
        {
          name: 'C++',
          note: '競技プログラミングに参加する際に利用しています。アプリケーション開発の経験はありません。'
        },
        {
          name: 'Kotlin',
          note: 'インターンシップをしていた際に触りました。'
        },
        {
          name: 'Swift',
          note: '趣味の開発で利用しています。'
        },
        {
          name: 'GoLang',
          note: '趣味の開発で利用しています。'
        }
      ]
    };
  }
});
</script>
