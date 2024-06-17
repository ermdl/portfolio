<template>
  <section id="recommendations">
    <Container>
      <TypoH2 class="mb-16">Recommendations</TypoH2>
      <RecommendationList :recommendations="recommendations" />
    </Container>
  </section>
</template>

<script lang="ts" setup>
const store = useRecommendationsStore()
const recommendations = store.list as Recommendation[]
</script>
