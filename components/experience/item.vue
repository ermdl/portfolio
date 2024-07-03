<template>
  <div>
    <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
      <div
        class="flex items-center justify-center w-16 h-16 bg-white rounded-2xl p-3.5 shrink-0"
      >
        <Skeleton
          class="w-full h-full rounded-md"
          v-if="!isLogotypeLoaded"
        ></Skeleton>
        <NuxtImg
          v-else-if="experience.logotype"
          :src="experience.logotype"
          :alt="experience.company"
          class="select-none pointer-events-none"
        />
        <Icon v-else :name="useIcon('image-off')" class="text-2xl text-muted" />
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-xl">
          {{ experience.position }} @
          <span class="font-semibold">{{ experience.company }}</span>
        </span>
        <div class="flex gap-2 text-muted-foreground">
          <div>{{ formatDate(props.experience.startDate) }}</div>
          <div>—</div>
          <div>{{ formatDate(props.experience.endDate) }}</div>
        </div>
      </div>

      <!-- <TypoP class="my-0">{{ experience.description }}</TypoP> -->
    </div>
    <Separator class="mt-10" v-if="isShowSeparator" />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  experience: Experience
  index: number
  isShowSeparator: boolean
}>()

// Date formatting
const formatDate = (date: string | null) => {
  if (date === null) {
    return 'Present'
  }
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  })
}

const isLogotypeLoaded = ref(false)

onMounted(() => {
  if (props.experience.logotype === null) {
    isLogotypeLoaded.value = true
    return null
  }
  const logotype = new window.Image()
  logotype.src = props.experience.logotype
  logotype.onload = () => {
    isLogotypeLoaded.value = true
  }
})
</script>
