<template>
  <section id="projects" class="mt-20 mx-4 md:mx-8 xl:mx-auto">
    <TypoH1>This is Portfolio page</TypoH1>
    <ProjectList class="mt-20" :projects="projects" />
  </section>
</template>

<script lang="ts" setup>
import { useProjectsStore } from '~/store/projects'

useHead({
  title: 'Danila Ermolenko — Portfolio',
})

const projectsStore = useProjectsStore()
const projects = projectsStore.list as Project[]
</script>
