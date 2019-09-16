<template>
  <div>
    <v-toolbar flat class="px-4 py-2">
      <v-toolbar-title class="display-1">VOIDOR</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon :size="28">mdi-magnify</v-icon>
    </v-toolbar>
    <v-toolbar flat dense>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text>
          <span class="subtitle-1">自然</span>
        </v-btn>
        <v-btn text>
          <span class="subtitle-1">世界</span>
        </v-btn>
        <v-btn text>
          <span class="subtitle-1">プログラミング</span>
        </v-btn>
        <v-btn text>
          <span class="subtitle-1">スピリチュアル</span>
        </v-btn>
        <v-btn text>
          <span class="subtitle-1">ネオトニー</span>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-toolbar>
  </div>
</template>