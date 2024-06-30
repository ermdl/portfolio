import { defineStore } from 'pinia'

export const useRecommendationsStore = defineStore('recommendations', () => {
  const list = ref([
    {
      id: 1,
      name: {
        first: 'Sergei',
        last: 'Shchegrinets',
      },
      position: 'Senior Product Designer at Videoly',
      avatar: 'images/recommendations/authors/sergei-shchegrinets.jpg',
      review: `We worked side by side with Danila at Videoly in close collaboration for over 2 years, and I would like to share my impressions of his professionalism and talent in the field of product design.
  
  Danila is a highly qualified designer, and I am proud to have been his lead. During our time working together, he demonstrated a unique sense of style, a creative approach to tasks, and a deep understanding of user needs. Thanks to his efforts and hard work, we were able to create a design system that is now successfully used on a daily basis.
  
  Danila is not only detail-oriented but also capable of seeing the bigger picture, making his designs truly effective and user-centric. He also exhibits outstanding communication skills, making collaboration with him a pleasant and productive process.
  
  I am confident that Danila has a bright future in the world of product design, and I am proud to have had the opportunity to work with such a talented and professional designer. Thanks to his efforts, our projects have become not only visually appealing but also functional, and I look forward to a long and successful collaboration in the future.`,
    },
    {
      id: 2,
      name: {
        first: 'Goldie',
        last: 'Chan',
      },
      position:
        'Sr. Contributor at Forbes: Branding and Storytelling | LinkedIn Top Voice: Social Media',
      avatar: 'images/recommendations/authors/goldie-chan.jpg',
      review: `Danila and team worked super quickly on a web project I had in Webflow. Very easy to communicate with and went above and beyond with a very positive attitude. Would definitely work with and hire again for other web development projects!`,
    },
    {
      id: 3,
      name: {
        first: 'Morgan',
        last: 'Greenberg',
      },
      position: 'Marketing Strategist',
      avatar: 'images/recommendations/authors/morgan-greenberg.jpg',
      review: `I have worked with Danilla on several webflow implementation projects and he was extremely quick, communicative, and detailed. Him and his team helped to answer all of my questions through each project in a fast and professional manner. I look forward to working with him and his team more in the future!`,
    },
    {
      id: 4,
      name: {
        first: 'Mark',
        last: 'Bezyaev',
      },
      position: 'Software Engineer | Entrepreneur',
      avatar: 'images/recommendations/authors/mark-bezyaev.jpg',
      review: `Danila is talented professional. He knows how to reach the best result. If you need the progressive and awesome design, just message him. Also he is good developer. That means he could make a design layout, and make the application or web-site. In other side he can build a team, then manage the business processes. Great communication skills and projects understanding.

I can highly recommend him`,
    },
    {
      id: 5,
      name: {
        first: 'Yasmina',
        last: 'Lembachar',
      },
      position: 'Sustainable food systems specialist',
      avatar: 'images/recommendations/authors/yasmina-lembachar.jpg',
      review: `It's always a pleasure working with Danila! He's helped us bring quite a few of our web designs to life on Webflow, and is always extremely cooperative, communicative and accommodating. Most of all, Danila is very reliable, something we really value as small team who often operates under strict deadlines!`,
    },
  ])

  return {
    list,
  }
})
