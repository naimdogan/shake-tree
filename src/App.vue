<template>
  <div id="app">
    <div class="container">
      <div class="shake">
        <div class="shake__tree" :class="{'shaked': isShaked}">
          <Tree />
          <div class="shake__apple">
            <Apple v-for="(item, index) in apple" :key="index" :class="[item.done ? 'drop' : '', `apple${item.id}`]" />
          </div>
        </div>
        <Basket />
        <Button />
      </div>
    </div>
  </div>
</template>

<script>
import Tree from "./components/Tree.vue";
import Apple from "./components/Apple.vue";
import Button from "./components/Button.vue";
import Basket from "./components/Basket.vue";
export default {
  name: "App",
  components: {
    Tree,
    Apple,
    Button,
    Basket,
  },
  computed: {
    apple() {
      return this.$store.state.apple;
    },
    isShaked () {
      return this.$store.state.isShaked
    },
    basket () {
      return this.$store.state.basket
    },
  },
  watch: {},
  methods: {},
};
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/shake.scss";
</style>
