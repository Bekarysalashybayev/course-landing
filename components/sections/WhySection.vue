<template>
  <div class="why">
    <div class="container">
      <div class="why__content">
        <div class="detail">
          <div class="title">
            {{ $t('why.title') }}
          </div>
          <div class="list">
            <div class="list__item" v-for="i in 3" :key="i">
              <why-star-icon/>
              <span>
                {{ $t(`why.text_${i}`) }}
              </span>
            </div>
          </div>
          <be-button class="btn" btn-size="large" btn-type="light" :rounded="false">
            {{ $t('why.btn') }}
          </be-button>
        </div>
        <div class="icon">
          <why-main-icon/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import WhyMainIcon from "~/components/sections/why/WhyMainIcon.vue";
import WhyStarIcon from "~/components/sections/why/WhyStarIcon.vue";
import BeButton from "~/components/el/BeButton.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

.why {
  background-color: $primary;

  &__content {
    display: flex;
    align-items: center;
    gap: 3rem;

    .detail {
      flex-grow: 1;

      .list {
        color: $color-5;
        display: flex;
        flex-direction: column;
        gap: 2rem;

        &__item {
          display: flex;
          align-items: center;
          gap: 1rem;


        }
      }

      .btn {
        margin-top: 3rem;
        border-radius: 1rem;
        color: $primary;
        text-transform: uppercase;
      }
    }

    .title {
      color: $color-5;
      margin-bottom: 3rem;
    }

    @media screen and (max-width: $mobile) {
      flex-wrap: wrap;
      justify-content: center;

      .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem 0 0;

        .btn {
          border-radius: 4rem!important;
          max-width: 29.4rem;
        }
      }
    }
  }
}

</style>
