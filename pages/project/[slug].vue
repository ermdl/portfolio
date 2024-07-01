<template>
  <Container>
    <div
      class="flex flex-col gap-6 w-full rounded-3xl group/project transform-gpu overflow-hidden duration-200 delay-75"
      :style="setProjectBackgroundColor"
    >
      <!-- <AspectRatio :ratio="1 / 1.0322580645"> -->
      <AspectRatio :ratio="16 / 9">
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
                ...thumbnail.positions.template,
                ...thumbnail.sizes.template,
              }"
              class="absolute object-cover origin-center max-w-none"
            />
          </div>
        </div>
      </AspectRatio>
    </div>
  </Container>
  <!-- <div>
    <section>
      <Container>
        <TypoH1>{{ project.title }}</TypoH1>
      </Container>
    </section>
  </div> -->
</template>

<script lang="ts" setup>
const route = useRoute()

const projectsStore = useProjectsStore()
const project = projectsStore.list.find(
  project => project.slug === route.params.slug
) as Project

const projectSlug = computed(() => route.params.slug)

const setProjectBackgroundColor = computed(() => {
  return `background-color: ${project.colors?.background || 'white'}`
})

const setProjectCornerColor = computed(() => {
  return `background-color: ${project.colors?.corner || 'black'}`
})
</script>
