<template>
  <v-content class="white">
    <hero :cat="category"></hero>
    <v-container>
      <v-row>
        <v-col cols="8" class="pa-2">
          <v-row>
            <template v-for="(post, idx) in posts">
              <template v-if="idx == 0">
                <v-col cols="12" class="pa-2" :key="post.sys.id">
                  <post-large :post="post.fields"></post-large>
                </v-col>
              </template>
              <template v-else>
                <v-col cols="6" class="pa-2" :key="post.sys.id">
                  <post-medium :post="post.fields"></post-medium>
                </v-col>
              </template>
            </template>
          </v-row>
          <div class="text-center">
            <v-btn-toggle>
              <v-btn outlined small>
                <v-icon color="grey darken-2">mdi-chevron-left</v-icon>
              </v-btn>
              <v-btn outlined small>
                <v-icon color="grey darken-2">mdi-chevron-right</v-icon>
              </v-btn>
            </v-btn-toggle>
          </div>
        </v-col>
        <v-col cols="4" class="pa-2">
          <div class="my-4 pb-4">
            <popular-list></popular-list>
          </div>
          <div class="my-4 pb-4">
            <tag-list></tag-list>
          </div>
          <div class="my-4 pb-4">
            <trend-list></trend-list>
          </div>
          <div class="my-4 pb-4">
            <random-list></random-list>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="pa-2">
          <div class="my-4 pb-4">
            <tag-list></tag-list>
          </div>
        </v-col>
        <v-col cols="6" class="pa-2">
          <div class="my-4 pb-4">
            <archive-list></archive-list>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
<style scoped>
.sticky-content {
  position: sticky;
  top: 20px;
}
</style>
<script>
import HeaderLarge from "@/components/App/Header/Large";
import Hero from "@/components/App/Hero";
import PostLarge from "@/components/Post/Large";
import PostMedium from "@/components/Post/Medium";
import PostSmall from "@/components/Post/Small";
import RandomList from "@/components/List/Random";
import PopularList from "@/components/List/Popular";
import RecentList from "@/components/List/Recent";
import TrendList from "@/components/List/Trend";
import TagList from "@/components/Tag/List";
import ArchiveList from "@/components/Archive/List";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export default {
  scrollToTop: true,
  components: {
    PostLarge,
    PostMedium,
    PostSmall,
    HeaderLarge,
    PopularList,
    RandomList,
    TrendList,
    RecentList,
    Hero,
    TagList,
    ArchiveList
  },
  data: () => ({
    category: "all"
  }),
  computed: {
    cats() {
      return this.$store.state.cats;
    },
    cat() {
      if (this.category) {
        return this.$store.getters.cat(this.category);
      }
      return null;
    },
    posts() {
      return this.$store.state.posts
        .filter(item => {
          if (!this.category) {
            return false;
          }
          if (this.category == "all") {
            return true;
          }
          return this.cat.name == item.fields.category;
        })
        .map(item => {
          const ret = {};
          ret.sys = item.sys;
          ret.fields = item.fields;
          const summary = item.fields.content.content.filter(item => {
            return item.nodeType == "paragraph" || item.nodeType == "text";
          })[0];
          ret.fields.contentHtml = documentToHtmlString({ content: [summary] });
          return ret;
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (to.params && to.params.id) {
        vm.category = to.params.id;
      } else {
        vm.category = "all";
      }
    });
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params && to.params.id) {
      this.category = to.params.id;
    } else {
      this.category = "all";
    }
    next();
  }
};
</script>
