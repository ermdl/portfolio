<template>
  <section id="hero">
    <Container class="grid grid-cols-6">
      <div class="flex flex-col gap-4 col-span-6 sm:col-span-4">
        <div class="flex items-center gap-4">
          <div
            class="flex justify-center items-center w-16 h-16 rounded-full border p-1 shrink-0"
          >
            <Skeleton
              class="w-full h-full rounded-full"
              v-if="!isAvatarLoaded"
            ></Skeleton>
            <img
              v-else
              src="/images/avatar_original.jpg"
              alt=""
              class="w-full h-full rounded-full select-none pointer-events-none"
            />
          </div>
          <div
            class="flex items-center gap-2 pl-3.5 pr-4 py-1.5 rounded-full bg-green-50"
          >
            <div class="w-2 h-2 rounded-full bg-green-500 shrink-0"></div>
            <div class="text-green-950 select-none">Open to work</div>
          </div>
        </div>
        <TypoH1 class="mb-4 brea"
          >Developing immersive digital experiences for the web</TypoH1
        >
        <div class="flex flex-col gap-4 sm:flex-row w-full">
          <!-- <Button variant="default" class="flex">
          <Icon :name="useIcon('wand-sparkles')" class="w-5 h-5" />
          Let's work together!</Button> -->
          <NuxtLink to="/projects">
            <Button variant="default" class="flex">
              <Icon :name="useIcon('briefcase-business')" class="w-5 h-5" />
              See my projects</Button
            >
          </NuxtLink>
          <Button variant="outline" class="flex"
            ><Icon :name="useIcon('download')" class="w-5 h-5" />Download
            CV</Button
          >
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
// Check if the avatar image is loaded
const isAvatarLoaded = ref(false)

onMounted(() => {
  // Load the avatar image
  const avatar = new window.Image()
  avatar.src = '/images/avatar_original.jpg'
  avatar.onload = () => {
    isAvatarLoaded.value = true
  }
})
</script>
