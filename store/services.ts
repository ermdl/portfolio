import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', () => {
  const list = ref([
    {
      icon: 'boxes',
      title: 'Full-stack development',
      description:
        'I can help you with full-stack development using modern technologies.',
      category: 'Development',
    },
    {
      icon: 'component',
      title: 'UI/UX design',
      description:
        'I have a strong background in UI/UX design and can help you with your project.',
      category: 'Design',
    },
    {
      icon: 'blocks',
      title: 'Webflow development',
      description:
        'I specialize in Webflow development and custom JavaScript solutions.',
      category: 'Development',
    },
    {
      icon: 'toy-brick',
      title: 'Integrations building',
      description:
        'Zapier, Integromat, Pabbly, and other integrations building.',
      category: 'Development',
    },
  ])

  const filterByCategory = (category: string) => {
    return list.value.filter(item => item.category === category)
  }

  return {
    list,
    filterByCategory,
  }
})
