<template>
  <div>
    <Container>
      <TypoH1>{{ project.title }}</TypoH1>
    </Container>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const projectsStore = useProjectsStore()
const project = projectsStore.list.find(
  project => project.slug === route.params.slug
) as Project

const projectSlug = computed(() => route.params.slug)
</script>
