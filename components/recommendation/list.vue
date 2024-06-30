<template>
  <div class="flex flex-col gap-8">
    <div class="grid gap-8 md:grid-cols-2 items-start">
      <div class="grid gap-8 items-start">
        <RecommendationItem
          v-for="recommendation in getMassonryCol(0, 2)"
          :key="recommendation.name.last"
          :recommendation="recommendation"
        ></RecommendationItem>
      </div>
      <div class="grid gap-8 items-start">
        <RecommendationItem
          v-for="recommendation in getMassonryCol(2, 5)"
          :key="recommendation.name.last"
          :recommendation="recommendation"
        ></RecommendationItem>
      </div>
    </div>
    <a
      href="https://www.linkedin.com/in/dlencode/details/recommendations/?detailScreenTabIndex=0"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button variant="default" class="group flex">
        View all recommendations
        <div class="relative w-5 h-5">
          <Icon
            :name="useIcon('arrow-up-right')"
            class="absolute left-0 top-0 w-full h-full transform-gpu transition-transform duration-300 origin-top-right scale-100 group-hover:scale-0"
          />
          <Icon
            :name="useIcon('arrow-up-right')"
            class="absolute left-0 top-0 w-full h-full transform-gpu transition-transform duration-300 origin-bottom-left scale-0 group-hover:scale-100"
          />
        </div>
      </Button>
    </a>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  recommendations: Recommendation[]
}>()

const getMassonryCol = (from: number, to: number) => {
  return props.recommendations.slice(from, to)
}
</script>
