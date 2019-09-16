<template>
  <v-app-bar
    app
    flat
    color="rgba(255,255,255,.9)"
    class="pl-4"
    hide-on-scroll
    scroll-threshold="120"
  >
    <v-toolbar-title class="display-1" style="cursor:pointer;" @click.stop="clickedLogo">VOIDOR</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        v-for="cat in cats"
        text
        :key="'label-' + cat.id"
        @click.stop="clickedCategory(cat.id)"
        :disabled="currentCatId == cat.id"
      >{{cat.fields.name}}</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-icon class="mx-3 ml-4 pl-4">mdi-magnify</v-icon>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    clickedLogo() {
      if (this.$route.name != "home") {
        this.$router.push({ name: "index" });
      }
    },
    clickedCategory(id) {
      this.$router.push({ name: "views-id", params: { id: id } });
    }
  },
  computed: {
    cats() {
      return this.$store.state.cats.filter(item => {
        return item.fields.isOnHeader;
      });
    },
    currentCatId() {
      if (
        this.$route.name == "category" &&
        this.$route.params.hasOwnProperty("id")
      ) {
        return this.$route.params.id;
      }
      return null;
    }
  }
};
</script>