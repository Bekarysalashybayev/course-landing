<template>
  <button @click="onClick" itemprop="action" itemscope itemtype="https://schema.org/Action">
    <span class="icon">
      <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M14.1157 5.84258C16.7003 7.39699 16.7004 11.1439 14.1157 12.6983L6.24196 17.4336C3.57593 19.037 0.18043 17.1168 0.180431 14.0058L0.180431 4.53509C0.180431 1.42407 3.57593 -0.496115 6.24196 1.10725L14.1157 5.84258Z"
            fill="url(#paint0_linear_1898_12166)"/>
        <defs>
          <linearGradient id="paint0_linear_1898_12166" x1="19.8154" y1="9.27043" x2="-6.36457" y2="9.27043"
                          gradientUnits="userSpaceOnUse">
            <stop stop-color="#21C8F6" offset="1"/>
            <stop offset="1" stop-color="#637BFF"/>
          </linearGradient>
        </defs>
      </svg>
    </span>
    <span itemprop="name">{{ $t('main.play') }}</span>
    <span itemprop="name">{{ $t('main.play') }}</span>
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])
const onClick = () => {
  window.open('https://youtu.be/7K0rwDXRGYE', "blank")
}
</script>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;

button {
  border: 0;
  padding: 0;
  font-size: 2rem;
  line-height: 1;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .icon {
    width: 6.5rem;
    height: 6.5rem;
    background-color: $color-5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    opacity: .8;
    color: $primary;

  }

  @media screen and (max-width: 1160px) {
    font-size: 1.8rem;

    .icon {
      width: 5rem;
      height: 5rem;
    }
  }
}
</style>
