<template>
  <div :class="['lang', open && 'open']" ref="target">
    <div class="lang__title" @click="open =! open">
      {{ locale }}
    </div>
    <div class="lang__body">
      <div @click="changeLang('kz')" :class="['item', locale === 'kz' && 'active']">
        KZ
        <lang-active-icon v-if="locale === 'kz'"/>
      </div>
      <div @click="changeLang('ru')" :class="['item', locale === 'ru' && 'active']">
        RU
        <lang-active-icon v-if="locale === 'ru'"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import LangActiveIcon from "~/components/icons/LangActiveIcon.vue";

const open = ref(false)
const target = ref(null)
const {locale} = useI18n()
const switchLocalePath = useSwitchLocalePath()

const router = useRouter()
const changeLang = (lang: string) => {
  open.value = false

  router.push(switchLocalePath(lang))
}

onClickOutside(target, () => open.value = false)

</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;

.lang {
  position: relative;

  &__title {
    text-transform: uppercase;
    color: $primary;
    font-weight: 700;
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
  }

  &__body {
    display: none;
    position: absolute;
    top: calc(100% + 2rem);
    right: 0;

    background-color: $color-5;
    border-radius: 15px;
    padding: 1.6rem 0;
    flex-direction: column;
    gap: 1rem;

    .item {
      font-size: 1.6rem;
      line-height: 1;
      font-weight: 600;
      padding: 0 14px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 1rem;

      &.active {
        cursor: unset;
        font-weight: 700;
        color: $primary;
      }
    }
  }

  &.open {
    .lang__body {
      display: flex;
    }
  }
}
</style>
