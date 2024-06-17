<template>
  <div class="flex flex-col gap-8">
    <ExperienceItem
      v-for="(experience, index) in props.experiences"
      :key="experience.position"
      :experience="experience"
      :index="index"
      :isShowSeparator="isLatestItem(index)"
    ></ExperienceItem>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  experiences: Experience[]
}>()

// Check is latest item
const isLatestItem = (index: number) => {
  return index !== props.experiences.length - 1
}
</script>
