<template>
  <div class="icon-text">
    <div class="icon">
      <slot name="icon"/>
    </div>
    <div class="text">
      <slot/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;

.icon-text {
  font-size: 1.8rem;
  line-height: 3.24rem;
  color: $color-17;
  display: flex;
  align-items: center;

  .icon {
    margin-right: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 6rem;
    height: 6rem;
    border-radius: 50%;
    box-shadow: 0 15px 44px 0 #0D0F1C1F;

    &:deep(svg) {
      width: 2.7rem;
      height: auto;
    }
  }
}
</style>
