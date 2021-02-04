<template>
  <div class="shake__button">
    <button type="button" class="btn" @click="shakeBtn">Ağacı Salla</button>
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    shakeBtn(){
       //ağacın sallanacağı classı ekler ve random düşecek elmaları belirler.
      this.$store.commit('isShaked');
      this.$store.dispatch('randomApple');
    },
  },
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/components/_buttons.scss";
</style>
