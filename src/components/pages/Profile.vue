<template>
  <v-card class="mx-auto" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">Profile</div>
        <v-list-item-title class="text-h5 mb-1"> Hiyoko 3 </v-list-item-title>
        <v-list-item-subtitle>Software Engineer</v-list-item-subtitle>
      </v-list-item-content>

      <v-avatar size="125" tile class="ma-3">
        <v-img src="public/static/images/logo.png" contain class="grey darken-4"></v-img>
      </v-avatar>
    </v-list-item>

    <v-card-text class="text--primary">
      <h4 class="headline">連絡</h4>

      <p>sb.gm.0823@***</p>
      <p>※ ***にはgmail.comを入力してください</p>
    </v-card-text>

    <v-card-actions>
      <v-btn outlined rounded text href="https://atcoder.jp/users/ae_hiyoko3" target="_blank" rel="noopener">
        AtCoder
      </v-btn>
      <v-btn outlined rounded text href="https://github.com/hiyoko3" target="_blank" rel="noopener"> Github </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
export default {};
</script>