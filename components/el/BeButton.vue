<template>
  <button :class="['be-button', classes]" @click="$emit('click')">
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

defineEmits(['click'])

const classes = computed(() => {
  return {
    [props.btnType]: props.btnType,
    [props.btnSize]: props.btnSize,
    'rounded': props.rounded
  }
})

</script>
