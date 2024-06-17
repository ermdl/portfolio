<template>
  <section id="stacks" class="mt-20 mx-4 md:mx-8 xl:mx-auto">
    <TypoH2 class="mb-16">My stacks</TypoH2>
    <StackList :stacks="stacks" />
  </section>
</template>

<script lang="ts" setup>
const store = useStacksStore()
const stacks = store.list as Stack[]
</script>
