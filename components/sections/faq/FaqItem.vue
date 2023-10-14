<template>
  <div :class="['faq-item', open && 'open']">
    <div class="faq-item__header" @click="open = !open">
      <span>{{ title }}</span>
      <div class="icon">
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19.0001" stroke="#FEC64F" stroke-width="3" stroke-miterlimit="16" stroke-linecap="square"/>
          <path d="M5 12.127H12H19" stroke="#FEC64F" stroke-width="3" stroke-linecap="square" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
    <div class="faq-item__body">
      <div>
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const open = ref(false)
defineProps<{
  title: string,
  text: string,
}>()
</script>
<style scoped lang="scss">
.faq-item {
  font-size: 2rem;
  line-height: 1.2;
  font-weight: 400;

  &__header {
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 2rem;
    cursor: pointer;

    span {
      display: block;
      flex-grow: 1;
    }
  }

  .icon svg {
    transition: transform ease .4s;
  }

  &__body {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows ease .4s;

    div {
      overflow: hidden;
    }
  }

  &.open {
    .icon svg {
      transform: rotate(45deg);
    }

    .faq-item__body {
      padding: 10px 0;
      grid-template-rows: 1fr;
    }
  }

}
</style>
