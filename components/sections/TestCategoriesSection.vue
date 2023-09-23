<template>
  <div class="test-categories">
    <div class="container">
      <div class="test-categories__content">
        <div class="title">
          {{ $t('category.title.span_1') }}
          <span class="line">
            {{ $t('category.title.span_2') }}
          </span>
        </div>
        <div class="subtitle">
          {{ $t('category.subtitle') }}
        </div>

        <div class="test-categories__content-list">
          <div class="test-categories__content-list-item">
            <div class="icon">
              <img src="@/assets/img/full-icon.png" alt="full-icon.png">
            </div>
            <div class="i-title">
              {{ $t('category.full.title') }}
            </div>
            <div class="i-text">
              {{ $t('category.full.subtitle') }}
            </div>
          </div>
          <div class="test-categories__content-list-item">
            <div class="icon">
              <img src="@/assets/img/by-lesson.png" alt="by-lesson.png">
            </div>
            <div class="i-title">
              {{ $t('category.lesson.title') }}
            </div>
            <div class="i-text">
              {{ $t('category.lesson.subtitle') }}
            </div>
          </div>
          <div class="test-categories__content-list-item">
            <div class="icon">
              <img src="@/assets/img/quiz.png" alt="quiz.png">
            </div>
            <div class="i-title">
              {{ $t('category.quizz.title') }}
            </div>
            <div class="i-text">
              {{ $t('category.quizz.subtitle') }}
            </div>
          </div>
          <div class="test-categories__content-list-item">
            <div class="icon">
              <img src="@/assets/img/flash.png" alt="flash.png">
            </div>
            <div class="i-title">
              {{ $t('category.flash.title') }}
            </div>
            <div class="i-text">
              {{ $t('category.flash.subtitle') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

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
          display: flex;
          justify-content: center;

          img {
            width: 7.5rem;
            height: 7.5rem;
          }
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
