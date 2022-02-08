<template>
  <div class="not_found">
    <h2>Упс... Что-то пошло не так :)</h2>
    <h3 @click="goToMainPage()">На главную страницу</h3>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "not-found",
  methods: {
    goToMainPage() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped lang="scss">
.not_found {
  text-align: center;
  color: rgba(18, 18, 18, 0.75);

  h2 {
    margin: 100px 0;
  }

  h3 {
    cursor: pointer;
  }
}
</style>
