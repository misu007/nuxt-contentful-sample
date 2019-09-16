<template>
  <v-footer padless color="white">
    <v-card
      color="rgba(245,245,245,1)"
      flat
      tile
      class="text-center grey--text text--darken-2 py-4"
      style="width: 100%;"
    >
      <v-card-title class="py-4">
        <v-spacer></v-spacer>
        <span>VOIDOR</span>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-actions class="pb-4">
        <v-spacer></v-spacer>
        <span class="mx-3">利用規約</span>
        <span class="mx-3">お問い合わせ</span>
        <span class="mx-3">VOIDORについて</span>
        <v-spacer></v-spacer>
      </v-card-actions>
      <v-card-actions class="pb-4">
        <v-spacer></v-spacer>
        <span>
          {{ new Date().getFullYear() }} —
          <strong>Kanzan</strong>
        </span>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>