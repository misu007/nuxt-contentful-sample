<template>
  <v-img
    class="my-hero"
    gradient="to top, rgba(255,255,255,.8), rgba(255,255,255,.9)"
    max-height="300"
    :src="imgSrc"
    lazy-src="https://picsum.photos/id/11/10/6"
  >
    <div class="align-center justify-start fill-height container d-flex pr-2">
      <v-card color="transparent" flat>
        <v-card-title class="display-1">
          <span class="font-weight-light grey--text text--darken-3">{{category.heroTitle}}</span>
        </v-card-title>
        <v-card-text class="subtitle-1 grey--text text--darken-1">{{category.heroSubTitle}}</v-card-text>
      </v-card>
    </div>
  </v-img>
</template>

<style scoped>
.my-hero {
  background-color: black;
}
</style>

<script>
export default {
  props: {
    cat: String
  },
  computed: {
    category() {
      return this.$store.getters.cat(this.cat);
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