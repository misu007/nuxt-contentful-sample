<template>
  <v-card flat @click.stop="clickedOpenPost">
    <v-card-text class="caption pb-0">
      <v-chip
        class="ma-0 py-2 px-2"
        color="deep-purple lighten-2"
        label
        outlined
        x-small
      >{{catName}}</v-chip>
    </v-card-text>
    <v-card-title class="py-3 pb-2 title font-weight-bold">{{post.subject}}</v-card-title>
    <v-card-text class="caption pb-2">
      <v-icon :size="13" style="padding-bottom:1px;">mdi-clock-outline</v-icon>
      <span class="px-1">2019.8.31</span>
    </v-card-text>
    <v-card-text class="body-2 grey--text text--darken-4 py-0 pointer-events-none">
      <div v-html="post.contentHtml"></div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  methods: {
    clickedOpenPost() {
      this.$router.push({ name: "posts-id", params: { id: this.post.id } });
    }
  },
  props: {
    post: Object
  },
  computed: {
    catName() {
      if (this.post) {
        return this.post.category;
      }
      return null;
    },
    cat() {
      return this.$store.getters.catByName(this.catId);
    }
  }
};
</script>
<style scoped>
.hash-tag {
  border: none;
}
</style>