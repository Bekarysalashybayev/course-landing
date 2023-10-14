<template>
  <section class="main">
    <div class="container">
      <main-description/>
      <main-image/>
    </div>
    <div class="after"></div>
  </section>
</template>

<script setup lang="ts">

import MainDescription from "~/components/sections/main/MainDescription.vue";
import MainImage from "~/components/sections/main/MainImage.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.main {
  --bottom-height: 20rem;
  --main-height: calc(100vh - var(--top-height) - var(--bottom-height));
  margin-bottom: var(--bottom-height);
  z-index: 2;
  background-color: $head-bg-color;
  position: relative;

  .container {
    padding: calc(var(--bottom-height) / 2) 32px;
    height: 100%;
    position: relative;
  }

  .after {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: var(--bottom-height);
    overflow: hidden;
    z-index: 1;

    &:after {
      content: "";
      position: absolute;
      top: calc(-1 * var(--bottom-height) / 2);
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $head-bg-color;
      border-radius: 0 0 50% 50%;
    }
  }

  @media screen and (max-width: $mobile) {
    --bottom-height: 5rem;

    .after {
      display: none;
    }
  }
}
</style>
