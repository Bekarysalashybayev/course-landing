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
