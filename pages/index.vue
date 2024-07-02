<template>
  <div class="flex flex-col gap-40">
    <SectionHomeHero />
    <SectionHomeServices />
    <!-- <SectionHomeStacks /> -->
    <SectionHomeExperiences />
    <SectionHomeRecommendations />

    <section id="contact">
      <div class="pt-20 mt-20 mx-4 md:mx-8 xl:mx-auto">
        <TypoH2 class="mb-4">Contact me</TypoH2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <TypoH3 class="mb-2">Email</TypoH3>
            <TypoP> </TypoP>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: 'Danila Ermolenko — Personal website',
})
</script>
