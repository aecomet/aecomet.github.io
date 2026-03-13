<template>
  <section id="profile" class="page">
    <div class="container">
      <div class="page-label">— Profile</div>

      <div class="content-item">
        <v-img
          class="align-end text-white mx-auto"
          height="250"
          width="250"
          src="/images/logo.png"
          alt="profile-img"
          cover
        >
        </v-img>

        <div class="ma-2 text-center">
          <div class="text-h5 mb-1">Comet / こめっと</div>
          <div>Software Engineer</div>
        </div>

        <div class="contact-label">外部リンク</div>

        <div class="ma-2 d-flex justify-center">
          <v-btn
            variant="outlined"
            class="ma-2"
            href="https://github.com/aecomet"
            target="_blank"
            rel="noopener"
            color="white"
            >Github</v-btn
          >

          <v-btn
            variant="outlined"
            class="ma-2"
            href="https://note.com/ae_comet"
            target="_blank"
            rel="noopener"
            color="white"
            >Note</v-btn
          >

          <v-btn
            variant="outlined"
            class="ma-2"
            href="https://atcoder.jp/users/ae_hiyoko3"
            target="_blank"
            rel="noopener"
            color="white"
          >
            AtCoder
          </v-btn>
        </div>

        <div class="contact-label">経験領域</div>

        <div class="ma-2 d-flex justify-center flex-wrap">
          <v-chip class="ma-2" color="white" variant="outlined"> 技術選定 </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> システムアーキテクト </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> チームリーダー </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> 障害対応 </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> 実装・保守 </v-chip>
        </div>

        <div class="contact-label">試験合格実績</div>

        <div class="ma-2 d-flex justify-center flex-wrap">
          <v-chip class="ma-2" color="white" variant="outlined"> 基本情報技術者試験 </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> 応用情報技術者試験 </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> 情報処理安全確保支援士試験 </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> データベーススペシャリスト試験 </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> システムアーキテクト試験 </v-chip>
          <v-chip class="ma-2" color="white" variant="outlined"> 英検2級 </v-chip>
        </div>
      </div>
    </div>
  </section>
</template>
