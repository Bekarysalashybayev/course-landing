<template>
  <div class="wrapper">
    <div class="main-header">
      <main-header/>
    </div>
    <slot/>
    <main-footer/>
  </div>

</template>

<script setup lang="ts">

import MainHeader from "~/components/menu/MainHeader.vue";
import MainFooter from "~/components/menu/MainFooter.vue";
</script>

<style scoped lang="scss">
@use "../assets/scss/colors" as *;

.wrapper {
  font-size: 1.8rem;

  .main-header {
    background-color: $color-5;
    position: sticky;
    top: 0;
    z-index: 999;
  }
}
</style>
