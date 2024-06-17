import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  const list = ref([
    {
      title: 'Circle Economy',
      description: 'Webflow development with custom JS modules',
      tags: ['Webflow', 'JavaScript'],
      isFeatured: true,
      thumbnail: '/images/projects/thumbnails/manuvo.jpg',
      link: 'https://circle-economy.com',
    },
    {
      title: 'Manuvo',
      description: 'Custom JavaScript functionality for Webflow project',
      tags: ['Webflow', 'JavaScript'],
      isFeatured: true,
      thumbnail: '/images/projects/thumbnails/manuvo.jpg',
      link: 'https://manuvo.com',
    },
    {
      title: 'Videoly',
      description: 'Webflow development with custom JS modules',
      tags: ['Webflow', 'JavaScript'],
      isFeatured: false,
    },
    {
      title: 'Know You More',
      description: '',
      tags: ['Webflow'],
      isFeatured: false,
    },
  ])

  const filterByTag = (tag: string[]) => {
    return list.value.filter(item => item.tags.some(t => tag.includes(t)))
  }

  // const filterByFeatured = (projects: Project[]) => {
  //   return projects.filter(project => project.isFeatured)
  // }

  return {
    list,
    filterByTag,
    // filterByFeatured,
  }
})
