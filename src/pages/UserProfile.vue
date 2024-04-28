<template>
  <v-card class="mx-auto" outlined>
    <v-img class="align-end text-white mx-auto" height="250" width="250" src="/images/logo.png" alt="profile-img" cover>
    </v-img>

    <v-card-subtitle class="text-overline mb-4 pt-4">Profile</v-card-subtitle>

    <v-card-text>
      <div class="text-h5 mb-1">Hiyoko 3</div>
      <div>Software Engineer</div>
    </v-card-text>

    <v-card-text class="text--primary">
      <h4 class="headline">連絡</h4>

      <p>engineer.t.o.0823@***</p>
      <p>※ ***にはgmail.comを入力してください</p>
    </v-card-text>

    <v-card-actions>
      <v-btn variant="outlined" href="https://atcoder.jp/users/ae_hiyoko3" target="_blank" rel="noopener">
        AtCoder
      </v-btn>
      <v-btn variant="outlined" href="https://github.com/ae-comet" target="_blank" rel="noopener">Github</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts"></script>
