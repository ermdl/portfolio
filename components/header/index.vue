<template>
  <header class="fixed w-full top-0 left-0 bg-gradient-to-b from-white">
    <div
      class="container mx-auto max-w-7xl backdrop-blur-md bg-white/75 my-4 px-8 py-6 rounded-3xl"
    >
      <div class="flex justify-between">
        <!-- Left -->
        <div>
          <NuxtLink to="/" class="font-medium">Danila Ermolenko</NuxtLink>
        </div>

        <!-- Right -->
        <div class="flex gap-4">
          <NuxtLink to="/about">About</NuxtLink>
          <NuxtLink to="/portfolio">Portfolio</NuxtLink>
          <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup></script>
