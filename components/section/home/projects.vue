<template>
  <section id="projects">
    <Container>
      <TypoH2 class="mb-16">My projects</TypoH2>
      <ProjectList :projects="filterFeaturedProjects(projects)" />
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '@/store/projects.js'

const store = useProjectsStore()
const projects = store.list as Project[]

const filterFeaturedProjects = (projects: Project[]) => {
  return projects.filter(project => project.isFeatured)
}
</script>
