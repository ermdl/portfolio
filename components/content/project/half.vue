<template>
  <section class="grid grid-cols-2 gap-10">
    <div class="col-span-1 flex flex-col items-start justify-end">
      <ContentSlot :use="$slots.text"></ContentSlot>
    </div>
    <div
      class="col-span-1 flex flex-col items-start justify-end rounded-3xl overflow-hidden"
    >
      <ContentSlot :use="$slots.image"></ContentSlot>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
