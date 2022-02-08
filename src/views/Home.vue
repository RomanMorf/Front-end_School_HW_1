<template>
  <div class="video">
    <div class="video_container">
      <Loader v-if="loading" />
      <Card
        v-else
        v-for="item in TRENDING"
        :key="`${item.createTime}-${item.id}`"
        :item="item"
        :globalMuted="GET_MUTED"
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import Card from "@/components/Card.vue";

export default Vue.extend({
  name: "Home-components",

  data() {
    return {
      loading: true,
    };
  },

  methods: {
    async getTrandingFeed() {
      try {
        await this.$store.dispatch("GET_TRENDING_FEED");
        this.loading = false;
      } catch (error) {
        this.$store.commit("setError", error);
        throw error;
      }
    },
  },

  components: {
    Card,
  },

  async mounted() {
    await this.getTrandingFeed();
  },

  computed: {
    ...mapGetters(["GET_VOLUME", "GET_MUTED", "TRENDING"]),
  },
});
</script>
