<template>
  <div class="header_container">
    <div class="header_content">
      <div class="header_logo">
        <a class="header_link" @click="$router.push('/')">
          <img src="@/assets/img/logo.svg" alt="tiktok-logo" />
        </a>
      </div>
      <div class="header_search">
        <form class="header_form">
          <input
            type="text"
            class="header_input"
            placeholder="Поиск аккаунтов и видео"
          />
          <span class="header_input-split"></span>
          <button class="header_input-btn">
            <img
              class="header-input-svg"
              src="@/assets/img/header_search.svg"
            />
          </button>
        </form>
      </div>
      <div class="header_menu">
        <div class="header_upload">
          <span>Загрузить</span>
        </div>
        <button class="header_login">Войти</button>
        <div class="header_icon">
          <img src="@/assets/img/header_icon.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header-component",
});
</script>

<style scoped lang="scss">
.header {
  &_container {
    position: fixed;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid rgba(34, 90, 89, 0.2);
    box-sizing: border-box;
    z-index: 1000;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &_content {
    width: 100%;
    padding: 0;
    max-width: 1100px;
    padding-left: 20px;
    padding-right: 24px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &_logo {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
  }

  &_search {
    display: block;
  }

  &_form {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 12px 16px;
    background: rgba(22, 24, 35, 0.06);
    border-radius: 92px;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  &_input {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    border: none;
    background: transparent;
    outline: none;
    padding: 0;
    width: 292px;
    caret-color: #fe2c55;
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;

    &-split {
      width: 1px;
      height: 28px;
      margin: -3px 0;
      background: rgba(22, 24, 35, 0.12);
    }

    &-btn {
      padding: 11px 16px 11px 12px;
      margin: -12px -16px;
      margin-left: 0;
      font-size: 0;
      cursor: pointer;
      outline: none;
      border: none;
      background: transparent;
    }

    &-svg {
      width: 24;
      height: 24;
      fill: rgba(22, 24, 35, 0.34);
    }
  }

  &_menu {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  &_upload {
    cursor: pointer;
  }

  &_login {
    font-weight: 700;
    min-width: 100px;
    margin-left: 16px;
    background-color: #fe2c55;
    color: #fff;
    border: none;
    line-height: 22px;
    user-select: none;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
    transition: all 0.2s cubic-bezier(0.65, 0, 0.35, 1);
  }

  &_icon {
    cursor: pointer;
    height: 20px;
    margin-left: 16px;
  }
}

@media (max-width: 750px) {
  .header {
    &_search {
      display: none;
    }
  }
}

@media (max-width: 480px) {
  .header {
    &_upload {
      display: none;
    }
  }
}
</style>
