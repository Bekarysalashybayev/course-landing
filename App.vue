<template>
  <nuxt-layout>
    <nuxt-page/>
  </nuxt-layout>
</template>

<script lang="ts">

</script>

<script setup>
const appConfig = useAppConfig()
useHead(appConfig);

</script>
