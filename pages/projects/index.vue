<template>
  <section id="projects" class="mt-20 mx-4 md:mx-8 xl:mx-auto">
    <Container>
      <TypoH1 class="mb-10">Immersive projects</TypoH1>
      <Tabs :default-value="fetchTab() as string">
        <TabsList>
          <TabsTrigger value="all" @click="clearQuery"> All </TabsTrigger>
          <TabsTrigger
            v-for="category in categories"
            :key="category.slug"
            :value="category.slug"
            @click="changeQuery(category.slug)"
          >
            {{ category.name }}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="all" class="w-full">
          <ProjectList class="mt-20" :projects="projects" />
        </TabsContent>
        <TabsContent
          v-for="category in categories"
          :key="category.slug"
          :value="category.slug"
          class="w-full"
        >
          <ProjectList
            class="mt-20"
            :projects="filterProjectsByCategory(category.id)"
          />
        </TabsContent>
      </Tabs>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '~/store/projects'
import { useCategoriesStore } from '~/store/categories'
import { onMounted } from 'vue'

useHead({
  title: 'Danila Ermolenko — Projects',
})

const route = useRoute()
const router = useRouter()

const projectsStore = useProjectsStore()
const categoriesStore = useCategoriesStore()

const categories = categoriesStore.list as Category[]

const projects = projectsStore.list as Project[]

const tags = computed(() => {
  const tags = new Set<string>()
  projects.forEach(project => {
    project.tags.forEach(tag => tags.add(tag))
  })
  return Array.from(tags)
})

const filterByTag = (tag: string) => {
  return projects.filter(project => project.tags.includes(tag))
}

const filterProjectsByCategory = (category: number) => {
  return projects.filter(project => project.category === category)
}

const fetchTab = () => {
  const tab = route.query.category
  if (tab) {
    return tab
  }
  return 'all'
}

const changeQuery = (category: string) => {
  router.push({ query: { category } })
}
const clearQuery = () => {
  router.push({ path: route.path })
}
</script>
