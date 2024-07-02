<template>
  <section id="hero">
    <Container class="grid grid-cols-6 gap-10 items-center">
      <div class="flex flex-col gap-4 col-span-6 sm:col-span-3">
        <div class="flex items-center gap-4">
          <!-- <Avatar /> -->
        </div>
        <div class="text-lg font-medium">My name is Danila Ermolenko</div>
        <TypoH1 class="my-4"
          >I develop immersive digital experiences for the web</TypoH1
        >
        <p class="text-sm text-slate-600">
          With 10+ years of experience in the design and web-development, I
          provide the highest quality for web/app design and development. With
          all difficulties — from small to big projects
        </p>
        <div class="flex flex-col gap-4 sm:flex-row w-full">
          <!-- <Button variant="default" class="flex">
          <Icon :name="useIcon('wand-sparkles')" class="w-5 h-5" />
          Let's work together!</Button> -->
          <NuxtLink to="/projects">
            <Button variant="outline" class="flex"> Check out projects</Button>
          </NuxtLink>
        </div>
      </div>
      <div class="flex col-span-3 items-end">
        <!-- <ProjectList :projects="filterFeaturedProjects(projects, 1)" /> -->
        <ProjectSlider :projects="data" />
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('project', () =>
  queryContent('project').where({ isFeatured: true }).sort({ id: 1 }).find()
)

// const filterFeaturedProjects = (projects: Project[], limit?: number) => {
//   if (limit === 0) {
//     return projects.filter(project => project.isFeatured)
//   } else {
//     return projects.filter(project => project.isFeatured).slice(0, limit)
//   }
// }
</script>
