<template>
  <div
    class="flex justify-center items-center w-16 h-16 rounded-full border p-1 shrink-0"
  >
    <Skeleton
      class="w-full h-full rounded-full"
      v-if="!isAvatarLoaded"
    ></Skeleton>
    <NuxtImg
      v-else
      :src="avatarUrl"
      alt="Danila Ermolenko"
      class="w-full h-full rounded-full select-none pointer-events-none"
      loading="lazy"
    />
  </div>
</template>

<script lang="ts" setup>
// Check if the avatar image is loaded
const isAvatarLoaded = ref(false)
const avatarUrl = '/images/avatar_original.jpg'

onMounted(() => {
  // Load the avatar image
  const avatar = new window.Image()
  avatar.src = '/images/avatar_original.jpg'
  avatar.onload = () => {
    isAvatarLoaded.value = true
  }
})
</script>
