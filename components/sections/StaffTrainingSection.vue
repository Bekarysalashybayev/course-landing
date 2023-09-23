<template>
  <div class="container">
    <div class="trial">
      <div class="trial__content">
        <be-alert class="desktop">
          {{ $t('staff.alert') }}
        </be-alert>
        <div class="title desktop">
          <span>
            {{ $t('staff.title.span_1') }}
          </span>
          {{ $t('staff.title.span_2') }}
        </div>
        <div class="trial__content-list">
          <be-icon-text class="trial__content-list-item">
            <template v-slot:icon>
              <icon1/>
            </template>
            {{ $t('staff.text_1') }}
          </be-icon-text>
          <be-icon-text class="trial__content-list-item">
            <template v-slot:icon>
              <icon2/>
            </template>
            {{ $t('staff.text_2') }}
          </be-icon-text>
          <be-icon-text class="trial__content-list-item">
            <template v-slot:icon>
              <icon3/>
            </template>
            {{ $t('staff.text_3') }}
          </be-icon-text>
        </div>
      </div>
      <div class="title mobile">
        <span>
          {{ $t('staff.title.span_1') }}
        </span>
        {{ $t('staff.title.span_2') }}
      </div>
      <div class="img">
        <staff-main-icon/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BeAlert from "~/components/el/BeAlert.vue";
import BeIconText from "~/components/el/BeIconText.vue";
import Icon1 from "~/components/icons/Icon-1.vue";
import Icon2 from "~/components/icons/Icon-2.vue";
import Icon3 from "~/components/icons/Icon-3.vue";
import StaffMainIcon from "~/components/sections/staff/StaffMainIcon.vue";

</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.container {
  max-width: 1193px;
}

.trial {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  .mobile {
    display: none;
  }

  &__content {
    max-width: 512px;

    &-list {
      &-item {
        margin-top: 2rem;
      }
    }

    .btn-more {
      margin-top: 4rem;
    }
  }

  @media screen and (max-width: $mobile) {
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 0;

    .title {
      margin-bottom: 0;
    }

    .img {
      order: 2;
    }

    &__content {
      order: 3;
    }

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
}
</style>
