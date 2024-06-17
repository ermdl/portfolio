import { defineStore } from 'pinia'

export const useStacksStore = defineStore('stacks', () => {
  const list = ref([
    {
      slug: 'vue',
      title: 'Vue.js',
      experienceInMonths: 24,
    },
    {
      slug: 'nuxt',
      title: 'Nuxt.js',
      experienceInMonths: 18,
    },
    {
      slug: 'react',
      title: 'React.js',
      experienceInMonths: 6,
    },
    {
      slug: 'next',
      title: 'Next.js',
      experienceInMonths: 6,
    },
    {
      slug: 'javascript',
      title: 'JavaScript',
      experienceInMonths: 72,
    },
    {
      slug: 'typescript',
      title: 'TypeScript',
      experienceInMonths: 24,
    },
    {
      slug: 'figma',
      title: 'Figma',
      experienceInMonths: 96,
    },
    {
      slug: 'sketch',
      title: 'Sketch',
      experienceInMonths: 96,
    },
  ])

  const filterByName = (name: string) => {
    return list.value.filter(item => item.slug === name)
  }

  return {
    list,
    filterByName,
  }
})
