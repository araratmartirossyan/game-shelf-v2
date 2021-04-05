<template>
  <div>
    <router-view />
    <tg-icons />
  </div>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const TgIcons = defineAsyncComponent(
  () => import('@/components/Icons/TgIconRegistry.vue')
)
</script>
