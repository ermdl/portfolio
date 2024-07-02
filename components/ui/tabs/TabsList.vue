<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsList, type TabsListProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<TabsListProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="
      cn(
        // 'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
        'inline-flex gap-1 items-center justify-center rounded-full bg-background border border-slate-200 dark:border-slate-800 p-2 text-muted-foreground',
        props.class
      )
    "
  >
    <slot />
  </TabsList>
</template>
