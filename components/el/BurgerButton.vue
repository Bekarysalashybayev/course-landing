<template>
  <button id="burger-menu" aria-label="burger-menu" @click="onClick">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#BurgerIcon)">
        <path
            d="M26.8333 12.8333H1.16667C0.522334 12.8333 0 13.3556 0 13.9999C0 14.6443 0.522334 15.1666 1.16667 15.1666H26.8333C27.4777 15.1666 28 14.6443 28 13.9999C28 13.3556 27.4777 12.8333 26.8333 12.8333Z"
            fill="#2F327D"/>
        <path
            d="M26.8333 4.66675H1.16667C0.522334 4.66675 0 5.18908 0 5.83341C0 6.47775 0.522334 7.00008 1.16667 7.00008H26.8333C27.4777 7.00008 28 6.47775 28 5.83341C28 5.18908 27.4777 4.66675 26.8333 4.66675Z"
            fill="#2F327D"/>
        <path
            d="M26.8333 21H1.16667C0.522334 21 0 21.5223 0 22.1667C0 22.811 0.522334 23.3333 1.16667 23.3333H26.8333C27.4777 23.3333 28 22.811 28 22.1667C28 21.5223 27.4777 21 26.8333 21Z"
            fill="#2F327D"/>
      </g>
      <defs>
        <clipPath id="BurgerIcon">
          <rect width="28" height="28" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])
const onClick = () => emit('click')
</script>

<style scoped lang="scss">
button {
  border: 0;
  padding: 0;
  background-color: transparent;
}
</style>

