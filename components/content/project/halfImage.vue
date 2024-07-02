<template>
  <section class="grid grid-cols-2">
    <div class="col-span-1">
      <ContentSlot :use="$slots.text"></ContentSlot>
    </div>
    <div class="col-span-1">
      <ContentSlot :use="$slots.image"></ContentSlot>
    </div>
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
