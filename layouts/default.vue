<template>
  <v-app>
    <header-small></header-small>

    <transition name="my-fade" mode="out-in">
      <nuxt />
    </transition>
    <Footer></Footer>
  </v-app>
</template>

<script>
import HeaderSmall from "@/components/App/Header/Small";
import Footer from "@/components/App/Footer";

export default {
  components: {
    HeaderSmall,
    Footer
  },
  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch("doInit");
  }
};
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
