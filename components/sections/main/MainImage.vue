<template>
  <div class="main-image">
    <test-count class="item test-count"/>
    <test-plan class="item test-plan"/>
    <test-courses class="item test-courses"/>
    <test-icon class="item test-icon"/>
    <img width="200" height="200" src="@/assets/img/people.webp" alt="" class="people-img" data-not-lazy>
  </div>
</template>

<script setup lang="ts">
import TestCount from "~/components/sections/main/TestCount.vue";
import TestPlan from "~/components/sections/main/TestPlan.vue";
import TestCourses from "~/components/sections/main/TestCourses.vue";
import TestIcon from "~/components/sections/main/TestIcon.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;

.main-image {
  position: absolute;
  z-index: 9;
  right: 0;
  top: 0;
  height: 100%;

  .item {
    position: absolute;

    &.test-icon {
      top: 15rem;
      right: 7rem;
    }

    &.test-plan {
      top: 32rem;
      right: 2rem;
    }

    &.test-count {
      left: -7rem;
      top: 22rem;
    }

    &.test-courses {
      left: -12rem;
      top: 46rem;
    }


    @media (min-width: 900px) and (max-width: 1024px) {
      &.test-count {
        left: -4rem;
      }

      &.test-courses {
        left: -8rem;
      }
    }
  }

  .people-img, img, picture {
    height: 100% !important;
    width: auto;
  }

  @media screen and (max-width: $mobile) {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    .people-img, img, picture {
      order: 1;
    }

    .item {
      position: static;

      &.test-icon {
        position: absolute;
        width: 14.9rem;
        height: 14.9rem;
      }

      &.test-plan {
        order: 4;
      }

      &.test-count {
        order: 2;
      }

      &.test-courses {
        order: 3;
      }
    }
  }
}
</style>
