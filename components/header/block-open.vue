<template>
  <div
    class="flex gap-3 p-1 pr-4 bg-background/50 rounded-full items-center border border-slate-200 dark:border-slate-800"
  >
    <div
      class="flex items-center gap-2 px-3 py-2 rounded-full bg-green-50 dark:bg-green-950 border border-slate-200 dark:border-slate-800"
    >
      <span class="relative flex h-2.5 w-2.5">
        <span
          class="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-300 opacity-75 dark:bg-green-700"
        ></span>
        <span
          class="relative inline-flex rounded-full left-0.5 top-0.5 h-1.5 w-1.5 bg-green-500"
        ></span>
      </span>
      <div
        class="text-green-900 select-none dark:text-green-100 leading-[14px]"
      >
        Open to work
      </div>
    </div>
    <NuxtLink to="/contact">
      <div class="flex items-center gap-2">
        Let's connect
        <Icon :name="useIcon('arrow-right')" class="w-4 h-4" />
      </div>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup></script>
