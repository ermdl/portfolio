<template>
  <section class="grid grid-cols-2">
    <div v-if="direction === 'left'">
      <div class="col-span-1">
        <ContentSlot :use="$slots.text"></ContentSlot>
      </div>
      <div class="col-span-1">
        <ContentSlot :use="$slots.image"></ContentSlot>
      </div>
    </div>
    <div v-else>
      <div class="col-span-1">
        <ContentSlot :use="$slots.image"></ContentSlot>
      </div>
      <div class="col-span-1">
        <ContentSlot :use="$slots.text"></ContentSlot>
      </div>
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
