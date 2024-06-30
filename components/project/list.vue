<template>
  <div
    class="grid grid-cols-1 gap-8 w-full"
    :class="isSingle(projects) ? 'md:grid-cols-1' : 'md:grid-cols-2'"
  >
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

const isSingle = (projects: Project[]) => {
  return projects.length === 1
}
</script>
