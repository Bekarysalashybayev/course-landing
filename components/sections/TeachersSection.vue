<template>
  <div class="container">
    <div class="learn">
      <div class="icon">
        <img src="@/assets/img/teacher-min.png" width="1358" height="1223" alt="teacher">
      </div>
      <div class="detail">
        <div class="title">
          {{ $t('teachers.title.span_1') }}
         <span>
           {{ $t('teachers.title.span_2') }}
         </span>
        </div>
        <div class="subtitle">
          {{ $t('teachers.subtitle') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

.learn {
  display: flex;
  align-items: center;
  gap: 3rem;

  .title {
    font-size: 4rem;
    line-height: 1.3;
    margin-bottom: 3rem;
  }

  .subtitle {
    font-size: 2.4rem;
    line-height: 4.32rem;
    color: $color-17;
  }

  .icon {
    flex: 0 0 63.7rem;
    max-width: 50%;

    img {
      width: 100%;
      height: auto;
    }
  }

  @media screen and (max-width: $mobile) {
    flex-direction: column-reverse;

    .icon {
      max-width: 100%;
      flex: 0 0 auto;
    }
  }
}
</style>
