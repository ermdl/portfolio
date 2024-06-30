import { defineStore } from 'pinia'

const path = '/images/services/'

export const useServicesStore = defineStore('services', () => {
  const list = ref([
    {
      title: 'Full-stack development',
      description:
        'I can help you with full-stack development using modern technologies.',
      category: 'Development',
      thumbnail: {
        dark: `${path}/dark/fullstack-development.png`,
        light: `${path}/light/fullstack-development.png`,
      },
      color: 'blue',
    },
    {
      title: 'Product & UI/UX design',
      description:
        'I have a strong background in UI/UX design and can help you with your project.',
      category: 'Design',
      thumbnail: {
        dark: `${path}/dark/product-design.png`,
        light: `${path}/light/product-design.png`,
      },
      color: 'orange',
    },
    {
      title: 'Integrations building',
      description:
        'Zapier, Make.com (ex. Integromat), Pabbly, and other integrations building.',
      category: 'Development',
      thumbnail: {
        dark: `${path}/dark/integrations.png`,
        light: `${path}/light/integrations.png`,
      },
      color: 'blue',
    },
    // {
    //   title: 'Webflow development',
    //   description:
    //     'I specialize in Webflow development and custom JavaScript solutions.',
    //   category: 'Development',
    //   thumbnail: {
    //     dark: `${path}/dark/fullstack-development.png`,
    //     light: `${path}/light/fullstack-development.png`,
    //   },
    //   color: 'blue',
    // },
  ])

  const filterByCategory = (category: string) => {
    return list.value.filter(item => item.category === category)
  }

  return {
    list,
    filterByCategory,
  }
})
