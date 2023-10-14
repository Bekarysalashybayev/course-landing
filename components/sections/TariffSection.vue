<template>
  <div class="tariff">
    <div class="container flex-block">
      <div class="tariff__title">
        {{ $t('tariff.title') }}
      </div>
      <tariff-list/>
      <the-kaspi/>
    </div>
  </div>
</template>

<script setup lang="ts">

import TheKaspi from "~/components/sections/tariff/TheKaspi.vue";
import TariffList from "~/components/sections/tariff/TariffList.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

.tariff {
  background-color: $primary;
  padding: 3.9rem 0 13.9rem;

  .flex-block {
    display: flex;
    flex-direction: column;
    gap: 6rem;
  }

  &__title {
    text-align: center;
    color: $color-5;
    font-weight: 700;
    font-size: 4rem;
    line-height: 1;
  }
}
</style>
