<template>
  <div :class="['tariff-item', ti.tariff_type]">
    <div class="tariff-item__title">
      {{ ti.tariff.title }}
    </div>
    <div class="tariff-item__description">
      <div class="tariff-item__description-single"
           v-for="(d, i) in ti.tariff.descriptions"
           :key="i"
      >
        <div class="icon">
          <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.12834 8C3.80978 8 3.50806 7.88399 3.31472 7.68397L0.698095 4.986C0.617196 4.90268 0.558135 4.80774 0.524288 4.70659C0.490441 4.60545 0.482471 4.50009 0.500835 4.39654C0.519198 4.29299 0.563535 4.19329 0.63131 4.10312C0.699085 4.01295 0.78897 3.93409 0.895825 3.87104C1.00264 3.80774 1.12442 3.7615 1.25418 3.73499C1.38393 3.70848 1.51912 3.70221 1.65199 3.71654C1.78485 3.73088 1.91279 3.76553 2.02846 3.81852C2.14414 3.87151 2.24527 3.9418 2.32607 4.02534L4.04778 5.79922L8.3766 0.374717C8.52017 0.195615 8.7489 0.0682581 9.01263 0.0205834C9.27636 -0.0270913 9.55356 0.00880839 9.78341 0.120408C10.2616 0.352429 10.4088 0.843904 10.11 1.21765L4.99542 7.62397C4.90811 7.73382 4.78777 7.82538 4.64483 7.89071C4.5019 7.95604 4.3407 7.99316 4.17521 7.99886C4.1591 8 4.14445 8 4.12834 8Z"
                fill="#3633CC"/>
          </svg>
        </div>
        <span>{{ d }}</span>
      </div>
    </div>
    <div class="price">
      ₸<span>{{ ti.tariff.price }}</span>
      {{ $t('tariff.month') }}
    </div>

    <button>{{ ti.tariff.btnText }}</button>
  </div>
</template>

<script setup lang="ts">
import {TariffList} from "~/components/sections/tariff/tariff-type";

defineProps<{ ti: TariffList }>()
</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

.tariff-item {
  position: relative;
  width: calc(25% - 30px);
  min-width: 200px;
  max-width: 400px;
  min-height: 366.92px;
  background-color: $color-5;

  padding: 2.8rem 2.5rem;
  border-radius: 24px;

  color: $color-30;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.3;

  display: flex;
  flex-direction: column;

  &__title {
    font-weight: 700;
    font-size: 2.4rem;
    margin-bottom: 1.8rem;
  }

  &__description {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-bottom: 4rem;

    &-single {
      display: flex;
      gap: 1.6rem;
    }
  }

  .price {
    margin-top: auto;
    margin-bottom: 15px;

    span {
      font-weight: 700;
      font-size: 2.2rem;
    }
  }

  button {
    background-color: rgba(35, 116, 238, 0.05);
    color: $primary;

    border: 0;
    border-radius: 8px;

    padding: 14px 0;
    font-weight: 700;
    font-size: 2rem;
  }

  &.accent {
    top: -27px;
    background-color: $secondary;

    button {
      background-color: $primary;
      color: $color_5;
    }
  }

  @media screen and (max-width: calc($desktop-1 - 1px)) {

    min-width: 280px;

    &.accent {
      top: 0;
    }
  }

}
</style>
