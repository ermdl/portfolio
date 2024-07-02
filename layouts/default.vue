<template>
  <div class="container mx-auto max-w-7xl">
    <Header></Header>
  </div>
  <!-- <div class="dashed-lines vertical"></div> -->
  <div class="container-dashed-lines mx-auto max-w-7xl">
    <main class="py-20">
      <slot></slot>
    </main>
  </div>
  <div class="h-[400vh]"></div>
</template>

<style scoped>
.container-dashed-lines {
  position: relative;
  height: 100%;
  width: 100%;
}

.container-dashed-lines::before,
.container-dashed-lines::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: repeating-linear-gradient(
    0deg,
    #e2e8f0,
    #e2e8f0 4px,
    transparent 4px,
    transparent 12px
  );
}

.container-dashed-lines::before {
  left: calc(2rem - 20px);
}

.container-dashed-lines::after {
  right: calc(2rem - 20px);
}
</style>
