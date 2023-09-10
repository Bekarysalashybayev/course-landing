<template>
  <div class="alert">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as *;

.alert {
  width: max-content;
  background-color: $color-18;
  padding: 1rem 2.5rem;
  color: $primary;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 1;
  white-space: nowrap;
  border-radius: 1rem;
  margin-bottom: 3rem;
}
</style>
