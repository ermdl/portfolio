<template>
  <div class="flex items-center gap-2 pl-3 pr-1.5 py-1.5 border rounded-full">
    {{ stack.title }}
    <div class="bg-slate-100 rounded-full text-slate-600 px-1.5 py-0.5 text-sm">
      {{ convertToYears(stack.experienceInMonths) }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  stack: Stack
}>()

const convertToYears = (date: number) => {
  let years = date / 12

  switch (true) {
    case years < 1:
      return `${date} months`
    case years === 1:
      return `${years} year`
    default:
      return `${years} years`
  }
}
</script>
