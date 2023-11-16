<template>
  <div class="container">
    <div class="school">
      <div class="img">
        <img src="@/assets/img/for-school.svg" alt="for-school.svg">
      </div>
      <div class="school__content">
        <div class="s-title">{{ $t('school.title') }}</div>
        <div class="subtitle">{{ $t('school.subtitle') }}</div>
        <be-button btn-type="primary" btn-size="large">{{ $t('school.btn_text') }}</be-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BeButton from "~/components/el/BeButton.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.school {
  color: $color-32;
  display: flex;
  gap: 9rem;

  .s-title {
    color: $color-32;
    font-size: 4rem;
    font-weight: 500;
  }

  .subtitle {
    margin: 29px 0;
    font-size: 20px;
    font-weight: 500;
  }

  .img {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  &__content {
      max-width: 600px;
  }


  @media screen and (max-width: $mobile) {
    flex-wrap: wrap;

    .img {
      order: 2;
    }

    &__content {
      order: 1;
    }
  }
}
</style>
