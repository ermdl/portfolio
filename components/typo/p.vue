<template>
  <p :class="cn('leading-7 [&:not(:first-child)]:mt-6', props.class)">
    <slot />
  </p>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
