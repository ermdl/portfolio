<template>
  <Swiper
    class="w-full rounded-3xl relative"
    :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperNavigation]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :speed="550"
    :autoplay="{
      delay: 8000,
    }"
    :creative-effect="{
      prev: {
        shadow: false,
        translate: ['-100%', 0, -500],
      },
      next: {
        shadow: false,
        translate: ['100%', 0, -500],
      },
    }"
    :navigation="{
      nextEl: '.swiper-control-next',
      prevEl: '.swiper-control-prev',
    }"
  >
    <SwiperSlide v-for="project in projects" :key="project.slug" class="h-full">
      <ProjectItem :project="project"></ProjectItem>
    </SwiperSlide>

    <div class="swiper-pagination"></div>

    <div
      class="inline-flex gap-2 absolute right-4 bottom-4 z-10 p-2 rounded-full bg-black/20 backdrop-blur-xl"
    >
      <Button
        variant="link"
        size="icon"
        class="swiper-control-prev bg-white text-black rounded-full transform-gpu transition-transform duration-200 hover:scale-110 active:scale-90"
        title="Previous project"
      >
        <Icon :name="useIcon('arrow-left')" class="w-4 h-4" />
      </Button>
      <Button
        variant="link"
        size="icon"
        class="swiper-control-next bg-white text-black rounded-full transform-gpu transition-transform duration-200 hover:scale-110 active:scale-90"
        title="Next project"
      >
        <Icon :name="useIcon('arrow-right')" class="w-4 h-4" />
      </Button>
    </div>
  </Swiper>
</template>

<script lang="ts" setup>
const props = defineProps<{
  projects: Project[]
}>()

const isSingle = (projects: Project[]) => {
  return projects.length === 1
}
</script>
