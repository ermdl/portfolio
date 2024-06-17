<template>
  <div class="p-8 border rounded-2xl">
    <div
      class="flex justify-center items-center w-14 h-14 rounded-xl bg-blue-50 mb-4"
    >
      <Icon :name="useIcon(service.icon)" class="w-7 h-7 text-blue-500" />
    </div>
    <div>
      <TypoH3>{{ service.title }}</TypoH3>
      <div class="mt-2 text-slate-500">{{ service.description }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  service: Service
}>()
</script>
