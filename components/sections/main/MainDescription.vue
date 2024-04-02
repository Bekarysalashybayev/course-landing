<template>
  <div class="main-description">
    <div class="title">
      {{ $t('main.title.span_1') }}
      <span>{{ $t('main.title.span_2') }}</span>
      {{ $t('main.title.span_3') }}
    </div>
    <div class="subtitle">
      {{ $t('main.subtitle') }}
    </div>
    <div class="btn-list">
      <be-button
          itemprop="action"
          itemscope
          itemtype="https://schema.org/Action"
          btn-type="primary-1"
          btn-size="large"
          class="btn"
      >
        <a href="https://ent.testhub.kz/" itemprop="url" target="blank">
          <span itemprop="name">{{ $t('main.btn') }}</span>
        </a>
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
  max-width: 70rem;
  min-width: 400px;
  position: relative;
  z-index: 10;

  .btn {
    padding: 0;
  }

  a {
    display: block;
    color: inherit;
    padding: 2rem 4rem;
  }

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

  @media screen and (max-width: 1160px) {
    max-width: 50rem;

    .title {
      font-size: 3.6rem;
    }

    .subtitle {
      font-size: 1.6rem;
    }


    .btn-list {
      flex-direction: column;
      align-items: flex-start;

      .btn {
        font-size: 1.8rem;

        a {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
      }
    }
  }

  @media screen and (max-width: $tab-1) {
    min-width: 100%;

    .btn-list {

      .btn {
        font-size: 1.8rem;
      }
    }
  }

  @media screen and (max-width: $mobile) {
    max-width: 100%;
  }
}
</style>
