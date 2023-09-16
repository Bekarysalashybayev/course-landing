<template>
  <div class="container">
    <div class="trial">
      <div class="img">
        <img src="@/assets/img/trial-main.svg" alt="trial-main.svg">
      </div>
      <div class="trial__content">
        <be-alert>Online Test</be-alert>
        <div class="title">Пробный <span>Тесттер</span></div>

        <div class="trial__content-list">
          <be-icon-text class="trial__content-list-item">
            <template v-slot:icon>
              <icon1/>
            </template>
            Teachers don’t get lost in the grid view and have a dedicated Podium space.
          </be-icon-text>
          <be-icon-text class="trial__content-list-item">
            <template v-slot:icon>
              <icon2/>
            </template>
            TA’s and presenters can be moved to the front of the class.
          </be-icon-text>
          <be-icon-text class="trial__content-list-item">
            <template v-slot:icon>
              <icon3/>
            </template>
            Teachers don’t get lost in the grid view and have a dedicated Podium space.
          </be-icon-text>
        </div>
        <be-button class="btn-more desktop" btn-size="large" btn-type="primary">
          Толығырақ
        </be-button>
      </div>
      <be-button class="btn-more mobile" btn-size="large" btn-type="primary">
        Толығырақ
      </be-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import BeAlert from "~/components/el/BeAlert.vue";
import BeIconText from "~/components/el/BeIconText.vue";
import Icon1 from "~/components/icons/Icon-1.vue";
import Icon2 from "~/components/icons/Icon-2.vue";
import Icon3 from "~/components/icons/Icon-3.vue";
import BeButton from "~/components/el/BeButton.vue";

</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.container {
  max-width: 1095px;
}

.trial {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;

  img {
    width: 45rem;
    height: 45.1rem;
  }

  .mobile {
    display: none;
  }

  &__content {
    max-width: 500px;

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
    gap: 3rem;

    &__content {
      order: 1;
    }
    .img {
      order: 2;
    }
    .btn-more {
      order: 3
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
