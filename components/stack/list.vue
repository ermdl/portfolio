<template>
  <div class="flex gap-2 flex-wrap">
    <StackItem
      v-for="stack in props.stacks"
      :key="stack.title"
      :stack="stack"
    ></StackItem>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  stacks: Stack[]
}>()
</script>
