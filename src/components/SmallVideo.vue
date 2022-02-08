<template>
  <div class="slot_wrapper">
    <Loader class="slot_video " v-if="loading" />
    <video
      @loadeddata="hideLoader"
      @mouseenter="playerPlay"
      @mouseleave="playerPause"
      ref="video"
      loop
      class="slot_video"
      :src="video.videoUrl"
    ></video>
    <span class="slot_text">{{ video.authorMeta.heart | short }}</span>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";

import PlayerMixins from "../mixins/PlayerMixins.vue"

export default PlayerMixins.extend({
  name: "SmallVideo-component",
  data() {
    return {
      isPlay: false,
      isPause: false,
    }
  },

  mixins: [PlayerMixins],

  props: {
    video: {
      type: Object,
    },
  },

  computed: {
    ...mapGetters(["GET_VOLUME", "GET_MUTED"]),
  },

});
</script>

<style scoped lang="scss">
.slot {
  &_wrapper {
    height: 300px;
    overflow: hidden;
    position: relative;
  }

  &_video {
    background-color: #000;
    object-fit: cover;
    object-position: 0px -30px;
    min-height: 300px;
    width: 200px;
  }

  &_text {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #fff;
    font-weight: bold;
  }
}
</style>
