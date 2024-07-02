<template>
  <section class="grid grid-cols-2">
    <ContentSlot :use="$slots.text" class="col-span-1"></ContentSlot>
    <ContentSlot :use="$slots.image" class="col-span-1"></ContentSlot>
  </section>
</template>

<script setup lang="ts">
type Direction = 'left' | 'right'

defineProps({
  direction: {
    type: String as PropType<Direction>,
    required: true,
  },
})
</script>
