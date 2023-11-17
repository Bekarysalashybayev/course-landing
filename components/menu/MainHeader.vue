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
            <lang-switcher/>
            <be-button btn-type="light" class="btn first" @click="goToTest('login')">
              {{ $t('header.login') }}
            </be-button>
            <be-button btn-type="primary-1" class="btn" @click="goToTest('register')">
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
import LangSwitcher from "~/components/el/LangSwitcher.vue";

const {t} = useI18n()

const {y} = useWindowScroll()

const {width} = useWindowSize()
const MOBILE_SIZE = ref(900.1)

const open = ref(false)
const isMobile = computed(() => {
  return width.value < MOBILE_SIZE.value
})

const goToTest = (name: string) => {
  window.open('https://ent.testhub.kz/' + name);
}

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
  const element = document.getElementById(link.id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

interface ILink {
  name: string,
  id: string,
}

const links = computed<ILink[]>(() => {
  return ([
    {
      name: t('header.home'),
      id: 'main',
    },
    {
      name: t('header.course'),
      id: 'course',
    },
    {
      name: t('header.test'),
      id: 'test',
    },
    {
      name: 'FAQ',
      id: 'faq',
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
            gap: 3rem;
            margin-top: 2rem;
            flex-direction: column;
          }

          .btn-list {
            flex-direction: column;
            gap: 3rem;
            margin-bottom: 2rem;

            .btn {
              font-size: 20px;
              width: 200px;

              &.first {
                border: 1px solid $primary;
                color: $primary;
                background-color: transparent;
              }
            }
          }
        }
      }
    }

    ul.links {
      gap: 4rem;

      .link {
        font-size: 20px;
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
      gap: 2rem;
    }
  }
}

</style>
