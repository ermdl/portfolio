import { defineStore } from 'pinia'

export const useExperienceStore = defineStore('experiences', () => {
  const list = ref([
    {
      logotype: '/images/logotypes/experiences/videoly.svg',
      position: 'Senior Product Designer',
      company: 'Videoly',
      location: 'Helsinki, Finland',
      startDate: '2021-02-01',
      endDate: '2023-05-01',
      description: 'Design team',
    },
    {
      logotype: '/images/logotypes/experiences/locards.svg',
      position: 'Senior Product Designer',
      company: 'Locards',
      location: 'Stavropol, Russia',
      startDate: '2019-02-01',
      endDate: '2022-04-01',
      description: 'Design team',
    },
    {
      logotype: '/images/logotypes/experiences/fluco.svg',
      position: 'Founder',
      company: 'fluco.studio',
      location: 'Lisbon, Portugal',
      startDate: '2019-06-01',
      endDate: null,
      description: 'I was a founder of a small design studio',
    },
    {
      logotype: '/images/logotypes/experiences/upwork.svg',
      position: 'Freelance Developer & Designer',
      company: 'Upwork',
      location: 'Remote',
      startDate: '2016-12-01',
      endDate: null,
      description: 'I work with clients from all over the world',
    },
    {
      logotype: '/images/logotypes/experiences/yammy.svg',
      position: 'Senior Product Designer',
      company: 'Yammy',
      location: 'Stavropol, Russia',
      startDate: '2017-10-01',
      endDate: '2018-06-01',
      description: 'Design team',
    },
    {
      logotype: '/images/logotypes/experiences/seon.svg',
      position: 'Web Designer, Frontend Developer',
      company: 'Seon.agency',
      location: 'Stavropol, Russia',
      startDate: '2016-03-01',
      endDate: '2016-10-01',
      description: 'Design team',
    },
    {
      logotype: '/images/logotypes/experiences/py-group.svg',
      position: 'Frontend Developer',
      company: 'PY Group',
      location: 'Stavropol, Russia',
      startDate: '2015-10-01',
      endDate: '2016-02-01',
      description: 'Development team',
    },
    {
      logotype: null,
      position: 'Freelance Graphic Designer',
      company: 'Fl.ru',
      location: 'Stavropol, Russia',
      startDate: '2013-09-01',
      endDate: '2015-10-01',
      description: 'Development team',
    },
  ])

  return {
    list,
  }
})
