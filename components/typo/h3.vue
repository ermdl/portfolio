<template>
  <h3
    :class="cn('scroll-m-20 text-2xl font-medium tracking-tight', props.class)"
  >
    <slot />
  </h3>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
