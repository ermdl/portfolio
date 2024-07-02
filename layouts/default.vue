<template>
  <div class="container mx-auto max-w-7xl">
    <Header></Header>
  </div>
  <div
    class="container-dashed-lines-light mx-auto max-w-7xl text-slate-200 dark:text-slate-800"
  >
    <main class="py-20 text-primary">
      <slot></slot>
    </main>
  </div>
  <div class="h-[400vh]"></div>
</template>

<style scoped>
.container-dashed-lines-light {
  position: relative;
  height: 100%;
  width: 100%;
}

.container-dashed-lines-light::before,
.container-dashed-lines-light::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: repeating-linear-gradient(
    0deg,
    currentColor,
    currentColor 4px,
    transparent 4px,
    transparent 12px
  );
}

.container-dashed-lines-light::before {
  left: calc(2rem - 20px);
}

.container-dashed-lines-light::after {
  right: calc(2rem - 20px);
}

.container-dashed-lines-dark {
  position: relative;
  height: 100%;
  width: 100%;
}

.container-dashed-lines-dark::before,
.container-dashed-lines-dark::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: repeating-linear-gradient(
    0deg,
    red,
    red 4px,
    transparent 4px,
    transparent 12px
  );
}

.container-dashed-lines-dark::before {
  left: calc(2rem - 20px);
}

.container-dashed-lines-dark::after {
  right: calc(2rem - 20px);
}
</style>
