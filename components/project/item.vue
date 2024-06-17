<template>
  <div class="flex flex-col gap-4 p-8 rounded-3xl bg-white">
    <div class="border rounded-xl overflow-hidden h-auto">
      <AspectRatio :ratio="4 / 3">
        <Skeleton class="w-full h-full" v-if="!isThumbnailLoaded"></Skeleton>
        <img
          v-else
          :src="project.thumbnail"
          :alt="project.title"
          class="select-none pointer-events-none w-full h-full object-cover"
        />
      </AspectRatio>
      <!-- <Skeleton class="w-full h-[360px]" v-if="!isThumbnailLoaded"></Skeleton>
      <img
        v-else
        :src="project.thumbnail"
        :alt="project.title"
        class="object-cover select-none pointer-events-none w-full h-[360px]"
      /> -->
    </div>
    <div class="flex flex-col gap-2">
      <TypoH3>{{ project.title }}</TypoH3>
      <div class="my-0">{{ project.description }}</div>
      <div class="flex gap-1.5 mt-2">
        <div
          v-for="tag in project.tags"
          :key="tag"
          class="border border-slate-200 px-3 py-1 rounded-full text-sm"
        >
          {{ tag }}
        </div>
      </div>
      <div>
        <NuxtLink :to="project.link" target="_blank">
          <Button variant="link" class="p-0">
            View live project
            <Icon :name="useIcon('arrow-up-right')" class="w-4 h-4" />
          </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  project: Project
}>()

const isThumbnailLoaded = ref(false)

onMounted(() => {
  if (!props.project.thumbnail) {
    isThumbnailLoaded.value = true
    return
  }
  const thumbnail = new window.Image()
  thumbnail.src = props.project.thumbnail
  thumbnail.onload = () => {
    isThumbnailLoaded.value = true
  }
})
</script>
