<template>
  <NuxtImg
    :src="src"
    :alt="alt"
    placeholder
    class="rounded-3xl select-none pointer-events-none"
  />
</template>

<script setup lang="ts">
defineProps<{
  src: string
  alt: string
}>()
</script>
