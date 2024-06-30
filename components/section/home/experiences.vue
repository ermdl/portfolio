<template>
  <section id="projects" class="mt-0 py-20 bg-slate-100 dark:bg-transparent">
    <Container>
      <TypoH2 class="mb-16">Working experience</TypoH2>
      <ExperienceList :experiences="experiences" />
    </Container>
  </section>
</template>

<script lang="ts" setup>
const store = useExperienceStore()
const experiences = store.list as Experience[]
</script>
