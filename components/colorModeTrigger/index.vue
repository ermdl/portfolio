<template>
  <div>
    <!-- <pre>{{ $colorMode.value }}</pre>
            <pre>{{ iconOfColorMode }}</pre> -->
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button
            variant="outline"
            size="icon"
            class="rounded-full"
            title="Toggle color mode"
            @click="toggleColorMode()"
          >
            <Icon :name="useIcon(iconOfColorMode ?? '')" class="w-5 h-5" />
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="end">
          <p>{{ tooltipMessage }}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </div>
</template>

<script lang="ts" setup>
// Color mode
type Theme = 'light' | 'dark' | 'system'
const colorMode = useColorMode()

const icons = {
  light: 'sun',
  dark: 'moon',
  system: 'sun-moon',
}

const iconOfColorMode = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return icons.light
    case 'dark':
      return icons.dark
    case 'system':
      return icons.system
  }
})

const toggleColorMode = () => {
  switch (colorMode.preference) {
    case 'light':
      colorMode.preference = 'dark'
      break
    case 'dark':
      colorMode.preference = 'light'
      break
    case 'system':
      colorMode.preference = 'light'
      break
  }
}

const tooltipMessage = computed(() => {
  switch (colorMode.preference) {
    case 'light':
      return 'Switch to dark mode'
    case 'dark':
      return 'Switch to light mode'
    case 'system':
      return 'Switch to system mode'
  }
})
</script>
