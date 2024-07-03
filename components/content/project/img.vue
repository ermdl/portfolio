<template>
  <div class="rounded-3xl select-none pointer-events-none overflow-hidden">
    <NuxtImg :src="src" :alt="alt" placeholder />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>
