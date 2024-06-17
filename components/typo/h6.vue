<template>
  <h6
    :class="
      cn(
        'scroll-m-20 text-xs uppercase font-semibold tracking-normal',
        props.class
      )
    "
  >
    <slot />
  </h6>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{
  class?: string
}>()
</script>
