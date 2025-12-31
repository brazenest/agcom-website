export type BlogPostIdModel = number
export type BlogPostSlugModel = string
export type BlogPostTitleModel = string
export type BlogPostExcerptModel = string
export type BlogPostDateModel = string
export type BlogPostReadtimeModel = number
export type BlogPostBodyModel = string
export type BlogPostCategoryModel = 'engineering' | 'cinematic' | 'process' | 'other'
export type BlogPostImageModel = string
export type BlogPostHrefModel = string
export type BlogPostModel = {
  id: BlogPostIdModel,
  slug: BlogPostSlugModel,
  title: BlogPostTitleModel,
  excerpt: BlogPostExcerptModel,
  category: BlogPostCategoryModel,
  image: BlogPostImageModel,
  date: BlogPostDateModel,
  dateFormatted?: BlogPostDateModel,
  readtime: BlogPostReadtimeModel,
  body: BlogPostBodyModel,
  href: BlogPostHrefModel,
}