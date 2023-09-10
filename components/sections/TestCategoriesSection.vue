<template>
  <div class="test-categories">
    <div class="container">
      <div class="test-categories__content">
        <div class="title">Тест <span class="line">Категориялары</span></div>
        <div class="subtitle">
          Onlearing is one powerful online software suite that
          combines all the tools needed to run a successful school or office.
        </div>

        <div class="test-categories__content-list">
          <div class="test-categories__content-list-item">
            <div class="icon">
              <full-icon/>
            </div>
            <div class="i-title">Пробный</div>
            <div class="i-text">One powerful online software suite that combines</div>
          </div>
          <div class="test-categories__content-list-item">
            <div class="icon">
              <by-lesson-icon/>
            </div>
            <div class="i-title">Пәндік</div>
            <div class="i-text">One powerful online software suite that combines</div>
          </div>
          <div class="test-categories__content-list-item">
            <div class="icon">
              <quiz-icon/>
            </div>
            <div class="i-title">Quizzes</div>
            <div class="i-text">One powerful online software suite that combines</div>
          </div>
          <div class="test-categories__content-list-item">
            <div class="icon">
              <flash-icon/>
            </div>
            <div class="i-title">Флэш-карта</div>
            <div class="i-text">One powerful online software suite that combines</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import FullIcon from "~/components/sections/test-categories/FullIcon.vue";
import ByLessonIcon from "~/components/sections/test-categories/ByLessonIcon.vue";
import QuizIcon from "~/components/sections/test-categories/QuizIcon.vue";
import FlashIcon from "~/components/sections/test-categories/FlashIcon.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;

.test-categories {
  &__content {
    .title {
      text-align: center;
      margin-bottom: 3rem;
    }

    .subtitle {
      font-size: 2.2rem;
      line-height: 3.5rem;
      text-align: center;
      max-width: 82.8rem;
      margin: 0 auto;
      font-weight: 400;
      color: $color-17;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 4rem;
      margin-top: 4rem;

      &-item {
        padding: 2rem;
        text-align: center;
        border-radius: 1.5rem;
        box-shadow: 0 50px 80px 0 #0000000D;
        width: calc(calc(100% - 12rem) / 4);
        min-width: 250px;

        .icon {
          margin-bottom: 3rem;
        }

        .i-title {
          color: $primary;
          font-size: 2.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .i-text {
          color: $color-17;
          font-size: 1.8rem;
          line-height: 2.9rem;
        }
      }
    }
  }
}
</style>
