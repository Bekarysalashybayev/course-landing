<template>
  <button :class="['be-button', classes]" @click="onClick">
    <slot/>
  </button>
</template>

<script setup lang="ts">
const { gtag } = useGtag()

type BtnType = "primary" | "light" | 'primary-1' | 'yellow'
type BtnSize = "small" | "medium" | 'large'

const props = withDefaults(defineProps<{
  btnType: BtnType,
  btnSize?: BtnSize,
  rounded?: boolean,
  link?: string
}>(), {
  btnSize: 'medium',
  btnType: 'primary',
  rounded: true
})

const emit = defineEmits(['click'])

const onClick = () => {

  if (props.link) {
    if (props.link === 'https://ent.testhub.kz/') {
      gtag('event', 'ent_btn_clicked');
    }
    window.open(props.link, "blank");
  } else {
    emit('click')
  }
}


const classes = computed(() => {
  return {
    [props.btnType]: props.btnType,
    [props.btnSize]: props.btnSize,
    'rounded': props.rounded
  }
})

</script>
