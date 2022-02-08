<script lang="ts">
import Vue from 'vue'
import { mapGetters } from "vuex";

export default Vue.extend({
  
  data() {
    return {
      isPlay: false,
      isPause: false,
      loading: true,
    };
  },
  methods: {
    playToggle() {
      if (this.isPlay) {
        this.playerPause();
      } else {
        this.playerPlay();
      }
    },
    mutedToggle() {
      this.checkParams();
      if (this.muted) {
        this.$refs.video.muted = false;
        this.muted = false;
        this.$store.dispatch("SET_MUTED", false);
      } else {
        this.$refs.video.muted = true;
        this.muted = true;
        this.$store.dispatch("SET_MUTED", true);
      }
    },
    playerPlay() {      
      this.checkParams();
      this.$refs.video.play();
      this.isPlay = true;
      this.isPause = false;
    },
    playerPause() {
      this.checkParams();
      this.$refs.video.pause();
      this.isPlay = false;
      this.isPause = true;
    },
    playerStop() {
      this.checkParams();
      this.$refs.video.pause();
      this.$refs.video.currentTime = 0;
      this.isPlay = false;
      this.isPause = false;
    },
    setVolume() {
      const volumeValue = this.volume || 30;
      this.$refs.video.volume = volumeValue / 100;
      this.$store.dispatch("SET_VOLUME", volumeValue);
    },
    checkParams() {
      this.volume = this.GET_VOLUME || 30;
      this.muted = this.GET_MUTED;
      this.$refs.video ? this.$refs.video.volume = +this.volume / 100 : null;
      this.$refs.video ? this.$refs.video.muted = this.GET_MUTED : null;
    },
    hideLoader() {
      this.loading = false;
    },
  },
  computed: {
    ...mapGetters(["GET_VOLUME", "GET_MUTED"]),
  },

})
</script>