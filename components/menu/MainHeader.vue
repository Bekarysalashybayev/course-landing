<template>
  <header :class="['d-flex-center', y > 50 && 'sticky']">
    <div class="container">
      <nav class="header d-flex-center">
        <be-logo class="logo" v-show="isMobile"/>
        <div :class="['header-inner d-flex-center mobile', isMobile && 'mobile', open && 'open']">
          <be-logo class="logo" v-show="!isMobile"/>
          <ul class="links d-flex-center">
            <li :class="['link', i === 0 && 'active']"
                v-for="(l, i) in links"
                @click="goTo(l)"
                :key="i">
              {{ l.name }}
            </li>
          </ul>
          <div class="btn-list d-flex-center">
            <label for="lang">
              <select id="lang" name="lang" v-model="locale" @change="changeLang">
                <option value="kz">KZ</option>
                <option value="ru">RU</option>
              </select>
            </label>
            <be-button btn-type="light" class="btn">
              {{ $t('header.login') }}
            </be-button>
            <be-button btn-type="primary-1" class="btn">
              {{ $t('header.register') }}
            </be-button>
          </div>
        </div>
        <burger-button class="burger" v-show="isMobile" @click="onClick"/>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import BeLogo from "~/components/el/BeLogo.vue";
import BeButton from "~/components/el/BeButton.vue";
import BurgerButton from "~/components/el/BurgerButton.vue";
import {useWindowSize} from '@vueuse/core'

import {useWindowScroll} from '@vueuse/core'

const {locale, t} = useI18n()
const switchLocalePath = useSwitchLocalePath()

const router = useRouter()

const changeLang = () => router.push(switchLocalePath(locale.value))

const {y} = useWindowScroll()

const {width} = useWindowSize()
const MOBILE_SIZE = ref(900.1)

const open = ref(false)
const isMobile = computed(() => {
  return width.value < MOBILE_SIZE.value
})


watch(() => open.value, (value: boolean) => {
  if (value && isMobile.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

const onClick = () => {
  if (isMobile.value) {
    open.value = !open.value
  }
}

const goTo = (link: ILink) => {
  if (isMobile.value) {
    open.value = false
  }
  console.log(link)
}

interface ILink {
  name: string
}

const links = computed<ILink[]>(() => {
  return ([
    {
      name: t('header.home')
    },
    {
      name: t('header.course')
    },
    {
      name: t('header.test')
    },
    {
      name: t('header.about')
    }
  ])
})
</script>

<style scoped lang="scss">
@use "@/assets/scss/breakpoints" as *;
@use "@/assets/scss/colors" as *;

header {
  background-color: $head-bg-color;
  height: var(--top-height);
  line-height: 1;
  white-space: nowrap;

  &.sticky {
    border-bottom: 1px solid $color-7;
    //background-color: $color-7;
    transition: background-color ease 1s;
  }

  .header {
    justify-content: space-between;

    &-inner {
      flex: 0 0 100%;
      justify-content: space-between;

      @media screen and (max-width: $mobile) {
        &.mobile {
          position: fixed;
          top: var(--top-height);
          left: 200%;
          bottom: 0;
          right: 0;
          background-color: $head-bg-color;
          flex-direction: column;
          justify-content: normal;
          overflow-y: auto;
          z-index: 9999;
          transition: left ease 1s;

          &:before, &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: $color-5;
            z-index: -1;
          }

          &:after {
            background-color: $head-bg-color;
          }

          &.open {
            left: 0;
          }

          ul.links {
            margin-top: 2rem;
            flex-direction: column;
          }

          .btn-list {
            flex-direction: column;
            gap: 3rem;
            margin-bottom: 2rem;
          }
        }
      }
    }

    ul.links {

      .link {
        font-size: 2rem;
        cursor: pointer;

        &:not(.active):hover {
          opacity: .7;
        }

        &.active {
          font-weight: 700;
        }
      }
    }

    .btn-list {
      gap: 1rem;
    }
  }
}

</style>
