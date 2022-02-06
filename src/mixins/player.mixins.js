const playerMixins = {
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
      this.volume = this.VOLUME || 30;
      this.muted = this.MUTED;
      this.$refs.video.volume = +this.volume / 100;
      this.$refs.video.muted = this.MUTED;
    },
    hideLoader() {
      this.loading = false;
    },
  },
};

export default playerMixins;
