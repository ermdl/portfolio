<template>
  <div class="p-8 border rounded-2xl">
    <div class="flex gap-3 justify-start">
      <div
        class="flex justify-center items-center w-12 h-12 rounded-full border p-1 shrink-0"
      >
        <Skeleton
          class="w-full h-full rounded-full"
          v-if="!isAvatarLoaded"
        ></Skeleton>
        <NuxtImg
          v-else
          :src="recommendation.avatar"
          alt=""
          class="w-full h-full rounded-full select-none pointer-events-none"
          loading="lazy"
        />
      </div>
      <div>
        <div class="font-semibold text-normal">
          {{ recommendation.name.first }} {{ recommendation.name.last }}
        </div>
        <p class="text-sm text-muted-foreground">
          {{ recommendation.position }}
        </p>
      </div>
    </div>
    <div class="text-sm mt-4 leading-6 whitespace-pre-line">
      {{ recommendation.review }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  recommendation: Recommendation
}>()

const isAvatarLoaded = ref(false)

onMounted(() => {
  const avatar = new window.Image()
  avatar.src = props.recommendation.avatar
  avatar.onload = () => {
    isAvatarLoaded.value = true
  }
})
</script>
