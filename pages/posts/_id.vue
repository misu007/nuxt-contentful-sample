<template>
  <v-content class="white">
    <v-container>
      <post-main :id="postId"></post-main>
      <v-divider></v-divider>
    </v-container>
  </v-content>
</template>

<script>
import HeaderLarge from "@/components/App/Header/Large";
import PostMain from "@/components/Post/Main";
import PostMedium from "@/components/Post/Medium";
import AdMedium from "@/components/Ad/Medium";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  scrollToTop: true,
  validate({ params }) {
    return true;
  },
  components: {
    HeaderLarge,
    PostMain,
    PostMedium,
    AdMedium
  },
  data: () => ({
    post: {},
    postId: null
  }),
  methods: {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.postId = to.params.id;
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.postId = to.params.id;
    next();
  }
};
</script>
      
