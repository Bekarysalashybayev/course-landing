<template>
  <div class="container">
    <div class="learn">
      <div class="detail">
        <div class="first"></div>
        <div class="title">
          <span>
            {{ $t('learn.title.span_1') }}
          </span>
          {{ $t('learn.title.span_2') }}
        </div>
        <div class="subtitle">
          {{ $t('learn.subtitle')}}
        </div>
      </div>
      <div class="icon">
        <div class="second"></div>
        <div class="third"></div>
        <div class="fourth"></div>
        <img src="@/assets/img/learn-delete.png" alt="learn">
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;
@use "@/assets/scss/breakpoints" as *;

.learn {
  display: flex;
  align-items: center;
  gap: .5rem;

  .detail {
    position: relative;

    .first {
      position: absolute;
      top: -3.5rem;
      left: -3rem;
      width: 6.5rem;
      height: 6.5rem;
      background-color: $secondary;
      border-radius: 50%;
      z-index: -1;
    }
  }

  .icon {
    max-width: 50%;
    position: relative;

    .second {
      position: absolute;
      border-radius: 2rem;
      background-color: $color-27;
      width: 11.5rem;
      height: 13.8rem;
      z-index: -1;
      top: 5rem;
      left: 5rem;
    }

    .third {
      position: absolute;
      border-radius: 2rem;
      background-color: $secondary;
      width: 19.3rem;
      height: 23.1rem;
      z-index: -1;
      bottom: 5rem;
      right: 5rem;
    }

    .fourth {
      position: absolute;
      border-radius: 4rem;
      background-color: $secondary;
      width: 2.5rem;
      height: 3rem;
      z-index: -1;
      top: 25rem;
      left: 3.5rem;
    }
  }

  .title {
    font-size: 3.6rem;
    line-height: 1.3;
    margin-bottom: 3rem;
  }

  .subtitle {
    font-size: 2rem;
    line-height: 4.32rem;
    color: $color-17;
  }

  .icon {
    flex: 0 0 58.9rem;

    img {
      width:100%;
      height: 100%;
    }
  }

  @media screen and (max-width: $mobile){
    flex-direction: column;

    .icon {
      max-width: 100%;
    }
  }
}
</style>
