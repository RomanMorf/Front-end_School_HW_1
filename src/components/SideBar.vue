<template>
  <div class="sidebar_container">
    <div class="sidebar_content scroll">
      <ul class="sidebar_list">
        <li class="sidebar_list-item">
          <img src="@/assets/img/sidebar_recomment.svg" alt="sidebar recomment">
          <span class="sidebar_list-text">Рекомендуем</span>
        </li>
        <li class="sidebar_list-item">
          <img src="@/assets/img/sidebar_subscribes.svg" alt="sidebar subscribes">
          <span class="sidebar_list-text">Подписки</span>
        </li>
        <li class="sidebar_list-item" id="hihi">
          <img src="@/assets/img/sidebar_streem.svg" alt="sidebar streem">
          <span class="sidebar_list-text">Стрим</span>
        </li>
      </ul>
      <div v-if="TRENDING" class="sidebar_recomend sidebar_section">
        <h4 class="sidebar_recomend-title">Рекомендуемые аккаунты</h4>
        <div class="sidebar_recomend-container">
          <ul class="sidebar_recomend-list">
            <li class="sidebar_recomend-item" v-for="user in TRENDING.slice(0, 5)" :key="user.id">
              <a class="sidebar_recomend-link" @click="goToUserProfile(user.authorMeta.name)">
                <img class="sidebar_recomend-avatar" :src="user.authorMeta.avatar" alt="user avatar">
              </a>
              <div class="sidebar_recomend-info">
                <h3 class="sidebar_recomend-info-link" @click="goToUserProfile(user.authorMeta.name)">
                  <span class="verified" v-if="user.authorMeta.verified">
                    <img src="@/assets/img/sidebar_recomend-info-verified.svg" alt="profile verified">
                  </span>
                  {{ user.authorMeta.name }}
                </h3>
                <h4>{{ user.authorMeta.nickName }}</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="sidebar_hashtags sidebar_section">
        <h4 class="sidebar_hashtags-title">Интересное</h4>
        <p>Здесь появятся аккаунты, на которые вы подписаны</p>
      </div>
      <div class="sidebar_info sidebar_section">
        <h4 class="sidebar_info-title">Информация</h4>
        <p>Разного рода полезная информация для пользователей</p>
        <p>@ Kostromichov Roman 2021</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar-component",
  computed: {
    ...mapGetters(["TRENDING"]),
  },
  methods: {
    goToUserProfile(userName) {
      this.$router.push('/profile/' + userName )
    }
  },
};
</script>

<style scoped lang="scss">
.sidebar {

  &_container {
    width: 356px;
  }

  &_content {
    position: fixed;
    width: 340px;
    height: calc(100vh - 60px);
    padding: 0 8px;
    overflow-x: hidden;
    overflow-y: auto;
    color: rgba(18, 18, 18, 0.75);
  }

  &_section {
    padding: 10px 20px 10px 10px;

    &::before {
      content: "";
      position: absolute;
      height: 1px;
      left: 16px;
      right: 16px;
      background: rgba(22,24,35,0.12);
      -webkit-transform: scaleY(0.5);
      -ms-transform: scaleY(0.5);
      transform: scaleY(0.5);
    }
  }

  &_list {
    list-style: none;
    padding-left: 0;

    &-img {
      margin-right: 5px;
    }
  }

  &_list-item {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 5px;
  }

  &_recomend {

    &-container {
      display: flex;
      overflow: hidden;
    }

    &-list {
      list-style: none;
      padding-left: 0;
    }

    &-item {
      display: flex;
      margin-bottom: 15px;
    }

    &-avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      cursor: pointer;
    }

    &-info {
      h3, h4 {
        margin: 0 0 5px 10px;
        cursor: pointer;

        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      h4 {
        font-weight: normal;
      }

      .verified {
        margin-right: 5px;
      }
    }
  }

}
@media (max-width: 1100px){
  .sidebar {
    &_container {
      width: 250px;
      overflow: hidden;
    }

    &_content {
      width: 220px;
    }
  }
}

@media (max-width: 950px){
  .sidebar {
    &_container {
      width: 50px;
      overflow: hidden;
    }

    &_content {
      width: 50px;
    }

    &_list-item {
      justify-content: space-around;
    }
    
    &_list-text,
    &_recomend,
    &_hashtags,
    &_info{
      display: none;
    }
  }
}

@media (max-width: 450px){
  .sidebar {
    &_container {
      display: none;
    }
  }
}

</style>
