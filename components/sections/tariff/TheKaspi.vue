<template>
  <div class="kaspi">
    <img width="256" height="257" :src="kaspiImg" alt="kaspiImg">
    <span class="title">{{ $t('tariff.kaspi') }}</span>
  </div>
</template>

<script setup lang="ts">
import kaspiImg from "@/assets/img/kaspi.jpg"

</script>
<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

.kaspi {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6.1rem;

  img {
    flex: 0 0 18rem;
    max-width: 15.6rem;
    height: auto;
  }

  .title {
    display: block;
    max-width: 642px;
    color: $color-5;
    font-weight: 700;
    font-size: 4rem;
    line-height: 1.5;
    white-space: balance;
  }
}

</style>
