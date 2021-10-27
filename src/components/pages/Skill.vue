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
        <v-list-item-content >
          <v-list-item-title>{{ skill.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ skill.note }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
export default {
  data: () => ({
    skills: [
      {
        name: 'JavaScript',
        note: 'jQuery, Vue, Reactの開発経験があり、Vue, Reactについては状態管理を用いた大規模アプリケーションに携わったこともあります。'
      },
      {
        name: 'Java',
        note: '業務で主に利用しており、Servletを拡張した独自フレームワークの開発をしております'
      },
      {
        name: 'PHP',
        note: 'サーバー言語を初めて触った際に触れた言語で、ここから色々な言語を学ぶようになりました。主に素のPHPやLaravelを用いた開発をしていました。今は触っていないです。'
      },
      {
        name: 'Python',
        note: '主に業務で利用しておりFlask, Djangoのようなアプリケーション開発方面なら経験があります。'
      },
      {
        name: 'Ruby',
        note: '業務で利用していますが、正式にはRuby on Railsがメインであり、素のRubyを使って何かを作るときはバッチ処理のようなワンタイムのものを作るときが多いです。'
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
  })
};
</script>