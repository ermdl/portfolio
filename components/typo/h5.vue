<template>
  <h5
    :class="cn('scroll-m-20 text-base font-medium tracking-tight', props.class)"
  >
    <slot />
  </h5>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
