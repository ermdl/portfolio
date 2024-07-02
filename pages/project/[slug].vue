<template>
  <Container>
    <div
      class="flex flex-col gap-6 w-full rounded-3xl group/project transform-gpu overflow-hidden duration-200 delay-75"
      :style="setBgColor(data.colors?.background || 'white')"
    >
      <AspectRatio :ratio="16 / 9">
        <div class="flex flex-col gap-6 relative w-full h-full">
          <div class="flex flex-col gap-2 grow justify-between p-10 w-[75%]">
            <div>
              <div
                class="project-title font-semibold text-4xl tracking-tight text-white"
              >
                {{ data.title }}
              </div>
              <div class="mt-2 text-sm text-white/80">
                {{ data.description }}
              </div>
              <div
                class="flex gap-1.5 mt-4 flex-wrap transform-gpu transition-all duration-200 delay-75 translate-y-0 opacity-100 group-hover/project:translate-y-0 group-hover/project:opacity-100"
              >
                <div
                  v-for="tag in data.tags"
                  :key="tag"
                  class="px-3 py-1 rounded-full text-sm text-white bg-black/15 backdrop-blur-lg"
                >
                  {{ tag }}
                </div>
              </div>
            </div>
          </div>
          <div class="absolute w-full h-full -z-10">
            <div
              class="absolute w-[250%] h-[400%] left-[-165%] top-[-250%] -rotate-45 rounded-full blur-[800px]"
              :style="setBgColor(data.colors?.corner || 'black')"
            ></div>
            <img
              v-for="(thumbnail, index) in data.thumbnails"
              :src="thumbnail.src"
              :alt="data.title"
              :style="{
                ...thumbnail.positions.template,
                ...thumbnail.sizes.template,
              }"
              class="absolute object-cover origin-center max-w-none"
            />
          </div>
        </div>
      </AspectRatio>
    </div>

    <ContentDoc />
  </Container>
</template>

<script lang="ts" setup>
const route = useRoute()
const slug = route.params.slug as string

const { data } = await useAsyncData('project', () =>
  queryContent('project')
    .where({ slug: { $eq: slug } })
    .findOne()
)

const setBgColor = (color: string) => {
  return `background-color: ${color}`
}
</script>

<style>
main :deep(h1) {
  @apply text-6xl font-semibold;
}
h1 {
  @apply text-6xl font-semibold;
}
</style>
