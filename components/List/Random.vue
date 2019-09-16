
<template>
  <v-card flat>
    <v-card-title class="subtitle-1 grey--text text--darken-2">こちらもどうぞ！</v-card-title>
    <v-card-text class="py-0 px-0">
      <post-small class="py-2"></post-small>
      <post-small class="py-2"></post-small>
      <post-small class="py-2"></post-small>
    </v-card-text>
  </v-card>
</template>

<script>
import PostSmall from "@/components/Post/Small";

export default {
  components: {
    PostSmall
  },
  props: {
    cat: String
  },
  computed: {}
};
</script>


