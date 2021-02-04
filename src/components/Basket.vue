<template>
  <div class="basket">
    <div class="basket__count">{{basket.length}}</div>
    <div class="basket__item">
      <Apple v-for="(item, index) in basket" :key="index" class="-active" />
    </div>
    <img src="../assets/basket.svg" class="basket__bg" width="200" height="200" alt="">
  </div>
</template>

<script>
import Apple from "./Apple.vue";
export default {
  name: 'Basket',
  components: {
    Apple
  },
  computed: {
    basket () {
      return this.$store.state.basket
    },
  },
}
</script>

<style lang="scss" scoped>
   @import "@/assets/scss/modules/_basket.scss";
</style>
