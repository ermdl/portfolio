<template>
  <section id="projects" class="mt-20 mx-4 md:mx-8 xl:mx-auto">
    <Container>
      <TypoH1 class="mb-10">Immersive projects</TypoH1>
      <Tabs default-value="all">
        <TabsList>
          <TabsTrigger value="all"> All </TabsTrigger>
          <TabsTrigger
            v-for="category in categories"
            :key="category"
            :value="category"
          >
            {{ category }}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" class="w-full">
          <ProjectList class="mt-20" :projects="projects" />
        </TabsContent>
        <TabsContent
          v-for="category in categories"
          :key="category"
          :value="category"
          class="w-full"
        >
          <ProjectList class="mt-20" :projects="filterByCategory(category)" />
        </TabsContent>
      </Tabs>
      <!-- <ProjectList class="mt-20" :projects="projects" /> -->
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '~/store/projects'

useHead({
  title: 'Danila Ermolenko — Portfolio',
})

const projectsStore = useProjectsStore()
const projects = projectsStore.list as Project[]

const tags = computed(() => {
  const tags = new Set<string>()
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

const categories = computed(() => {
  const categories = new Set<string>()
  projects.forEach(project => {
    categories.add(project.category)
  })
  return Array.from(categories)
})

const filterByTag = (tag: string) => {
  return projects.filter(project => project.tags.includes(tag))
}

const filterByCategory = (category: string) => {
  return projects.filter(project => project.category === category)
}
</script>
