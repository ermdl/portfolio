<template>
  <NuxtLink
    :to="project._path"
    class="flex flex-col gap-6 w-full rounded-3xl group/project transform-gpu overflow-hidden group-hover/project:shadow-2xl transition-shadow duration-200 delay-75"
    :style="setProjectBackgroundColor"
  >
    <!-- <AspectRatio :ratio="1 / 1.0322580645"> -->
    <AspectRatio :ratio="3.5 / 4">
      <div class="flex flex-col gap-6 relative w-full h-full">
        <div class="flex flex-col gap-2 grow justify-between p-10 w-[75%]">
          <div>
            <div
              class="project-title font-semibold text-4xl tracking-tight text-white"
            >
              {{ project.title }}
            </div>
            <div class="mt-2 text-sm text-white/80">
              {{ project.description }}
            </div>
            <div
              class="flex gap-1.5 mt-4 flex-wrap transform-gpu transition-all duration-200 delay-75 translate-y-0 opacity-100 group-hover/project:translate-y-0 group-hover/project:opacity-100"
            >
              <div
                v-for="tag in project.tags"
                :key="tag"
                class="px-3 py-1 rounded-full text-sm text-white bg-black/15 backdrop-blur-lg"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </div>
        <div class="absolute top-10 right-10">
          <Button
            variant="link"
            size="icon"
            class="bg-white text-black rounded-full scale-0 transform-gpu transition-transform duration-200 group-hover/project:scale-100"
          >
            <Icon :name="useIcon('arrow-up-right')" class="w-4 h-4" />
          </Button>
        </div>
        <div class="absolute w-full h-full -z-10">
          <div
            class="absolute w-[250%] h-[400%] left-[-165%] top-[-250%] -rotate-45 rounded-full blur-[800px]"
            :style="setProjectCornerColor"
          ></div>
          <img
            v-for="(thumbnail, index) in project.thumbnails"
            :src="thumbnail.src"
            :alt="project.title"
            :style="{
              ...thumbnail.positions.common,
              ...thumbnail.sizes.common,
            }"
            class="absolute object-cover origin-center max-w-none transform-gpu group-hover/project:translate-y-[12%] group-hover/project:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
    </AspectRatio>
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps<{
  project: Project
}>()

const isThumbnailLoaded = ref(false)

// onMounted(() => {
//   if (!props.project.thumbnail) {
//     isThumbnailLoaded.value = true
//     return
//   }
//   const thumbnail = new window.Image()
//   thumbnail.src = props.project.thumbnail
//   thumbnail.onload = () => {
//     isThumbnailLoaded.value = true
//   }
// })

// const projectLink = computed(() => {
//   return `/project/${props.project.slug}`
// })

const setProjectBackgroundColor = computed(() => {
  return `background-color: ${props.project.colors?.background || 'white'}`
})

const setProjectCornerColor = computed(() => {
  return `background-color: ${props.project.colors?.corner || 'black'}`
})
</script>

<style scoped></style>
