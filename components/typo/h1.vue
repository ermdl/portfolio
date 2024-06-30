<template>
  <h1
    :class="
      cn(
        'scroll-m-20 text-5xl lg:text-[64px] leading-none font-semibold tracking-tight',
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
