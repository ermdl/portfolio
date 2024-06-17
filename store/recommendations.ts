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
      avatar:
        'https://framerusercontent.com/images/ggC3ywuDbOTIFHGMorfKw77DuMw.png',
      review: `We worked side by side with Danila at Videoly in close collaboration for over 2 years, and I would like to share my impressions of his professionalism and talent in the field of product design.\n
  
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
      position: 'Founder at Warm Robots',
      avatar:
        'https://media.licdn.com/dms/image/D5603AQEX6pI7E15xQA/profile-displayphoto-shrink_800_800/0/1700198420307?e=1724284800&v=beta&t=C-lTzSI61v0RZxYNiXNyUYWmckikayhpc_REpJeAFq0',
      review: `Danila and team worked super quickly on a web project I had in Webflow. Very easy to communicate with and went above and beyond with a very positive attitude. Would definitely work with and hire again for other web development projects!`,
    },
    {
      id: 3,
      name: {
        first: 'Morgan',
        last: 'Greenberg',
      },
      position: 'Marketing Strategist',
      avatar:
        'https://media.licdn.com/dms/image/D5603AQF04F2QtEXZAg/profile-displayphoto-shrink_800_800/0/1700242174014?e=1724284800&v=beta&t=HTfoxV7TlwwLEdo3fZAvmCvKs0m8BRp6beNLBV7BR9I',
      review: `I have worked with Danilla on several webflow implementation projects and he was extremely quick, communicative, and detailed. Him and his team helped to answer all of my questions through each project in a fast and professional manner. I look forward to working with him and his team more in the future!`,
    },
  ])

  return {
    list,
  }
})
