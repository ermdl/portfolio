import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', () => {
  const list = ref([
    {
      title: 'Videoly',
      slug: 'videoly-design',
      description:
        'Design system for Nordic market-leading video technology for online retailers offering relevant hand-picked product videos at scale',
      category: 'Product design',
      tags: ['Product design', 'UX/UI', 'Figma'],
      isFeatured: true,
      link: 'https://dribbble.com/shots/22810208-Videoly-Brands-Overview',
      colors: {
        background: '#4D53E0',
        corner: '#7A7FE8',
      },
      thumbnails: [
        {
          src: 'images/projects/videoly/thumbnails/left.png',
          positions: {
            top: '41.32%',
            left: '7.34%',
          },
          sizes: {
            width: '83.05%',
          },
        },
        {
          src: 'images/projects/videoly/thumbnails/right.png',
          positions: {
            top: '10.58%',
            left: '38.57%',
          },
          sizes: {
            width: '72%',
          },
        },
      ],
    },
    {
      title: 'Locards',
      slug: 'locards',
      description: 'Product design and UX/UI design',
      category: 'Product design',
      tags: ['Product design', 'UX/UI', 'Figma', 'Motion'],
      isFeatured: true,
      link: '',
      colors: {
        background: '#A3BEF5',
        corner: '#477EEB',
      },
      thumbnails: [
        {
          src: 'images/projects/locards/thumbnails/main.png',
          positions: {
            top: '35.37%',
            left: '4.1%',
          },
          sizes: {
            width: '130.72%',
          },
        },
      ],
    },
    {
      title: 'Videoly',
      slug: 'videoly-dev',
      description: 'Webflow development with custom JS modules',
      category: 'Development',
      tags: ['Webflow', 'JavaScript'],
      isFeatured: false,
      link: 'https://videoly.co',
      colors: {
        background: '#FFD262',
        corner: '#7A7FE8',
      },
      thumbnails: [
        {
          src: 'images/projects/videoly-dev/thumbnails/main.png',
          positions: {
            top: '27.44%',
            left: '6.83%',
          },
          sizes: {
            width: '110.24%',
          },
        },
      ],
    },
    {
      title: 'Circle Economy',
      slug: 'circle-economy',
      description: 'Webflow development with custom JS modules',
      category: 'Development',
      tags: ['Webflow', 'JavaScript', 'Google Analytics'],
      isFeatured: true,
      link: 'https://circle-economy.com',
      colors: {
        background: '#00D8C7',
        corner: '#263238',
      },
      thumbnails: [
        {
          src: 'images/projects/circle-economy/thumbnails/main.png',
          positions: {
            top: '27.44%',
            left: '6.83%',
          },
          sizes: {
            width: '110.24%',
          },
        },
      ],
    },
    {
      title: 'Manuvo',
      slug: 'manuvo',
      description: 'Custom JavaScript functionality for Webflow project',
      category: 'Development',
      tags: ['Webflow', 'JavaScript'],
      isFeatured: true,
      link: 'https://manuvo.com',
      colors: {
        background: '#8096DB',
        corner: '#FF909C',
      },
      thumbnails: [
        {
          src: 'images/projects/manuvo/thumbnails/main.png',
          positions: {
            top: '27.44%',
            left: '6.83%',
          },
          sizes: {
            width: '110.24%',
          },
        },
      ],
    },
    {
      title: 'Know You More',
      slug: 'know-you-more',
      description: '',
      category: 'Development',
      tags: ['Webflow'],
      isFeatured: false,
      link: 'https://knowyoumore.com',
      colors: {
        background: '#F8F6F5',
        corner: '#67C6A1',
      },
      thumbnails: [
        {
          src: 'images/projects/know-you-more/thumbnails/main.png',
          positions: {
            top: '27.44%',
            left: '6.83%',
          },
          sizes: {
            width: '110.24%',
          },
        },
      ],
    },
    {
      title: 'Yammy',
      slug: 'yammy',
      description: 'Product design for the dating app',
      category: 'Product design',
      tags: ['Product design', 'UX/UI', 'Figma'],
      isFeatured: false,
      link: '',
      colors: {
        background: '#FFCCD9',
        corner: '#FF668D',
      },
      thumbnails: [
        {
          src: 'images/projects/yammy/thumbnails/left.png',
          positions: {
            top: '43.47%',
            left: '15.53%',
          },
          sizes: {
            width: '47.78%',
          },
        },
        {
          src: 'images/projects/yammy/thumbnails/right.png',
          positions: {
            top: '21.16%',
            left: '40.96%',
          },
          sizes: {
            width: '49.15%',
          },
        },
      ],
    },
    {
      title: 'Mankai',
      slug: 'mankai',
      description: 'Webflow development with custom JS modules',
      category: 'Development',
      tags: ['Webflow'],
      isFeatured: false,
      link: 'https://superfood-dev.webflow.io/',
      colors: {
        background: '#E7DD57',
        corner: '#97A272',
      },
      thumbnails: [
        {
          src: 'images/projects/mankai/thumbnails/main.png',
          positions: {
            top: '27.44%',
            left: '6.83%',
          },
          sizes: {
            width: '110.24%',
          },
        },
      ],
    },
  ])

  const filterByTag = (tag: string[]) => {
    return list.value.filter(item => item.tags.some(t => tag.includes(t)))
  }

  // TODO: To implement someday
  // const filterByFeatured = (projects: Project[]) => {
  //   return projects.filter(project => project.isFeatured)
  // }

  return {
    list,
    filterByTag,
    // filterByFeatured,
  }
})
