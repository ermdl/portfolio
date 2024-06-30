import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('categories', () => {
  const list = ref([
    {
      id: 0,
      name: 'Product design',
      slug: 'product-design',
    },
    {
      id: 1,
      name: 'Development',
      slug: 'development',
    },
  ])

  return { list }
})
