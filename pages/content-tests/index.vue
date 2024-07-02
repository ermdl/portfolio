<template>
  <div>
    <Container>
      <!-- <pre>{{ data }}</pre> -->
      <ProjectList :projects="data" />
    </Container>
  </div>
</template>

<script lang="ts" setup>
const { data } = await useAsyncData('project', () =>
  queryContent('project').sort({ priority: 1 }).find()
)

const setColor = (color: string) => {
  return `background-color: ${color}`
}
</script>
