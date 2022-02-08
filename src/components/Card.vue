<template>
  <div class="card" :id="'card-' + item.id">
    <a
      class="card_link"
      @click="$router.push('/profile/' + item.authorMeta.name)"
    >
      <img
        class="card_avatar"
        :src="item.authorMeta.avatar"
        alt="user avatar"
      />
    </a>
    <button class="card_subscribe">Подписаться</button>
    <div class="card_body">
      <div class="card_autor">
        <h3 @click="$router.push('/profile/' + item.authorMeta.name)">
          {{ item.authorMeta.name }}
        </h3>
        <span v-if="item.authorMeta.verified">
          <img
            class="verified"
            src="@/assets/img/card_verified.svg"
            alt="verified"
          />
        </span>
        <h4>{{ item.authorMeta.nickName }}</h4>
      </div>
      <div class="card_meta-video">
        <span class="card_meta-text">{{ cardText }}</span>
        <span
          class="card_meta-hashtag"
          v-for="(hashtag, index) in item.hashtags"
          :key="index"
          >#{{ hashtag.name }}</span
        >
      </div>
      <div class="card_meta-audio">
        <img src="@/assets/img/card_music.svg" alt="music" />
        <span class="card_meta-audio-info">
          <span
            v-if="item.musicMeta.musicName === 'original sound'"
            class="card_meta-audio-name"
            >оригинальная песня</span
          >
          <span v-else>{{ item.musicMeta.musicName }}</span>
          <span class="card_meta-audio-autor"
            >- {{ item.musicMeta.musicAuthor }}</span
          >
        </span>
      </div>
      <div class="card_video">
        <div class="card_video-wrapper">
          <Loader v-if="loading" />
          <video
            ref="video"
            loop
            class="card_video-item"
            :src="item.videoUrl"
            @click="playToggle"
            @loadeddata="hideLoader"
          ></video>
          <span @click="mutedToggle" class="card_video-muted">
            <img
              v-if="globalMuted"
              src="@/assets/img/card_player_muted-on.svg"
              alt="muted on"
            />
            <img
              v-else
              src="@/assets/img/card_player_muted-off.svg"
              alt="muted off"
            />
          </span>
          <input
            class="card_video-volume"
            v-model="volume"
            type="range"
            min="0"
            max="100"
            @change="setVolume"
          />
          <span v-if="!isPlay" class="card_video-btn" @click="playerPlay">
            <img
              class="toggle-inner"
              src="@/assets/img/card_player_play.svg"
              alt="play"
            />
          </span>
          <span v-if="isPlay" class="card_video-btn" @click="playerPause">
            <img src="@/assets/img/card_player_pause.svg" alt="pause" />
          </span>
          <div class="card_video-actions">
            <div class="card_video-actions-btn">
              <img src="@/assets/img/card_liks.svg" alt="liks" />
            </div>
            <span class="card_video-actions-text">
              {{ item.authorMeta.heart | short }}
            </span>
            <div class="card_video-actions-btn">
              <img src="@/assets/img/card_comments.svg" alt="comments" />
            </div>
            <span class="card_video-actions-text">
              {{ item.commentCount | short }}
            </span>
            <div class="card_video-actions-btn">
              <img src="@/assets/img/card_reposts.svg" alt="reposts" />
            </div>
            <span class="card_video-actions-text">
              {{ item.shareCount | short }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
import PlayerMixins from "../mixins/PlayerMixins.vue"

declare module 'vue/types/vue' {
  interface Vue {
    htmlElem: HTMLElement;
    startStopPlay: () => void;
  }
  type htmlElem = HTMLElement
};  


export default PlayerMixins.extend({
  name: "Card-component",

  props: {
    item: {
      type: Object,
    },
    globalMuted: {
      type: Boolean,
    },
  },

  mixins: [PlayerMixins],

  data() {
    return {
      volume: 30,
      muted: false,
      htmlElem: null,
      isPlay: false,
    };
  },

  methods: {
    startStopPlay():void {
      const startStopLine = window.innerHeight * 0.25 + window.scrollY;
      const elemTop = (this as any).htmlElem.offsetTop;
      const elemHeigth = (this as any).htmlElem.offsetHeight;

      if (startStopLine < elemTop && 
          startStopLine < elemTop + elemHeigth
      ) {
        this.isPlay ? this.playerStop() : null;
      } else if (
        startStopLine > elemTop &&
        startStopLine > elemTop + elemHeigth
      ) {
        this.isPlay ? this.playerStop() : null;
      } else if (
        startStopLine > elemTop &&
        startStopLine < elemTop + elemHeigth
      ) {
        this.playerPlay();
      }
    },
  },

  computed: {
    cardText() {
      const arr = this.item.text.split("#");
      return arr[0];
    },
  },

  mounted() {
    this.checkParams();
    const html = document.querySelector(`#card-${this.item.id}`);
    (this as any).htmlElem = html

    document.addEventListener("scroll", () => {
      (this as any).startStopPlay();
    });
  },
});
</script>

<style scoped lang="scss">
.card {
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 1px;
    left: 16px;
    right: 16px;
    background: rgba(22, 24, 35, 0.12);
    -webkit-transform: scaleY(0.5);
    -ms-transform: scaleY(0.5);
    transform: scaleY(0.5);
  }

  &_link {
    cursor: pointer;
  }

  &_avatar {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    position: absolute;
    top: 20px;
    left: 0;
  }

  &_subscribe {
    position: absolute;
    background: #fff;
    border: 1px solid #fe2c55;
    color: #fe2c55;
    right: 10px;
    top: 20px;
    transition: all 0.3s ease;
    border-radius: 3px;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    min-width: 88px;
    padding: 0px 10px;
    cursor: pointer;

    &:hover {
      transition: all 0.3s ease;
      background-color: #fe2c5623;
    }
  }

  &_body {
    margin-left: 70px;
    max-width: 692px;
    padding: 20px 0;
  }

  &_autor {
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-right: 150px;

    h3 {
      margin: 0;
      margin-right: 5px;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    span {
      margin-right: 5px;
    }

    h4 {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin: 0px;
      cursor: pointer;
    }
  }

  &_meta {
    &-video {
      word-break: break-word;
      margin-right: 150px;
    }

    &-hashtag {
      margin-right: 5px;
      cursor: pointer;

      &:hover {
        border-bottom: 1px solid #000;
      }
    }

    &-text {
      margin-right: 5px;
    }

    &-audio {
      overflow: hidden;
      display: inline-block;
      position: relative;
      cursor: pointer;

      svg {
        margin-right: 5px;
      }

      span:hover {
        border-bottom: 1px solid #000;
      }
    }
  }

  &_video {
    &-wrapper {
      display: inline-block;
      position: relative;
    }

    &-item {
      border-radius: 5px;
      cursor: pointer;
      width: calc(0.56 * (450px + ((100vw - 480px) / 288) * 70));

      &:hover ~ .card_video-muted {
        opacity: 1;
        transition: all 0.3s ease;
      }

      &.loading {
        background: black url(/assets/img/loading.gif) center center no-repeat;
      }
    }

    &-btn {
      position: absolute;
      bottom: 20px;
      left: 20px;
      cursor: pointer;
    }

    &-volume {
      position: absolute;
      right: -17px;
      bottom: 90px;
      width: 100px;
      background-color: transparent;
      transform: rotateZ(270deg);
      transition: all 0.3s ease;
      opacity: 0;

      &:hover {
        opacity: 1;
        transition: all 0.3s ease;
      }
    }

    &-muted {
      position: absolute;
      bottom: 20px;
      right: 20px;
      cursor: pointer;
      opacity: 0;
      transition: all 0.3s ease;

      &:hover ~ .card_video-volume {
        opacity: 1;
        transition: all 0.3s ease;
      }

      &:hover {
        opacity: 1;
        transition: all 0.3s ease;
      }
    }

    &-actions {
      position: absolute;
      right: -62px;
      bottom: 10px;
      display: flex;
      flex-direction: column;

      &-btn {
        padding: 5px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: rgba(22, 24, 35, 0.06);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      &-text {
        margin: 10px 0;
        max-width: 55px;
        font-size: 14px;
        font-weight: 300;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
      }
    }
  }
}

@media (max-width: 600px) {
  .card {
    &_body {
      margin-left: 0px;
      max-width: 692px;
      padding: 70px 0 20px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    &_avatar {
      top: 0;
      left: calc(50% - 100px);
    }

    &_autor {
      margin-right: 0;
    }

    &_meta-video {
      margin-right: 0;
    }
  }
}
</style>
