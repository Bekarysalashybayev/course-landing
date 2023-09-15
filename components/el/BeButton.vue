<template>
  <button :class="['be-button', classes]">
    <slot/>
  </button>
</template>

<script setup lang="ts">
type BtnType = "primary" | "light" | 'primary-1' | 'yellow'
type BtnSize = "small" | "medium" | 'large'

const props = withDefaults(defineProps<{
  btnType: BtnType,
  btnSize?: BtnSize,
  rounded?: boolean,
}>(), {
  btnSize: 'medium',
  btnType: 'primary',
  rounded: true
})

const classes = computed(() => {
  return {
    [props.btnType]: props.btnType,
    [props.btnSize]: props.btnSize,
    'rounded': props.rounded
  }
})

</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;

.be-button {
  font-size: 2rem;
  line-height: 1;
  font-weight: 600;
  border: 0;

  &:hover {
    opacity: .8;
  }

  &.light {
    color: $color-4;
    background-color: $color-5;
  }

  &.primary {
    color: $color-5;
    background-color: $primary;
  }

  &.primary-1 {
    color: $color-5;
    background: linear-gradient($color-1, $color-6);
  }

  &.yellow {
    color: $color-5;
    background: linear-gradient($color-14, $color-16)
  }

  &.rounded {
    border-radius: 8rem;
  }

  &.small {
    font-size: 1.5rem;
    padding: .6rem 1.5rem;
  }

  &.medium {
    padding: 1rem 3.5rem;
  }

  &.large {
    padding: 2rem 4rem;
  }
}
</style>
