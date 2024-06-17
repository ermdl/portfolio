<template>
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    <ProjectItem
      v-for="project in props.projects"
      :key="project.title"
      :project="project"
    ></ProjectItem>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  projects: Project[]
}>()
</script>
