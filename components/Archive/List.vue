<template>
  <v-card flat>
    <v-card-title class="subtitle-1 grey--text text--darken-1 pb-1">アーカイブ</v-card-title>
    <v-list dense>
      <v-list-item v-for="arc in arcs" :key="arc.name">
        <v-list-item-content>
          <v-list-item-title>{{arc.name}} ({{arc.posts.length}})</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    cat: String
  },
  computed: {
    arcs() {
      return this.$store.getters.arcs;
    }
  }
};
</script>