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
}
</style>
