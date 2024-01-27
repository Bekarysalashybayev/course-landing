<template>
  <div class="container">
    <div class="school">
      <div class="img">
        <img src="@/assets/img/for-school.svg" alt="for-school.svg">
      </div>
      <div class="school__content">
        <div class="title">
          {{ $t('school.title_1') }}
          <span>{{ $t('school.title_2') }}</span>
          {{ $t('school.title_3') }}
          <span>{{ $t('school.title_4') }}</span>
          {{ $t('school.title_5') }}
        </div>
        <div class="subtitle">{{ $t('school.subtitle') }}</div>
        <be-button
            class="btn-mobile"
            btn-type="primary"
            btn-size="large"
            link="https://drive.google.com/file/d/1F-eO9umOTnn1NsMM2tftcUSZaIK35Pe0/view?usp=sharing">
          {{ $t('school.btn_text') }}
        </be-button>
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
  color: $color-17;
  display: flex;
  gap: 9rem;

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
