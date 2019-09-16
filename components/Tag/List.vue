<template>
  <v-card flat>
    <v-card-title class="subtitle-1 grey--text text--darken-2">タグ</v-card-title>
    <v-card-text class="py-2">
      <v-chip
        class="mr-2 ml-0 my-1 grey lighten-3 px-3 py-3"
        label
        small
        v-for="(tag, idx) in tags"
        :key="'tag-' + idx"
      >{{tag.name}}</v-chip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    cat: String
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
    imgSrc() {
      if (this.category.heroImg && this.category.heroImg.fields) {
        return this.category.heroImg.fields.file.url;
      }
      return "";
    }
  }
};
</script>