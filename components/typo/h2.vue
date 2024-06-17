<template>
  <h2
    :class="
      cn('scroll-m-20 text-5xl transition-colors first:mt-0', props.class)
    "
  >
    <slot />
  </h2>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
