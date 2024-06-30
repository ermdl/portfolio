<template>
  <div class="flex flex-col gap-6 p-6 border rounded-3xl">
    <!-- <Icon :name="useIcon(service.icon)" class="w-7 h-7 text-blue-500" /> -->
    <div
      class="border border-slate-900/5 dark:border-slate-100/5 rounded-xl overflow-hidden h-auto bg-slate-50 dark:bg-slate-950"
    >
      <AspectRatio :ratio="4 / 3">
        <img
          v-if="$colorMode.value === 'light'"
          :src="service.thumbnail.light"
          :alt="service.title"
          class="w-full h-full select-none pointer-events-none"
        />
        <img
          v-else-if="$colorMode.value === 'dark'"
          :src="service.thumbnail.dark"
          :alt="service.title"
          class="w-full h-full select-none pointer-events-none"
        />
        <!-- <Skeleton class="w-full h-full" v-if="!isThumbnailLoaded"></Skeleton>
          <img
            v-else
            :src="service.thumbnail"
            :alt="service.title"
            class="select-none pointer-events-none w-full h-full object-cover"
          /> -->
      </AspectRatio>
      <!-- <Skeleton class="w-full h-[360px]" v-if="!isThumbnailLoaded"></Skeleton>
      <img
        v-else
        :src="project.thumbnail"
        :alt="project.title"
        class="object-cover select-none pointer-events-none w-full h-[360px]"
      /> -->
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

const colorMode = useColorMode()

const isThumbnailLoaded = ref(false)

onMounted(() => {
  if (!props.service.thumbnail) {
    isThumbnailLoaded.value = true
    return
  }
  const thumbnail = new window.Image()
  thumbnail.src = props.service.thumbnail.light || props.service.thumbnail.dark
  thumbnail.onload = () => {
    isThumbnailLoaded.value = true
  }

  console.log(colorMode.value)
})

// Get background color
const getBackgroundColor = (color: string) => {
  return `bg-${color}-50 dark:bg-${color}-900`
}
</script>
