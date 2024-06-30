declare interface Project {
  title: string
  slug: string
  description: string
  category: number
  tags: string[]
  isFeatured: boolean
  link?: string
  colors?: {
    background: string
    corner: string
  }
  thumbnails: [
    {
      src: string
      positions: {
        left: string
        top: string
      }
      sizes: {
        width: number
      }
    }
  ]
}
