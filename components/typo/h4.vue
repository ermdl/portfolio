<template>
  <h4
    :class="cn('scroll-m-20 text-xl font-semibold tracking-tight', props.class)"
  >
    <slot />
  </h4>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
