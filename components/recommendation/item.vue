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
        <img
          v-else
          :src="recommendation.avatar"
          alt=""
          class="w-full h-full rounded-full select-none pointer-events-none"
        />
      </div>
      <div>
        <TypoH5
          >{{ recommendation.name.first }}
          {{ recommendation.name.last }}</TypoH5
        >
        <p class="text-sm text-muted-foreground">
          {{ recommendation.position }}
        </p>
      </div>
    </div>
    <div class="text-sm mt-4 leading-6">{{ recommendation.review }}</div>
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
