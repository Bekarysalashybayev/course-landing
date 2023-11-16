<template>
  <section class="main" id="main">
    <div class="container">
      <div class="main__content">
        <main-description/>
        <div class="img">
          <img src="@/assets/img/main-bg.svg" alt="main-bg.svg"/>
        </div>
      </div>
      <!--      <main-image/>-->
    </div>
    <div class="after"></div>
  </section>
</template>

<script setup lang="ts">
import MainDescription from "~/components/sections/main/MainDescription.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.main {
  --bottom-height: 15rem;
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

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: url("@/assets/img/main-view-bg.png");

    img {
      max-width: 100%;
      object-fit: cover;
    }
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

    &__content {
      flex-wrap: wrap;

      .img {
        width: 100%;
        display: flex;
        justify-content: center;
      }
    }

    .after {
      display: none;
    }
  }
}
</style>
