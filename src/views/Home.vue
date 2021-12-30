<template>
  <div class="video">
    <div class="video_container">
      <Loader v-if="loading" />
      <Card
        v-else
        v-for="item in TRENDING"
        :key="item.id"
        :item="item"
      />
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";
import Card from "@/components/Card.vue";

export default {
  name: "Home-components",

  data() {
    return {
      loading: true,
    };
  },

  async mounted() {
    try {
      await this.$store.dispatch("GET_TRENDING_FEED");
      this.loading = false;
    } catch (error) {
      this.$store.commit("setError", error);
      throw error;
    }
  },

  computed: {
    ...mapGetters(["VOLUME", "MUTED", "TRENDING"]),
  },

  components: {
    Card,
  },
};
</script>

<style scoped lang="scss">

</style>
