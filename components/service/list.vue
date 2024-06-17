<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    <ServiceItem
      v-for="service in props.services"
      :key="service.title"
      :service="service"
    ></ServiceItem>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  services: Service[]
}>()
</script>
