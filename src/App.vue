<template>
  <div>
    <router-view />
    <tg-icons />
  </div>
</template>

<script setup lang="ts">
const TgIcons = () => import('./components/Icons/TgIconRegistry.vue')
</script>
