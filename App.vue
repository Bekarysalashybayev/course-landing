<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>

<script setup>
const appConfig = useAppConfig()
useHead(appConfig);
</script>
