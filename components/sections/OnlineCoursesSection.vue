<template>
  <div class="container">
    <div class="online">
      <div class="title">
        {{ $t('online.title.span_1') }}
        <span class="line">
          {{ $t('online.title.span_2') }}
        </span>
      </div>

      <div class="online__head">
        <div class="online__head-list">
          <div :class="['online__head-list-item', category.name === current && 'active']"
               v-for="category in categories"
               :key="category.name">
            {{ category.name }}
          </div>
        </div>
      </div>

      <div class="online__content">
        <div class="online__content-inner">
          <be-course v-for="i in 4" :key="i"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import BeCourse from "~/components/sections/online/BeCourse.vue";

interface ICategory {
  name: string
}

const categories = ref<ICategory[]>([
  {
    name: 'Барлығы'
  },
  {
    name: 'Инфо-Мат'
  },
  {
    name: 'Хим-Био'
  },
  {
    name: 'Қазақ тілі'
  },
  {
    name: 'Физ-Мат'
  },
  {
    name: 'Гео-Англ'
  },
  {
    name: 'Джт-АҚҚ'
  }
])

const current = ref<ICategory['name']>('Барлығы')

</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

.online {
  .title {
    text-align: center;
    margin-bottom: 3rem;
  }

  &__head {
    display: flex;
    justify-content: center;

    &-list {
      display: flex;
      align-items: center;
      gap: 2rem;
      overflow-x: auto;

      &::-webkit-scrollbar {
        height: 0;
      }

      &-item {
        color: $color-19;
        border: 1px solid $color-19;
        font-size: 1.2rem;
        line-height: 1;
        font-weight: 500;
        padding: 1rem;
        border-radius: .5rem;
        white-space: nowrap;

        &.active {
          background-color: $primary;
          border-color: $primary;
          color: $color-5;
        }
      }
    }
  }

  &__content {
    margin-top: 5rem;

    &-inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 2.5rem;

      &::-webkit-scrollbar {
        height: 0;
      }

      @media screen and (max-width: $mobile) {
        overflow-x: auto;
        flex-wrap: nowrap;
      }
    }
  }
}
</style>
