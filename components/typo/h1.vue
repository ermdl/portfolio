<template>
  <h1
    :class="
      cn(
        'scroll-m-20 text-5xl font-semibold tracking-tight lg:text-8xl',
        props.class
      )
    "
  >
    <slot />
  </h1>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
