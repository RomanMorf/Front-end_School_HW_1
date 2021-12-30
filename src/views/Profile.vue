<template>
  <div>
    <Loader v-if="loading"/>
    <div v-if="INFO && !loading" class="profile">
      <div class="profile_header">
        <div class="profile_info">
          <div class="profile_img"
            v-if="INFO.user.avatarMedium || INFO.user.avatarLarger
            || INFO.user.avatarThumb"
          >
            <img class="profile_img-item"
              :src="INFO.user.avatarMedium || INFO.user.avatarLarger || INFO.user.avatarThumb"
              alt="user avarat"
            >
          </div>
          <div class="profile_name">
            <h1 class="profile_name-title">{{ INFO.user.nickname }}
              <img src="@/assets/profile_name-title.svg" class="verified jsx-4013687392" alt="profile name title">
            </h1>
            <span class="profile_name-subtitle">{{ INFO.user.uniqueId }}</span>
            <button class="profile_name-follow">Подписаться</button>
          </div>
        </div>
        <h2 class="profile_count">
          <span class="profile_count-item"> <strong> {{ INFO.stats.followingCount | short }}</strong> Подписки</span>
          <span class="profile_count-item"><strong>{{ INFO.stats.followerCount | short}}</strong> Подписчики</span>
          <span class="profile_count-item"><strong>{{ INFO.stats.heartCount | short}}</strong> Лайки</span>
        </h2>
        <div v-if="INFO.user.signature" class="profile_desc" >
          {{ INFO.user.signature }}
        </div>
        <div v-if="INFO.user.bioLink" class="profile_link" >
          <img src="@/assets/img/link_black_24dp.svg" alt="link-img">
          <a :href="INFO.user.bioLink.link">{{ INFO.user.bioLink.link }}</a>
        </div>
      </div>
      <div class="main">
        <div
          class="main_slot"
          v-for="item in userFeed"
          :key="item.id"
        >
          <SmallVideo :video="item"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SmallVideo from "@/components/SmallVideo";

export default {
  name: "Profile-component",

  data() {
    return {
      userInfo: null,
      userFeed: null,
      loading: true,
    };
  },

  async mounted() {
    const userName = this.$route.params.id;

    try {
      await this.$store.dispatch("GET_USER_INFO", userName);
      await this.$store.dispatch("GET_USER_FEED", userName);

      await this.$store.dispatch("GET_TRENDING_FEED");
      this.userFeed = this.TRENDING;

      this.$store.dispatch("SET_MUTED", true);
      this.loading = false;
    } catch (error) {
      this.$store.commit("setError", error);
      throw error;
    }
  },

  computed: {
    ...mapGetters(["INFO", "FEED", "TRENDING"]),
  },

  components: {
    SmallVideo,
  },
};
</script>

<style scoped lang="scss">

.profile {

  &_header {
    margin: 0;
    margin-bottom: 20px;
    width: 594px;
    box-sizing: border-box;
    padding-right: 52px;
    margin-bottom: 20px;
  }

  &_info {
    display: flex;
  }

  &_img {
    &-item {
      width: 116px;
      height:116px;
      border-radius: 50%;
      overflow: hidden;
    }
  }

  &_name {
    overflow: hidden;
    text-overflow: ellipsis;
    margin-left: 20px;
    display: flex;
    flex-direction: column;

    &-title {
      margin: 10px 0;
      font-size: 30px;
    }

    &-subtitle {
      margin-bottom: 10px;
    }

    &-follow {
      font-weight: 700;
      font-size: 16px;
      min-width: 208px;
      height: 36px;
      background-color: #fe2c55;
      color: #fff;
      border: none;
      line-height: 22px;
      user-select: none;
      border-radius: 4px;
      box-sizing: border-box;
      cursor: pointer;
      -webkit-transition: all 0.2s cubic-bezier(0.65,0,0.35,1);
      transition: all 0.2s cubic-bezier(0.65,0,0.35,1);
    }
  }

  &_count {
    font-size: 20px;
    font-weight: normal;
    color: rgba(18,18,18,0.75);
    margin-bottom: 20px;

    &-item:not(:last-child) {
      margin-right: 20px;
    }
  }

  &_desc {
    margin-bottom: 20px;
  }

  &_link {
    padding-left: 25px;
    margin-bottom: 20px;
    line-height: 22px;
    position: relative;
    img {
      transform: rotate(90deg);
      position: absolute;
      bottom: 0;
      left: 0;
    }
    a {
      color: black;
      font-weight: bold;
      font-size: 18px;

    }
  }

}

.main {
  display: flex;
  flex-wrap: wrap;
  gap: 2px;
}

@media (max-width: 800px){
  .main {
    justify-content: space-around;
  }
  .profile {

    &_header {
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      padding-right: 0px;
      margin: 0 auto;

    }
    &_info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_count {
      display: flex;
      flex-direction: column;
      align-items: center;

      &-item:not(:last-child) {
        margin-right: 00px;
      }
    }
    &_desc {
      max-width: 300px;
      overflow-wrap: break-word;
    }

  }
}

</style>
