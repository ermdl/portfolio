<template>
  <div class="flex flex-col gap-8 md:grid-cols-2">
    <RecommendationItem
      v-for="recommendation in props.recommendations"
      :key="recommendation.name.last"
      :recommendation="recommendation"
    ></RecommendationItem>
    <NuxtLink
      to="https://www.linkedin.com/in/dlencode/details/recommendations/?detailScreenTabIndex=0"
    >
      <Button variant="default" class="flex">
        View all recommendations
        <Icon :name="useIcon('arrow-up-right')" class="w-5 h-5" />
      </Button>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  recommendations: Recommendation[]
}>()
</script>
