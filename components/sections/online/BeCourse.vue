<template>
  <div class="course">
    <div class="course__head">
      <img src="@/assets/img/Course-delete.svg" alt="course"/>
      <div class="users">
        <div class="user">
          <img src="@/assets/img/user1.svg" alt="user">
        </div>
        <div class="user">
          <img src="@/assets/img/user2.svg" alt="user">
        </div>
        <div class="user">
          <img src="@/assets/img/user3.svg" alt="user">
        </div>
        <div class="user">
          <img src="@/assets/img/user4.svg" alt="user">
        </div>
        <div class="user">
          <img src="@/assets/img/user5.svg" alt="user">
        </div>
        <span>+40</span>
      </div>
    </div>
    <div class="course__content">
      <div class="date">1 - 28 July 2022</div>
      <div class="c-title">Product Management Basic - Course</div>
      <div class="subtitle">
        Product Management Masterclass, you will learn with Sarah Johnson - Head of Product Customer Platform Gojek
        Indonesia.
      </div>
      <div class="course__content-footer">
        <div class="price">
          $380
          <span>$500</span>
        </div>
        <be-button class="btn" btn-type="primary" btn-size="medium" :rounded="false">
          {{ $t('online.btn') }}
        </be-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BeButton from "~/components/el/BeButton.vue";
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.course {
  max-width: 290px;
  min-width: 200px;
  background-color: $color-5;
  box-shadow: 0 10px 60px 0 #262D7614;
  border-radius: 1.4rem;
  overflow: hidden;

  &__head {
    height: 17.9rem;
    position: relative;
    margin-bottom: 1rem;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .users {
      position: absolute;
      bottom: -1.9rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: $color-24;
      width: 23rem;
      border-radius: 4rem;
      padding: 1.2rem;
      font-size: 1.4rem;
      line-height: 1;
      white-space: nowrap;
      font-weight: 500;
      color: $color-25;
      display: flex;
      align-items: center;

      .user {
        flex: 0 0 2.9rem;
        height: 2.9rem;
        background-color: $color-5;
        border-radius: 50%;
        overflow: hidden;
        position: absolute;
        z-index: 5;
        left: 1.2rem;

        &:nth-child(2) {
          left: 3.2rem;
          z-index: 4;
        }

        &:nth-child(3) {
          left: 5.2rem;
          z-index: 3;
        }

        &:nth-child(4) {
          left: 7.2rem;
          z-index: 2;
        }

        &:nth-child(5) {
          left: 9.2rem;
          z-index: 1;
        }
      }

      span {
        margin-left: 11.2rem;
      }
    }
  }

  &__content {
    padding: 2rem;

    .date {
      color: $color-21;
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: 400;
      margin-bottom: .5rem;
    }

    .c-title {
      font-size: 1.557rem;
      line-height: 2.328rem;
      font-weight: 800;
      color: $primary;
      margin-bottom: 1rem;
    }

    .subtitle {
      font-size: 1rem;
      line-height: 1.6rem;
      color: $color-20;
    }

    &-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2rem;

      .price {
        font-size: 1.6rem;
        line-height: 1;
        color: $color-22;
        font-weight: 700;
        display: flex;
        align-items: center;

        span {
          font-weight: 400;
          color: $color-23;
          font-size: 1.4rem;
          margin-left: 1rem;
          text-decoration: line-through;
        }
      }

      .btn {
        border-radius: 1rem;
        font-size: 1.5rem;
        line-height: 1;
        white-space: nowrap;
        font-weight: 400;
        padding: 1rem 2rem;
      }
    }
  }
}
</style>
