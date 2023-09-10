<template>
  <div class="main-description">
    <div class="title">
      Studying <span>Online is now much easier</span>
    </div>
    <div class="subtitle">
      At LearnEase, we believe in the power of education that transcends boundaries. Our online platform is designed to
      bring the classroom experience to your fingertips, making learning a truly immersive and convenient journey.
    </div>
    <div class="btn-list">
      <be-button btn-type="primary-1" btn-size="large" class="btn">
        Тегін бастау
      </be-button>
      <play-button class="btn-play"/>
    </div>
  </div>
</template>

<script setup lang="ts">

import BeButton from "~/components/el/BeButton.vue";
import PlayButton from "~/components/el/PlayButton.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.main-description {
  max-width: 60rem;
  position: relative;
  z-index: 10;

  .title {
    color: $color-8;
    font-size: 4rem;
    font-weight: 800;

    span {
      color: $color-9;
    }
  }

  .subtitle {
    color: $color-10;
    font-size: 1.8rem;
    line-height: 2.88rem;
    margin-top: 2rem;
  }

  .btn-list {
    margin-top: 4rem;
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  @media screen and (max-width: 1160px){
    max-width: 50rem;

    .title {
      font-size: 3.6rem;
    }

    .subtitle {
      font-size: 1.6rem;
    }

    .btn-list {
      gap: 2rem;

      .btn {
        padding: 1rem 1.5rem;
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: $mobile){
    max-width: 100%;
  }
}
</style>
