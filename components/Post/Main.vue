<template>
  <v-card flat>
    <v-card-text class="caption pb-0">
      <v-chip class="ma-0" color="deep-purple lighten-2" label outlined small>{{post.category}}</v-chip>
    </v-card-text>
    <v-card-title class="py-3 pb-2 display-1 font-weight-bold">{{subject}}</v-card-title>
    <v-card-text class="caption pb-2">
      <v-avatar :size="22" class="pb-1">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" />
      </v-avatar>
      <span class="px-1">Kan - {{publishedDate}}</span>
    </v-card-text>
    <v-card-text class="body-2 grey--text text--darken-4">
      <div v-html="content"></div>
    </v-card-text>
  </v-card>
</template>

<script>
import AdMedium from "@/components/Ad/Medium";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const toHtmlOptions = {
  renderNode: {
    "embedded-asset-block": node =>
      `<img style="width:100%;border-radius:4px;" src="${node.data.target.fields.file.url}"/>`
  }
};

export default {
  components: {
    AdMedium
  },
  props: {
    id: String
  },
  methods: {
    _getPost(id) {
      if (id && id.length > 5) {
        console.log("ID", id);
        const client = this.$store.state.contentful;
        client
          .getEntry(id)
          .then(entry => {
            console.log("SUCCESS", entry);
            const htmledContent = documentToHtmlString(
              entry.fields.content,
              toHtmlOptions
            );
            this.$set(
              this,
              "post",
              Object.assign(entry.fields, {
                contentHtml: htmledContent
              })
            );
          })
          .catch(err => {
            console.log("ERROR", err);
            this.$set(this, "post", null);
          });
      }
    }
  },
  computed: {
    post() {
      if (this._post) {
        return this._post.fields;
      }
      return {};
    },
    _post() {
      return this.$store.getters.post(this.id);
    },
    content() {
      if (this.post && this.post.hasOwnProperty("content")) {
        return documentToHtmlString(this.post.content, toHtmlOptions);
      }
      return "";
    },
    subject() {
      if (this.post && this.post.subject) {
        return this.post.subject;
      }
      return "";
    },
    publishedDate() {
      if (this._post && this._post.date) {
        return this._post.date;
      }
      return "----.-.-";
    }
  }
};
</script>


<style scoped>
.hash-tag {
  border: none;
}
</style>