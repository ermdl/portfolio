<template>
  <section id="services">
    <Container>
      <TypoH2 class="mb-16">My services</TypoH2>
      <ServiceList :services="services" />
    </Container>
  </section>
</template>

<script lang="ts" setup>
const store = useServicesStore()
const services = store.list as Service[]
</script>
